import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  Award, Layout, BookText, Grid2X2, Calculator, 
  Menu, X, Home, ListChecks, Zap,
  Clock, Users, Gamepad2, Sword, DollarSign, BookCheck,
  Eye,
  MessageSquare,
  BookOpen
} from "lucide-react";
import GlobalSearch from "./GlobalSearch";

// Group links by category for better organization
const linkGroups = [
  {
    name: "Navigation",
    links: [
      { href: "/topics", label: "All Topics", icon: ListChecks },
    ]
  },
  {
    name: "Game Basics",
    links: [
      { href: "/gameplay-rounds", label: "Gameplay Rounds", icon: Clock },
      { href: "/table-position", label: "Table Position", icon: Layout },
      { href: "/hand-rankings", label: "Hand Rankings", icon: Award },
      { href: "/player-count", label: "Players & Tables", icon: Users },
      { href: "/game-format", label: "Game & Format", icon: Gamepad2 },
      { href: "/betting-structures", label: "Betting Structures", icon: DollarSign },
      { href: "/terminology", label: "Terminology", icon: BookText },
    ]
  },
  {
    name: "Strategy",
    links: [
      { href: "/ranges", label: "Starting Hand Ranges", icon: Grid2X2 },
      { href: "/odds-calculator", label: "Odds and Equity", icon: Calculator },
      { href: "/playing-styles", label: "Styles of Play", icon: Sword },
      { href: "/basic-strategy", label: "Basic Strategy", icon: BookCheck },
      { href: "/bluffing", label: "Bluffing", icon: Zap },
      { href: "/tells", label: "Tells: Masking and Spotting", icon: Eye },
      { href: "/table-talk-image", label: "Table Talk and Image", icon: MessageSquare },
      { href: "/reference-tools", label: "Reference Tools", icon: BookOpen },
    ]
  }
];



export default function Sidebar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive sidebar
  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkSize();

    // Add event listener
    window.addEventListener('resize', checkSize);

    // Clean up
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobile && isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Button - only visible on mobile */}
      {isMobile && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center p-2 rounded-full bg-primary text-white shadow-lg"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      )}

      {/* Sidebar - responsive */}
      <aside 
        className={cn(
          "bg-gradient-to-b from-purple-50 to-indigo-100 shadow-lg border-r border-purple-200 transition-all duration-300 z-40",
          isMobile 
            ? `fixed inset-y-0 left-0 w-64 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`
            : 'w-64 min-h-screen'
        )}
      >
        <div className={cn("p-4", isMobile ? "pb-8" : "sticky top-0")}>
          <div className="flex items-center gap-2 mb-4 mt-2">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer group">
                <Home className="h-5 w-5 text-purple-700 group-hover:text-purple-500" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Poker Guide
                </h1>
              </div>
            </Link>
          </div>

          <div className="h-px w-full bg-purple-200 my-4"></div>

          {/* Global Search */}
          <div className="mb-6">
            <GlobalSearch />
          </div>

          <nav className="space-y-4">
            {linkGroups.map((group, index) => (
              <div key={group.name} className="space-y-1">
                {/* Only show divider if not the first group */}
                {index > 0 && <div className="h-px w-full bg-purple-100 my-3"></div>}

                {/* Category label */}
                <h3 className="text-xs uppercase font-semibold text-indigo-800 px-4 mb-1 tracking-wider">
                  {group.name}
                </h3>

                {/* Links for this category */}
                {group.links.map(({ href, label, icon: Icon }) => (
                  <Link key={href} href={href}>
                    <div
                      className={cn(
                        "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                        location === href || 
                        (href.includes('?tab=') && location === '/home') /* Handle /home?tab= routes */
                          ? "bg-purple-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-purple-200/50"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {label}
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile menu */}
      {isMobile && isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}