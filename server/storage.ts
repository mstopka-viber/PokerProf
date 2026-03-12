import { terms, type Term, type InsertTerm, type SearchableContent, type SearchResult } from "@shared/schema";

export interface IStorage {
  getTerms(): Promise<Term[]>;
  getTermByName(term: string): Promise<Term | undefined>;
  searchTerms(query: string): Promise<Term[]>;
  searchContent(query: string): Promise<SearchResult[]>;
  getSearchableContent(): Promise<SearchableContent[]>;
}

export class MemStorage implements IStorage {
  private terms: Map<number, Term>;
  private searchableContent: Map<string, SearchableContent>;
  currentId: number;

  constructor() {
    this.terms = new Map();
    this.searchableContent = new Map();
    this.currentId = 1;
    this.initializeTerms();
    this.initializeSearchableContent();
  }

  private initializeTerms() {
    const defaultTerms: InsertTerm[] = [
      {
        term: "All-in",
        definition: "Betting all of your remaining chips",
        category: "betting",
      },
      {
        term: "Straddle Bet",
        definition: "An optional blind bet, typically double the big blind, made by the player next to the big blind before cards are dealt",
        category: "betting",
      },
      {
        term: "Small Blind",
        definition: "Mandatory bet placed by the player one seat left of the dealer",
        category: "positions",
      },
      {
        term: "Big Blind",
        definition: "Mandatory bet placed by the player two seats left of the dealer",
        category: "positions",
      },
      {
        term: "Check",
        definition: "To pass the action to the next player without betting",
        category: "actions",
      },
      {
        term: "Blinds Bets",
        definition: "Mandatory bets posted by two players before cards are dealt to ensure there's money in the pot. The small blind posts first, followed by the big blind which is typically double the small blind",
        category: "game_phases",
      },
      {
        term: "Pre Flop",
        definition: "The first betting round before any community cards are dealt, when players only have their hole cards",
        category: "game_phases",
      },
      {
        term: "Flop",
        definition: "The first three community cards dealt face-up on the table",
        category: "game_phases",
      },
      {
        term: "Turn",
        definition: "The fourth community card, also known as 'Fourth Street'",
        category: "game_phases",
      },
      {
        term: "River",
        definition: "The fifth and final community card, also known as 'Fifth Street'",
        category: "game_phases",
      },
      {
        term: "Pot",
        definition: "The total amount of chips bet by all players in a hand",
        category: "betting",
      },
      {
        term: "Kicker",
        definition: "A high card used to break ties between hands of the same rank",
        category: "hands",
      },
      // New terms
      {
        term: "Barrel",
        definition: "A continuation bet made on multiple streets, typically aggressive betting on the flop, turn, and/or river",
        category: "betting",
      },
      {
        term: "Board Texture",
        definition: "The characteristics of the community cards that affect how likely players are to have made strong hands",
        category: "board_state",
      },
      {
        term: "Wet Board",
        definition: "A board with many possible draws and connecting cards, leading to more potential made hands",
        category: "board_state",
      },
      {
        term: "Dry Board",
        definition: "A board with few connecting cards or potential draws, typically safer for players with strong made hands",
        category: "board_state",
      },
      {
        term: "Rainbow Flop",
        definition: "A flop where all three cards are different suits, reducing the possibility of flush draws",
        category: "board_state",
      },
      {
        term: "Checking Range",
        definition: "The collection of hands a player would check with in a specific situation, often used in a balanced strategy",
        category: "actions",
      },
      {
        term: "Continuation Bet",
        definition: "A bet made on the flop by the pre-flop aggressor, regardless of whether they hit the board",
        category: "betting",
      },
      {
        term: "Check Raising",
        definition: "The act of checking first then raising after an opponent bets, often a sign of a strong hand",
        category: "actions",
      },
      {
        term: "Limp In",
        definition: "To enter the pot by calling the big blind rather than raising",
        category: "actions",
      },
      {
        term: "Open Limp",
        definition: "Being the first player to limp into a pot, generally considered a weak play",
        category: "actions",
      },
      {
        term: "Street",
        definition: "Any round of betting in poker: pre-flop, flop, turn, or river",
        category: "hands",
      },
      {
        term: "Set",
        definition: "A three of a kind made by holding a pocket pair and hitting one card on the board",
        category: "hands",
      },
      {
        term: "Trips",
        definition: "A three of a kind made by pairing a hole card with a pair on the board",
        category: "hands",
      },
      {
        term: "Pot Odds",
        definition: "The ratio of the current pot size to the cost of a contemplated call, used to determine if a call is profitable",
        category: "betting",
      },
      {
        term: "Implied Odds",
        definition: "Potential future bets that can be won if you hit your draw, in addition to the current pot odds",
        category: "betting",
      },
      {
        term: "Broadway Cards",
        definition: "The highest five cards (Ace, King, Queen, Jack, Ten) in poker, also known as face cards plus ten",
        category: "hands",
      },
      {
        term: "Nutted Hand",
        definition: "The absolute best possible hand given the current board cards. Having the nuts means you cannot be beaten",
        category: "hands",
      },
      {
        term: "Under the Gun (UTG)",
        definition: "The position immediately to the left of the big blind, first to act preflop. Considered early position",
        category: "positions",
      },
      {
        term: "Middle Position",
        definition: "The positions between early position and late position, typically offering moderate strategic advantage",
        category: "positions",
      },
      {
        term: "Late Position",
        definition: "The positions closest to the button, offering the most strategic advantage due to acting last post-flop. This is a range of positions including Hijack, Cutoff and Button",
        category: "positions",
      },
      {
        term: "Hijack",
        definition: "The position immediately to the right of the cutoff, named for the opportunity to 'steal' pots before the later positions act",
        category: "positions",
      },
      {
        term: "Cutoff",
        definition: "The position immediately to the right of the button, second-best position at the table",
        category: "positions",
      },
      {
        term: "Button",
        definition: "The dealer position, marked by a dealer button. The most advantageous position.",
        category: "positions",
      },
      {
        term: "Kangaroo Straight",
        definition: "A special variant hand consisting of five non-consecutive cards separated by only one card, also known as The Odd Couple Variant. Can only be used once per game and beats all other hands including Royal Flush if agreed upon by all players beforehand",
        category: "hands",
      },
      {
        term: "Tight",
        definition: "A playing style where a player is very selective about which hands they play, folding most hands and only entering pots with strong holdings",
        category: "betting",
      },
      {
        term: "Coordinated Flop",
        definition: "A flop where the three community cards connect well together (e.g., 8-9-10 or three cards of the same suit), creating many possible straights, flushes, or draws for multiple players",
        category: "board_state",
      },
      {
        term: "Laydown",
        definition: "Folding a strong hand because you believe your opponent holds something better. A 'tough laydown' refers to folding a hand that is hard to let go of, such as a full house or a flush",
        category: "actions",
      },
      {
        term: "Connectors",
        definition: "Two hole cards that are consecutive in rank, such as 8-9 or J-Q. 'Suited connectors' are connectors of the same suit, which adds flush potential and makes them stronger starting hands",
        category: "hands",
      },
      {
        term: "Stealing Blinds",
        definition: "Raising from late position (cutoff or button) when the action folds to you, with the goal of winning the small blind and big blind without seeing a flop",
        category: "betting",
      },
      {
        term: "Open-Ended Straight Draw",
        definition: "A straight draw where you have four consecutive cards and can complete the straight with a card on either end. For example, holding 7-8-9-10 means either a 6 or a Jack completes the straight, giving you eight outs",
        category: "hands",
      },
      {
        term: "Gutshot",
        definition: "A straight draw where you need one specific card in the middle of the sequence to complete it, also called an inside straight draw. For example, holding 5-6-8-9 and needing a 7. A gutshot has only 4 outs, half as many as an open-ended straight draw",
        category: "hands",
      }
    ];

    defaultTerms.forEach(term => {
      const id = this.currentId++;
      this.terms.set(id, { ...term, id });
    });
  }

  async getTerms(): Promise<Term[]> {
    return Array.from(this.terms.values());
  }

  async getTermByName(term: string): Promise<Term | undefined> {
    return Array.from(this.terms.values()).find(
      (t) => t.term.toLowerCase() === term.toLowerCase()
    );
  }

  async searchTerms(query: string): Promise<Term[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.terms.values()).filter(
      (term) =>
        term.term.toLowerCase().includes(lowercaseQuery) ||
        term.definition.toLowerCase().includes(lowercaseQuery)
    );
  }

  async searchContent(query: string): Promise<SearchResult[]> {
    const lowercaseQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    // Search through all searchable content
    Array.from(this.searchableContent.values()).forEach(content => {
      const titleMatch = content.title.toLowerCase().includes(lowercaseQuery);
      const contentMatch = content.content.toLowerCase().includes(lowercaseQuery);
      const keywordMatch = content.keywords.some(keyword => 
        keyword.toLowerCase().includes(lowercaseQuery)
      );

      if (titleMatch || contentMatch || keywordMatch) {
        // Create excerpt from content
        const excerpt = this.createExcerpt(content.content, lowercaseQuery);
        
        results.push({
          id: content.id,
          title: content.title,
          content: content.content,
          category: content.category,
          page: content.page,
          href: content.href,
          excerpt
        });
      }
    });

    // Also search terms and include them in results
    const termResults = await this.searchTerms(query);
    termResults.forEach(term => {
      results.push({
        id: `term-${term.id}`,
        title: term.term,
        content: term.definition,
        category: 'Terminology',
        page: 'Terminology',
        href: '/terminology',
        excerpt: term.definition.length > 150 ? term.definition.substring(0, 150) + '...' : term.definition
      });
    });

    // Sort by relevance (title matches first, then content matches)
    return results.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(lowercaseQuery);
      const bTitle = b.title.toLowerCase().includes(lowercaseQuery);
      if (aTitle && !bTitle) return -1;
      if (!aTitle && bTitle) return 1;
      return a.title.localeCompare(b.title);
    });
  }

  async getSearchableContent(): Promise<SearchableContent[]> {
    return Array.from(this.searchableContent.values());
  }

  private createExcerpt(content: string, query: string): string {
    const lowercaseContent = content.toLowerCase();
    const lowercaseQuery = query.toLowerCase();
    const index = lowercaseContent.indexOf(lowercaseQuery);
    
    if (index === -1) {
      // If query not found, return first 200 characters
      return content.length > 200 ? content.substring(0, 200) + '...' : content;
    }
    
    // Create excerpt around the found term
    const start = Math.max(0, index - 100);
    const end = Math.min(content.length, index + 100);
    let excerpt = content.substring(start, end);
    
    if (start > 0) excerpt = '...' + excerpt;
    if (end < content.length) excerpt = excerpt + '...';
    
    return excerpt;
  }

  private initializeSearchableContent() {
    const content: SearchableContent[] = [
      // Hand Rankings
      {
        id: 'hand-rankings',
        title: 'Hand Rankings',
        content: 'Learn the hierarchy of poker hands from high card to royal flush. Royal Flush is the best possible hand: A-K-Q-J-10 all in the same suit. Straight Flush is five cards in sequence, all of the same suit. Four of a Kind (Quads) is four cards of the same rank. Full House is three of a kind plus a pair. Flush is five cards of the same suit, not in sequence. Straight is five cards in sequence, not all of the same suit. Three of a Kind (Set or Trips) is three cards of the same rank. Two Pair is two cards of one rank plus two cards of another rank. One Pair is two cards of the same rank. High Card is when no other hand is made. Kangaroo Straight is a special variant hand consisting of five non-consecutive cards separated by only one card, also known as The Odd Couple Variant.',
        category: 'Game Basics',
        page: 'Hand Rankings',
        href: '/hand-rankings',
        keywords: ['royal flush', 'straight flush', 'four of a kind', 'quads', 'full house', 'flush', 'straight', 'three of a kind', 'set', 'trips', 'two pair', 'one pair', 'high card', 'hand strength', 'poker hands', 'kangaroo straight', 'kangaroo', 'odd couple variant']
      },
      
      // Table Position
      {
        id: 'table-position',
        title: 'Table Position Strategy',
        content: 'Position is one of the most important concepts in poker. Early position includes UTG and UTG+1 - these players act first after the flop and should play tight with premium hands. Middle position includes MP and MP+1 - can play a wider range than early position. Late position includes Hijack, Cutoff, and Button - can play the widest range of hands due to positional advantage. The Button is the best position as you act last on all post-flop streets. Small Blind and Big Blind are out of position and should be played cautiously despite acting last preflop.',
        category: 'Strategy',
        page: 'Table Position',
        href: '/table-position',
        keywords: ['position', 'early position', 'UTG', 'middle position', 'late position', 'button', 'cutoff', 'hijack', 'small blind', 'big blind', 'positional advantage', 'out of position']
      },

      // Starting Hand Ranges
      {
        id: 'starting-hands',
        title: 'Starting Hand Ranges',
        content: 'Different starting hands have different equity against opponents. Premium hands like pocket aces, kings, queens, and ace-king should be played aggressively from any position. Medium pairs and suited connectors can be profitable in late position. Avoid playing weak hands like 72 offsuit, which has very low equity. Position determines which hands are profitable to play. Tight ranges in early position, wider ranges in late position.',
        category: 'Strategy',
        page: 'Starting Hand Ranges',
        href: '/ranges',
        keywords: ['starting hands', 'pocket pairs', 'suited connectors', 'premium hands', 'equity', 'range', 'tight', 'loose', 'position play']
      },

      // Pot Odds and Equity
      {
        id: 'odds-calculator',
        title: 'Pot Odds and Hand Equity',
        content: 'Pot odds represent the ratio between the pot size and the cost of your call. If you need to call $50 into a $100 pot, you are getting 2:1 pot odds, meaning you need at least 33% equity to break even. Hand equity is your percentage chance of winning at showdown. Common draws: flush draw has about 35% equity, open-ended straight draw has about 32% equity, gutshot straight draw has about 16% equity. Compare your equity to pot odds to make profitable decisions.',
        category: 'Strategy',
        page: 'Odds Calculator',
        href: '/odds-calculator',
        keywords: ['pot odds', 'equity', 'outs', 'flush draw', 'straight draw', 'gutshot', 'probability', 'math', 'profitable call', 'break even']
      },

      // Bluffing
      {
        id: 'bluffing',
        title: 'Bluffing Strategy',
        content: 'Bluffing is betting or raising with a weak hand to make opponents fold better hands. Pure bluffs have no chance of improving, while semi-bluffs have outs to improve. Choose bluff sizing carefully - larger bets require opponents to fold more often. Bluff on boards that favor your perceived range. Consider opponent tendencies - tight players fold more, loose players call more. Balance your bluffing frequency to remain unpredictable.',
        category: 'Strategy',
        page: 'Bluffing',
        href: '/bluffing',
        keywords: ['bluff', 'semi-bluff', 'pure bluff', 'bluff sizing', 'board texture', 'range advantage', 'fold equity', 'balance', 'unpredictable']
      },

      // Game Basics
      {
        id: 'gameplay-rounds',
        title: 'Poker Gameplay Rounds',
        content: 'Texas Hold\'em consists of four betting rounds. Preflop: each player receives two hole cards, betting starts with the player to the left of the big blind. Flop: three community cards are dealt face up, betting starts with the small blind. Turn: fourth community card is dealt, another betting round. River: fifth and final community card, final betting round. Players make the best five-card hand using any combination of hole cards and community cards.',
        category: 'Game Basics',
        page: 'Gameplay Rounds',
        href: '/gameplay-rounds',
        keywords: ['preflop', 'flop', 'turn', 'river', 'betting rounds', 'hole cards', 'community cards', 'board', 'betting action']
      },

      // Player Count and Table Dynamics
      {
        id: 'player-count',
        title: 'Player Count and Table Dynamics',
        content: 'Full ring games have 8-10 players and tend to be tighter with more premium hands required. Short-handed games with 3-7 players are more aggressive with wider ranges. Heads-up play is the most aggressive with very wide ranges. Online poker is faster-paced with more hands per hour. Live poker includes physical tells and table talk. Adjust your strategy based on table size and format.',
        category: 'Game Basics',
        page: 'Players & Tables',
        href: '/player-count',
        keywords: ['full ring', 'short handed', 'heads up', 'table size', 'online poker', 'live poker', 'table dynamics', 'aggression', 'tight', 'loose']
      },

      // Playing Styles
      {
        id: 'playing-styles',
        title: 'Poker Playing Styles',
        content: 'TAG (Tight Aggressive) plays premium hands aggressively - the most profitable style. LAG (Loose Aggressive) plays many hands aggressively - requires skill to execute. Tight Passive plays few hands and calls often - generally unprofitable. Loose Passive plays many hands and calls often - very unprofitable. Adapt your style based on opponents and table conditions. Mix up your play to remain unpredictable.',
        category: 'Strategy',
        page: 'Playing Styles',
        href: '/playing-styles',
        keywords: ['TAG', 'LAG', 'tight aggressive', 'loose aggressive', 'tight passive', 'loose passive', 'playing style', 'adaptation', 'profitable', 'unpredictable']
      },

      // Basic Strategy
      {
        id: 'basic-strategy',
        title: 'Basic Poker Strategy',
        content: 'Fundamental strategy concepts include position awareness, hand selection, bet sizing, and reading opponents. Play tight in early position, looser in late position. Size your bets to maximize value from worse hands or get better hands to fold. Observe opponents for patterns and tells. Manage your bankroll properly - never play above your limits. Focus on making profitable long-term decisions rather than short-term results.',
        category: 'Strategy',
        page: 'Basic Strategy',
        href: '/basic-strategy',
        keywords: ['basic strategy', 'fundamentals', 'hand selection', 'bet sizing', 'reading opponents', 'bankroll management', 'long-term', 'profitable decisions']
      },

      // Game Formats
      {
        id: 'game-format',
        title: 'Poker Game Formats',
        content: 'Cash games have constant blinds and players can buy in for different amounts. Tournaments have increasing blinds and elimination format. Sit & Go tournaments are single-table tournaments. Multi-table tournaments can have hundreds or thousands of players. Satellite tournaments award entries to larger tournaments. Freerolls have no entry fee. Each format requires different strategies and bankroll management.',
        category: 'Game Basics',
        page: 'Game & Format',
        href: '/game-format',
        keywords: ['cash games', 'tournaments', 'sit and go', 'MTT', 'satellite', 'freeroll', 'blinds', 'elimination', 'buy-in', 'tournament strategy']
      },

      // Betting Structures
      {
        id: 'betting-structures',
        title: 'Betting Structures',
        content: 'No-Limit allows players to bet any amount up to their entire stack at any time. Pot-Limit restricts maximum bet to the current pot size. Fixed-Limit has predetermined betting amounts for each round. Spread-Limit allows betting within a specific range. No-Limit is the most popular format and requires careful consideration of bet sizing and stack management.',
        category: 'Game Basics',
        page: 'Betting Structures',
        href: '/betting-structures',
        keywords: ['no limit', 'pot limit', 'fixed limit', 'spread limit', 'betting structure', 'bet sizing', 'stack management', 'maximum bet']
      }
    ];

    content.forEach(item => {
      this.searchableContent.set(item.id, item);
    });
  }

}

export const storage = new MemStorage();