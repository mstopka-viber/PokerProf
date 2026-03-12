import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Term {
  term: string;
  definition: string;
  category: string;
}

const ALL_TERMS: Term[] = [
  { term: "All-in", definition: "Betting all of your remaining chips", category: "betting" },
  { term: "Straddle Bet", definition: "An optional blind bet, typically double the big blind, made by the player next to the big blind before cards are dealt", category: "betting" },
  { term: "Pot", definition: "The total amount of chips bet by all players in a hand", category: "betting" },
  { term: "Barrel", definition: "A continuation bet made on multiple streets, typically aggressive betting on the flop, turn, and/or river", category: "betting" },
  { term: "Continuation Bet", definition: "A bet made on the flop by the pre-flop aggressor, regardless of whether they hit the board", category: "betting" },
  { term: "Pot Odds", definition: "The ratio of the current pot size to the cost of a contemplated call, used to determine if a call is profitable", category: "betting" },
  { term: "Implied Odds", definition: "Potential future bets that can be won if you hit your draw, in addition to the current pot odds", category: "betting" },
  { term: "Tight", definition: "A playing style where a player is very selective about which hands they play, folding most hands and only entering pots with strong holdings", category: "betting" },
  { term: "Stealing Blinds", definition: "Raising from late position (cutoff or button) when the action folds to you, with the goal of winning the small blind and big blind without seeing a flop", category: "betting" },

  { term: "Small Blind", definition: "Mandatory bet placed by the player one seat left of the dealer", category: "positions" },
  { term: "Big Blind", definition: "Mandatory bet placed by the player two seats left of the dealer", category: "positions" },
  { term: "Under the Gun (UTG)", definition: "The position immediately to the left of the big blind, first to act preflop. Considered early position", category: "positions" },
  { term: "Middle Position", definition: "The positions between early position and late position, typically offering moderate strategic advantage", category: "positions" },
  { term: "Late Position", definition: "The positions closest to the button, offering the most strategic advantage due to acting last post-flop. This is a range of positions including Hijack, Cutoff and Button", category: "positions" },
  { term: "Hijack", definition: "The position immediately to the right of the cutoff, named for the opportunity to 'steal' pots before the later positions act", category: "positions" },
  { term: "Cutoff", definition: "The position immediately to the right of the button, second-best position at the table", category: "positions" },
  { term: "Button", definition: "The dealer position, marked by a dealer button. The most advantageous position.", category: "positions" },

  { term: "Blinds Bets", definition: "Mandatory bets posted by two players before cards are dealt to ensure there's money in the pot. The small blind posts first, followed by the big blind which is typically double the small blind", category: "game_phases" },
  { term: "Pre Flop", definition: "The first betting round before any community cards are dealt, when players only have their hole cards", category: "game_phases" },
  { term: "Flop", definition: "The first three community cards dealt face-up on the table", category: "game_phases" },
  { term: "Turn", definition: "The fourth community card, also known as 'Fourth Street'", category: "game_phases" },
  { term: "River", definition: "The fifth and final community card, also known as 'Fifth Street'", category: "game_phases" },

  { term: "Check", definition: "To pass the action to the next player without betting", category: "actions" },
  { term: "Checking Range", definition: "The collection of hands a player would check with in a specific situation, often used in a balanced strategy", category: "actions" },
  { term: "Check Raising", definition: "The act of checking first then raising after an opponent bets, often a sign of a strong hand", category: "actions" },
  { term: "Limp In", definition: "To enter the pot by calling the big blind rather than raising", category: "actions" },
  { term: "Open Limp", definition: "Being the first player to limp into a pot, generally considered a weak play", category: "actions" },
  { term: "Laydown", definition: "Folding a strong hand because you believe your opponent holds something better. A 'tough laydown' refers to folding a hand that is hard to let go of, such as a full house or a flush", category: "actions" },

  { term: "Board Texture", definition: "The characteristics of the community cards that affect how likely players are to have made strong hands", category: "board_state" },
  { term: "Wet Board", definition: "A board with many possible draws and connecting cards, leading to more potential made hands", category: "board_state" },
  { term: "Dry Board", definition: "A board with few connecting cards or potential draws, typically safer for players with strong made hands", category: "board_state" },
  { term: "Rainbow Flop", definition: "A flop where all three cards are different suits, reducing the possibility of flush draws", category: "board_state" },
  { term: "Coordinated Flop", definition: "A flop where the three community cards connect well together (e.g., 8-9-10 or three cards of the same suit), creating many possible straights, flushes, or draws for multiple players", category: "board_state" },

  { term: "Kicker", definition: "A high card used to break ties between hands of the same rank", category: "hands" },
  { term: "Street", definition: "Any round of betting in poker: pre-flop, flop, turn, or river", category: "hands" },
  { term: "Set", definition: "A three of a kind made by holding a pocket pair and hitting one card on the board", category: "hands" },
  { term: "Trips", definition: "A three of a kind made by pairing a hole card with a pair on the board", category: "hands" },
  { term: "Broadway Cards", definition: "The highest five cards (Ace, King, Queen, Jack, Ten) in poker, also known as face cards plus ten", category: "hands" },
  { term: "Nutted Hand", definition: "The absolute best possible hand given the current board cards. Having the nuts means you cannot be beaten", category: "hands" },
  { term: "Connectors", definition: "Two hole cards that are consecutive in rank, such as 8-9 or J-Q. 'Suited connectors' are connectors of the same suit, which adds flush potential and makes them stronger starting hands", category: "hands" },
  { term: "Open-Ended Straight Draw", definition: "A straight draw where you have four consecutive cards and can complete the straight with a card on either end. For example, holding 7-8-9-10 means either a 6 or a Jack completes the straight, giving you eight outs", category: "hands" },
  { term: "Gutshot", definition: "A straight draw where you need one specific card in the middle of the sequence to complete it, also called an inside straight draw. For example, holding 5-6-8-9 and needing a 7. A gutshot has only 4 outs, half as many as an open-ended straight draw", category: "hands" },
  { term: "Kangaroo Straight", definition: "A special variant hand consisting of five non-consecutive cards separated by only one card, also known as The Odd Couple Variant. Can only be used once per game and beats all other hands including Royal Flush if agreed upon by all players beforehand", category: "hands" },
];

const CATEGORY_CONFIG: Record<string, { label: string; gradient: string; border: string }> = {
  betting:     { label: "Betting",     gradient: "from-red-100 to-white",    border: "border-red-200" },
  positions:   { label: "Positions",   gradient: "from-yellow-100 to-white", border: "border-yellow-200" },
  game_phases: { label: "Game Phases", gradient: "from-blue-100 to-white",   border: "border-blue-200" },
  actions:     { label: "Actions",     gradient: "from-green-100 to-white",  border: "border-green-200" },
  board_state: { label: "Board State", gradient: "from-purple-100 to-white", border: "border-purple-200" },
  hands:       { label: "Hands",       gradient: "from-gray-100 to-white",   border: "border-gray-200" },
};

const CATEGORY_ORDER = ["betting", "positions", "game_phases", "actions", "board_state", "hands"];

export default function Terminology() {
  const [search, setSearch] = useState("");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (cat: string) => {
    setOpenSections(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const filtered = useMemo(() => {
    if (!search.trim()) return ALL_TERMS;
    const q = search.toLowerCase();
    return ALL_TERMS.filter(t =>
      t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    );
  }, [search]);

  const grouped = useMemo(() => {
    return CATEGORY_ORDER.map(cat => ({
      cat,
      terms: filtered.filter(t => t.category === cat).sort((a, b) => a.term.localeCompare(b.term)),
    })).filter(g => g.terms.length > 0);
  }, [filtered]);

  const isSearching = search.trim().length > 0;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="gradient-heading">Poker Terminology</h1>
      <p className="text-muted-foreground mb-6">
        {ALL_TERMS.length} terms — hover over purple terms anywhere in the guide to see quick definitions.
      </p>

      <Input
        type="search"
        placeholder="Search terms..."
        className="mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {grouped.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-muted-foreground">
            No terms found for "{search}".
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {grouped.map(({ cat, terms }) => {
            const config = CATEGORY_CONFIG[cat];
            const isOpen = isSearching || !!openSections[cat];
            return (
              <div
                key={cat}
                className={`border rounded-lg bg-gradient-to-br ${config.gradient} ${config.border} overflow-hidden`}
              >
                <button
                  className="w-full flex items-center justify-between px-4 py-3 hover:opacity-80 transition-opacity"
                  onClick={() => toggleSection(cat)}
                >
                  <h2 className="text-xl font-semibold text-red-600">{config.label}</h2>
                  {isOpen ? <ChevronUp className="h-5 w-5 text-red-400" /> : <ChevronDown className="h-5 w-5 text-red-400" />}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4">
                    <div className="grid gap-3">
                      {terms.map(t => (
                        <Card key={t.term} className="shadow-sm">
                          <CardContent className="pt-4 pb-4">
                            <h3 className="text-base font-semibold mb-1">{t.term}</h3>
                            <p className="text-muted-foreground text-sm">{t.definition}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
