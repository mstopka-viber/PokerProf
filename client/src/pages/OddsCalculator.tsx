import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlayingCard from "@/components/PlayingCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { handRankings } from "@/lib/poker-data";
import PokerTooltip from "@/components/PokerTooltip";

// Define card ranks and suits
const RANKS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
const SUITS = ["♠", "♥", "♦", "♣"];

// Hand types for equity calculation - more realistic equity values
const HAND_TYPES = [
  { name: "High Card", baseEquity: 0.32 }, // ~32% against random hand
  { name: "One Pair", baseEquity: 0.48 },  // ~48% against random hand
  { name: "Two Pair", baseEquity: 0.63 },
  { name: "Three of a Kind", baseEquity: 0.73 },
  { name: "Straight", baseEquity: 0.80 },
  { name: "Flush", baseEquity: 0.83 },
  { name: "Full House", baseEquity: 0.92 },
  { name: "Four of a Kind", baseEquity: 0.97 },
  { name: "Straight Flush", baseEquity: 0.995 },
  { name: "Royal Flush", baseEquity: 1.0 },
];

// Create an array of all possible cards (52 cards)
const ALL_CARDS = RANKS.flatMap(rank => SUITS.map(suit => rank + suit));

export default function OddsCalculator() {
  // Pot Odds Calculator State
  const [potSize, setPotSize] = useState("");
  const [betSize, setBetSize] = useState("");
  const [potOdds, setPotOdds] = useState<number | null>(null);
  const [impliedOdds, setImpliedOdds] = useState(false);
  const [futureStreets, setFutureStreets] = useState("1");

  // Hand Equity Calculator State
  const [handType, setHandType] = useState("One Pair");
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [communityCards, setCommunityCards] = useState<string[]>([]);
  const [handEquity, setHandEquity] = useState<number | null>(null);
  const [opponentRange, setOpponentRange] = useState("wide"); // 'tight', 'medium', 'wide'

  // Card selection state
  const [cardSelectionMode, setCardSelectionMode] = useState<"hand" | "community">("hand");
  const [handStrength, setHandStrength] = useState<string | null>(null);
  const [selectedRank, setSelectedRank] = useState<string | null>(null);
  const [selectedSuit, setSelectedSuit] = useState<string | null>(null);

  // Calculate pot odds - minimum equity % needed to make a profitable call
  const calculatePotOdds = () => {
    const pot = parseFloat(potSize);
    const bet = parseFloat(betSize);

    if (!isNaN(pot) && !isNaN(bet) && bet > 0 && pot > 0) {
      // Correct formula: Call amount / (Pot + Call amount) * 100
      // This gives you the minimum equity % needed to break even
      let requiredEquity = (bet / (pot + bet)) * 100;

      // Apply implied odds adjustment if enabled
      if (impliedOdds) {
        const streets = parseInt(futureStreets);
        // Reduce required equity based on potential future value
        const impliedFactor = Math.max(0.7, 1 - (streets * 0.15)); // More conservative adjustment
        requiredEquity = requiredEquity * impliedFactor;
      }

      setPotOdds(Math.round(requiredEquity * 10) / 10);
    }
  };

  // Available cards (cards not yet selected)
  const availableCards = useMemo(() => {
    return ALL_CARDS.filter(
      card => !selectedCards.includes(card) && !communityCards.includes(card)
    );
  }, [selectedCards, communityCards]);

  // Filter cards based on rank and suit filters
  const filteredCards = useMemo(() => {
    let filtered = availableCards;

    if (selectedRank) {
      filtered = filtered.filter(card => card[0] === selectedRank);
    }

    if (selectedSuit) {
      filtered = filtered.filter(card => card[1] === selectedSuit);
    }

    return filtered;
  }, [availableCards, selectedRank, selectedSuit]);

  // Handle card selection
  const handleCardSelect = (card: string) => {
    if (cardSelectionMode === "hand") {
      if (selectedCards.length < 2) {
        setSelectedCards([...selectedCards, card]);
      }
    } else {
      if (communityCards.length < 5) {
        setCommunityCards([...communityCards, card]);
      }
    }
  };

  // Remove a selected card
  const removeCard = (card: string, type: "hand" | "community") => {
    if (type === "hand") {
      setSelectedCards(selectedCards.filter(c => c !== card));
    } else {
      setCommunityCards(communityCards.filter(c => c !== card));
    }
  };

  // Calculate hand equity with realistic post-flop analysis
  const calculateHandEquity = () => {
    if (selectedCards.length !== 2) {
      setHandEquity(null);
      setHandStrength(null);
      return;
    }

    let equity: number;

    if (communityCards.length === 0) {
      // Preflop equity calculation
      equity = calculatePreFlopEquity();
    } else {
      // Post-flop equity calculation based on actual board texture
      equity = calculatePostFlopEquity();
    }

    // Opponent range adjustments
    switch (opponentRange) {
      case "tight":
        equity *= 0.85; // Reduce against tight range
        break;
      case "medium":
        equity *= 0.95; // Slight reduction against medium range
        break;
      case "wide":
        equity *= 1.1; // Boost against wide range
        break;
    }

    equity = Math.max(0.01, Math.min(0.99, equity));

    // Set hand strength description
    let strengthDesc = "";
    if (equity < 0.20) strengthDesc = "Very Weak";
    else if (equity < 0.35) strengthDesc = "Weak";
    else if (equity < 0.50) strengthDesc = "Below Average";
    else if (equity < 0.65) strengthDesc = "Average";
    else if (equity < 0.80) strengthDesc = "Strong";
    else strengthDesc = "Premium";

    setHandStrength(strengthDesc);
    setHandEquity(Math.round(equity * 1000) / 10);
  };

  // Calculate realistic preflop equity
  const calculatePreFlopEquity = (): number => {
    const holeCardRanks = selectedCards.map(card => card[0]);
    const isPair = holeCardRanks[0] === holeCardRanks[1];
    const isSuited = selectedCards[0][1] === selectedCards[1][1];
    const highCardIndex = Math.min(RANKS.indexOf(holeCardRanks[0]), RANKS.indexOf(holeCardRanks[1]));
    const lowCardIndex = Math.max(RANKS.indexOf(holeCardRanks[0]), RANKS.indexOf(holeCardRanks[1]));
    const gap = lowCardIndex - highCardIndex;

    if (isPair) {
      // Pocket pairs: AA=85%, KK=82%, QQ=80%, down to 22=53%
      const pairEquities = [0.85, 0.82, 0.80, 0.77, 0.74, 0.71, 0.68, 0.65, 0.62, 0.59, 0.56, 0.54, 0.53];
      return pairEquities[highCardIndex] || 0.53;
    }

    // Non-pairs: much lower equity, especially for disconnected low cards
    let baseEquity = 0.50; // Start at 50% baseline
    
    // Penalty for low cards
    baseEquity -= (highCardIndex * 0.03); // -3% for each step down from Ace
    baseEquity -= (lowCardIndex * 0.02); // -2% for low kicker
    
    // Penalty for gaps
    if (gap > 4) baseEquity -= 0.08; // Big gap penalty
    else if (gap > 1) baseEquity -= (gap * 0.02);
    
    // Suited bonus
    if (isSuited) baseEquity += 0.03;
    
    // Special penalties for trash hands
    if (lowCardIndex > 9 && gap > 3) baseEquity -= 0.10; // Trash like 72o, 83o
    
    return Math.max(0.15, baseEquity); // Minimum 15% even for worst hands
  };

  // Calculate post-flop equity based on actual board connection
  const calculatePostFlopEquity = (): number => {
    const allCards = [...selectedCards, ...communityCards];
    const handType = determineHandType(selectedCards, communityCards);
    
    // Base equity from made hand
    let equity = 0.05; // Start very low for post-flop
    
    switch (handType) {
      case "High Card":
        equity = calculateHighCardEquity();
        break;
      case "One Pair":
        equity = 0.30 + calculateDrawEquity(); // Pair + draws
        break;
      case "Two Pair":
        equity = 0.65;
        break;
      case "Three of a Kind":
        equity = 0.85;
        break;
      case "Straight":
        equity = 0.90;
        break;
      case "Flush":
        equity = 0.92;
        break;
      case "Full House":
        equity = 0.97;
        break;
      case "Four of a Kind":
        equity = 0.995;
        break;
      default:
        equity = calculateHighCardEquity();
    }
    
    return equity;
  };

  // Calculate equity for high card hands (most realistic for trash hands)
  const calculateHighCardEquity = (): number => {
    const holeCardRanks = selectedCards.map(card => card[0]);
    const boardRanks = communityCards.map(card => card[0]);
    
    let equity = 0.05; // Very low base for high card
    
    // Check if we have overcards to the board
    const highestBoardCard = Math.min(...boardRanks.map(rank => RANKS.indexOf(rank)));
    const ourHighCard = Math.min(...holeCardRanks.map(rank => RANKS.indexOf(rank)));
    
    if (ourHighCard < highestBoardCard) {
      equity += 0.15; // Overcard equity
    }
    
    // Add draw equity
    equity += calculateDrawEquity();
    
    // For complete air (like 72 vs AKT), keep it very low
    if (ourHighCard > 8 && !hasDraws()) {
      equity = Math.min(equity, 0.08);
    }
    
    return equity;
  };

  // Calculate draw equity (flush/straight draws)
  const calculateDrawEquity = (): number => {
    const draws = calculateDraws(selectedCards, communityCards);
    let drawEquity = 0;
    
    if (draws.flush === 4) drawEquity += 0.19; // ~9 outs
    if (draws.straight > 0) drawEquity += draws.straight * 0.04; // ~4 outs per straight draw
    
    return Math.min(drawEquity, 0.25); // Cap draw equity
  };

  // Check if hand has any draws
  const hasDraws = (): boolean => {
    const draws = calculateDraws(selectedCards, communityCards);
    return draws.flush > 2 || draws.straight > 0;
  };

  // Check for royal flush (A-K-Q-J-T all same suit)
  const isRoyalFlush = (allCards: string[]): boolean => {
    const royalRanks = ['A', 'K', 'Q', 'J', 'T'];
    const suitCounts: Record<string, string[]> = {};

    // Group cards by suit
    allCards.forEach(card => {
      const suit = card[1];
      const rank = card[0];
      if (!suitCounts[suit]) suitCounts[suit] = [];
      suitCounts[suit].push(rank);
    });

    // Check if any suit has all royal ranks
    for (const suit in suitCounts) {
      const hasAllRoyalRanks = royalRanks.every(rank => suitCounts[suit].includes(rank));
      if (hasAllRoyalRanks) return true;
    }

    return false;
  };

  // Check for straight in given ranks
  const checkForStraight = (ranks: string[]): boolean => {
    // Convert ranks to numerical values for easier sorting
    const rankValues = ranks.map(rank => {
      const index = RANKS.indexOf(rank);
      return index;
    }).sort((a, b) => a - b);

    // Remove duplicates
    const uniqueRanks = Array.from(new Set(rankValues));

    // Check for 5+ consecutive cards
    for (let i = 0; i <= uniqueRanks.length - 5; i++) {
      let consecutive = 1;
      for (let j = i + 1; j < uniqueRanks.length; j++) {
        if (uniqueRanks[j] === uniqueRanks[j-1] + 1) {
          consecutive++;
          if (consecutive >= 5) return true;
        } else {
          break;
        }
      }
    }

    // Check for wheel straight (A-2-3-4-5)
    if (ranks.includes('A') && ranks.includes('2') && ranks.includes('3') && ranks.includes('4') && ranks.includes('5')) {
      return true;
    }

    return false;
  };

  // Simplified hand type determination
  const determineHandType = (holeCards: string[], communityCards: string[]): string => {
    const allCards = [...holeCards, ...communityCards];

    // Count ranks and suits
    const rankCounts: Record<string, number> = {};
    const suitCounts: Record<string, number> = {};

    allCards.forEach(card => {
      const rank = card[0];
      const suit = card[1];
      rankCounts[rank] = (rankCounts[rank] || 0) + 1;
      suitCounts[suit] = (suitCounts[suit] || 0) + 1;
    });

    // Check for pairs, trips, quads
    const rankValues = Object.values(rankCounts);
    const hasFourOfAKind = rankValues.some(count => count === 4);
    const hasThreeOfAKind = rankValues.some(count => count === 3);
    const pairCount = rankValues.filter(count => count === 2).length;

    // Check for flush
    const hasFlush = Object.values(suitCounts).some(count => count >= 5);

    // Check for straight
    const hasStraight = checkForStraight(Object.keys(rankCounts));

    // Check for royal flush (A-K-Q-J-T all same suit)
    if (hasFlush && hasStraight && isRoyalFlush(allCards)) return "Royal Flush";

    // Check for straight flush
    if (hasFlush && hasStraight) return "Straight Flush";

    // Determine hand type
    if (hasFourOfAKind) return "Four of a Kind";
    if (hasThreeOfAKind && pairCount >= 1) return "Full House";
    if (hasFlush) return "Flush";
    if (hasStraight) return "Straight";
    if (hasThreeOfAKind) return "Three of a Kind";
    if (pairCount >= 2) return "Two Pair";
    if (pairCount === 1) return "One Pair";

    return "High Card";
  };

  // Check if cards are connected (sequential ranks)
  const isConnectedCards = (card1: string, card2: string) => {
    const rank1Index = RANKS.indexOf(card1[0]);
    const rank2Index = RANKS.indexOf(card2[0]);
    return Math.abs(rank1Index - rank2Index) <= 1;
  };

  // Calculate synergy between hole cards and community cards
  const calculateHandSynergy = (holeCards: string[], community: string[]) => {
    // Count matching ranks
    const allCards = [...holeCards, ...community];
    const rankCounts: Record<string, number> = {};

    allCards.forEach(card => {
      const rank = card[0];
      rankCounts[rank] = (rankCounts[rank] || 0) + 1;
    });

    // Check for pairs, trips, quads
    let synergy = 0;
    Object.values(rankCounts).forEach(count => {
      if (count === 2) synergy += 0.1;  // Pair
      if (count === 3) synergy += 0.2;  // Three of a kind
      if (count === 4) synergy += 0.3;  // Four of a kind
    });

    // Check for flush potential
    const suitCounts: Record<string, number> = {};
    allCards.forEach(card => {
      const suit = card[1];
      suitCounts[suit] = (suitCounts[suit] || 0) + 1;
    });

    Object.values(suitCounts).forEach(count => {
      if (count >= 4) synergy += 0.15;  // Flush potential
      if (count >= 5) synergy += 0.1;   // Flush
    });

    return synergy;
  };

  // Calculate draw potential
  const calculateDraws = (holeCards: string[], community: string[]) => {
    const allCards = [...holeCards, ...community];

    // Flush draw
    const suitCounts: Record<string, number> = {};
    allCards.forEach(card => {
      const suit = card[1];
      suitCounts[suit] = (suitCounts[suit] || 0) + 1;
    });

    let flushDraws = 0;
    Object.values(suitCounts).forEach(count => {
      if (count === 4) flushDraws++; // 4 to a flush
    });

    // Straight draw (simplified - only check for open-ended)
    let straightDraws = 0;
    if (community.length >= 3) {
      const ranks = allCards.map(card => RANKS.indexOf(card[0]));
      ranks.sort((a, b) => a - b);
      let connected = 1;
      for (let i = 1; i < ranks.length; i++) {
        if (ranks[i] === ranks[i - 1] + 1) {
          connected++;
        } else {
          connected = 1;
        }
        if (connected >= 4) {
          straightDraws++;
          break;
        }
      }
    }

    // Pair draw (simplified - for underpairs)
    let pairDraws = 0;
    if (holeCards[0][0] !== holeCards[1][0]) { // Not a pair
      const rankCounts: Record<string, number> = {};
      allCards.forEach(card => {
        const rank = card[0];
        rankCounts[rank] = (rankCounts[rank] || 0) + 1;
      });
      Object.values(rankCounts).forEach(count => {
        if (count === 2) pairDraws++;
      });
    }

    return { flush: flushDraws, straight: straightDraws, pair: pairDraws };
  };

  const clearHandCards = () => {
    setSelectedCards([]);
  };

  const clearCommunityCards = () => {
    setCommunityCards([]);
  };

  // Reset rank and suit filters
  const resetFilters = () => {
    setSelectedRank(null);
    setSelectedSuit(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="gradient-heading">Odds and Equity</h1>

      <Card className="mb-6">
        <CardContent className="pt-4 card-content">
          <p className="text-muted-foreground mb-3">
            Calculate pot odds and hand equities to make better decisions at the poker table.
          </p>

          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mb-2">
            <h3 className="text-lg font-semibold mb-2">Understanding Poker Odds</h3>
            <p className="text-sm text-muted-foreground mb-2">
              In poker, making mathematically correct decisions is key to long-term profitability. These calculators 
              help you understand when a call, raise, or fold is the mathematically optimal play.
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li><span className="font-medium"><PokerTooltip term="pot odds">Pot Odds</PokerTooltip></span>: The ratio between the current size of the pot and the cost of your contemplated call.</li>
              <li><span className="font-medium">Hand <PokerTooltip term="equity">Equity</PokerTooltip></span>: The percentage chance that your hand will win at <PokerTooltip term="showdown">showdown</PokerTooltip> against opponent's likely range.</li>
              <li><span className="font-medium">Rule of Thumb</span>: If your equity exceeds the pot odds, calling is profitable in the long run.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Combined Calculator Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pot Odds Calculator Section */}
        <Card>
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100">
            <CardTitle>Pot Odds Calculator</CardTitle>
            <CardDescription>
              Determine if a call is mathematically profitable
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-5">
            <div className="space-y-2">
              <Label htmlFor="pot-size">Current Pot Size ($)</Label>
              <Input
                id="pot-size"
                type="number"
                min="0"
                step="0.1"
                value={potSize}
                onChange={(e) => setPotSize(e.target.value)}
                placeholder="Enter current pot size"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bet-size">Bet to Call ($)</Label>
              <Input
                id="bet-size"
                type="number"
                min="0"
                step="0.1"
                value={betSize}
                onChange={(e) => setBetSize(e.target.value)}
                placeholder="Enter bet size to call"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch 
                id="implied-odds" 
                checked={impliedOdds}
                onCheckedChange={setImpliedOdds}
              />
              <Label htmlFor="implied-odds">Include Implied Odds</Label>
            </div>

            {impliedOdds && (
              <div className="space-y-2">
                <Label htmlFor="future-streets">Future Streets of Play</Label>
                <Select 
                  value={futureStreets} 
                  onValueChange={setFutureStreets}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select future streets" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Street (Turn or River)</SelectItem>
                    <SelectItem value="2">2 Streets (Turn and River)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button onClick={calculatePotOdds} className="w-full">Calculate Odds</Button>

            {potOdds !== null && (
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-lg font-semibold">
                  Required equity to call: {potOdds}%
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {impliedOdds 
                    ? `Accounting for implied odds over ${futureStreets} more street(s), if your hand equity is greater than ${potOdds}%, calling would be profitable.`
                    : `If your hand equity is greater than ${potOdds}%, calling would be profitable in the long run.`
                  }
                </p>
              </div>
            )}

            <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
              <h4 className="text-sm font-medium text-indigo-800 mb-1">Tip: Common Scenarios</h4>
              <ul className="text-xs text-indigo-700 list-disc pl-5 space-y-1">
                <li><span className="italic"><PokerTooltip term="flush draw">Flush Draw</PokerTooltip></span>: ~19% equity on the river</li>
                <li><span className="italic"><PokerTooltip term="straight draw">Open-Ended Straight Draw</PokerTooltip></span>: ~17% equity on the river</li>
                <li><span className="italic"><PokerTooltip term="overcards">Overcards</PokerTooltip></span>: ~25% equity against a pair</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Hand Equity Calculator Section */}
        <Card>
          <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
            <CardTitle>Hand Equity Calculator</CardTitle>
            <CardDescription>
              Estimate your winning chances against opponents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-5">
            <div className="flex flex-col space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="mb-2 block">Your Hand</Label>
                  <div className="flex space-x-2 mb-2">
                    {selectedCards.map((card, i) => (
                      <div key={i} className="relative">
                        <PlayingCard card={card} />
                        <button 
                          className="absolute -top-2 -right-2 rounded-full bg-red-500 text-white w-5 h-5 flex items-center justify-center text-xs"
                          onClick={() => removeCard(card, "hand")}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    {selectedCards.length < 2 && (
                      <div className="w-12 h-16 border-2 border-dashed rounded-lg flex items-center justify-center">
                        +
                      </div>
                    )}
                  </div>
                  {selectedCards.length === 2 && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={clearHandCards}
                      className="mt-1"
                    >
                      Clear
                    </Button>
                  )}
                </div>

                <div>
                  <Label className="mb-2 block">Community Cards</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {communityCards.map((card, i) => (
                      <div key={i} className="relative">
                        <PlayingCard card={card} />
                        <button 
                          className="absolute -top-2 -right-2 rounded-full bg-red-500 text-white w-5 h-5 flex items-center justify-center text-xs"
                          onClick={() => removeCard(card, "community")}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    {communityCards.length < 5 && Array(Math.min(2, 5 - communityCards.length)).fill(0).map((_, i) => (
                      <div key={i} className="w-12 h-16 border-2 border-dashed rounded-lg flex items-center justify-center">
                        +
                      </div>
                    ))}
                  </div>
                  {communityCards.length > 0 && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={clearCommunityCards}
                      className="mt-1"
                    >
                      Clear
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="mb-2 block">Selection Mode</Label>
                  <div className="flex space-x-2">
                    <Button 
                      variant={cardSelectionMode === "hand" ? "default" : "outline"}
                      onClick={() => {
                        setCardSelectionMode("hand");
                        resetFilters();
                      }}
                      size="sm"
                    >
                      Hand
                    </Button>
                    <Button 
                      variant={cardSelectionMode === "community" ? "default" : "outline"}
                      onClick={() => {
                        setCardSelectionMode("community");
                        resetFilters();
                      }}
                      size="sm"
                    >
                      Board
                    </Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="opponent-range" className="mb-2 block">Opponent Range</Label>
                  <Select value={opponentRange} onValueChange={setOpponentRange}>
                    <SelectTrigger id="opponent-range">
                      <SelectValue placeholder="Opponent range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tight">Tight (Premium hands)</SelectItem>
                      <SelectItem value="medium">Medium (Strong hands)</SelectItem>
                      <SelectItem value="wide">Wide (Many hands)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-muted">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="mb-1 block text-xs font-medium">Select by Rank</Label>
                    <div className="flex flex-wrap gap-1">
                      {RANKS.map(rank => (
                        <button
                          key={rank}
                          className={`w-7 h-7 flex items-center justify-center text-sm font-medium rounded-md 
                                    ${selectedRank === rank ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/20'}`}
                          onClick={(e) => {
                            // If a suit is already selected, automatically add the card when rank is clicked
                            if (selectedSuit && rank !== selectedRank) {
                              const card = `${rank}${selectedSuit}`;
                              if (!selectedCards.includes(card) && !communityCards.includes(card)) {
                                handleCardSelect(card);
                                resetFilters();
                              }
                            } else {
                              setSelectedRank(selectedRank === rank ? null : rank);
                            }
                          }}
                        >
                          {rank}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="mb-1 block text-xs font-medium">Select by Suit</Label>
                    <div className="flex flex-wrap gap-1">
                      {SUITS.map(suit => (
                        <button
                          key={suit}
                          className={`w-7 h-7 flex items-center justify-center text-sm font-medium rounded-md 
                                    ${selectedSuit === suit ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/20'}
                                    ${suit === '♥' || suit === '♦' ? 'text-red-500' : ''}`}
                          onClick={(e) => {
                            // If a rank is already selected, automatically add the card when suit is clicked
                            if (selectedRank && suit !== selectedSuit) {
                              const card = `${selectedRank}${suit}`;
                              if (!selectedCards.includes(card) && !communityCards.includes(card)) {
                                handleCardSelect(card);
                                resetFilters();
                              }
                            } else {
                              setSelectedSuit(selectedSuit === suit ? null : suit);
                            }
                          }}
                        >
                          {suit}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Button onClick={calculateHandEquity} className="w-full">Calculate Hand Equity</Button>

              {handEquity !== null && (
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-lg font-semibold mb-2">
                    Estimated Hand Equity: {handEquity}%
                  </p>
                  {handStrength && (
                    <Badge className="mb-2">{handStrength}</Badge>
                  )}
                  <p className="text-sm text-muted-foreground">
                    This is your estimated winning percentage against your opponent's range.
                    {potOdds !== null && (
                      <>
                        <br />
                        <span className={handEquity > potOdds ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>
                          {handEquity > potOdds ? "✓ Profitable call (equity > pot odds)" : "✗ Not profitable (equity < pot odds)"}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              )}

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <h4 className="text-sm font-medium text-amber-800 mb-1">Tip: Common Hands</h4>
                <ul className="text-xs text-amber-700 list-disc pl-5 space-y-1">
                  <li>AA vs KK: ~80% equity preflop</li>
                  <li>AK vs 22: ~43% equity preflop</li>
                  <li>Pocket pair vs overcards: ~55% equity</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Understanding Poker Odds and Equity (Expanded content) */}
      <Card className="mt-6">
        <CardHeader className="card-header">
          <CardTitle>Understanding Poker Math</CardTitle>
          <CardDescription>How to use these calculations for better decisions</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-semibold mb-2">Pot Odds Explained</h3>

            <p className="text-sm text-muted-foreground mb-3">
              <span className="font-medium">What are pot odds?</span> They represent the ratio of the current pot size to the cost of your call, 
              expressed as a percentage. This percentage tells you the minimum equity your hand needs to have to make a profitable call.
            </p>

            <div className="mb-3">
              <p className="text-sm font-medium mb-1">Strategy Tips:</p>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>If you're getting 4-to-1 pot odds (20%), you only need to win 20% of the time to break even.</li>
                <li>Drawing hands (like flush or straight draws) have calculable equity - know these percentages.</li>
                <li>Implied odds factor in potential future winnings and can justify calls with drawing hands.</li>
                <li>Pot odds calculations are most useful on the turn and river when equities are more stable.</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-2">Hand Equity Explained</h3>

            <p className="text-sm text-muted-foreground mb-3">
              <span className="font-medium">What is hand equity?</span> It's the probability or percentage chance that your hand will win 
              at showdown against your opponent's range of hands. This calculator provides an estimate based on your selected 
              cards and the opponent's expected range.
            </p>

            <div className="mb-3">
              <p className="text-sm font-medium mb-1">Strategy Tips:</p>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Consider both your current hand strength and potential to improve when calculating equity.</li>
                <li>Adjust your opponent's range based on their position, playing style, and previous actions.</li>
                <li>The more specific information you have about community cards, the more accurate your equity calculation.</li>
                <li>Hand equity decreases as more opponents are involved - multiply your equity by ~0.9 for each additional opponent.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}