
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PokerTooltip from "@/components/PokerTooltip";

export default function TableTalkImage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="gradient-heading">Table Talk and Image</h1>
      
      <Card className="mb-6">
        <CardHeader className="card-header">
          <CardTitle>Your Poker Persona</CardTitle>
          <CardDescription>
            How to present yourself at the poker table and use conversation strategically
          </CardDescription>
        </CardHeader>
        <CardContent className="prose card-content">
          <p>
            Your <PokerTooltip term="table image">table image</PokerTooltip> and communication style significantly impact how opponents perceive and play against you. Managing your persona is a powerful tool that can influence decision-making and maximize profit.
          </p>
        </CardContent>
      </Card>
      
      {/* Accordion for Table Talk and Image Sections */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* Understanding Table Image */}
        <AccordionItem value="table-image" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left flex items-center justify-between w-full pr-4">
              <div>
                <h2 className="text-xl font-semibold">Understanding Table Image</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  How opponents perceive your playing style
                </p>
              </div>
              <Badge className="bg-purple-600">Core Concept</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Your table image is the perception other players have of your playing style, personality, and skill level. This image influences how they react to your bets, calls, and raises, making it a powerful strategic tool.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Tight Image</h3>
                  <p className="text-sm text-blue-700 mb-2"><strong>Advantages:</strong></p>
                  <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                    <li>Your bets and raises get more respect</li>
                    <li>Bluffs are more likely to succeed</li>
                    <li>Opponents fold more easily to pressure</li>
                  </ul>
                  <p className="text-sm text-blue-700 mt-2 mb-1"><strong>Disadvantages:</strong></p>
                  <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                    <li>Harder to get action on strong hands</li>
                    <li>Opponents play more aggressively against you</li>
                    <li>Less profitable when you have premium hands</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Loose/Aggressive Image</h3>
                  <p className="text-sm text-red-700 mb-2"><strong>Advantages:</strong></p>
                  <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                    <li>Get more action on strong hands</li>
                    <li>Opponents call you down lighter</li>
                    <li>Can control the table dynamic</li>
                  </ul>
                  <p className="text-sm text-red-700 mt-2 mb-1"><strong>Disadvantages:</strong></p>
                  <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                    <li>Bluffs are less effective</li>
                    <li>Face more resistance to bets</li>
                    <li>Opponents play back at you more often</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg">
                <h4 className="font-medium text-amber-800 mb-1">Image Management</h4>
                <p className="text-sm text-amber-700">
                  The key is to be aware of your current image and adjust your strategy accordingly. You can also deliberately cultivate a specific image to set up future plays.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* The Art of Table Talk */}
        <AccordionItem value="table-talk-art" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">The Art of Table Talk</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Using conversation as a strategic weapon
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Table talk is a double-edged sword. While conversation can gather information and influence opponents, it can also give away valuable tells about your own hand strength and emotional state.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Strategic Uses of Table Talk</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li><strong>Information gathering:</strong> Ask questions to gauge opponent reactions</li>
                  <li><strong>Misdirection:</strong> Lead opponents to incorrect conclusions about your hand</li>
                  <li><strong>Intimidation:</strong> Create pressure through confident statements</li>
                  <li><strong>Relationship building:</strong> Make recreational players comfortable and talkative</li>
                  <li><strong>Tilt induction:</strong> Subtly frustrate opponents (ethically)</li>
                  <li><strong>Image cultivation:</strong> Present yourself as loose, tight, or unpredictable</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-100 p-3 rounded-lg">
                <h4 className="font-medium text-green-800 mb-1">Expert Level Strategy</h4>
                <p className="text-sm text-green-700">
                  Many professionals consider table talk an advanced skill that should only be used by experienced players who can control their verbal tells and read opponents accurately.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Talking Too Little */}
        <AccordionItem value="talking-too-little" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">The Silent Player: Talking Too Little</h2>
              <p className="text-sm text-muted-foreground mt-1">
                When silence becomes a disadvantage
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Characteristics of Silent Players</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Never engage in conversation</li>
                  <li>Respond only with minimal gestures</li>
                  <li>Avoid eye contact with other players</li>
                  <li>Focus exclusively on cards and chips</li>
                  <li>May appear intimidating or robotic</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Advantages</h4>
                  <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                    <li>Never give away verbal tells</li>
                    <li>Appear more mysterious and unpredictable</li>
                    <li>Maintain perfect emotional control</li>
                    <li>Avoid saying something that helps opponents</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">Disadvantages</h4>
                  <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                    <li>Miss opportunities to gather information</li>
                    <li>May make recreational players uncomfortable</li>
                    <li>Cannot use misdirection or table talk strategy</li>
                    <li>Limits ability to manage table image actively</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-purple-50 border border-purple-100 p-3 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-1">Example Scenario</h4>
                <p className="text-sm text-purple-700">
                  A completely silent player sits down at a friendly home game. While they play solid poker, the recreational players become uncomfortable and start avoiding hands with them, reducing their potential profit from weaker opponents.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Talking Too Much */}
        <AccordionItem value="talking-too-much" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">The Chatterbox: Talking Too Much</h2>
              <p className="text-sm text-muted-foreground mt-1">
                When conversation becomes self-destructive
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Characteristics of Excessive Talkers</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Constant commentary on every hand</li>
                  <li>Reveal information about their holdings or strategy</li>
                  <li>Discuss previous hands in detail</li>
                  <li>Make emotional outbursts after bad beats</li>
                  <li>Ask too many leading questions</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Common Verbal Leaks</h3>
                <ul className="list-disc list-inside text-sm text-red-700 space-y-1.5">
                  <li><strong>"I knew you had it"</strong> - Reveals they folded a decent hand</li>
                  <li><strong>"I would have won"</strong> - Shows they folded before the <PokerTooltip term="flop">flop</PokerTooltip></li>
                  <li><strong>"I'm getting good cards tonight"</strong> - May indicate a bluff when said during weak hands</li>
                  <li><strong>"I never get lucky"</strong> - Often said when they actually have a strong hand</li>
                  <li>Discussing specific cards they folded</li>
                  <li>Revealing their playing style or tendencies</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg">
                <h4 className="font-medium text-orange-800 mb-1">Example Scenario</h4>
                <p className="text-sm text-orange-700">
                  A player constantly narrates their thought process: "I have a tough decision here... you probably have me beat... but I'm getting good odds..." This gives opponents enormous insight into their hand strength and decision-making process.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Balanced Approach */}
        <AccordionItem value="balanced-talk" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">The Balanced Approach</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Strategic communication for optimal results
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                The most effective approach involves selective, purposeful communication that serves specific strategic goals while avoiding common verbal tells.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Effective Table Talk Guidelines</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Engage in light conversation between hands</li>
                  <li>Ask neutral questions to gauge reactions</li>
                  <li>Use misdirection sparingly and strategically</li>
                  <li>Maintain the same speaking pattern regardless of hand strength</li>
                  <li>Avoid discussing specific hands or strategy</li>
                  <li>Keep recreational players comfortable and engaged</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Safe Topics</h4>
                  <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                    <li>Sports and current events</li>
                    <li>General life conversations</li>
                    <li>Compliments on good plays</li>
                    <li>Neutral observations about the game</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">Topics to Avoid</h4>
                  <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                    <li>Your specific holdings or folded cards</li>
                    <li>Detailed strategy discussions</li>
                    <li>Emotional reactions to results</li>
                    <li>Personal financial situations</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-lg">
                <h4 className="font-medium text-indigo-800 mb-1">Professional Example</h4>
                <p className="text-sm text-indigo-700">
                  Daniel Negreanu is famous for his table talk, using conversation to gather information while entertaining the table. He maintains the same chatty demeanor regardless of hand strength, making his verbal patterns unreliable as tells.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Building Your Poker Image */}
        <AccordionItem value="building-image" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Building Your Poker Image</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Crafting a persona that serves your strategic goals
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Image Building Techniques</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li><strong>Dress and appearance:</strong> Professional vs casual attire sends different messages</li>
                  <li><strong>Chip handling:</strong> Nervous vs confident chip management</li>
                  <li><strong>Betting style:</strong> Quick vs deliberate decision-making</li>
                  <li><strong>Reaction to wins/losses:</strong> Emotional vs stoic responses</li>
                  <li><strong>Table presence:</strong> Relaxed vs intense demeanor</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">The Rock</h4>
                  <p className="text-xs text-blue-700">
                    Tight, conservative image. Bets get respect, but hard to get action on big hands.
                  </p>
                </div>
                
                <div className="bg-red-50 border border-red-100 p-3 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-1">The Maniac</h4>
                  <p className="text-xs text-red-700">
                    Wild, unpredictable image. Gets lots of action but bluffs are less effective.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-100 p-3 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-1">The Pro</h4>
                  <p className="text-xs text-green-700">
                    Skilled, balanced image. Opponents play more carefully but respect your play.
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Advanced Image Strategy</h3>
                <p className="text-sm text-purple-700">
                  Elite players often cultivate multiple images throughout a session, adapting their persona based on table dynamics and opponent types. They might start tight to establish credibility, then switch to more aggressive play once their bluffs gain respect.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Tilt - Avoid and Why */}
        <AccordionItem value="tilt-avoid" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Tilt - Avoid and Why</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Maintaining emotional control for optimal decision-making
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <PokerTooltip term="tilt">Tilt</PokerTooltip> is a state of mental or emotional confusion or frustration that leads to poor decision-making at the poker table. It's one of the biggest profit leaks for poker players and can quickly destroy <PokerTooltip term="bankroll">bankrolls</PokerTooltip> and confidence.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">What Causes Tilt?</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li><PokerTooltip term="bad beats">Bad beats</PokerTooltip> and unlucky runouts</li>
                  <li>Making mistakes and poor decisions</li>
                  <li>Losing streaks or downswings</li>
                  <li>Opponent behavior or table talk</li>
                  <li>Time pressure or fatigue</li>
                  <li>Financial stress or playing above your <PokerTooltip term="bankroll">bankroll</PokerTooltip></li>
                  <li>External life stressors affecting focus</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">Signs of Tilt</h4>
                  <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                    <li>Playing hands you normally wouldn't</li>
                    <li>Chasing losses with bigger bets</li>
                    <li>Calling down lighter than usual</li>
                    <li>Increased aggression without reason</li>
                    <li>Emotional outbursts or complaints</li>
                    <li>Abandoning your normal strategy</li>
                    <li>Physical tension or agitation</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Consequences of Tilt</h4>
                  <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                    <li>Massive profit leaks from poor decisions</li>
                    <li>Playing at stakes beyond your bankroll</li>
                    <li>Longer sessions when you should quit</li>
                    <li>Damage to your table image</li>
                    <li>Opponents targeting you as weak</li>
                    <li>Compound losses from emotional play</li>
                    <li>Negative impact on future sessions</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Tilt Prevention Strategies</h3>
                <ul className="list-disc list-inside text-sm text-green-700 space-y-1.5">
                  <li><strong>Bankroll management:</strong> Never play with money you can't afford to lose</li>
                  <li><strong>Session planning:</strong> Set win/loss limits and stick to them</li>
                  <li><strong>Mindfulness:</strong> Stay aware of your emotional state throughout play</li>
                  <li><strong>Taking breaks:</strong> Step away when you feel frustration building</li>
                  <li><strong>Focus on process:</strong> Judge yourself on decision quality, not results</li>
                  <li><strong>Physical wellness:</strong> Stay hydrated, well-rested, and fed</li>
                  <li><strong>Perspective:</strong> Remember that variance is part of the game</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">The Groundhog Day Principle</h3>
                <p className="text-sm text-purple-700 mb-2">
                  In the movie Groundhog Day, Bill Murray's character tells the groundhog "Don't drive angry" during a dangerous car chase. This scene perfectly captures the essence of tilt management in poker.
                </p>
                <p className="text-sm text-purple-700">
                  Just as driving while angry leads to reckless decisions and crashes, playing poker while tilted leads to poor choices and financial losses. The key is recognizing when you're "angry" (tilted) and either calming down or stepping away from the table entirely.
                </p>
              </div>
              
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg">
                <h4 className="font-medium text-amber-800 mb-1">Emergency Tilt Protocol</h4>
                <p className="text-sm text-amber-700">
                  If you recognize that you're tilted: 1) Take three deep breaths, 2) Assess if you can regain emotional control, 3) If not, immediately end your session regardless of your current position. Your bankroll and future poker success depend on this discipline.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Table Etiquette */}
        <AccordionItem value="table-etiquette" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Table Etiquette and Social Dynamics</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Creating a positive environment while maintaining strategic advantage
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Positive Table Dynamics</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Keep losing players happy and engaged</li>
                  <li>Avoid criticizing opponents' play (even when helping them would be nice)</li>
                  <li>Maintain a friendly, approachable demeanor</li>
                  <li>Respect dealers and floor staff</li>
                  <li>Keep the game moving at a reasonable pace</li>
                  <li>Avoid excessive celebration after big wins</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg">
                <h4 className="font-medium text-amber-800 mb-1">The Golden Rule</h4>
                <p className="text-sm text-amber-700">
                  Remember that recreational players fund the game. Keeping them comfortable and enjoying themselves is not just good etiquette—it's good business. A fun table attracts and retains the players you want to play against.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
