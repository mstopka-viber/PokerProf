import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PokerTooltip from "@/components/PokerTooltip";

export default function PlayerCountTable() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="gradient-heading">Players & Tables</h1>
      
      <Card className="mb-6">
        <CardHeader className="card-header">
          <CardTitle>Player Configurations</CardTitle>
          <CardDescription>
            Texas Hold'em can be played with various player counts, each creating different dynamics
          </CardDescription>
        </CardHeader>
        <CardContent className="prose card-content">
          <p>
            The number of players at a poker table significantly affects game strategy, hand selection, and overall play style. Understanding how to adapt to different table sizes is crucial for success.
          </p>
        </CardContent>
      </Card>
      
      {/* Accordion for Player Count and Table Sections */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* Full Ring Games */}
        <AccordionItem value="full-ring" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left flex items-center justify-between w-full pr-4">
              <div>
                <h2 className="text-xl font-semibold">Full Ring Games</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  8-10 players at the table
                </p>
              </div>
              <Badge>Traditional Format</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Key Characteristics</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Most common format in casinos and tournaments</li>
                  <li>Slower-paced game with less hands per hour</li>
                  <li>More players to act before and after you</li>
                  <li>Generally tighter play is required</li>
                  <li>Position becomes extremely important</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strategy Adjustments</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Play fewer hands, especially from early positions</li>
                    <li>Premium hands increase in value</li>
                    <li><PokerTooltip term="suited connectors">Suited connectors</PokerTooltip> decrease in value</li>
                    <li>Bluffing is less effective with more players to call</li>
                    <li>Focus on extracting value with strong hands</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-1">Starting Hand Selection</h4>
                <p className="text-sm text-blue-700">
                  In early positions, limit yourself to premium hands (<PokerTooltip term="AA">AA</PokerTooltip>, <PokerTooltip term="KK">KK</PokerTooltip>, <PokerTooltip term="QQ">QQ</PokerTooltip>, <PokerTooltip term="AK">AK</PokerTooltip>). In middle positions, add strong hands like <PokerTooltip term="JJ">JJ</PokerTooltip>, <PokerTooltip term="TT">TT</PokerTooltip>, <PokerTooltip term="AQ">AQ</PokerTooltip>. In late positions, you can add suited connectors and more speculative hands.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Short-Handed Games */}
        <AccordionItem value="short-handed" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left flex items-center justify-between w-full pr-4">
              <div>
                <h2 className="text-xl font-semibold">Short-Handed Games</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  3-7 players at the table
                </p>
              </div>
              <Badge>Fast Action</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Key Characteristics</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>More hands per hour, accelerated action</li>
                  <li><PokerTooltip term="blinds">Blinds</PokerTooltip> hit you more frequently</li>
                  <li>Fewer players to beat</li>
                  <li>Wider range of playable hands</li>
                  <li>More aggressive gameplay</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strategy Adjustments</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Play more hands <PokerTooltip term="pre-flop">pre-flop</PokerTooltip></li>
                    <li>Greater emphasis on <PokerTooltip term="post-flop">post-flop</PokerTooltip> play</li>
                    <li>More bluffing opportunities</li>
                    <li>More aggressive <PokerTooltip term="continuation betting">continuation betting</PokerTooltip></li>
                    <li>Need to defend blinds more frequently</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-1">Starting Hand Selection</h4>
                <p className="text-sm text-blue-700">
                  You can open with a wider range of hands like suited connectors, suited one-gappers, and small pairs from most positions. Hand values change - for example, hands like A5s increase in value due to their straight and flush potential.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Heads-Up Play */}
        <AccordionItem value="heads-up" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left flex items-center justify-between w-full pr-4">
              <div>
                <h2 className="text-xl font-semibold">Heads-Up Play</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Just 2 players facing off
                </p>
              </div>
              <Badge>Highest Skill Edge</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Key Characteristics</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Most aggressive form of poker</li>
                  <li>Every hand is played from either the button or the big blind</li>
                  <li>Almost any two cards can be playable</li>
                  <li>Extreme emphasis on post-flop skills</li>
                  <li>More emphasis on player tendencies and tells</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strategy Adjustments</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                    <li>Significantly wider starting hand range</li>
                    <li>More frequent <PokerTooltip term="3-betting">3-betting</PokerTooltip> and 4-betting</li>
                    <li>More bluffing and <PokerTooltip term="semi-bluff">semi-bluffing</PokerTooltip></li>
                    <li>More aggressive blind defense</li>
                    <li>Greater focus on exploiting opponent tendencies</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-1">Button Strategy</h4>
                <p className="text-sm text-blue-700">
                  When on the button, you should be raising with 50%+ of hands. Even hands like J5o and 72s can be playable due to the positional advantage and the fact that your opponent will often fold pre-flop or miss the flop.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Table Structure */}
        <AccordionItem value="table-structure" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Table Structure</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Physical and organizational aspects
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3">Standard Table Layout</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="relative w-full h-48 bg-green-700 rounded-full mb-4 overflow-hidden border-4 border-brown-800">
                    <div className="absolute inset-4 bg-green-800 rounded-full flex items-center justify-center">
                      <div className="text-white font-medium">Dealer</div>
                    </div>
                    <div className="absolute w-full h-full">
                      {/* UTG - early position (left side) */}
                      <div className="absolute left-[8%] top-[45%] bg-red-600 text-white px-2 py-1 rounded text-xs shadow-sm">UTG</div>
                      
                      {/* UTG+1 - early position (top left) */}
                      <div className="absolute left-[20%] top-[15%] bg-red-600 text-white px-2 py-1 rounded text-xs shadow-sm">UTG+1</div>
                      
                      {/* MP - middle position (top left-center) */}
                      <div className="absolute left-[35%] top-[8%] bg-yellow-500 text-white px-2 py-1 rounded text-xs shadow-sm">MP</div>
                      
                      {/* MP+1 - middle position (top right-center) */}
                      <div className="absolute right-[35%] top-[8%] bg-yellow-500 text-white px-2 py-1 rounded text-xs shadow-sm">MP+1</div>
                      
                      {/* HJ - hijack (top right) */}
                      <div className="absolute right-[20%] top-[15%] bg-blue-500 text-white px-2 py-1 rounded text-xs shadow-sm">HJ</div>
                      
                      {/* CO - cut-off (right side) */}
                      <div className="absolute right-[8%] top-[45%] bg-green-600 text-white px-2 py-1 rounded text-xs shadow-sm">CO</div>
                      
                      {/* Button/BTN (bottom right) */}
                      <div className="absolute right-[20%] bottom-[15%] bg-green-600 text-white px-2 py-1 rounded text-xs shadow-sm">BTN</div>
                      
                      {/* Small Blind (bottom left) */}
                      <div className="absolute left-[20%] bottom-[15%] bg-purple-700 text-white px-2 py-1 rounded text-xs shadow-sm">BB</div>
                      
                      {/* Big Blind (bottom center) */}
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-[8%] bg-purple-700 text-white px-2 py-1 rounded text-xs shadow-sm">SB</div>
                      
                      {/* Dealer button icon */}
                      <div className="absolute bottom-[8%] right-[25%] -translate-x-1/2">
                        <div className="w-6 h-6 rounded-full bg-white text-black font-bold flex items-center justify-center shadow-sm border border-yellow-300">D</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Standard poker table showing key positions (simplified)
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Table Rules & Etiquette</h3>
                <div className="bg-muted p-4 rounded-lg space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Dealer Button</h4>
                    <p className="text-xs text-muted-foreground">
                      A round disc that moves clockwise around the table after each hand to indicate the theoretical dealer position.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-sm mb-1">Acting in Turn</h4>
                    <p className="text-xs text-muted-foreground">
                      Players must wait for their turn to act. Acting out of turn gives other players information and may result in penalties.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-sm mb-1">Protect Your Cards</h4>
                    <p className="text-xs text-muted-foreground">
                      Always protect your <PokerTooltip term="hole cards">hole cards</PokerTooltip> with a chip or other object to prevent them from being accidentally mucked.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-sm mb-1">Table Talk</h4>
                    <p className="text-xs text-muted-foreground">
                      Discussing your hand while action is pending is typically not allowed. Don't talk about folded cards that might affect other players' decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Online vs. Live Play Differences */}
        <AccordionItem value="online-vs-live" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Online vs. Live Play Differences</h2>
              <p className="text-sm text-muted-foreground mt-1">
                How player counts affect the gameplay experience
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Online Poker</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Much faster pace - 2-3x more hands per hour</li>
                  <li>Multi-tabling allows playing at multiple tables simultaneously</li>
                  <li>No physical tells, more focus on betting patterns</li>
                  <li>Often tighter play due to less social pressure</li>
                  <li>More aggressive play in general</li>
                  <li>More precise bet sizing available</li>
                </ul>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Live Poker</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Slower pace - 25-35 hands per hour typically</li>
                  <li>Physical tells and body language become factors</li>
                  <li>More social dynamics and table talk</li>
                  <li>Higher variance in player skill levels</li>
                  <li>Often more passive play, especially at lower stakes</li>
                  <li>More emphasis on image and reputation</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 border border-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Key Adjustments Between Formats</h3>
              <p className="text-sm text-blue-700">
                When transitioning between different player counts or from online to live play, it's important to adjust your starting hand requirements, aggression levels, and bluffing frequency. Generally, tighten up in full ring games and loosen up in short-handed games. In live play, pay more attention to physical tells and adjust to the typically more passive nature of the game.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}