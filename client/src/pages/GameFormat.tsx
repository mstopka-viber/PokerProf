import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PokerTooltip from "@/components/PokerTooltip";

export default function GameFormat() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="gradient-heading">Game & Format</h1>
      
      <Card className="mb-6">
        <CardHeader className="card-header">
          <CardTitle>Game & Format Settings</CardTitle>
          <CardDescription>
            Texas Hold'em can be played in various formats across different environments
          </CardDescription>
        </CardHeader>
        <CardContent className="prose card-content">
          <p>
            Each format has its own unique characteristics and strategic considerations that can dramatically change how the game is played. Understanding these different formats is key to adapting your strategy appropriately.
          </p>
        </CardContent>
      </Card>
      
      {/* Accordion for Game & Format Sections */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* Cash Games */}
        <AccordionItem value="cash-games" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Cash Games</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Real money play with fixed blind levels
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Players buy in for real money chips that represent actual cash value. Players can leave at any time, and <PokerTooltip term="blinds">blinds</PokerTooltip> remain fixed. Common in both home games and casinos.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">No Time Limit</Badge>
                <Badge variant="outline">Fixed Blinds</Badge>
                <Badge variant="outline">Cash Value Chips</Badge>
                <Badge variant="outline">Come and Go Freely</Badge>
              </div>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Strategic Considerations</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Stack preservation is important - losing your stack means real money lost</li>
                  <li>Can rebuy chips at any time if you lose your stack</li>
                  <li>More emphasis on playing small edges over time</li>
                  <li>Blinds never increase, so no pressure to play marginal hands</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Tournaments */}
        <AccordionItem value="tournaments" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Tournaments</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Fixed buy-in with increasing blind levels
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Players <PokerTooltip term="buy-in">buy in</PokerTooltip> for a fixed amount and receive tournament chips with no cash value. Blinds increase at set intervals, and players compete until one person has all the chips.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">Elimination Format</Badge>
                <Badge variant="outline">Increasing Blinds</Badge>
                <Badge variant="outline">Prize Pool Structure</Badge>
                <Badge variant="outline">Survival Focus</Badge>
              </div>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Strategic Considerations</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Stack preservation becomes more critical in later stages</li>
                  <li>Increased pressure as blinds rise relative to stack sizes</li>
                  <li>ICM (Independent Chip Model) considerations near prize <PokerTooltip term="bubble">bubbles</PokerTooltip></li>
                  <li>Cannot rebuy once eliminated (except in rebuy tournaments)</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Home Games */}
        <AccordionItem value="home-games" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Home Games</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Friendly games with flexible rules
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Friendly games played among friends with flexible rules and often customized house rules for a more social experience.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">Flexible Rules</Badge>
                <Badge variant="outline">Social Focus</Badge>
                <Badge variant="outline">House Rules</Badge>
              </div>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Common House Rules</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Multiple wild cards</li>
                  <li>Running it twice on big pots</li>
                  <li>Bomb pots (everyone puts in extra money and sees a <PokerTooltip term="flop">flop</PokerTooltip>)</li>
                  <li>Mixed game formats with rotation of poker variants</li>
                  <li>Dealer's choice of game variant</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Professional Play */}
        <AccordionItem value="professional-play" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Professional Play</h2>
              <p className="text-sm text-muted-foreground mt-1">
                High-stakes games with standardized rules
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Strictly regulated games played in casinos, poker rooms, and televised events with standard rules and often high stakes.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">Standard Rules</Badge>
                <Badge variant="outline">Higher Stakes</Badge>
                <Badge variant="outline">Professional Focus</Badge>
              </div>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Common Formats</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>World Series of Poker (WSOP) events</li>
                  <li>World Poker Tour (WPT) tournaments</li>
                  <li>High-stakes cash games</li>
                  <li>Online poker tournaments with large guarantees</li>
                  <li>Poker TV shows with specialized formats</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Special Tournament Formats */}
        <AccordionItem value="special-tournaments" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Special Tournament Formats</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Variations on the standard tournament structure
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Sit & Go</h4>
                <p className="text-sm text-muted-foreground">
                  Single-table tournaments that start as soon as enough players register. Usually between 6-10 players with a fixed prize structure.
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Multi-Table Tournaments (MTTs)</h4>
                <p className="text-sm text-muted-foreground">
                  Large tournaments with hundreds or thousands of players across many tables. Players are redistributed as others are eliminated.
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Satellites</h4>
                <p className="text-sm text-muted-foreground">
                  Tournaments where prizes are entries to larger, more expensive tournaments rather than cash.
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Bounty/Knockout</h4>
                <p className="text-sm text-muted-foreground">
                  Players earn a cash bounty for each opponent they eliminate, in addition to the regular prize pool.
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Turbo/Hyper-Turbo</h4>
                <p className="text-sm text-muted-foreground">
                  Faster-paced tournaments with shorter blind levels, creating more action and faster completion.
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Freezeout</h4>
                <p className="text-sm text-muted-foreground">
                  Traditional tournament where players cannot rebuy after being eliminated.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Tournament Strategy Concepts */}
        <AccordionItem value="tournament-strategy" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Tournament Strategy Concepts</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Advanced mathematical models for tournament decision-making
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-5">
              <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-5 mb-4">
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">Independent Chip Model (ICM)</h3>
                <p className="text-gray-700 mb-3">
                  ICM is a mathematical model used in poker tournaments to calculate the <PokerTooltip term="equity">equity</PokerTooltip> value of your chip stack in terms of real money, rather than just chip count. It's especially important near "<PokerTooltip term="bubble">bubble</PokerTooltip>" situations when payouts are about to begin or increase significantly.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-indigo-700 mb-2">Key ICM Principles</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5">
                      <li>The cash value of tournament chips is non-linear</li>
                      <li>Doubling your chips does not double your expected value</li>
                      <li>Chips you already have are worth more than chips you might win</li>
                      <li>Correct play near the bubble often means tighter play than in a cash game</li>
                      <li>Encourages survival in later tournament stages</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-indigo-700 mb-2">ICM Example</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Consider a final table with 3 players remaining in a tournament with these payouts:
                    </p>
                    <div className="grid grid-cols-2 gap-1 text-sm mb-2">
                      <div className="text-gray-600">1st place:</div>
                      <div className="font-medium">$10,000</div>
                      <div className="text-gray-600">2nd place:</div>
                      <div className="font-medium">$6,000</div>
                      <div className="text-gray-600">3rd place:</div>
                      <div className="font-medium">$4,000</div>
                    </div>
                    <p className="text-sm text-gray-600">
                      If you have 60% of the chips, your ICM equity is not 60% of the prize pool ($12,000), but rather about $8,800, as you have a higher chance of finishing 1st, but still some chance of finishing 2nd or 3rd.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-5 rounded-lg">
                  <h3 className="font-semibold mb-3">Gambler's Ruin</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Gambler's Ruin is a mathematical concept that predicts the probability of a player going broke when playing against an opponent with greater resources. It's a key concept for <PokerTooltip term="bankroll">bankroll</PokerTooltip> management in poker.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Assumes a series of even-money bets (50% win probability)</li>
                    <li>Predicts eventual bankruptcy for the player with fewer resources</li>
                    <li>Demonstrates why proper bankroll size is crucial</li>
                    <li>Applies particularly to cash games where you can continually rebuy</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-5 rounded-lg">
                  <h3 className="font-semibold mb-3">ICM vs. Gambler's Ruin</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 text-left">Factor</th>
                          <th className="px-3 py-2 text-left">ICM</th>
                          <th className="px-3 py-2 text-left">Gambler's Ruin</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-3 py-2 font-medium">Application</td>
                          <td className="px-3 py-2">Tournaments</td>
                          <td className="px-3 py-2">Cash games</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-medium">Focus</td>
                          <td className="px-3 py-2">Prize equity</td>
                          <td className="px-3 py-2">Bankruptcy risk</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-medium">Time Horizon</td>
                          <td className="px-3 py-2">Current tournament</td>
                          <td className="px-3 py-2">Long-term play</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-medium">Strategy Impact</td>
                          <td className="px-3 py-2">Tighter play near bubble</td>
                          <td className="px-3 py-2">Larger bankroll requirements</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 italic">
                Understanding these concepts is crucial for serious tournament players, as they inform correct strategic decisions that may seem counterintuitive to players familiar only with cash game strategy. In particular, the ICM model often suggests more conservative play in spots where chips at risk have a higher "real money" value than chips potentially gained.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}