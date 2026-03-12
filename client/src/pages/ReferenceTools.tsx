
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PokerTooltip from "@/components/PokerTooltip";

export default function ReferenceTools() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="gradient-heading">Reference Tools</h1>
      
      <Card className="mb-6">
        <CardHeader className="card-header">
          <CardTitle>Learning Resources & Tools</CardTitle>
          <CardDescription>
            Essential books, websites, software, and tools for poker study and improvement
          </CardDescription>
        </CardHeader>
        <CardContent className="prose card-content">
          <p>
            Continuous learning is essential for poker success. These carefully selected resources represent the best tools available for studying and mastering various aspects of the game.
          </p>
        </CardContent>
      </Card>
      
      {/* Accordion for Reference Tools Sections */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* Essential Books */}
        <AccordionItem value="essential-books" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left flex items-center justify-between w-full pr-4">
              <div>
                <h2 className="text-xl font-semibold">Essential Books</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Classic and modern poker literature for serious students
                </p>
              </div>
              <Badge className="bg-blue-600">Foundation</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Fundamental Strategy</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">Hold'em Poker for Advanced Players</h4>
                      <p className="text-xs text-blue-700">by David Sklansky & Mason Malmuth</p>
                      <p className="text-xs text-muted-foreground mt-1">Classic text on limit hold'em theory and strategy</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">The Theory of Poker</h4>
                      <p className="text-xs text-blue-700">by David Sklansky</p>
                      <p className="text-xs text-muted-foreground mt-1">Fundamental theorem and mathematical principles</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Professional No-Limit Hold'em</h4>
                      <p className="text-xs text-blue-700">by Ed Miller, Matt Flynn & Sunny Mehta</p>
                      <p className="text-xs text-muted-foreground mt-1">Comprehensive guide to no-limit cash games</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Tournament Strategy</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">Harrington on Hold'em</h4>
                      <p className="text-xs text-green-700">by Dan Harrington (3-volume series)</p>
                      <p className="text-xs text-muted-foreground mt-1">Definitive tournament strategy guide</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Kill Everyone</h4>
                      <p className="text-xs text-green-700">by Lee Nelson, Tysen Streib & Steven Heston</p>
                      <p className="text-xs text-muted-foreground mt-1">Advanced tournament tactics and push/fold strategy</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">The Mathematics of Poker</h4>
                      <p className="text-xs text-green-700">by Bill Chen & Jerrod Ankenman</p>
                      <p className="text-xs text-muted-foreground mt-1">Game theory and mathematical analysis</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-3">Psychology & Mental Game</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">The Mental Game of Poker</h4>
                      <p className="text-xs text-purple-700">by Jared Tendler</p>
                      <p className="text-xs text-muted-foreground mt-1"><PokerTooltip term="tilt">Tilt</PokerTooltip> control and psychological optimization</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Mike Caro's Book of Poker Tells</h4>
                      <p className="text-xs text-purple-700">by Mike Caro</p>
                      <p className="text-xs text-muted-foreground mt-1">Classic guide to reading physical tells</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Elements of Poker</h4>
                      <p className="text-xs text-purple-700">by Tommy Angelo</p>
                      <p className="text-xs text-muted-foreground mt-1">Mindfulness and emotional control in poker</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-3">Modern Strategy</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">Applications of No-Limit Hold'em</h4>
                      <p className="text-xs text-orange-700">by Matthew Janda</p>
                      <p className="text-xs text-muted-foreground mt-1">Game theory optimal (<PokerTooltip term="GTO">GTO</PokerTooltip>) strategy</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Modern Poker Theory</h4>
                      <p className="text-xs text-orange-700">by Michael Acevedo</p>
                      <p className="text-xs text-muted-foreground mt-1">Comprehensive GTO approach</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Poker's 1%</h4>
                      <p className="text-xs text-orange-700">by Ed Miller</p>
                      <p className="text-xs text-muted-foreground mt-1">High-level cash game strategy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Training Software */}
        <AccordionItem value="training-software" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Training Software & Solvers</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Advanced tools for studying optimal play
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-3">GTO Solvers</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">PioSOLVER</h4>
                      <p className="text-xs text-muted-foreground mt-1">Industry-standard solver for deep strategy analysis</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">GTO+</h4>
                      <p className="text-xs text-muted-foreground mt-1">User-friendly solver with built-in preflop solutions</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">MonkerSolver</h4>
                      <p className="text-xs text-muted-foreground mt-1">Advanced solver supporting complex game trees</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Training Platforms</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">GTOBase</h4>
                      <p className="text-xs text-muted-foreground mt-1">Preflop solutions and range analysis</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">PokerCoaching.com</h4>
                      <p className="text-xs text-muted-foreground mt-1">Comprehensive training with Jonathan Little</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Upswing Poker Lab</h4>
                      <p className="text-xs text-muted-foreground mt-1">Course-based learning platform</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg">
                <h4 className="font-medium text-amber-800 mb-1">Learning Path</h4>
                <p className="text-sm text-amber-700">
                  Start with training sites to learn fundamentals, then progress to solver work for advanced analysis. GTO solvers require significant time investment to master effectively.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Tracking Software */}
        <AccordionItem value="tracking-software" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Tracking & Analysis Software</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Tools for tracking results and analyzing play
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Online Poker Tools</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">PokerTracker 4</h4>
                      <p className="text-xs text-muted-foreground mt-1">Comprehensive HUD and database for online play</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Hold'em Manager 3</h4>
                      <p className="text-xs text-muted-foreground mt-1">Advanced statistics and hand analysis</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">DriveHUD</h4>
                      <p className="text-xs text-muted-foreground mt-1">User-friendly HUD with solid reporting</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-3">Live Game Tracking</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">Poker Income Bankroll Tracker</h4>
                      <p className="text-xs text-muted-foreground mt-1">Mobile app for live session tracking</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">PokerBankrollTracker</h4>
                      <p className="text-xs text-muted-foreground mt-1">Detailed statistics and session analysis</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">RunGood</h4>
                      <p className="text-xs text-muted-foreground mt-1">Social tracking with leaderboards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Websites & Forums */}
        <AccordionItem value="websites-forums" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Websites & Forums</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Online communities and information resources
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-800 mb-3">Strategy Forums</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">Two Plus Two Forums</h4>
                      <p className="text-xs text-muted-foreground mt-1">Historic poker strategy community</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">CardsChat</h4>
                      <p className="text-xs text-muted-foreground mt-1">Beginner-friendly community and strategy</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Reddit r/poker</h4>
                      <p className="text-xs text-muted-foreground mt-1">Active community for all skill levels</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 border border-teal-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-800 mb-3">News & Content</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">PokerNews</h4>
                      <p className="text-xs text-muted-foreground mt-1">Industry news and tournament coverage</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">PocketFives</h4>
                      <p className="text-xs text-muted-foreground mt-1">Online tournament rankings and news</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Hendon Mob</h4>
                      <p className="text-xs text-muted-foreground mt-1">Live tournament database and rankings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Magazines & Podcasts */}
        <AccordionItem value="magazines-podcasts" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Magazines & Podcasts</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Ongoing education through media content
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-pink-50 border border-pink-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-800 mb-3">Print & Digital Magazines</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">Card Player Magazine</h4>
                      <p className="text-xs text-muted-foreground mt-1">Long-running poker strategy publication</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">All In Magazine</h4>
                      <p className="text-xs text-muted-foreground mt-1">European poker magazine with strategy content</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Bluff Magazine (Archive)</h4>
                      <p className="text-xs text-muted-foreground mt-1">Historical poker magazine with valuable back issues</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-cyan-50 border border-cyan-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-800 mb-3">Podcasts</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">The Poker Guys</h4>
                      <p className="text-xs text-muted-foreground mt-1">Strategy discussion and hand analysis</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Red Chip Poker</h4>
                      <p className="text-xs text-muted-foreground mt-1">Educational content for improving players</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">The Thinking Poker Diaries</h4>
                      <p className="text-xs text-muted-foreground mt-1">Andrew Brokos discusses strategy concepts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Calculator Tools */}
        <AccordionItem value="calculator-tools" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Calculator & Analysis Tools</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Odds calculators and range analysis utilities
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-3">Equity Calculators</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">PokerStove</h4>
                      <p className="text-xs text-muted-foreground mt-1">Classic equity calculator for hand vs range analysis</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Equilab</h4>
                      <p className="text-xs text-muted-foreground mt-1">Advanced range analysis and equity calculation</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Flopzilla</h4>
                      <p className="text-xs text-muted-foreground mt-1">Board texture and range interaction analysis</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-emerald-800 mb-3">Specialized Tools</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">ICMIZER</h4>
                      <p className="text-xs text-muted-foreground mt-1">Tournament ICM and push/fold calculations</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">SnapShove</h4>
                      <p className="text-xs text-muted-foreground mt-1">Mobile push/fold chart reference</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm">Tournament Shark</h4>
                      <p className="text-xs text-muted-foreground mt-1">Tournament equity and payout calculations</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg">
                <h4 className="font-medium text-slate-800 mb-1">Integration Tip</h4>
                <p className="text-sm text-slate-700">
                  Use these tools during study sessions, not while playing. Developing intuitive understanding of <PokerTooltip term="equity">equity</PokerTooltip> and <PokerTooltip term="range">ranges</PokerTooltip> is more valuable than memorizing specific calculations.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Study Plan */}
        <AccordionItem value="study-plan" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Recommended Study Plan</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Structured approach to poker education
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Beginner Path</h3>
                  <ol className="list-decimal list-inside text-xs text-blue-700 space-y-1">
                    <li>Learn basic rules and hand rankings</li>
                    <li>Read "The Theory of Poker"</li>
                    <li>Start tracking sessions</li>
                    <li>Join CardsChat forum</li>
                    <li>Use basic equity calculators</li>
                    <li>Play low stakes consistently</li>
                  </ol>
                </div>
                
                <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">Intermediate Path</h3>
                  <ol className="list-decimal list-inside text-xs text-amber-700 space-y-1">
                    <li>Read position-specific strategy books</li>
                    <li>Learn HUD usage and stats</li>
                    <li>Study "The Mental Game of Poker"</li>
                    <li>Practice range analysis</li>
                    <li>Review sessions regularly</li>
                    <li>Discuss hands in forums</li>
                  </ol>
                </div>
                
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Advanced Path</h3>
                  <ol className="list-decimal list-inside text-xs text-red-700 space-y-1">
                    <li>Learn GTO solver basics</li>
                    <li>Study exploitative adjustments</li>
                    <li>Advanced psychology concepts</li>
                    <li>Specialized format training</li>
                    <li>Regular coaching sessions</li>
                    <li>Continuous game evolution</li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Universal Principles</h3>
                <ul className="list-disc list-inside text-sm text-green-700 space-y-1.5">
                  <li><strong>Consistency:</strong> Study regularly, even if just 15-30 minutes daily</li>
                  <li><strong>Balance:</strong> Mix theoretical study with practical application</li>
                  <li><strong>Review:</strong> Analyze your own play more than studying theory</li>
                  <li><strong>Community:</strong> Engage with other serious players for discussion</li>
                  <li><strong>Adaptation:</strong> Stay current with evolving strategies and tools</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
