import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import PlayingCard from "@/components/PlayingCard";
import { Badge } from "@/components/ui/badge";
import { handRankings } from "@/lib/poker-data";
import PokerTooltip from "@/components/PokerTooltip";

export default function HandRankings() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="gradient-heading mb-4">Hand Rankings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        <Card className="shadow-sm border border-purple-100 bg-gradient-to-br from-purple-50 to-white">
          <CardContent className="p-3 md:p-4">
            <p className="text-gray-600 text-sm">
              In Texas Hold'em, players make their best five-card hand using any combination 
              of their two <PokerTooltip term="hole cards">hole cards</PokerTooltip> and the five <PokerTooltip term="community cards">community cards</PokerTooltip>. Hand rankings from highest to lowest.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-purple-100 bg-gradient-to-br from-purple-50 to-white md:col-span-2">
          <CardContent className="p-3 md:p-4">
            <h4 className="text-sm font-semibold mb-2 text-gray-800">Reading Hand Rankings:</h4>
            <ul className="list-disc list-inside text-xs text-gray-600 space-y-0.5">
              <li>When comparing hands of the same rank, the higher cards win</li>
              <li>For pairs, three of a kind, etc., the rank of the paired cards determines the winner</li>
              <li>When hands have the same pairs/sets, the highest <PokerTooltip term="kicker">kicker</PokerTooltip> (unpaired card) decides the winner</li>
              <li>Suits have no rank in standard poker (<span>♠</span> is not higher than <span className="text-red-500">♥</span>) - the suits (<span>♠</span>, <span>♣</span>, <span className="text-red-500">♥</span>, <span className="text-red-500">♦</span>) are equal</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {handRankings.map((rank, index) => (
          <Card 
            key={rank.name} 
            className="overflow-hidden p-3 card-hover border border-purple-100 bg-white"
          >
            <div className="flex flex-col space-y-1.5">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold text-gray-800">{rank.name}</h3>
                <Badge 
                  variant="outline"
                  className="bg-purple-50 text-purple-800 border-purple-200 font-medium text-xs px-2 py-0"
                >
                  Rank {index + 1}
                </Badge>
              </div>
              
              <div className="flex justify-start gap-1.5 mb-1 flex-nowrap">
                {rank.example.map((card, i) => (
                  <PlayingCard key={i} card={card} className="w-10 h-14 text-base md:w-12 md:h-16 md:text-sm lg:w-11 lg:h-15 lg:text-xs shrink-0 mx-0.5" />
                ))}
              </div>
              
              <p className="text-gray-600 text-xs">{rank.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}