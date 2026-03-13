import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TablePosition() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="gradient-heading">Table Position</h1>

      <Card className="mb-8 shadow-md border border-purple-100 bg-gradient-to-br from-purple-50 to-white">
        <CardContent className="pt-6">
          <p className="text-gray-600">
            Understanding table position is crucial to Texas Hold'em strategy. 
            Your position relative to the dealer determines when you act and heavily influences optimal play.
          </p>
        </CardContent>
      </Card>

      {/* Table Position Diagram */}
      <Card className="mb-8 shadow-md border border-purple-100 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-white border-b border-purple-100">
          <CardTitle className="text-gray-800">Table Positions</CardTitle>
          <CardDescription>
            Position refers to where you sit relative to the dealer button, which determines your order of play after the flop
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mx-auto w-full my-8 flex flex-col items-center justify-center">
            <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4">
              <div className="relative bg-green-800 rounded-[30%] sm:rounded-[35%] md:rounded-[40%] overflow-hidden p-1 sm:p-2 md:p-4 shadow-xl sm:shadow-2xl border border-green-900 sm:border-2 md:border-4">
                <div className="aspect-[2/1] sm:aspect-[2.2/1] rounded-[30%] sm:rounded-[35%] md:rounded-[40%] overflow-hidden bg-green-700 flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6">
                  <div className="relative w-full h-full">
                    <div className="absolute left-[5%] sm:left-[8%] top-[40%] sm:top-[45%]">
                      <div className="bg-red-600 text-white px-1 sm:px-1.5 md:px-2 py-0.5 md:py-1 rounded shadow-sm text-[9px] sm:text-xs md:text-sm font-bold border border-red-700 whitespace-nowrap">UTG</div>
                    </div>
                    <div className="absolute left-[15%] sm:left-[20%] top-[20%] sm:top-[15%]">
                      <div className="bg-red-600 text-white px-1 sm:px-1.5 md:px-2 py-0.5 md:py-1 rounded shadow-sm text-[9px] sm:text-xs md:text-sm font-bold border border-red-700 whitespace-nowrap">UTG+1</div>
                    </div>
                    <div className="absolute left-[30%] sm:left-[35%] top-[5%] sm:top-[8%]">
                      <div className="bg-yellow-500 text-white px-1 sm:px-1.5 md:px-2 py-0.5 md:py-1 rounded shadow-sm text-[9px] sm:text-xs md:text-sm font-bold border border-yellow-600 whitespace-nowrap">MP</div>
                    </div>
                    <div className="absolute right-[30%] sm:right-[35%] top-[5%] sm:top-[8%]">
                      <div className="bg-yellow-500 text-white px-1 sm:px-1.5 md:px-2 py-0.5 md:py-1 rounded shadow-sm text-[9px] sm:text-xs md:text-sm font-bold border border-yellow-600 whitespace-nowrap">MP+1</div>
                    </div>
                    <div className="absolute right-[15%] sm:right-[20%] top-[20%] sm:top-[15%]">
                      <div className="bg-blue-500 text-white px-1 sm:px-1.5 md:px-2 py-0.5 md:py-1 rounded shadow-sm text-[9px] sm:text-xs md:text-sm font-bold border border-blue-600 whitespace-nowrap">HJ</div>
                    </div>
                    <div className="absolute right-[5%] sm:right-[8%] top-[40%] sm:top-[45%]">
                      <div className="bg-green-600 text-white px-1 sm:px-1.5 md:px-2 py-0.5 md:py-1 rounded shadow-sm text-[9px] sm:text-xs md:text-sm font-bold border border-green-700 whitespace-nowrap">CO</div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="flex flex-col items-center">
                        <span className="text-yellow-300 font-bold text-sm sm:text-base md:text-xl">POKER</span>
                        <span className="text-white text-[6px] sm:text-[8px] md:text-xs mt-0.5 sm:mt-1 bg-black/20 px-1 sm:px-2 md:px-3 py-0.5 rounded-full">POSITIONS</span>
                      </div>
                    </div>
                    <div className="absolute right-[15%] sm:right-[20%] bottom-[20%] sm:bottom-[15%]">
                      <div className="bg-green-600 text-white px-1 sm:px-1.5 md:px-2 py-0.5 md:py-1 rounded shadow-sm text-[9px] sm:text-xs md:text-sm font-bold border border-green-700 whitespace-nowrap">BTN</div>
                    </div>
                    <div className="absolute left-[15%] sm:left-[20%] bottom-[20%] sm:bottom-[15%]">
                      <div className="bg-purple-700 text-white px-1 sm:px-1.5 md:px-2 py-0.5 md:py-1 rounded shadow-sm text-[9px] sm:text-xs md:text-sm font-bold border border-purple-800 whitespace-nowrap">BB</div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[5%] sm:bottom-[8%]">
                      <div className="bg-purple-700 text-white px-1 sm:px-1.5 md:px-2 py-0.5 md:py-1 rounded shadow-sm text-[9px] sm:text-xs md:text-sm font-bold border border-purple-800 whitespace-nowrap">SB</div>
                    </div>
                    <div className="absolute bottom-[8%] sm:bottom-[12%] right-[20%] sm:right-[25%] -translate-x-1/2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-white text-black font-bold flex items-center justify-center shadow-sm border border-yellow-300 text-[7px] sm:text-[8px] md:text-xs">D</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">Poker table position diagram showing player positions around a standard poker table</p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-sm card-hover mt-6">
            <h3 className="font-semibold mb-2 text-purple-800">Blinds</h3>
            <p className="text-sm text-gray-600">
              Forced bets that create the initial pot. These positions act first after the flop, giving them a disadvantage despite acting last preflop.
            </p>
            <div className="mt-3 space-y-1">
              <Badge className="bg-purple-700 text-white border-none">SB, BB</Badge>
              <div className="text-xs text-gray-600 mt-2">
                <span className="font-semibold">SB</span>: Small Blind - Posts half the minimum bet, acts first post-flop<br />
                <span className="font-semibold">BB</span>: Big Blind - Posts full minimum bet, acts second post-flop
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-red-50 to-white border border-red-100 shadow-sm card-hover">
              <h3 className="font-semibold mb-2 text-red-800">Early Position</h3>
              <p className="text-sm text-gray-600">
                First to act after the flop. Limited information and positional disadvantage. 
                Play tight with strong hands (AA, KK, QQ, AK).
              </p>
              <div className="mt-3 space-y-1">
                <Badge className="bg-red-500 text-white border-none">UTG, UTG+1</Badge>
                <div className="text-xs text-gray-600 mt-2">
                  <span className="font-semibold">UTG</span>: Under the Gun - First player to act preflop<br />
                  <span className="font-semibold">UTG+1</span>: Under the Gun plus one - Second player to act preflop
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-sm card-hover">
              <h3 className="font-semibold mb-2 text-purple-800">Middle Position</h3>
              <p className="text-sm text-gray-600">
                More information as early position players have acted. Can play medium-strong hands (TT-JJ, AQ, AJ).
              </p>
              <div className="mt-3 space-y-1">
                <Badge className="bg-yellow-500 text-white border-none">MP, MP+1</Badge>
                <div className="text-xs text-gray-600 mt-2">
                  <span className="font-semibold">MP</span>: Middle Position - Third player to act preflop<br />
                  <span className="font-semibold">MP+1</span>: Middle Position plus one - Fourth player to act preflop
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-sm card-hover">
              <h3 className="font-semibold mb-2 text-green-800">Late Position</h3>
              <p className="text-sm text-gray-600">
                Maximum information advantage. Can play wider range (22+, Ax suited, broadway cards, suited connectors).
              </p>
              <div className="mt-3 space-y-1">
                <Badge className="bg-green-500 text-white border-none">HJ, CO, BTN</Badge>
                <div className="text-xs text-gray-600 mt-2">
                  <span className="font-semibold">HJ</span>: Hijack - Fifth player to act preflop<br />
                  <span className="font-semibold">CO</span>: Cutoff - Sixth player to act preflop (second to last)<br />
                  <span className="font-semibold">BTN</span>: Button - Dealer position, last to act post-flop
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
