import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PokerTooltip from "@/components/PokerTooltip";

export default function BettingStructures() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="gradient-heading">Betting Structures</h1>
      
      <Card className="mb-6">
        <CardHeader className="card-header">
          <CardTitle>Betting Formats in Texas Hold'em</CardTitle>
          <CardDescription>
            Understanding the different betting structures and their strategic implications
          </CardDescription>
        </CardHeader>
        <CardContent className="prose card-content">
          <p>
            The betting structure in Texas Hold'em determines how much players can bet and raise during each betting round. Different structures create dramatically different strategic environments and gameplay experiences.
          </p>
        </CardContent>
      </Card>
      
      {/* Accordion for Betting Structures Sections */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* No-Limit Hold'em */}
        <AccordionItem value="no-limit" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left flex items-center justify-between w-full pr-4">
              <div>
                <h2 className="text-xl font-semibold">No-Limit Hold'em</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Players can bet any amount, up to all their chips
                </p>
              </div>
              <Badge className="bg-amber-600">Most Popular</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Rules</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Minimum bet is the size of the <PokerTooltip term="BB">big blind</PokerTooltip></li>
                  <li>Minimum raise must equal or exceed the previous bet or raise</li>
                  <li>There is no maximum bet - players can go "<PokerTooltip term="all-in">all-in</PokerTooltip>" at any time</li>
                  <li>Raises are uncapped - players can re-raise as many times as they wish</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strategic Elements</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Highest potential for big pots and dramatic swings</li>
                    <li>Strongest emphasis on <PokerTooltip term="post-flop">post-flop</PokerTooltip> play</li>
                    <li>Protection bets are crucial to guard against draws</li>
                    <li>Bet sizing skill is critical - too small or too large can be exploitable</li>
                    <li>All-in plays can be leveraged both as value bets and bluffs</li>
                    <li>Stack-to-pot ratios greatly influence decision-making</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg">
                <h4 className="font-medium text-amber-800 mb-1">Example Scenario</h4>
                <p className="text-sm text-amber-700">
                  In a $1/$2 no-limit game with $200 effective stacks, a player might open-raise to $8 pre-flop, face a re-raise to $25, and then decide to re-raise all-in for their entire $200 stack with a premium hand like AA or KK, forcing their opponent to make a difficult decision for all their chips.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Pot-Limit Hold'em */}
        <AccordionItem value="pot-limit" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Pot-Limit Hold'em</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Maximum bet or raise equals the size of the pot
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Rules</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Minimum bet is the size of the big blind</li>
                  <li>Maximum bet or raise is the current size of the pot</li>
                  <li>Pot size calculation includes: all bets on the table + all previous calls + the amount you would call before raising</li>
                  <li>Raises are uncapped, but each is limited to the pot size</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strategic Elements</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>More controlled betting environment than no-limit</li>
                    <li>Higher emphasis on hand values and odds</li>
                    <li>Drawing hands have better <PokerTooltip term="implied odds">implied odds</PokerTooltip></li>
                    <li>Pot-building occurs more gradually</li>
                    <li>More difficult to push opponents off of hands</li>
                    <li>Often played in Omaha rather than Hold'em</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-lg">
                <h4 className="font-medium text-indigo-800 mb-1">Example Scenario</h4>
                <p className="text-sm text-indigo-700">
                  In a $5/$10 pot-limit game, if the pot contains $50 and there is a bet of $25, the maximum raise would be to $125 total ($25 to call + $100 in the pot after calling = $125 maximum raise amount).
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Fixed-Limit Hold'em */}
        <AccordionItem value="fixed-limit" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Fixed-Limit Hold'em</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Betting is structured with fixed increments
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Rules</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Bets and raises are in fixed, predetermined increments</li>
                  <li>Typically denoted as small bet/big bet (e.g., $2/$4)</li>
                  <li><PokerTooltip term="pre-flop">Pre-flop</PokerTooltip> and flop betting uses the small bet amount</li>
                  <li>Turn and river betting uses the big bet amount (double the small bet)</li>
                  <li>Usually capped at 3 or 4 raises per betting round</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strategic Elements</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>More mathematical, less psychologically driven</li>
                    <li>Stronger emphasis on pre-flop hand selection</li>
                    <li>More hands seeing the flop - looser play</li>
                    <li>Drawing hands have better value</li>
                    <li>Bluffing is less effective</li>
                    <li>Lower <PokerTooltip term="variance">variance</PokerTooltip> compared to no-limit</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-100 p-3 rounded-lg">
                <h4 className="font-medium text-green-800 mb-1">Example Scenario</h4>
                <p className="text-sm text-green-700">
                  In a $2/$4 limit game, pre-flop and flop bets and raises are in increments of $2. On the turn and river, bets and raises increase to $4 increments. With a capped betting round, the maximum amount that can go in per player might be 4 bets (e.g., bet, raise, re-raise, cap).
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Spread-Limit Hold'em */}
        <AccordionItem value="spread-limit" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Spread-Limit Hold'em</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Bets must fall within a predetermined range
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Rules</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Players can bet any amount within a specified range</li>
                  <li>Typically denoted as a range (e.g., $2-$10 spread limit)</li>
                  <li>The minimum raise is the size of the previous bet</li>
                  <li>Maximum bet/raise is capped at the upper limit of the spread</li>
                  <li>The limit applies to each individual bet or raise</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strategic Elements</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Hybrid of fixed-limit and no-limit strategies</li>
                    <li>More flexibility in bet sizing than fixed-limit</li>
                    <li>Bet sizing can provide information about hand strength</li>
                    <li>Less intimidating for beginners than no-limit</li>
                    <li>Lower stakes and reduced variance compared to no-limit</li>
                    <li>Common in home games and smaller casinos</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-purple-50 border border-purple-100 p-3 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-1">Example Scenario</h4>
                <p className="text-sm text-purple-700">
                  In a $1-$5 spread limit game, a player can bet anywhere from $1 to $5 on any betting round. If someone bets $3, the minimum raise would be to $6 and the maximum raise would be to $8 ($3 bet + $5 maximum raise).
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Comparison of Betting Structures */}
        <AccordionItem value="comparison" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Comparison of Betting Structures</h2>
              <p className="text-sm text-muted-foreground mt-1">
                How different betting formats affect strategy and gameplay
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-200 p-2 text-left">Structure</th>
                    <th className="border border-gray-200 p-2 text-left">Skill Emphasis</th>
                    <th className="border border-gray-200 p-2 text-left">Variance</th>
                    <th className="border border-gray-200 p-2 text-left">Bluffing Effectiveness</th>
                    <th className="border border-gray-200 p-2 text-left">Popularity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-2 font-medium">No-Limit</td>
                    <td className="border border-gray-200 p-2">Post-flop play, bet sizing, psychological aspects</td>
                    <td className="border border-gray-200 p-2">Highest</td>
                    <td className="border border-gray-200 p-2">Very effective</td>
                    <td className="border border-gray-200 p-2">Extremely high (dominant format)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 p-2 font-medium">Pot-Limit</td>
                    <td className="border border-gray-200 p-2">Hand reading, calculated aggression</td>
                    <td className="border border-gray-200 p-2">High</td>
                    <td className="border border-gray-200 p-2">Moderately effective</td>
                    <td className="border border-gray-200 p-2">Moderate (more common in Omaha)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 font-medium">Fixed-Limit</td>
                    <td className="border border-gray-200 p-2">Pre-flop selection, mathematical play</td>
                    <td className="border border-gray-200 p-2">Low</td>
                    <td className="border border-gray-200 p-2">Less effective</td>
                    <td className="border border-gray-200 p-2">Declining (once dominant)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 p-2 font-medium">Spread-Limit</td>
                    <td className="border border-gray-200 p-2">Hand reading, selective aggression</td>
                    <td className="border border-gray-200 p-2">Medium-Low</td>
                    <td className="border border-gray-200 p-2">Somewhat effective</td>
                    <td className="border border-gray-200 p-2">Low (mostly home games)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 bg-blue-50 border border-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Choosing the Right Format</h3>
              <p className="text-sm text-blue-700">
                New players often find fixed-limit or spread-limit games more approachable, as they limit potential losses on a single hand. As you develop stronger post-flop skills and psychological reading abilities, no-limit hold'em offers the most strategic depth and potential for profit. Each format requires significant adjustments to optimal strategy, so it's best to focus on mastering one format rather than frequently switching between them.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}