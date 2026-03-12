import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import GlobalSearch from "@/components/GlobalSearch";
import { 
  BookOpen, 
  Award, 
  Layout, 
  BookText, 
  Grid2X2, 
  Calculator, 
  ChevronRight,
  Zap,
  Clock,
  Users,
  Gamepad2,
  Sword,
  DollarSign,
  BookCheck,
  Eye, 
  MessageSquare
} from "lucide-react";
import { scrollToTop } from "@/hooks/use-scroll";

const menuItems = [
  // Game Basics
  {
    title: "Gameplay Rounds",
    description: "Learn about preflop, flop, turn, and river betting rounds",
    href: "/gameplay-rounds",
    icon: Clock,
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    title: "Players & Tables",  
    description: "Understand table dynamics and player count considerations",
    href: "/player-count",
    icon: Users,
    bgColor: "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    title: "Game & Format",
    description: "Different poker formats and their specific rules",
    href: "/game-format",
    icon: Gamepad2,
    bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
  },
  {
    title: "Betting Structures",
    description: "Limit, No-Limit, and Pot-Limit betting structures",
    href: "/betting-structures",
    icon: DollarSign,
    bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
  },
  {
    title: "Hand Rankings",
    description: "Complete guide to poker hand rankings from high card to royal flush",
    href: "/hand-rankings",
    icon: Award,
    bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    title: "Terminology",
    description: "Essential poker terms and definitions every player should know",
    href: "/terminology",
    icon: BookText,
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
  },

  // Strategy
  {
    title: "Styles of Play",
    description: "TAG, LAG, and other playing styles with their pros and cons",
    href: "/playing-styles",
    icon: Sword,
    bgColor: "bg-gradient-to-br from-red-500 to-red-600",
  },
  {
    title: "Basic Strategy",
    description: "Fundamental strategy concepts for improving your game",
    href: "/basic-strategy",
    icon: BookCheck,
    bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
  },
  {
    title: "Table Position",
    description: "How your seating position affects strategy and hand selection",
    href: "/table-position",
    icon: Layout,
    bgColor: "bg-gradient-to-br from-blue-600 to-indigo-600",
  },
  {
    title: "Starting Hand Ranges",
    description: "Which hands to play from different positions at the table",
    href: "/ranges",
    icon: Grid2X2,
    bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500",
  },
  {
    title: "Odds and Equity",
    description: "Calculate pot odds, hand equity, and make profitable decisions",
    href: "/odds-calculator",
    icon: Calculator,
    bgColor: "bg-gradient-to-br from-amber-500 to-orange-500",
  },
  {
    title: "Bluffing",
    description: "When and how to bluff effectively in different situations",
    href: "/bluffing",
    icon: Zap,
    bgColor: "bg-gradient-to-br from-pink-500 to-rose-500",
  },
  {
    title: "Tells: Masking and Spotting",
    description: "Physical and behavioral tells in live and online poker",
    href: "/tells",
    icon: Eye,
    bgColor: "bg-gradient-to-br from-violet-500 to-purple-500",
  },
  {
    title: "Table Talk and Image",
    description: "Using communication and table image as strategic tools",
    href: "/table-talk-image",
    icon: MessageSquare,
    bgColor: "bg-gradient-to-br from-lime-500 to-green-500",
  },
  {
    title: "Reference Tools",
    description: "Quick reference charts and calculators for game improvement",
    href: "/reference-tools",
    icon: BookOpen,
    bgColor: "bg-gradient-to-br from-slate-500 to-slate-600",
  },
];

export default function Topics() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <img 
          src="/images/BlackLabPokerCraiyon.png"
          alt="Dogs playing poker"
          className="w-32 h-24 object-contain border border-purple-200 rounded-lg shadow-sm"
        />
        <div className="flex-1">
          <div className="flex flex-col gap-4 mb-2">
            <h1 className="gradient-heading">Learning Topics</h1>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <GlobalSearch />
              </div>
            </div>
          </div>
          <p className="text-muted-foreground">
            Welcome to your Texas Hold'em learning journey! Choose a topic below to improve your poker skills.
          </p>
        </div>
      </div>

      {/* Game Basics Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Game Basics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {(() => {
              const gameBasicsOrder = [
                "Gameplay Rounds",
                "Table Position", 
                "Hand Rankings",
                "Players & Tables",
                "Game & Format", 
                "Betting Structures", 
                "Terminology"
              ];
              return menuItems
                .filter(item => gameBasicsOrder.includes(item.title))
                .sort((a, b) => gameBasicsOrder.indexOf(a.title) - gameBasicsOrder.indexOf(b.title));
            })()
            .map((item) => (
              <Link key={item.title} href={item.href} onClick={scrollToTop}>
                <Card className="card-hover overflow-hidden border border-purple-100 shadow h-full">
                  <div className="flex flex-col h-full">
                    <div className={`${item.bgColor} p-3 text-white`}>
                      <item.icon className="h-6 w-6 mb-1" />
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>

                    <div className="p-3 flex flex-col flex-grow">
                      <p className="text-gray-600 text-sm flex-grow">{item.description}</p>
                      <div className="flex justify-end mt-3">
                        <span className="text-primary font-medium flex items-center text-sm">
                          Learn More <ChevronRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
        </div>
      </div>

      {/* Strategy Section */}
      <div>
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Strategy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {(() => {
              const strategyOrder = [
                "Starting Hand Ranges",
                "Odds and Equity",
                "Styles of Play",
                "Basic Strategy",
                "Bluffing",
                "Tells: Masking and Spotting",
                "Table Talk and Image",
                "Reference Tools"
              ];
              return menuItems
                .filter(item => strategyOrder.includes(item.title))
                .sort((a, b) => strategyOrder.indexOf(a.title) - strategyOrder.indexOf(b.title));
            })()
            .map((item) => (
              <Link key={item.title} href={item.href} onClick={scrollToTop}>
                <Card className="card-hover overflow-hidden border border-purple-100 shadow h-full">
                  <div className="flex flex-col h-full">
                    <div className={`${item.bgColor} p-3 text-white`}>
                      <item.icon className="h-6 w-6 mb-1" />
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>

                    <div className="p-3 flex flex-col flex-grow">
                      <p className="text-gray-600 text-sm flex-grow">{item.description}</p>
                      <div className="flex justify-end mt-3">
                        <span className="text-primary font-medium flex items-center text-sm">
                          Learn More <ChevronRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}