import { cn } from "@/lib/utils";

type Props = {
  card: string;
  className?: string;
  interactive?: boolean;
};

export default function PlayingCard({ card, className, interactive = false }: Props) {
  // Parse the card notation
  const suit = card.slice(-1);
  const rank = card.slice(0, -1);

  // Convert suit string to actual suit symbol if not already
  const getSuitSymbol = (suitCode: string) => {
    if (suitCode === 's') return '♠';
    if (suitCode === 'h') return '♥';
    if (suitCode === 'd') return '♦';
    if (suitCode === 'c') return '♣';
    return suitCode; // Already a symbol
  };

  // Get the actual suit symbol
  const suitSymbol = getSuitSymbol(suit);

  // Convert 'T' to '10' for display
  const displayRank = rank === 'T' ? '10' : rank;
  
  // Colors based on suit
  const isRed = suitSymbol === "♥" || suitSymbol === "♦";
  const suitColor = isRed ? "text-red-600" : "text-slate-900";
  const suitColorLight = isRed ? "text-red-500" : "text-slate-800";
  
  // Function to colorize suit in text
  const colorizedSuit = (suit: string) => {
    return suit === "♥" || suit === "♦" 
      ? `<span class="text-red-500">${suit}</span>` 
      : suit;
  };
  
  // Get corner suit and rank display
  const getCornerDisplay = (isBottomRight = false) => {
    const cornerClass = cn(
      "flex flex-col items-center leading-none",
      isBottomRight ? "transform rotate-180" : ""
    );
    
    const rankClass = cn(
      "font-bold",
      suitColor,
      displayRank.length > 1 ? "text-xs sm:text-xs md:text-sm" : "text-xs sm:text-sm md:text-base"
    );
    
    const suitClass = cn(
      "text-sm sm:text-base md:text-lg leading-none mt-[-1px]",
      suitColor
    );
    
    return (
      <div className={cornerClass}>
        <span className={rankClass}>{displayRank}</span>
        <span className={suitClass}>{suitSymbol}</span>
      </div>
    );
  };

  // Background pattern for card face
  const getCardPattern = () => {
    return (
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '10px 10px'
        }}
      />
    );
  };
  
  // Generate center pattern based on suit
  const getCenterPattern = () => {
    return null; // Remove all center patterns
  };
  
  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden flex items-center justify-center",
        "border border-gray-300 shadow-md",
        "transition-all duration-200",
        "bg-white",
        interactive && "cursor-pointer hover:shadow-lg hover:-translate-y-1 active:translate-y-0",
        "w-10 h-14 sm:w-11 sm:h-15 md:w-12 md:h-16", // Standardized card sizing
        className
      )}
    >
      {/* Card texture background */}
      <div className="absolute inset-0 bg-white">
        {getCardPattern()}
      </div>
      
      {/* Top-left corner */}
      <div className="absolute top-1 left-1.5">
        {getCornerDisplay(false)}
      </div>
      
      {/* Bottom-right corner */}
      <div className="absolute bottom-1 right-1.5">
        {getCornerDisplay(true)}
      </div>
      
      {/* Center pattern */}
      {getCenterPattern()}
      
      {/* Card shine effect - subtle gradient */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 50%, rgba(200,200,200,0.1) 100%)'
        }}
      />
      
      {/* Card edge */}
      <div className="absolute inset-0 rounded-xl border border-white opacity-60 pointer-events-none" />
    </div>
  );
}