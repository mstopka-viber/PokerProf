import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { positions, startingHands } from "@/lib/poker-data";
import PokerTooltip from "@/components/PokerTooltip";

function getStrengthColor(strength: number): string {
  if (strength >= 85) return "bg-green-500";
  if (strength >= 70) return "bg-blue-500";
  if (strength >= 50) return "bg-yellow-500";
  return "bg-red-500";
}

function getHandCategory(strength: number): string {
  if (strength >= 85) return "Premium";
  if (strength >= 70) return "Strong";
  if (strength >= 50) return "Playable";
  return "Speculative";
}

export default function RangesUpdated() {
  // Card ranks and suits for the range chart
  const ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="gradient-heading">Starting Hand Ranges</h1>

      <Card className="mb-2">
        <CardContent className="pt-4 card-content">
          <p className="text-muted-foreground">
            Your starting hand strength and playing style should vary based on your position at the table. 
            Use the range chart and position guides below to make better <PokerTooltip term="pre-flop">pre-flop</PokerTooltip> decisions.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="chart" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="chart">Range Chart</TabsTrigger>
          <TabsTrigger value="positions">Position-Based Recommendations</TabsTrigger>
        </TabsList>

        {/* Range Chart Tab */}
        <TabsContent value="chart">
          <Card className="shadow-md border border-purple-100 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-white border-b border-purple-100">
              <CardTitle className="text-gray-800">Starting Hand Range Chart</CardTitle>
              <CardDescription>
                Visual representation of poker hand ranges from premium hands to weak holdings. The chart is divided by the diagonal that has matching pairs. Above the diagonal the pairs are <PokerTooltip term="suited">suited</PokerTooltip> (denoted by a small 's') and below the diagonal the pairs are <PokerTooltip term="offsuit">offsuit</PokerTooltip> (denoted by a small 'o').
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {ranks.map((row, rowIndex) => (
                      <tr key={row}>
                        {ranks.map((col, colIndex) => {
                          // Determine cell color based on hand strength
                          let bgColor = "bg-gray-100";
                          let textColor = "text-gray-800";

                          // Pairs (diagonal)
                          if (rowIndex === colIndex) {
                            if (rowIndex < 5) {
                              bgColor = "bg-red-600"; // Premium pairs (AA, KK, QQ, JJ, TT)
                              textColor = "text-white";
                            } else if (rowIndex < 8) {
                              bgColor = "bg-orange-500"; // Medium pairs (99, 88, 77)
                              textColor = "text-white";
                            } else {
                              bgColor = "bg-blue-500"; // Small pairs (66, 55, 44, 33, 22)
                              textColor = "text-white";
                            }
                          } 
                          // Broadway cards (A-T with A-T)
                          else if (rowIndex < 5 && colIndex < 5) {
                            if (rowIndex === 0 || colIndex === 0) {
                              bgColor = "bg-red-500"; // Ace combinations
                              textColor = "text-white";
                            } 
                            // Medium offsuit hands: QKo, JKo, JQo, TKo, TQo, TJo (offsuit Broadway cards)
                            else if (rowIndex > colIndex && (
                              (rowIndex === 2 && colIndex === 1) || // QKo
                              (rowIndex === 3 && colIndex === 1) || // JKo
                              (rowIndex === 3 && colIndex === 2) || // JQo
                              (rowIndex === 4 && colIndex === 1) || // TKo
                              (rowIndex === 4 && colIndex === 2) || // TQo
                              (rowIndex === 4 && colIndex === 3)    // TJo
                            )) {
                              bgColor = "bg-blue-500"; // Medium hands
                              textColor = "text-white";
                            }
                            else {
                              bgColor = "bg-orange-400"; // Other Broadway
                              textColor = "text-white";
                            }
                          }
                          // Suited cards (below diagonal)
                          else if (rowIndex < colIndex) {
                            // Suited connectors
                            if (colIndex - rowIndex === 1 && rowIndex < 8) {
                              bgColor = "bg-green-500";
                              textColor = "text-white";
                            }
                            // Speculative suited Aces (A9s-A2s)
                            else if (rowIndex === 0 && colIndex >= 4) {
                              bgColor = "bg-green-500";
                              textColor = "text-white";
                            }
                            // Other suited Ax (ATs, AJs, AQs, AKs)
                            else if (rowIndex === 0 && colIndex < 4) {
                              bgColor = "bg-blue-500";
                              textColor = "text-white";
                            }
                            // K9s - speculative
                            else if (rowIndex === 1 && colIndex === 5) {
                              bgColor = "bg-green-500";
                              textColor = "text-white";
                            }
                            // Other suited Kx (excluding K8s, K7s)
                            else if (rowIndex === 1 && colIndex < 6) {
                              bgColor = "bg-blue-400";
                              textColor = "text-white";
                            }
                            // Q9s, Q8s - speculative
                            else if (rowIndex === 2 && (colIndex === 5 || colIndex === 6)) {
                              bgColor = "bg-green-500";
                              textColor = "text-white";
                            }
                            // J9s, J8s, J7s - speculative
                            else if (rowIndex === 3 && (colIndex === 5 || colIndex === 6 || colIndex === 7)) {
                              bgColor = "bg-green-500";
                              textColor = "text-white";
                            }
                          }
                          // Offsuit cards (above diagonal)
                          else {
                            // Premium offsuit (AK, AQ, AJ)
                            if (colIndex === 0 && rowIndex < 4) {
                              bgColor = "bg-blue-400";
                              textColor = "text-white";
                            }
                            // Speculative Ace offsuit (A9o, A8o, A7o, A6o, A5o, A4o, A3o, A2o)
                            else if (colIndex === 0 && rowIndex >= 4) {
                              bgColor = "bg-green-500";
                              textColor = "text-white";
                            }

                            // 9Ko, 9Qo, 9Jo, 9To - speculative offsuit hands with 9
                            else if (rowIndex === 5 && (colIndex === 1 || colIndex === 2 || colIndex === 3 || colIndex === 4)) {
                              bgColor = "bg-green-500";
                              textColor = "text-white";
                            }
                            // 8Qo, 8Jo - speculative offsuit hands with 8
                            else if (rowIndex === 6 && (colIndex === 2 || colIndex === 3)) {
                              bgColor = "bg-green-500";
                              textColor = "text-white";
                            }
                            // 7Jo - speculative offsuit hand with 7
                            else if (rowIndex === 7 && colIndex === 3) {
                              bgColor = "bg-green-500";
                              textColor = "text-white";
                            }
                          }

                          // Text to display for the cell
                          let text = row + col;
                          if (rowIndex < colIndex) {
                            text += "s"; // suited
                          } else if (rowIndex > colIndex) {
                            text += "o"; // offsuit
                          }

                          return (
                            <td 
                              key={col} 
                              className={`border border-gray-300 w-10 h-10 text-center ${bgColor} ${textColor} text-sm`}
                            >
                              {text}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                <div className="p-4 rounded-xl shadow-sm bg-gradient-to-br from-red-600 to-red-500 text-white card-hover">
                  <h4 className="font-semibold text-sm flex items-center">
                    <span className="inline-block w-3 h-3 bg-white rounded-full mr-2"></span>
                    Premium Hands
                  </h4>
                  <p className="text-xs mt-2 opacity-90">Highest <PokerTooltip term="equity">equity</PokerTooltip> hands - play from any position</p>
                </div>

                <div className="p-4 rounded-xl shadow-sm bg-gradient-to-br from-orange-500 to-orange-400 text-white card-hover">
                  <h4 className="font-semibold text-sm flex items-center">
                    <span className="inline-block w-3 h-3 bg-white rounded-full mr-2"></span>
                    Strong Hands
                  </h4>
                  <p className="text-xs mt-2 opacity-90">Strong equity hands - play from most positions</p>
                </div>

                <div className="p-4 rounded-xl shadow-sm bg-gradient-to-br from-blue-500 to-blue-400 text-white card-hover">
                  <h4 className="font-semibold text-sm flex items-center">
                    <span className="inline-block w-3 h-3 bg-white rounded-full mr-2"></span>
                    Medium Hands
                  </h4>
                  <p className="text-xs mt-2 opacity-90">Moderate equity with drawing potential</p>
                </div>

                <div className="p-4 rounded-xl shadow-sm bg-gradient-to-br from-green-500 to-green-400 text-white card-hover">
                  <h4 className="font-semibold text-sm flex items-center">
                    <span className="inline-block w-3 h-3 bg-white rounded-full mr-2"></span>
                    Speculative Hands
                  </h4>
                  <p className="text-xs mt-2 opacity-90">Lower equity but good drawing potential</p>
                </div>

                <div className="p-4 rounded-xl shadow-sm bg-gradient-to-br from-gray-100 to-white border border-gray-200 card-hover">
                  <h4 className="font-semibold text-sm flex items-center text-gray-700">
                    <span className="inline-block w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
                    Weak Hands
                  </h4>
                  <p className="text-xs mt-2 text-gray-500">Low equity hands - generally fold</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm mt-6">
                <h4 className="font-semibold mb-2 text-blue-800">Chart Reference Disclaimer</h4>
                <p className="text-sm text-gray-600">
                  The above chart is for example reference only. The strength of the various card combinations depends greatly on other factors that change with each hand, round of card play, position at the table and the type of opposition you are playing.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Position-Based Recommendations Tab */}
        <TabsContent value="positions">
          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-sm mb-6">
            <p className="text-sm text-gray-600">
              Hands marked with an <strong>'s'</strong> are <PokerTooltip term="suited">suited</PokerTooltip> (both cards share the same suit) and hands marked with an <strong>'o'</strong> are <PokerTooltip term="offsuit">offsuit</PokerTooltip> (cards of different suits). Suited hands are generally stronger due to their flush potential. If a non-pair hand has no designator, it applies to both suited and offsuit versions.
            </p>
          </div>
          <Tabs defaultValue={positions[0]}>
            <TabsList className="mb-4">
              {positions.map((pos) => (
                <TabsTrigger key={pos} value={pos}>
                  {pos}
                </TabsTrigger>
              ))}
            </TabsList>

            {positions.map((pos) => (
              <TabsContent key={pos} value={pos} className="tabs-content">
                <div className="grid gap-6">
                  {["Premium", "Strong", "Playable", "Speculative"].map((category) => {
                    const categoryHands = startingHands
                      .filter(
                        (hand) =>
                          (hand.position === pos || hand.position === "Any") &&
                          getHandCategory(hand.strength) === category
                      )
                      .sort((a, b) => b.strength - a.strength);

                    if (categoryHands.length === 0) return null;

                    return (
                      <Card key={category}>
                        <CardHeader className="card-header">
                          <CardTitle>{category} Hands</CardTitle>
                        </CardHeader>
                        <CardContent className="card-content">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {categoryHands.map((hand) => (
                              <div
                                key={hand.hand}
                                className="p-2 rounded-md border bg-card text-card-foreground"
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-base font-semibold">
                                    {hand.hand}
                                  </span>
                                  <div
                                    className={`w-1.5 h-1.5 rounded-full ${getStrengthColor(
                                      hand.strength
                                    )}`}
                                  />
                                </div>
                                <p className="text-xs text-muted-foreground mb-0.5 leading-tight">
                                  {hand.recommendation}
                                </p>
                                <div className="text-xs text-muted-foreground font-medium">
                                  {hand.strength}%
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
}