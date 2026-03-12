import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PlayingCard from "@/components/PlayingCard";
import PokerTooltip from "@/components/PokerTooltip";

export default function GameplayRounds() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="gradient-heading">Gameplay Rounds</h1>
      
      <Card className="mb-6">
        <CardHeader className="card-header">
          <CardTitle>The Structure of a Hand</CardTitle>
          <CardDescription>
            Understanding the sequence of action in Texas Hold'em
          </CardDescription>
        </CardHeader>
        <CardContent className="prose card-content">
          <p>
            Texas Hold'em is played in a series of structured betting rounds. Each round represents a different stage of the hand where players receive more information via <PokerTooltip term="community cards">community cards</PokerTooltip> and must make betting decisions based on their current hand strength and potential.
          </p>
        </CardContent>
      </Card>
      
      {/* Accordion for Gameplay Rounds */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* Pre-Flop Round */}
        <AccordionItem value="preflop" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">1. Pre-Flop</h2>
              <p className="text-sm text-muted-foreground mt-1">
                The initial betting round before any community cards are dealt
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Actions</h3>
                <div className="bg-muted p-4 rounded-lg space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">1. Posting Blinds</h4>
                    <p className="text-sm text-muted-foreground">
                      The two players to the left of the dealer button post the <PokerTooltip term="SB">small blind</PokerTooltip> and <PokerTooltip term="BB">big blind</PokerTooltip>, which are forced bets to create a pot.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-1">2. Dealing Hole Cards</h4>
                    <p className="text-sm text-muted-foreground">
                      Each player receives two private cards (<PokerTooltip term="hole cards">hole cards</PokerTooltip>) that only they can see.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-1">3. First Betting Round</h4>
                    <p className="text-sm text-muted-foreground">
                      Starting with the player to the left of the big blind (<PokerTooltip term="UTG">UTG</PokerTooltip>), each player decides whether to call the big blind, raise, or fold.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Strategic Considerations</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 p-4 bg-muted rounded-lg">
                  <li>Position is critical - players in later positions have more information</li>
                  <li>Starting hand selection is crucial - play tight in early positions</li>
                  <li>Consider stack sizes when deciding to call or raise</li>
                  <li>Watch for players who might <PokerTooltip term="3-bet">3-bet</PokerTooltip> (re-raise) behind you</li>
                  <li>Adjust strategy based on tournament stage or cash game dynamics</li>
                </ul>
                
                <div className="mt-5">
                  <h4 className="font-medium mb-2">Example Pre-Flop Hand</h4>
                  <div className="flex justify-center gap-2 mt-3">
                    <PlayingCard card="As" />
                    <PlayingCard card="Kh" />
                  </div>
                  <p className="text-center text-sm mt-2 text-muted-foreground">
                    A premium starting hand like A♠K<span className="text-red-500">♥</span> would typically be raised from any position
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Flop Round */}
        <AccordionItem value="flop" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">2. The Flop</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Three community cards are dealt face-up on the table
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Actions</h3>
                <div className="bg-muted p-4 rounded-lg space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">1. Dealing the Flop</h4>
                    <p className="text-sm text-muted-foreground">
                      After the <PokerTooltip term="pre-flop">pre-flop</PokerTooltip> betting round is complete, the dealer burns a card (discards it face-down) and then deals three community cards face-up in the center of the table.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-1">2. Second Betting Round</h4>
                    <p className="text-sm text-muted-foreground">
                      The action starts with the first active player to the left of the dealer button. Players can check (if no one has bet), bet, call, raise, or fold.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Strategic Considerations</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 p-4 bg-muted rounded-lg">
                  <li>Assess how the <PokerTooltip term="flop">flop</PokerTooltip> connects with your hole cards</li>
                  <li>Consider your hand's current strength and drawing potential</li>
                  <li>Position becomes even more important for bluffing</li>
                  <li>Pay attention to board texture (paired, connected, suited)</li>
                  <li>Be cautious on coordinated flops that could give opponents strong draws</li>
                </ul>
                
                <div className="mt-5">
                  <h4 className="font-medium mb-2">Example Flop</h4>
                  <div className="flex justify-center gap-2 mt-3">
                    <PlayingCard card="Ks" />
                    <PlayingCard card="Qd" />
                    <PlayingCard card="8c" />
                  </div>
                  <p className="text-center text-sm mt-2 text-muted-foreground">
                    With A♠K<span className="text-red-500">♥</span> on a K♠Q<span className="text-red-500">♦</span>8♣ flop, you've hit top pair with a strong kicker
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Turn Round */}
        <AccordionItem value="turn" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">3. The Turn</h2>
              <p className="text-sm text-muted-foreground mt-1">
                A fourth community card is dealt face-up on the table
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Actions</h3>
                <div className="bg-muted p-4 rounded-lg space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">1. Dealing the Turn</h4>
                    <p className="text-sm text-muted-foreground">
                      After the flop betting round is complete, the dealer burns another card and deals a fourth community card face-up, called "the turn" or "fourth street."
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-1">2. Third Betting Round</h4>
                    <p className="text-sm text-muted-foreground">
                      Another round of betting occurs, starting with the first active player to the left of the dealer button. In fixed-limit games, the betting amount typically doubles at this stage.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Strategic Considerations</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 p-4 bg-muted rounded-lg">
                  <li>Re-evaluate your hand strength with the new card</li>
                  <li>Calculate pot odds for drawing hands (fewer cards to come)</li>
                  <li>Consider if the turn card helps your opponents' likely hands</li>
                  <li>Bet sizing becomes more critical with larger pots</li>
                  <li><PokerTooltip term="semi-bluffs">Semi-bluffs</PokerTooltip> can be effective when you have <PokerTooltip term="outs">outs</PokerTooltip> to improve</li>
                </ul>
                
                <div className="mt-5">
                  <h4 className="font-medium mb-2">Example Turn</h4>
                  <div className="flex justify-center gap-2 mt-3">
                    <PlayingCard card="Ks" />
                    <PlayingCard card="Qd" />
                    <PlayingCard card="8c" />
                    <PlayingCard card="2h" />
                  </div>
                  <p className="text-center text-sm mt-2 text-muted-foreground">
                    The 2<span className="text-red-500">♥</span> turn doesn't change much. Your top pair/top kicker remains strong.
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* River Round */}
        <AccordionItem value="river" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">4. The River</h2>
              <p className="text-sm text-muted-foreground mt-1">
                The fifth and final community card is dealt face-up
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Actions</h3>
                <div className="bg-muted p-4 rounded-lg space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">1. Dealing the River</h4>
                    <p className="text-sm text-muted-foreground">
                      After the turn betting round is complete, the dealer burns a final card and deals the fifth community card face-up, called "the river" or "fifth street."
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-1">2. Final Betting Round</h4>
                    <p className="text-sm text-muted-foreground">
                      The last betting round takes place, again starting with the first active player to the left of the dealer button.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Strategic Considerations</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 p-4 bg-muted rounded-lg">
                  <li>Make your final hand assessment - all cards are now visible</li>
                  <li><PokerTooltip term="value betting">Value betting</PokerTooltip> becomes more important than bluffing</li>
                  <li>Consider whether to bluff missed draws</li>
                  <li>Think about your opponent's entire range, not just one hand</li>
                  <li>Be prepared to make tough laydowns with medium-strength hands</li>
                </ul>
                
                <div className="mt-5">
                  <h4 className="font-medium mb-2">Example River</h4>
                  <div className="flex justify-center gap-2 mt-3">
                    <PlayingCard card="Ks" />
                    <PlayingCard card="Qd" />
                    <PlayingCard card="8c" />
                    <PlayingCard card="2h" />
                    <PlayingCard card="Ad" />
                  </div>
                  <p className="text-center text-sm mt-2 text-muted-foreground">
                    The A<span className="text-red-500">♦</span> river gives you two pair - Aces and Kings with a Queen kicker.
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Showdown */}
        <AccordionItem value="showdown" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">5. The Showdown</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Players reveal their hole cards to determine the winner
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Actions</h3>
                <div className="bg-muted p-4 rounded-lg space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">1. Revealing Cards</h4>
                    <p className="text-sm text-muted-foreground">
                      If two or more players remain after the final betting round, they reveal their hole cards in a <PokerTooltip term="showdown">showdown</PokerTooltip> to determine who has the best hand.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-1">2. Determining the Winner</h4>
                    <p className="text-sm text-muted-foreground">
                      The player with the best five-card poker hand using any combination of their two hole cards and the five community cards wins the pot.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-1">3. Splitting the Pot</h4>
                    <p className="text-sm text-muted-foreground">
                      If two or more players have identical hands, the pot is split equally between them.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Showdown Order</h3>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2 p-4 bg-muted rounded-lg">
                  <li>The player who made the last aggressive action (bet or raise) on the river shows first</li>
                  <li>If the river was checked down (no bets), the player in earliest position shows first</li>
                  <li>Players can choose to:
                    <ul className="list-disc list-inside ml-5 mt-1">
                      <li>Show their hand</li>
                      <li>Muck (discard without showing) if they know they're beaten</li>
                      <li>Claim the pot if everyone else folds</li>
                    </ul>
                  </li>
                </ol>
                
                <div className="mt-5">
                  <h4 className="font-medium mb-2">Example Showdown</h4>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div>
                      <p className="text-center text-sm font-medium mb-2">Your Hand</p>
                      <div className="flex justify-center gap-2">
                        <PlayingCard card="As" />
                        <PlayingCard card="Kh" />
                      </div>
                      <p className="text-center text-xs mt-2 text-muted-foreground">
                        Best five cards: A-A-K-K-Q
                      </p>
                    </div>
                    <div>
                      <p className="text-center text-sm font-medium mb-2">Opponent's Hand</p>
                      <div className="flex justify-center gap-2">
                        <PlayingCard card="Qs" />
                        <PlayingCard card="Jc" />
                      </div>
                      <p className="text-center text-xs mt-2 text-muted-foreground">
                        Best five cards: K-Q-Q-J-8
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-sm mt-3 text-muted-foreground font-medium">
                    You win with two pair (Aces and Kings) vs one pair (Queens)
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}