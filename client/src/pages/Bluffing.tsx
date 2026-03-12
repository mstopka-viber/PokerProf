import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import PokerTooltip from "@/components/PokerTooltip";

export default function Bluffing() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="gradient-heading">The Art of Bluffing</h1>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <p className="text-muted-foreground">
            Bluffing is an essential part of poker strategy that allows players to win pots even with weak hands.
            Understanding when and how to bluff effectively separates winning players from losing ones.
          </p>
        </CardContent>
      </Card>

      {/* Unified Accordion for All Bluffing Sections */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* Why Bluffing is Necessary */}
        <AccordionItem value="why-bluffing" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left flex items-center justify-between w-full pr-4">
              <div>
                <h2 className="text-xl font-semibold">Why Bluffing is Necessary</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  The mathematical and strategic reasons bluffing is essential
                </p>
              </div>
              <Badge>Essential Skill</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Poker would be a much simpler game if players only bet when they had strong hands. However, the reality of 
                poker makes bluffing a necessary skill:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Poor Hit Rate</span>: Players miss the <PokerTooltip term="flop">flop</PokerTooltip> approximately 2/3 of the time. If you only bet when you hit,
                  you'd be folding too often and opponents could easily exploit you.
                </li>
                <li>
                  <span className="font-medium">Balancing <PokerTooltip term="range">Range</PokerTooltip></span>: To be unpredictable, you need to play both strong hands and weaker hands in similar ways sometimes.
                </li>
                <li>
                  <span className="font-medium">Fighting for the Pot</span>: In many situations, neither player has a strong hand, so the pot goes to whoever is willing to fight for it.
                </li>
              </ul>

              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold mb-2">The Flop Miss Rate</h3>
                <p className="text-sm">
                  Even with premium starting hands like A-K, players will miss connecting with the flop about 67% of the time.
                  This means in most hands, players are looking at unpaired <PokerTooltip term="hole cards">hole cards</PokerTooltip> after the flop, making bluffing a crucial
                  part of the game.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Types of Bluffs */}
        <AccordionItem value="types-of-bluffs" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Types of Bluffs</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Different categories of bluffing strategies and techniques
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Pure Bluff</h3>
                <p className="mb-2">
                  A pure bluff (also called a stone-cold bluff) is when you have a hand with virtually no chance of winning at <PokerTooltip term="showdown">showdown</PokerTooltip>, 
                  but bet to make your opponents fold better hands.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Example:</span> Betting with <PokerTooltip term="72o">7-2 offsuit</PokerTooltip> on a board of A-K-Q, representing that you have J-10 for a straight.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Semi-Bluff</h3>
                <p className="mb-2">
                  A <PokerTooltip term="semi-bluff">semi-bluff</PokerTooltip> is when you bet with a hand that's currently weak but has potential to improve to the best hand on later streets.
                  This gives you two ways to win: either opponents fold immediately, or you hit your draw.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Example:</span> Betting with a flush draw or an open-ended straight draw.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Continuation Bet (C-Bet)</h3>
                <p className="mb-2">
                  A <PokerTooltip term="continuation bet">continuation bet</PokerTooltip> is a bet made by the pre-flop aggressor on the flop, regardless of whether they hit the flop or not.
                  It's one of the most common forms of bluffing in poker.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Example:</span> Raising pre-flop with A-K, missing the flop entirely when it comes 7-5-2, but betting anyway.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Multi-Barrel Bluff</h3>
                <p className="mb-2">
                  A multi-barrel bluff is when you continue your bluff across multiple streets (flop, turn, river).
                  These are higher risk but can be very effective against opponents who are capable of folding.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Example:</span> Bluffing on the flop, then again on the turn, and finally on the river with a missed draw.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Block Bet</h3>
                <p className="mb-2">
                  A small bet made to control the pot size when you have a marginal hand and want to get to showdown cheaply.
                  This can also be a type of bluff when used to represent strength with a weak hand.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Example:</span> Betting 1/3 pot on the river with a missed draw, hoping to prevent a larger bluff from your opponent.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* When to Bluff */}
        <AccordionItem value="when-to-bluff" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">When to Bluff</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Identifying optimal situations for successful bluffing
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Successful bluffing relies on careful consideration of the situation. Here are guidelines for when bluffing is more likely to succeed:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Good Bluffing Spots</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Against a small number of opponents (ideally one)</li>
                    <li>When you have a tight, strong <PokerTooltip term="table image">image</PokerTooltip> at the table</li>
                    <li>When the board texture favors your perceived range</li>
                    <li>Against thinking opponents who can fold good hands</li>
                    <li>When your opponent has shown weakness</li>
                    <li>When you're in position (acting after your opponent)</li>
                    <li>When your story makes sense across all betting rounds</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">Poor Bluffing Spots</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Against multiple opponents</li>
                    <li>Against calling stations who rarely fold</li>
                    <li>When the board has obvious draws that may have hit</li>
                    <li>When you have a loose, wild table image</li>
                    <li>Against recreational players who want to "see it"</li>
                    <li>When out of position (acting before your opponent)</li>
                    <li>When your previous betting pattern doesn't support your bluff</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold mb-2">Bluffing Frequency</h3>
                <p className="text-sm">
                  Game theory suggests that optimal bluffing frequency depends on the <PokerTooltip term="pot odds">pot odds</PokerTooltip> you're giving your opponent.
                  If your bet gives your opponent 3:1 odds, you should be bluffing about 25% of the time in theory. This creates
                  a balanced strategy that can't be exploited.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Common Bluffing Mistakes */}
        <AccordionItem value="bluffing-mistakes" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Common Bluffing Mistakes</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Avoid these common pitfalls that reduce bluffing effectiveness
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Bluffing Too Often</h3>
                <p className="text-sm">
                  The most common mistake new players make is bluffing too frequently. Showing down too many weak hands damages your table image
                  and makes opponents less likely to fold to your bets.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Poor Bet Sizing</h3>
                <p className="text-sm">
                  Using inconsistent bet sizes for bluffs versus value bets gives away information. Your bluffs should use 
                  the same sizing as your <PokerTooltip term="value betting">value bets</PokerTooltip> to be effective.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Bluffing "Calling Stations"</h3>
                <p className="text-sm">
                  Some players will call down with any pair or drawing hand. Against these <PokerTooltip term="calling station">calling station</PokerTooltip> opponents, bluffing is often a waste 
                  of chips. Value betting strong hands is more profitable.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Bluffing Without a Plan</h3>
                <p className="text-sm">
                  The best bluffs are planned across multiple streets. Starting a bluff without thinking about turn and river cards
                  often leads to difficult situations and wasted chips.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Bluffing in Different Game Formats */}
        <AccordionItem value="game-formats" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Bluffing in Different Game Formats</h2>
              <p className="text-sm text-muted-foreground mt-1">
                How to adjust your bluffing strategy across different poker formats
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Your bluffing strategy should adjust based on the poker format you're playing:
              </p>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Cash Games</h3>
                <p className="text-sm">
                  In cash games, you can afford to bluff more often because stack depths are typically deeper. You can also try more creative
                  bluffs because you have time to balance your image over many hands.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Tournaments</h3>
                <p className="text-sm">
                  In tournaments, survival is important, so bluffing should generally be more selective. As the <PokerTooltip term="blinds">blinds</PokerTooltip> increase
                  and stacks get shallower in the later stages, well-timed bluffs become more valuable.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Online vs. Live</h3>
                <p className="text-sm">
                  Online players tend to fold more easily to aggression, making bluffing potentially more effective. In live games,
                  you can incorporate physical tells into your bluffing decisions, but opponents may also call more out of curiosity.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Key Takeaways */}
        <AccordionItem value="key-takeaways" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Key Takeaways</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Essential principles for effective bluffing strategy
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Bluff with purpose and have a clear plan for each street</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Semi-bluffs (with some equity) are generally better than pure bluffs</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Consider your table image and adjust your bluffing frequency accordingly</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Pay attention to your opponents' tendencies and bluff the players who can fold</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Make sure your betting pattern tells a consistent story across all streets</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Use the same bet sizes for bluffs and value bets to disguise your hand strength</span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}