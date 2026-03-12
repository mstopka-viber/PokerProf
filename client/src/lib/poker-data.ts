import type { HandRank, StartingHand } from "@shared/schema";

export const handRankings: HandRank[] = [
  {
    name: "Royal Flush",
    description: "The highest possible straight flush, from Ten to Ace in the same suit",
    example: ["A♠", "K♠", "Q♠", "J♠", "T♠"],
  },
  {
    name: "Straight Flush",
    description: "Five consecutive cards of the same suit",
    example: ["9♥", "8♥", "7♥", "6♥", "5♥"],
  },
  {
    name: "Four of a Kind",
    description: "Four cards of the same rank",
    example: ["A♠", "A♥", "A♦", "A♣", "K♠"],
  },
  {
    name: "Full House",
    description: "Three cards of one rank and two cards of another rank",
    example: ["K♠", "K♥", "K♦", "J♣", "J♠"],
  },
  {
    name: "Flush",
    description: "Any five cards of the same suit",
    example: ["A♣", "J♣", "8♣", "6♣", "2♣"],
  },
  {
    name: "Straight",
    description: "Five consecutive cards of any suit",
    example: ["9♠", "8♥", "7♦", "6♣", "5♠"],
  },
  {
    name: "Three of a Kind",
    description: "Three cards of the same rank",
    example: ["Q♠", "Q♥", "Q♦", "8♣", "4♠"],
  },
  {
    name: "Two Pair",
    description: "Two different pairs of cards and one kicker",
    example: ["J♠", "J♥", "8♦", "8♣", "A♠"],
  },
  {
    name: "One Pair",
    description: "One pair of cards of the same rank",
    example: ["T♠", "T♥", "K♦", "5♣", "2♠"],
  },
  {
    name: "High Card",
    description: "When no player has any of the above hands, the highest card wins",
    example: ["A♠", "J♥", "8♦", "6♣", "4♠"],
  },
  {
    name: "Kangaroo Straight",
    description: "aka: The Odd Couple Variant.This hand can only be used once per game and beats all other hands including a Royal Flush. It consists of five non-consecutive cards of any suit separated by only one card. Only use this straight if agreed to by all players before the start of the game or it can cause fireworks",
    example: ["K♠", "J♥", "9♦", "7♣", "5♠"],
  },
];

export const startingHands: StartingHand[] = [
  // Premium hands - playable from any position
  {
    hand: "AA",
    position: "Any",
    recommendation: "Raise 3-4x BB",
    strength: 100,
  },
  {
    hand: "KK",
    position: "Any",
    recommendation: "Raise 3-4x BB",
    strength: 95,
  },
  {
    hand: "QQ",
    position: "Any",
    recommendation: "Raise 3-4x BB",
    strength: 90,
  },
  {
    hand: "AKs",
    position: "Any",
    recommendation: "Raise 3-4x BB",
    strength: 87,
  },
  {
    hand: "AKo",
    position: "Any",
    recommendation: "Raise 3-4x BB",
    strength: 83,
  },

  // Strong hands - playable from most positions
  {
    hand: "JJ",
    position: "Early Position (UTG)",
    recommendation: "Raise 3x BB",
    strength: 80,
  },
  {
    hand: "TT",
    position: "Early Position (UTG)",
    recommendation: "Raise 3x BB",
    strength: 75,
  },
  {
    hand: "AQs",
    position: "Early Position (UTG)",
    recommendation: "Raise 3x BB",
    strength: 75,
  },
  {
    hand: "AQo",
    position: "Early Position (UTG)",
    recommendation: "Raise 3x BB",
    strength: 70,
  },
  {
    hand: "AJs",
    position: "Early Position (UTG)",
    recommendation: "Raise 3x BB",
    strength: 70,
  },
  {
    hand: "AJo",
    position: "Early Position (UTG)",
    recommendation: "Raise 3x BB",
    strength: 66,
  },
  {
    hand: "KQs",
    position: "Early Position (UTG)",
    recommendation: "Raise 3x BB",
    strength: 70,
  },

  // Middle Position - Premium, Strong, and Medium hands
  {
    hand: "JJ",
    position: "Middle Position",
    recommendation: "Raise 3x BB",
    strength: 80,
  },
  {
    hand: "TT",
    position: "Middle Position",
    recommendation: "Raise 3x BB",
    strength: 75,
  },
  {
    hand: "AQs",
    position: "Middle Position",
    recommendation: "Raise 3x BB",
    strength: 75,
  },
  {
    hand: "AJs",
    position: "Middle Position",
    recommendation: "Raise 3x BB",
    strength: 70,
  },
  {
    hand: "AJo",
    position: "Middle Position",
    recommendation: "Raise 3x BB",
    strength: 66,
  },
  {
    hand: "KQs",
    position: "Middle Position",
    recommendation: "Raise 3x BB",
    strength: 70,
  },
  {
    hand: "99",
    position: "Middle Position",
    recommendation: "Raise/Call depending on action",
    strength: 65,
  },
  {
    hand: "ATs",
    position: "Middle Position",
    recommendation: "Raise/Call depending on action",
    strength: 60,
  },
  {
    hand: "KQo",
    position: "Middle Position",
    recommendation: "Raise/Call depending on action",
    strength: 56,
  },
  {
    hand: "KJs",
    position: "Middle Position",
    recommendation: "Raise/Call depending on action",
    strength: 55,
  },
  {
    hand: "QJs",
    position: "Middle Position",
    recommendation: "Raise/Call depending on action",
    strength: 55,
  },
  {
    hand: "88",
    position: "Middle Position",
    recommendation: "Raise/Call depending on action",
    strength: 55,
  },

  // Late Position (Button) - Premium, Strong, Medium, and Speculative hands
  {
    hand: "JJ",
    position: "Late Position (Button)",
    recommendation: "Raise 3x BB",
    strength: 80,
  },
  {
    hand: "TT",
    position: "Late Position (Button)",
    recommendation: "Raise 3x BB",
    strength: 75,
  },
  {
    hand: "AQs",
    position: "Late Position (Button)",
    recommendation: "Raise 3x BB",
    strength: 75,
  },
  {
    hand: "AJs",
    position: "Late Position (Button)",
    recommendation: "Raise 3x BB",
    strength: 70,
  },
  {
    hand: "AJo",
    position: "Late Position (Button)",
    recommendation: "Raise 3x BB",
    strength: 66,
  },
  {
    hand: "KQs",
    position: "Late Position (Button)",
    recommendation: "Raise 3x BB",
    strength: 70,
  },
  {
    hand: "99",
    position: "Late Position (Button)",
    recommendation: "Raise/Call depending on action",
    strength: 65,
  },
  {
    hand: "ATs",
    position: "Late Position (Button)",
    recommendation: "Raise/Call depending on action",
    strength: 60,
  },
  {
    hand: "KQo",
    position: "Late Position (Button)",
    recommendation: "Raise/Call depending on action",
    strength: 56,
  },
  {
    hand: "KJs",
    position: "Late Position (Button)",
    recommendation: "Raise/Call depending on action",
    strength: 55,
  },
  {
    hand: "QJs",
    position: "Late Position (Button)",
    recommendation: "Raise/Call depending on action",
    strength: 55,
  },
  {
    hand: "88",
    position: "Late Position (Button)",
    recommendation: "Raise if no action, call if raised",
    strength: 50,
  },
  {
    hand: "77",
    position: "Late Position (Button)",
    recommendation: "Raise if no action, fold to raises",
    strength: 45,
  },
  {
    hand: "ATo",
    position: "Late Position (Button)",
    recommendation: "Raise if no action, fold to raises",
    strength: 40,
  },
  {
    hand: "66",
    position: "Late Position (Button)",
    recommendation: "Raise if no action, fold to raises",
    strength: 35,
  },
  {
    hand: "55",
    position: "Late Position (Button)",
    recommendation: "Raise if folded to you, fold to raises",
    strength: 30,
  },
  {
    hand: "A9s",
    position: "Late Position (Button)",
    recommendation: "Raise if folded to you, fold to raises",
    strength: 30,
  },
  {
    hand: "KTs",
    position: "Late Position (Button)",
    recommendation: "Raise if folded to you, fold to raises",
    strength: 30,
  },

  // Small Blind - Premium hands only
  {
    hand: "JJ",
    position: "Small Blind",
    recommendation: "Raise 3-4x BB",
    strength: 80,
  },
  {
    hand: "TT",
    position: "Small Blind",
    recommendation: "Raise 3-4x BB",
    strength: 75,
  },
  {
    hand: "AQs",
    position: "Small Blind",
    recommendation: "Raise 3-4x BB",
    strength: 75,
  },
  {
    hand: "AJs",
    position: "Small Blind",
    recommendation: "Raise 3-4x BB",
    strength: 70,
  },
  {
    hand: "ATs",
    position: "Small Blind",
    recommendation: "Raise 3-4x BB",
    strength: 65,
  },
  {
    hand: "AJo",
    position: "Small Blind",
    recommendation: "Raise 3-4x BB",
    strength: 57,
  },

  // Big Blind - Premium hands only
  {
    hand: "JJ",
    position: "Big Blind",
    recommendation: "Raise 3-4x BB",
    strength: 80,
  },
  {
    hand: "TT",
    position: "Big Blind",
    recommendation: "Raise 3-4x BB",
    strength: 75,
  },
  {
    hand: "AQs",
    position: "Big Blind",
    recommendation: "Raise 3-4x BB",
    strength: 75,
  },
  {
    hand: "AJs",
    position: "Big Blind",
    recommendation: "Raise 3-4x BB",
    strength: 70,
  },
  {
    hand: "ATs",
    position: "Big Blind",
    recommendation: "Raise 3-4x BB",
    strength: 65,
  },
  {
    hand: "AJo",
    position: "Big Blind",
    recommendation: "Raise 3-4x BB",
    strength: 57,
  }
];

export const positions = [
  "Small Blind",
  "Big Blind",
  "Early Position (UTG)",
  "Middle Position",
  "Late Position (Button)",
];