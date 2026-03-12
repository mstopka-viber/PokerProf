import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PokerTooltip from "@/components/PokerTooltip";

export default function PlayingStyles() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="gradient-heading">Playing Styles</h1>
      
      <Card className="mb-6">
        <CardHeader className="card-header">
          <CardTitle>Poker Playing Styles</CardTitle>
          <CardDescription>
            Understanding different approaches to playing Texas Hold'em
          </CardDescription>
        </CardHeader>
        <CardContent className="prose card-content">
          <p>
            There are many different ways to approach poker strategy. Each playing style has its strengths, weaknesses, and optimal situations. Understanding these styles helps you identify your own tendencies and recognize patterns in your opponents' play.
          </p>
        </CardContent>
      </Card>
      
      {/* Accordion for Playing Styles Sections */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* Tight-Aggressive (TAG) */}
        <AccordionItem value="tight-aggressive" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left flex items-center justify-between w-full pr-4">
              <div>
                <h2 className="text-xl font-semibold">Tight-Aggressive (TAG)</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Playing few hands but playing them strongly
                </p>
              </div>
              <Badge className="bg-blue-600">Recommended for Beginners</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Characteristics</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Plays a selective range of starting hands (15-20%)</li>
                  <li>Enters pots with raises rather than calls</li>
                  <li>Continues aggressively post-flop with strong hands and draws</li>
                  <li>Willing to fold when facing significant resistance</li>
                  <li>Uses controlled aggression rather than wild bluffing</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strengths</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Less variance and more consistent results</li>
                    <li>Easier to make quality decisions with better starting hands</li>
                    <li>Builds strong table image that can be leveraged later</li>
                    <li>More profitable in games with many weak-tight players</li>
                    <li>Tends to be more fundamentally sound approach</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Weaknesses</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Can become predictable if too tight</li>
                    <li>Misses opportunities with speculative hands</li>
                    <li>Vulnerable to <PokerTooltip term="blind stealing">blind stealing</PokerTooltip></li>
                    <li>May not maximize value in multiway pots</li>
                    <li>Can be exploited by observant opponents</li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Loose-Aggressive (LAG) */}
        <AccordionItem value="loose-aggressive" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left flex items-center justify-between w-full pr-4">
              <div>
                <h2 className="text-xl font-semibold">Loose-Aggressive (LAG)</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Playing many hands with frequent aggression
                </p>
              </div>
              <Badge className="bg-red-600">Advanced Style</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Characteristics</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Plays a wide range of starting hands (25-40%)</li>
                  <li>Raises and re-raises frequently</li>
                  <li><PokerTooltip term="continuation bet">Continuation bets</PokerTooltip> on most flops</li>
                  <li>Takes creative lines with marginal hands</li>
                  <li>Applies maximum pressure on opponents</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strengths</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Difficult for opponents to put you on a range</li>
                    <li>Wins many pots without <PokerTooltip term="showdown">showdown</PokerTooltip></li>
                    <li>Can extract maximum value with strong hands</li>
                    <li>Creates opportunities for creative plays</li>
                    <li>Puts tremendous pressure on tight players</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Weaknesses</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Higher variance and bigger swings</li>
                    <li>Makes more complex post-flop decisions</li>
                    <li>Vulnerable to patient players who wait for strong hands</li>
                    <li>Can lead to bankroll problems if not executed well</li>
                    <li>Requires excellent hand reading skills</li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Tight-Passive */}
        <AccordionItem value="tight-passive" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Tight-Passive ("Rock")</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Playing few hands with cautious approach
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Characteristics</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Plays only premium hands (less than 15%)</li>
                  <li>Prefers calling to raising</li>
                  <li>Rarely bluffs</li>
                  <li>Folds to aggression unless holding very strong hands</li>
                  <li>Values safety over maximizing profit</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strengths</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Low variance, minimal losses</li>
                    <li>Relatively simple strategy to implement</li>
                    <li>Avoids complex situations</li>
                    <li>Gets paid off when showing aggression</li>
                    <li>Good for beginners to avoid big mistakes</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Weaknesses</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Extremely exploitable - opponents will steal <PokerTooltip term="blinds">blinds</PokerTooltip></li>
                    <li>Highly predictable</li>
                    <li>Misses value with good but not great hands</li>
                    <li>Limited profit potential</li>
                    <li>Can't adjust to take advantage of weak players</li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Loose-Passive */}
        <AccordionItem value="loose-passive" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Loose-Passive ("Calling Station")</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Playing many hands with frequent calling
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Characteristics</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Plays many hands (30% or more)</li>
                  <li>Calls frequently, raises rarely</li>
                  <li>Chases draws regardless of <PokerTooltip term="pot odds">pot odds</PokerTooltip></li>
                  <li>Rarely folds once invested in a pot</li>
                  <li>Values seeing showdowns over playing strategically</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strengths</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Can catch opponents' bluffs</li>
                    <li>Sometimes hits unlikely draws</li>
                    <li>Fun style that keeps you in the action</li>
                    <li>Can be profitable in very specific, unusual games</li>
                    <li>Unpredictable due to playing many hand types</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Weaknesses</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Consistently unprofitable in most games</li>
                    <li>Vulnerable to <PokerTooltip term="value betting">value betting</PokerTooltip></li>
                    <li>Loses maximum on strong hands</li>
                    <li>Doesn't extract value with own strong hands</li>
                    <li>High variance with poor expected value</li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Game Theory Optimal (GTO) */}
        <AccordionItem value="gto" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left flex items-center justify-between w-full pr-4">
              <div>
                <h2 className="text-xl font-semibold">Game Theory Optimal (GTO)</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  A mathematically balanced strategy that cannot be exploited
                </p>
              </div>
              <Badge className="bg-blue-600">Advanced Approach</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Characteristics</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Based on mathematical equilibrium solutions from game theory</li>
                  <li>Creates a balanced strategy of <PokerTooltip term="value bet">value bets</PokerTooltip> and bluffs</li>
                  <li>Aims to be unexploitable by any counter-strategy</li>
                  <li>Uses mixed strategies (probabilistic decisions) in many spots</li>
                  <li>Incorporates complex bet sizing and frequencies</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strengths</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Virtually unexploitable when implemented correctly</li>
                    <li>Provides a solid baseline strategy in unknown environments</li>
                    <li>Guarantees a minimum <PokerTooltip term="equity">expected value</PokerTooltip> regardless of opponent</li>
                    <li>Eliminates psychological leaks and emotional decision-making</li>
                    <li>Highly effective against sophisticated opponents</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Weaknesses</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Extremely complex and difficult to implement perfectly</li>
                    <li>Misses exploitation opportunities against weak players</li>
                    <li>Requires significant study and computational resources</li>
                    <li>May be unnecessarily complex in many common situations</li>
                    <li>Can lead to "auto-pilot" play without adapting to table dynamics</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">GTO Tools &amp; Resources</h4>
                  <ul className="list-disc list-inside text-sm text-blue-700 space-y-1.5">
                    <li>Solvers (PioSOLVER, GTO+, SimplePostflop)</li>
                    <li>Preflop charts and ranges</li>
                    <li>Training applications</li>
                    <li>Equity calculators</li>
                    <li>Decision trees</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">GTO vs. Exploitative Play</h4>
                  <p className="text-sm text-blue-700">
                    While GTO aims to be unexploitable, exploitative play aims to maximize profit against specific opponents by countering their tendencies. The most successful players understand GTO principles but also know when to deviate to exploit opponents' weaknesses.
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Adapting Your Style */}
        <AccordionItem value="adapting" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Adapting Your Style</h2>
              <p className="text-sm text-muted-foreground mt-1">
                How to adjust your approach for different situations
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                The best poker players are adaptable and can shift styles based on game conditions, opponent tendencies, and other factors. Here are some situations that might call for adjusting your style:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">When to Play Tighter</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Against very aggressive players who re-raise frequently</li>
                    <li>When in early position at a full table</li>
                    <li>When playing at higher stakes than usual</li>
                    <li>When several loose-aggressive players are at the table</li>
                    <li>In tournaments near the <PokerTooltip term="bubble">bubble</PokerTooltip> or pay jumps</li>
                    <li>When you're on a downswing or feeling <PokerTooltip term="tilt">tilted</PokerTooltip></li>
                  </ul>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">When to Play Looser</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Against very tight players who fold too often</li>
                    <li>When in late position with weak players in the blinds</li>
                    <li>In tournaments with escalating blinds when your stack is getting short</li>
                    <li>When you have a strong table image after playing tight</li>
                    <li>In shorthanded games (6 or fewer players)</li>
                    <li>When most opponents are playing tight-passive</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">When to Play More Aggressively</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Against players who fold too often to <PokerTooltip term="continuation bet">continuation bets</PokerTooltip></li>
                    <li>When you're in position against passive players</li>
                    <li>When you have <PokerTooltip term="fold equity">fold equity</PokerTooltip> (opponents likely to fold)</li>
                    <li>In tournaments when blinds are high relative to stacks</li>
                    <li>When you have identified weak-tight opponents</li>
                    <li>With a premium hand against loose-passive players</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">When to Play More Passively</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>With drawing hands that have good <PokerTooltip term="implied odds">implied odds</PokerTooltip></li>
                    <li>Against opponents who don't fold and call too much</li>
                    <li>When you're out of position with marginal hands</li>
                    <li>Against opponents who frequently re-raise or check-raise</li>
                    <li>When playing a deceptively strong hand</li>
                    <li>In multiway pots with uncertain dynamics</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mt-4">
                <h3 className="font-semibold text-blue-800 mb-2">Finding Your Style</h3>
                <p className="text-sm text-blue-700">
                  Most professional players recommend beginning with a tight-aggressive approach to develop solid fundamentals. As you gain experience, you can incorporate elements of other styles to create a balanced, adaptable strategy. The best style is one that is flexible and responsive to game conditions while maintaining a solid foundation of fundamentally sound poker.
                </p>
                <p className="text-sm text-blue-700 mt-2">
                  Remember that your playing style should be a strategic choice, not just a reflection of your personality. Many naturally risk-averse people can learn to play a calculated loose-aggressive style when the situation calls for it, while naturally aggressive people can learn patience and discipline.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}