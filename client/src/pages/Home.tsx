import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="gradient-heading">Texas Hold'em Rules</h1>

      <Card className="mb-6">
        <CardHeader className="card-header">
          <CardTitle>Game Overview</CardTitle>
          <CardDescription>
            The world's most popular poker variant played in friendly home games and professional tournaments alike
          </CardDescription>
        </CardHeader>
        <CardContent className="prose card-content">
          <p>
            Texas Hold'em is a community card poker variant where players make the best five-card hand using any combination of their two hole cards and five community cards. Its strategic depth, accessibility, and dramatic potential have made it the most popular poker game worldwide.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="gameplay" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full h-auto">
          <TabsTrigger value="gameplay">Gameplay Rounds</TabsTrigger>
          <TabsTrigger value="player-count">Players & Tables</TabsTrigger>
          <TabsTrigger value="game-format">Game & Format</TabsTrigger>
          <TabsTrigger value="styles">Styles of Play</TabsTrigger>
          <TabsTrigger value="betting">Betting Structures</TabsTrigger>
          <TabsTrigger value="strategy">Basic Strategy</TabsTrigger>
        </TabsList>

        {/* 1. Player Count & Table Structure */}
        <TabsContent value="player-count" className="tabs-content">
          <Card>
            <CardHeader>
              <CardTitle>Player Count & Table Structure</CardTitle>
              <CardDescription>
                Different player configurations create unique dynamics and strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Texas Hold'em accommodates a wide range of player counts, each creating a different dynamic:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Full Ring (9-10 players)</h4>
                  <p className="text-sm text-muted-foreground">
                    Traditional casino format that rewards patience and selective play. More players means tighter hand selection is generally recommended.
                  </p>
                  <Badge className="mt-2">Traditional</Badge>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">6-Max (6 players)</h4>
                  <p className="text-sm text-muted-foreground">
                    Popular online format with more hands per hour and more aggressive play. Requires adaptability and wider hand ranges.
                  </p>
                  <Badge className="mt-2">Fast-paced</Badge>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Heads-Up (2 players)</h4>
                  <p className="text-sm text-muted-foreground">
                    The purest form of poker skill with constant blind pressure. Requires playing most hands and aggressive strategies.
                  </p>
                  <Badge className="mt-2">High Skill</Badge>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Short-Handed (3-7 players)</h4>
                  <p className="text-sm text-muted-foreground">
                    Common in home games and late tournament stages. Balance between full ring and heads-up dynamics.
                  </p>
                  <Badge className="mt-2">Versatile</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 2. Game & Format Settings */}
        <TabsContent value="game-format">
          <Card>
            <CardHeader>
              <CardTitle>Game & Format Settings</CardTitle>
              <CardDescription>
                Texas Hold'em can be played in various formats across different environments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Each format has its own unique characteristics and strategic considerations:
              </p>
              
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Cash Games</h4>
                  <p className="text-sm text-muted-foreground">
                    Players buy in for real money chips that represent actual cash value. Players can leave at any time, and blinds remain fixed. Common in both home games and casinos.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline">No Time Limit</Badge>
                    <Badge variant="outline">Fixed Blinds</Badge>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Tournaments</h4>
                  <p className="text-sm text-muted-foreground">
                    Players buy in for a fixed amount and receive tournament chips with no cash value. Blinds increase at set intervals, and players compete until one person has all the chips.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline">Elimination Format</Badge>
                    <Badge variant="outline">Increasing Blinds</Badge>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Home Games</h4>
                  <p className="text-sm text-muted-foreground">
                    Friendly games played among friends with flexible rules. May include house rules like:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 ml-2">
                    <li>Multiple wild cards</li>
                    <li>Running it twice on big pots</li>
                    <li>Bomb pots (everyone puts in extra money and sees a flop)</li>
                    <li>Mixed game formats with rotation of poker variants</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Professional Play</h4>
                  <p className="text-sm text-muted-foreground">
                    Highly regulated games in casinos, card rooms, and televised events like the World Series of Poker (WSOP). Features:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 ml-2">
                    <li>Strict adherence to rules and procedures</li>
                    <li>Professional dealers and floor staff</li>
                    <li>Higher stakes with potentially life-changing money</li>
                    <li>Time controls and shot clocks in some formats</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 3. Styles of Play */}
        <TabsContent value="styles">
          <Card>
            <CardHeader>
              <CardTitle>Styles of Play</CardTitle>
              <CardDescription>
                Different approaches to playing poker with varying levels of aggression and hand selection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Tight-Aggressive (TAG)</h4>
                  <p className="text-sm text-muted-foreground">
                    Playing few hands but betting and raising strongly with those hands. Generally considered the most profitable approach.
                  </p>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Loose-Aggressive (LAG)</h4>
                  <p className="text-sm text-muted-foreground">
                    Playing many hands and betting aggressively. High-variance style that can be effective when used by skilled players.
                  </p>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Tight-Passive</h4>
                  <p className="text-sm text-muted-foreground">
                    Playing few hands and mostly checking and calling. Often called "rocks" or "nits" - generally too predictable.
                  </p>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Loose-Passive</h4>
                  <p className="text-sm text-muted-foreground">
                    Playing many hands but rarely betting or raising. Called "calling stations" - generally not profitable.
                  </p>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">GTO (Game Theory Optimal)</h4>
                  <p className="text-sm text-muted-foreground">
                    Playing a balanced, mathematically sound strategy that can't be exploited. Popular among pros and advanced players.
                  </p>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Exploitative</h4>
                  <p className="text-sm text-muted-foreground">
                    Adapting play to specifically counter opponents' tendencies, deviating from GTO to maximize profit against specific player types.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 4. Betting Structures */}
        <TabsContent value="betting">
          <Card>
            <CardHeader>
              <CardTitle>Betting Structures</CardTitle>
              <CardDescription>
                Different betting formats create unique strategic dynamics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-5 rounded-lg">
                  <h3 className="font-semibold mb-3">No-Limit Hold'em</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    The most popular format where players can bet any amount of chips they have at any time. Creates dramatic all-in moments and complex strategic decisions.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Players can bet all their chips at any time</li>
                    <li>Minimum bet is the size of the big blind</li>
                    <li>Minimum raise must be at least the size of the previous bet or raise</li>
                    <li>No maximum bet size (except table limits)</li>
                  </ul>
                  <Badge className="mt-3">Most Popular</Badge>
                </div>
                
                <div className="bg-muted p-5 rounded-lg">
                  <h3 className="font-semibold mb-3">Fixed-Limit Hold'em</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Betting is structured with fixed amounts, typically with a small bet for pre-flop and flop rounds, and a big bet (double the small bet) for turn and river.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Pre-flop and flop: small bet amount only</li>
                    <li>Turn and river: big bet amount only</li>
                    <li>Maximum of four bets per round (bet, raise, re-raise, cap)</li>
                    <li>More mathematical, less psychological than No-Limit</li>
                  </ul>
                  <Badge className="mt-3">Strategic</Badge>
                </div>
                
                <div className="bg-muted p-5 rounded-lg">
                  <h3 className="font-semibold mb-3">Pot-Limit Hold'em</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    The maximum bet size is the current pot. A middle ground between the strategic constraints of limit and the aggressive possibilities of no-limit.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Maximum bet is the size of the current pot</li>
                    <li>Pot size includes all prior bets in the current round</li>
                    <li>Requires calculation of pot size for maximum bet</li>
                    <li>Popular for Omaha, less common for Hold'em</li>
                  </ul>
                  <Badge className="mt-3">Balanced</Badge>
                </div>
                
                <div className="bg-muted p-5 rounded-lg">
                  <h3 className="font-semibold mb-3">Blind Structures</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Forced bets that ensure action in every hand and create a dynamic game.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li><span className="font-medium">Small Blind:</span> Typically half the big blind, posted by player to the left of the button</li>
                    <li><span className="font-medium">Big Blind:</span> Full minimum bet, posted by player to the left of small blind</li>
                    <li><span className="font-medium">Ante:</span> Small forced bet from all players, common in tournaments</li>
                    <li><span className="font-medium">Button Ante:</span> Modern tournament structure where the button pays all antes</li>
                  </ul>
                  <Badge className="mt-3">Fundamental</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 5. Gameplay Rounds */}
        <TabsContent value="gameplay">
          <Card>
            <CardHeader>
              <CardTitle>Gameplay Rounds</CardTitle>
              <CardDescription>
                Texas Hold'em is played in a sequence of betting rounds as community cards are revealed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Pre-Flop</h3>
                <p className="text-muted-foreground">
                  Each player is dealt two private cards (hole cards). Betting begins with the player left of the big blind. Players can call, raise, or fold.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Flop</h3>
                <p className="text-muted-foreground">
                  Three community cards are dealt face-up in the center of the table. Another round of betting occurs, starting with the first active player to the left of the dealer button.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Turn</h3>
                <p className="text-muted-foreground">
                  A fourth community card is dealt face-up. In fixed-limit games, the betting amount typically doubles at this stage. Another betting round follows.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">River</h3>
                <p className="text-muted-foreground">
                  The final (fifth) community card is dealt face-up, followed by the last betting round. If two or more players remain after this round, cards are shown in the showdown.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Showdown</h3>
                <p className="text-muted-foreground">
                  Remaining players reveal their hole cards, and the best five-card hand wins the pot. In case of identical hands, the pot is split equally among winners.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 6. Basic Strategy */}
        <TabsContent value="strategy">
          <Card>
            <CardHeader>
              <CardTitle>Basic Strategy & Etiquette</CardTitle>
              <CardDescription>
                Essential knowledge for playing poker properly and respectfully
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Beginner Strategy Tips</h3>
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                      <li>Start with playing tight-aggressive (TAG) poker - play fewer hands but play them strongly</li>
                      <li>Position is crucial - play more hands in late position (button, cutoff) than early position</li>
                      <li>Understand pot odds before calling bets with drawing hands</li>
                      <li>Observe your opponents for tendencies and weaknesses</li>
                      <li>Avoid playing when tired, emotional, or under the influence</li>
                      <li>Manage your bankroll - never play with money you can't afford to lose</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Table Etiquette</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                      <li>Act in turn - never bet, raise, or fold out of sequence</li>
                      <li>Avoid slow rolling (deliberately slow revealing of a winning hand)</li>
                      <li>Don't discuss hands while play is still in progress</li>
                      <li>Keep your chips neatly stacked and higher denominations in front</li>
                      <li>Verbally declare your intentions before acting</li>
                      <li>Don't splash the pot when betting</li>
                      <li>Respect the dealer and other players</li>
                      <li>Avoid excessive celebration or criticism of others' play</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}