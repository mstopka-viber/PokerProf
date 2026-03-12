import type { SearchResult } from "@shared/schema";
import { pokerGlossary as terms } from "./poker-glossary";

const pageContent: SearchResult[] = [
  { id: "hand-rankings", title: "Hand Rankings", content: "Royal Flush Straight Flush Four of a Kind Full House Flush Straight Three of a Kind Two Pair One Pair High Card Kangaroo Straight", category: "Game Basics", page: "Hand Rankings", href: "/hand-rankings", excerpt: "Learn the hierarchy of poker hands from high card to royal flush." },
  { id: "table-position", title: "Table Position Strategy", content: "Position early position UTG middle position late position button cutoff hijack small blind big blind positional advantage", category: "Strategy", page: "Table Position", href: "/table-position", excerpt: "Position is one of the most important concepts in poker." },
  { id: "starting-hands", title: "Starting Hand Ranges", content: "starting hands pocket pairs suited connectors premium hands equity range tight loose position", category: "Strategy", page: "Starting Hand Ranges", href: "/ranges", excerpt: "Different starting hands have different equity against opponents." },
  { id: "odds-calculator", title: "Pot Odds and Hand Equity", content: "pot odds equity outs flush draw straight draw gutshot probability math profitable call break even", category: "Strategy", page: "Odds Calculator", href: "/odds-calculator", excerpt: "Pot odds represent the ratio between the pot size and the cost of your call." },
  { id: "bluffing", title: "Bluffing Strategy", content: "bluff semi-bluff pure bluff bluff sizing board texture range advantage fold equity balance unpredictable", category: "Strategy", page: "Bluffing", href: "/bluffing", excerpt: "Bluffing is betting or raising with a weak hand to make opponents fold better hands." },
  { id: "gameplay-rounds", title: "Poker Gameplay Rounds", content: "preflop flop turn river betting rounds hole cards community cards board betting action", category: "Game Basics", page: "Gameplay Rounds", href: "/gameplay-rounds", excerpt: "Texas Hold'em consists of four betting rounds." },
  { id: "player-count", title: "Player Count and Table Dynamics", content: "full ring short handed heads up table size online poker live poker table dynamics aggression tight loose", category: "Game Basics", page: "Players & Tables", href: "/player-count", excerpt: "Adjust your strategy based on table size and format." },
  { id: "playing-styles", title: "Poker Playing Styles", content: "TAG LAG tight aggressive loose aggressive tight passive loose passive playing style adaptation profitable unpredictable", category: "Strategy", page: "Playing Styles", href: "/playing-styles", excerpt: "TAG (Tight Aggressive) plays premium hands aggressively - the most profitable style." },
  { id: "basic-strategy", title: "Basic Poker Strategy", content: "basic strategy fundamentals hand selection bet sizing reading opponents bankroll management long-term profitable decisions", category: "Strategy", page: "Basic Strategy", href: "/basic-strategy", excerpt: "Fundamental strategy concepts include position awareness, hand selection, bet sizing, and reading opponents." },
  { id: "game-format", title: "Poker Game Formats", content: "cash games tournaments sit and go MTT satellite freeroll blinds elimination buy-in tournament strategy", category: "Game Basics", page: "Game & Format", href: "/game-format", excerpt: "Cash games have constant blinds, tournaments have increasing blinds and elimination format." },
  { id: "betting-structures", title: "Betting Structures", content: "no limit pot limit fixed limit spread limit betting structure bet sizing stack management maximum bet", category: "Game Basics", page: "Betting Structures", href: "/betting-structures", excerpt: "No-Limit allows players to bet any amount up to their entire stack at any time." },
];

export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();

  const results: SearchResult[] = [];

  // Search pages
  pageContent.forEach(item => {
    if (item.title.toLowerCase().includes(q) || item.content.toLowerCase().includes(q)) {
      results.push(item);
    }
  });

  // Search glossary terms
  Object.entries(terms).forEach(([term, definition]) => {
    if (term.toLowerCase().includes(q) || definition.toLowerCase().includes(q)) {
      results.push({
        id: `term-${term}`,
        title: term,
        content: definition,
        category: "Terminology",
        page: "Terminology",
        href: "/terminology",
        excerpt: definition.length > 150 ? definition.substring(0, 150) + "..." : definition,
      });
    }
  });

  // Title matches first
  return results.sort((a, b) => {
    const aTitle = a.title.toLowerCase().includes(q);
    const bTitle = b.title.toLowerCase().includes(q);
    if (aTitle && !bTitle) return -1;
    if (!aTitle && bTitle) return 1;
    return a.title.localeCompare(b.title);
  });
}
