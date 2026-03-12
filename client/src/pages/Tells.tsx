
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PokerTooltip from "@/components/PokerTooltip";

export default function Tells() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="gradient-heading">Tells: Masking and Spotting</h1>
      
      <Card className="mb-6">
        <CardHeader className="card-header">
          <CardTitle>Reading Your Opponents</CardTitle>
          <CardDescription>
            Understanding physical and behavioral tells to gain an edge at the poker table
          </CardDescription>
        </CardHeader>
        <CardContent className="prose card-content">
          <p>
            Poker tells are unconscious behaviors that reveal information about a player's hand strength or emotional state. Mastering the art of spotting tells while concealing your own is a crucial skill that separates good players from great ones. Understanding tells works alongside reading <PokerTooltip term="range">ranges</PokerTooltip> and <PokerTooltip term="table image">table image</PokerTooltip> assessment.
          </p>
        </CardContent>
      </Card>
      
      {/* Accordion for Tells Sections */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* What Are Tells */}
        <AccordionItem value="what-are-tells" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left flex items-center justify-between w-full pr-4">
              <div>
                <h2 className="text-xl font-semibold">What Are Tells?</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Understanding the fundamentals of poker tells
                </p>
              </div>
              <Badge className="bg-blue-600">Foundation</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                A tell is any physical action, change in behavior, or unconscious habit that gives other players information about your hand. Tells can be reliable indicators of strength or weakness, but they must be observed in context and over time.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Types of Tells</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li><strong>Physical tells:</strong> Body language, posture changes, facial expressions</li>
                  <li><strong>Behavioral tells:</strong> Betting patterns, timing changes, verbal cues</li>
                  <li><strong>Unconscious tells:</strong> Involuntary reactions like hand trembling or eye movements</li>
                  <li><strong>Conscious tells:</strong> Deliberate acts intended to deceive (reverse tells)</li>
                  <li><strong>Verbal tells:</strong> Changes in speech patterns, tone, or word choice</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg">
                <h4 className="font-medium text-amber-800 mb-1">Mike Caro's Fundamental Principle</h4>
                <p className="text-sm text-amber-700">
                  "Players are either acting or they aren't. If they're acting, then decide what they want you to do and disappoint them."
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Common Physical Tells */}
        <AccordionItem value="physical-tells" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Common Physical Tells</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Body language and physical behaviors that reveal hand strength
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Weakness Tells</h3>
                  <ul className="list-disc list-inside text-sm text-red-700 space-y-1.5">
                    <li>Touching face, neck, or ear when bluffing</li>
                    <li>Covering mouth or looking away after betting</li>
                    <li>Sudden stillness or frozen posture</li>
                    <li>Higher voice pitch when speaking</li>
                    <li>Breathing changes or holding breath</li>
                    <li>Fidgeting with chips or cards</li>
                    <li>Shoulder shrugs indicating uncertainty</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Strength Tells</h3>
                  <ul className="list-disc list-inside text-sm text-green-700 space-y-1.5">
                    <li>Sudden alertness and improved posture</li>
                    <li>Unconscious hand trembling from adrenaline</li>
                    <li>Covering mouth to hide a smile</li>
                    <li>Pupils dilating from excitement</li>
                    <li>Protecting cards more carefully</li>
                    <li>Smooth, confident betting motions</li>
                    <li>Looking directly at opponents after betting</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-1">Observation Tip</h4>
                <p className="text-sm text-blue-700">
                  Establish each player's baseline behavior when they're not in a hand, then look for deviations from this norm when they're involved in action.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Behavioral Tells */}
        <AccordionItem value="behavioral-tells" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Behavioral Tells</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Patterns in betting, timing, and decision-making
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Timing Tells</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li><strong>Quick calls:</strong> Often indicate drawing hands or medium-strength hands</li>
                  <li><strong>Long pauses then calls:</strong> Usually suggest marginal hands or difficult decisions</li>
                  <li><strong>Instant bets:</strong> May indicate very strong hands or complete bluffs</li>
                  <li><strong>Deliberate pauses then bets:</strong> Often represent strong hands trying to appear weak</li>
                </ul>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Betting Pattern Tells</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li><strong>Sudden aggression:</strong> May indicate a strong hand or major bluff</li>
                  <li><strong>Betting size inconsistencies:</strong> Small bets with strong hands, large bets as bluffs</li>
                  <li><strong>Checking patterns:</strong> Repeated checking may show drawing hands or weakness</li>
                  <li><strong>Calling station behavior:</strong> Players who suddenly fold may have very weak hands</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-100 p-3 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-1">Mental Game Insight</h4>
                <p className="text-sm text-purple-700">
                  According to "The Mental Game of Poker," emotional leaks often manifest as tells. Players on <PokerTooltip term="tilt">tilt</PokerTooltip> may exhibit more obvious behavioral patterns.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Spotting False Tells */}
        <AccordionItem value="false-tells" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Spotting False Tells & Reverse Psychology</h2>
              <p className="text-sm text-muted-foreground mt-1">
                When opponents try to deceive with deliberate acting
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Experienced players often use reverse tells, deliberately acting weak when strong or strong when weak. Learning to identify genuine versus manufactured tells is crucial for advanced play.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Identifying False Tells</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Overly dramatic or exaggerated behaviors</li>
                  <li>Actions that seem too convenient or obvious</li>
                  <li>Tells that appear only when opponents are watching</li>
                  <li>Behaviors inconsistent with player's normal patterns</li>
                  <li>Acting that seems rehearsed or unnatural</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg">
                <h4 className="font-medium text-orange-800 mb-1">Caro's Acting Principle</h4>
                <p className="text-sm text-orange-700">
                  "Strong means weak, weak means strong" - but only when you're certain the opponent is acting. Genuine tells work in the opposite direction.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Masking Your Own Tells */}
        <AccordionItem value="masking-tells" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Masking Your Own Tells</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Developing a consistent poker face and behavior
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Consistent Behavior Strategies</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Maintain the same posture throughout the session</li>
                  <li>Use identical timing for all decisions (count to yourself)</li>
                  <li>Keep chip handling and card protection consistent</li>
                  <li>Develop a routine for betting motions</li>
                  <li>Control breathing patterns during big hands</li>
                  <li>Avoid touching your face or fidgeting</li>
                </ul>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Advanced Concealment Techniques</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Develop a "poker uniform" - same clothes, accessories, positioning</li>
                  <li>Practice controlled breathing exercises</li>
                  <li>Use chip tricks to keep hands busy and relaxed</li>
                  <li>Maintain consistent eye contact patterns</li>
                  <li>Control your voice tone and volume when speaking</li>
                  <li>Be aware of involuntary micro-expressions</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-100 p-3 rounded-lg">
                <h4 className="font-medium text-green-800 mb-1">Practice Tip</h4>
                <p className="text-sm text-green-700">
                  Record yourself playing or practice in front of a mirror to identify your own tells. Many players are unaware of their unconscious behaviors.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Online vs Live Tells */}
        <AccordionItem value="online-vs-live" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Online vs Live Tells</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Adapting tell-reading skills to different poker environments
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Live Poker Tells</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Full range of physical tells available</li>
                  <li>Voice tone and speech patterns</li>
                  <li>Chip handling and card protection</li>
                  <li>Posture and body language changes</li>
                  <li>Eye movements and facial expressions</li>
                  <li>Breathing patterns and nervous habits</li>
                </ul>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Online Poker Tells</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Timing tells become primary source</li>
                  <li>Bet sizing patterns more important</li>
                  <li>Auto-actions (auto-fold, auto-check) reveal intentions</li>
                  <li>Chat box behavior and timing</li>
                  <li>Connection issues vs genuine thinking time</li>
                  <li>Statistics and HUD data as behavioral tells</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg mt-6">
              <h3 className="font-semibold text-indigo-800 mb-2">Adaptation Strategy</h3>
              <p className="text-sm text-indigo-700">
                Successful players develop different tell-reading skills for live and online play. Live players must learn timing tells for online success, while online players need to develop observational skills for live games.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
