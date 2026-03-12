import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PokerTooltip from "@/components/PokerTooltip";

export default function BasicStrategy() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="gradient-heading">Basic Strategy</h1>
      
      <Card className="mb-6">
        <CardHeader className="card-header">
          <CardTitle>Fundamental Poker Strategy</CardTitle>
          <CardDescription>
            Core concepts every Texas Hold'em player should understand
          </CardDescription>
        </CardHeader>
        <CardContent className="prose card-content">
         <CardContent className="prose card-content">
  <p>
    While poker strategy can become extremely complex, mastering the fundamentals will help you build a solid foundation. These core concepts form the basis of profitable play, regardless of the specific style or approach you eventually develop.
  </p>
  <p>
    Something to remember is that a professional poker player does not approach poker as a form of gambling. Rather, a good poker player thinks about math, fundamentals, and discipline. Math is about the cards, odds, and equity. Fundamentals is learning and memorizing many details about poker itself. Discipline is making a plan and trying to stick to it as much as possible. The last comment seems fungible because it is; think about this famous quote by General Eisenhower 
    </p>
      <p>
        'Plans are useless, but planning is indispensable'.
  </p>
</CardContent>
        </CardContent>
      </Card>
      
      {/* Accordion for Basic Strategy Sections */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* Position */}
        <AccordionItem value="position" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left flex items-center justify-between w-full pr-4">
              <div>
                <h2 className="text-xl font-semibold">Position</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  The most powerful strategic advantage in poker
                </p>
              </div>
              <Badge className="bg-indigo-600">Most Important Concept</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Position refers to when you act relative to other players. Acting last provides a significant information advantage, allowing you to make more informed decisions. Players in <PokerTooltip term="blinds">blinds</PokerTooltip> are at a positional disadvantage, while the button has the strongest position advantage.
              </p>
              
              <p className="text-blue-600 text-sm italic">
                <a href="/table-position" className="underline hover:text-blue-800">See our Table Position page</a> for a detailed explanation of each position and its strategic implications.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Position Principles</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Play tighter in early positions, looser in late positions</li>
                  <li>Value strong drawing hands more in position</li>
                  <li>Continuation bet more frequently when in position</li>
                  <li>Be more willing to call raises when in position</li>
                  <li>Use position to control pot size</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-lg">
                <h4 className="font-medium text-indigo-800 mb-1">Example</h4>
                <p className="text-sm text-indigo-700">
                  With A♠J♠ in early position, you might fold facing a raise. With the same hand on the button (late position), you could call or even re-raise, knowing you'll have the advantage of acting last on all subsequent betting rounds.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Starting Hand Selection */}
        <AccordionItem value="starting-hands" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Starting Hand Selection</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Choose your battles wisely pre-flop
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                The hands you choose to play pre-flop have a major impact on your overall profitability. Quality starting hands lead to easier post-flop decisions and fewer marginal situations.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Selection Principles</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Premium pairs (<PokerTooltip term="AA">AA</PokerTooltip>, <PokerTooltip term="KK">KK</PokerTooltip>, <PokerTooltip term="QQ">QQ</PokerTooltip>, <PokerTooltip term="JJ">JJ</PokerTooltip>) are playable from any position</li>
                  <li>High cards (<PokerTooltip term="AK">AK</PokerTooltip>, <PokerTooltip term="AQ">AQ</PokerTooltip>, <PokerTooltip term="AJ">AJ</PokerTooltip>, <PokerTooltip term="KQ">KQ</PokerTooltip>) gain value when suited</li>
                  <li>Connected cards (<PokerTooltip term="87s">87s</PokerTooltip>, <PokerTooltip term="65s">65s</PokerTooltip>) work best in late position</li>
                  <li>Small pairs (<PokerTooltip term="22">22</PokerTooltip>-55) are best played for set mining</li>
                  <li>Adjust hand selection based on position and table dynamics</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-100 p-3 rounded-lg">
                <h4 className="font-medium text-red-800 mb-1">Rule of Thumb</h4>
                <p className="text-sm text-red-700">
                  If you're not sure whether to play a hand, especially in early position, it's usually better to fold. "If it's close, let it go" is a good principle for beginners to avoid tough spots.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Pot Odds & Expected Value */}
        <AccordionItem value="pot-odds" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Pot Odds & Expected Value</h2>
              <p className="text-sm text-muted-foreground mt-1">
                The mathematics of profitable decisions
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Poker is fundamentally a mathematical game. Understanding <PokerTooltip term="pot odds">pot odds</PokerTooltip> (the ratio of the current pot size to the cost of a call) helps you make profitable decisions with drawing hands.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Concepts</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Pot odds: The ratio of the current pot size to the cost of your call</li>
                  <li><PokerTooltip term="equity">Equity</PokerTooltip>: Your probability of winning the hand</li>
                  <li>Expected value (<PokerTooltip term="EV">EV</PokerTooltip>): The average long-term result of a decision</li>
                  <li>Break-even percentage: The minimum equity needed to call profitably</li>
                  <li><PokerTooltip term="implied odds">Implied odds</PokerTooltip>: Future bets you'll win if you hit your draw</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg">
                <h4 className="font-medium text-amber-800 mb-1">Calculation Example</h4>
                <p className="text-sm text-amber-700">
                  If the pot is $100 and your opponent bets $50 (making the pot $150), you need to call $50 to continue. Your pot odds are 150:50 or 3:1. This means you need at least 25% equity (1/4) to make a profitable call. With a <PokerTooltip term="flush draw">flush draw</PokerTooltip> (approx. 35% equity), calling would be mathematically correct.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Aggression */}
        <AccordionItem value="aggression" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Aggression</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Being proactive rather than reactive
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Aggressive play (betting and raising) is generally more profitable than passive play (checking and calling). Aggression gives you two ways to win: by having the best hand or by making your opponent fold.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Aggressive Tactics</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li><PokerTooltip term="continuation betting">Continuation betting</PokerTooltip>: Betting the flop after raising pre-flop</li>
                  <li><PokerTooltip term="semi-bluff">Semi-bluffing</PokerTooltip>: Betting with drawing hands that have potential to improve</li>
                  <li><PokerTooltip term="3-betting">3-betting</PokerTooltip>: Re-raising an initial raiser pre-flop</li>
                  <li><PokerTooltip term="value betting">Value betting</PokerTooltip>: Betting for value with strong hands</li>
                  <li>Bluffing: Betting with weak hands to make better hands fold</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-100 p-3 rounded-lg">
                <h4 className="font-medium text-green-800 mb-1">Balance</h4>
                <p className="text-sm text-green-700">
                  While aggression is important, it must be balanced and thoughtful. Random aggression without a plan is just as unprofitable as being too passive. The best players are selectively aggressive in appropriate situations.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Hand Reading */}
        <AccordionItem value="hand-reading" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Hand Reading</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Narrowing down your opponent's range of cards
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Hand reading is the process of deducing what cards your opponent might have based on their actions. Instead of putting an opponent on a specific hand, think about their <PokerTooltip term="range">range</PokerTooltip> of possible hands.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Hand Reading Process</h3>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Start with a player's pre-flop range based on position and action</li>
                  <li>Narrow the range based on their action on each street</li>
                  <li>Consider how they would play different hand strengths</li>
                  <li>Eliminate hands that don't make sense given the board and action</li>
                  <li>Make decisions based on the likely distribution of their range</li>
                </ol>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Table Dynamics */}
        <AccordionItem value="table-dynamics" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Table Dynamics</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Adapting to the specific game environment
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Every poker table has its own unique dynamics. Recognizing and adapting to these dynamics is crucial for maximizing profit in different environments.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Table Assessment</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Identify tight vs. loose players</li>
                  <li>Spot the aggressive vs. passive tendencies</li>
                  <li>Look for recreational players who make fundamental errors</li>
                  <li>Assess stack sizes and how they affect play</li>
                  <li>Note player relationships and history that might affect decisions</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Variance */}
        <AccordionItem value="variance" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Variance - The Downswings and Upswings</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Understanding the natural ups and downs of poker
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <PokerTooltip term="variance">Variance</PokerTooltip> is the statistical measure of how much your results deviate from the expected value. In poker, even skilled players experience significant swings in their results due to the inherent randomness of card distribution. Understanding and preparing for variance is crucial for maintaining both your <PokerTooltip term="bankroll">bankroll</PokerTooltip> and mental game.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">What Causes Variance?</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Card distribution is random - even AA loses to 72 occasionally</li>
                  <li>Short-term luck can override skill advantages</li>
                  <li><PokerTooltip term="bad beats">Bad beats</PokerTooltip> and <PokerTooltip term="coolers">coolers</PokerTooltip> are mathematically inevitable</li>
                  <li>Opponents hitting unlikely draws or making lucky calls</li>
                  <li>Running into stronger hands when you have a strong hand</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-100 p-3 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-1">Downswings</h4>
                  <p className="text-sm text-red-700 mb-2">
                    Periods where you consistently lose money despite making correct decisions.
                  </p>
                  <ul className="list-disc list-inside text-xs text-red-600 space-y-1">
                    <li>Can last hundreds or thousands of hands</li>
                    <li>Often involve multiple bad beats in succession</li>
                    <li>Test your mental fortitude and bankroll management</li>
                    <li>May cause <PokerTooltip term="tilt">tilt</PokerTooltip> and lead to poor decision-making</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-100 p-3 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-1">Upswings</h4>
                  <p className="text-sm text-green-700 mb-2">
                    Periods where you win more than expected, often due to favorable card distribution.
                  </p>
                  <ul className="list-disc list-inside text-xs text-green-600 space-y-1">
                    <li>Can create false confidence in your abilities</li>
                    <li>May lead to playing at higher stakes prematurely</li>
                    <li>Important to remain disciplined during hot streaks</li>
                    <li>Use these periods to build your bankroll</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Managing Variance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-1">Bankroll Management</h4>
                    <ul className="list-disc list-inside text-xs text-blue-600 space-y-1">
                      <li>Maintain 20-30 <PokerTooltip term="buy-ins">buy-ins</PokerTooltip> for your stake level</li>
                      <li>Move down in stakes during prolonged downswings</li>
                      <li>Never play with money you can't afford to lose</li>
                      <li>Consider variance when planning your poker career</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-1">Mental Approach</h4>
                    <ul className="list-disc list-inside text-xs text-blue-600 space-y-1">
                      <li>Focus on decision quality, not results</li>
                      <li>Keep detailed records to see long-term trends</li>
                      <li>Take breaks during emotional swings</li>
                      <li>Remember that variance affects all players</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg">
                <h4 className="font-medium text-amber-800 mb-1">Reality Check</h4>
                <p className="text-sm text-amber-700">
                  Even the world's best players experience significant downswings. A winning player might lose money over 10,000+ hands due to variance alone. What separates professionals from amateurs is the ability to maintain proper bankroll management, emotional control, and decision-making quality throughout these inevitable swings.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Game Selection & Mental Approach */}
        <AccordionItem value="game-selection" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Game Selection & Mental Approach</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Non-technical factors that impact your results
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Game Selection</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  One of the most important decisions in poker happens before you sit down. Choosing the right game has a massive impact on your win rate.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Look for games with at least a few recreational players</li>
                  <li>Choose stakes appropriate for your <PokerTooltip term="bankroll">bankroll</PokerTooltip> (typically 20-30 buy-ins)</li>
                  <li>Consider your skill advantage relative to the table</li>
                  <li>Avoid games filled with regulars/professionals</li>
                  <li>Be willing to change tables if the game dynamics are unfavorable</li>
                </ul>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Mental Game</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Poker is mentally demanding. Managing your emotions and maintaining focus is essential for long-term success.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Avoid playing when tired, emotional, or intoxicated</li>
                  <li>Accept variance as part of the game</li>
                  <li>Focus on making good decisions, not results</li>
                  <li>Take breaks during long sessions to maintain focus</li>
                  <li>Practice bankroll management to reduce stress</li>
                  <li>Develop a routine for reviewing your play and improving</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mt-6">
              <h3 className="font-semibold text-blue-800 mb-2">The Learning Process</h3>
              <p className="text-sm text-blue-700">
                Poker strategy is deep and constantly evolving. The best players are those who commit to continuous learning and honest self-assessment. Keep detailed records of your play, review difficult hands, discuss strategy with other players, and study resources from respected coaches. Remember that results in the short term can be heavily influenced by luck, but in the long run, skill will prevail.
              </p>
              <p className="text-sm text-blue-700 mt-2">
                Above all, focus on the process of making good decisions rather than the results of individual hands. This mindset will serve you well not just in poker, but in many aspects of life.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-3 text-center">Poker Etiquette</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-muted p-3 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Act in Turn</h4>
                  <p className="text-xs text-muted-foreground">
                    Always wait for your turn to make decisions. Acting out of turn gives away information and disrupts the game.
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Pay Attention</h4>
                  <p className="text-xs text-muted-foreground">
                    Stay focused on the game, even when not in a hand. Avoid using your phone excessively at the table.
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Be Respectful</h4>
                  <p className="text-xs text-muted-foreground">
                    Don't criticize other players' play, make rude comments, or create a hostile environment.
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">No String Betting</h4>
                  <p className="text-xs text-muted-foreground">
                    Announce your action or place chips in one motion. Don't incrementally add chips to see reactions.
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Protect Your Cards</h4>
                  <p className="text-xs text-muted-foreground">
                    Always protect your cards with a chip or other object to avoid them being accidentally mucked.
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">No Slowrolling</h4>
                  <p className="text-xs text-muted-foreground">
                    When you have the best hand at showdown, reveal it promptly rather than delaying to create drama.
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