import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TooltipData {
  label: string;
  description: string;
  x: number;
  y: number;
}

const positions = [
  { label: "UTG",   description: "Under the Gun - First player to act preflop. Worst position, play only premium hands.",             color: "#dc2626", x: 14, y: 50 },
  { label: "UTG+1", description: "Under the Gun +1 - Second player to act preflop. Early position, play tight.",                     color: "#dc2626", x: 25, y: 24 },
  { label: "MP",    description: "Middle Position - Third player to act preflop. Can open wider than early position.",                color: "#eab308", x: 38, y: 13 },
  { label: "MP+1",  description: "Middle Position +1 - Fourth player to act preflop. Slightly more flexibility than MP.",            color: "#eab308", x: 57, y: 13 },
  { label: "HJ",    description: "Hijack - Fifth player to act preflop. Late position, can steal blinds more often.",                color: "#3b82f6", x: 70, y: 24 },
  { label: "CO",    description: "Cutoff - Second to last to act preflop. Strong position, wide opening range.",                     color: "#16a34a", x: 82, y: 50 },
  { label: "BTN",   description: "Button (Dealer) - Last to act post-flop. Best position at the table, widest opening range.",       color: "#16a34a", x: 70, y: 76 },
  { label: "SB",    description: "Small Blind - Posts half the minimum bet. Acts first post-flop, worst positional disadvantage.",   color: "#7e22ce", x: 50, y: 84 },
  { label: "BB",    description: "Big Blind - Posts full minimum bet. Acts second post-flop, positional disadvantage.",              color: "#7e22ce", x: 30, y: 76 },
];

export default function TablePosition() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (pos: typeof positions[0], e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltip({
      label: pos.label,
      description: pos.description,
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
  };

  const handleMouseLeave = () => setTooltip(null);

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
      <Card className="mb-8 shadow-md border border-purple-100">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-white border-b border-purple-100">
          <CardTitle className="text-gray-800">Table Positions</CardTitle>
          <CardDescription>
            Position refers to where you sit relative to the dealer button, which determines your order of play after the flop. Hover over any position to learn more.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div ref={containerRef} className="relative w-full my-6">
            {/* Poker table — no overflow-hidden anywhere */}
            <div className="relative w-full max-w-2xl mx-auto" style={{ paddingBottom: "52%" }}>
              <div className="absolute inset-0">
                <svg viewBox="0 0 100 52" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                  {/* Table rim */}
                  <ellipse cx="50" cy="26" rx="49" ry="25" fill="#14532d" />
                  {/* Table felt */}
                  <ellipse cx="50" cy="26" rx="45" ry="21" fill="#15803d" />
                  {/* Felt highlight */}
                  <ellipse cx="50" cy="20" rx="30" ry="10" fill="#16a34a" opacity="0.3" />
                  {/* Center label */}
                  <text x="50" y="24" textAnchor="middle" fill="#fde047" fontSize="4" fontWeight="bold" fontFamily="Georgia, serif">POKER</text>
                  <rect x="38" y="26" width="24" height="5" rx="2.5" fill="rgba(0,0,0,0.2)" />
                  <text x="50" y="29.5" textAnchor="middle" fill="white" fontSize="2.5" fontFamily="sans-serif" letterSpacing="0.5">POSITIONS</text>
                  {/* Dealer button */}
                  <circle cx="68" cy="43" r="2.5" fill="white" stroke="#fde047" strokeWidth="0.5" />
                  <text x="68" y="44" textAnchor="middle" fill="black" fontSize="2" fontWeight="bold" fontFamily="sans-serif">D</text>
                </svg>

                {/* Position labels as HTML buttons over the SVG */}
                {positions.map((pos) => (
                  <button
                    key={pos.label}
                    onMouseEnter={(e) => handleMouseEnter(pos, e)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      position: "absolute",
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      transform: "translate(-50%, -50%)",
                      backgroundColor: pos.color,
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      padding: "2px 6px",
                      fontSize: "clamp(8px, 1.5vw, 13px)",
                      fontWeight: "bold",
                      cursor: "help",
                      whiteSpace: "nowrap",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
                      zIndex: 10,
                    }}
                  >
                    {pos.label}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-center text-xs text-gray-500 mt-2">Hover over any position label to see its description</p>
          </div>

          {/* Tooltip at fixed position — outside every container */}
          {tooltip && (
            <div
              style={{
                position: "fixed",
                top: tooltip.y,
                left: tooltip.x,
                transform: "translate(-50%, -100%)",
                zIndex: 99999,
                backgroundColor: "#1f2937",
                color: "#ffffff",
                padding: "10px 14px",
                borderRadius: "8px",
                maxWidth: "300px",
                minWidth: "180px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                pointerEvents: "none",
              }}
            >
              <p style={{ fontWeight: 700, marginBottom: "4px", fontSize: "13px", color: "#ffffff" }}>{tooltip.label}</p>
              <p style={{ fontSize: "12px", color: "#d1d5db", lineHeight: "1.5", margin: 0 }}>{tooltip.description}</p>
              <div style={{
                position: "absolute",
                bottom: "-6px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "7px solid transparent",
                borderRight: "7px solid transparent",
                borderTop: "7px solid #1f2937",
              }} />
            </div>
          )}

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
