import { cn } from "@/lib/utils";

interface DogsPlayingPokerProps {
  className?: string;
}

export default function DogsPlayingPoker({ className }: DogsPlayingPokerProps) {
  return (
    <div className={cn("w-full flex flex-col items-center", className)}>
      <img 
        src="/images/dogs-playing-poker.jpg" 
        alt="Dogs Playing Poker - Classic painting by C.M. Coolidge" 
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <p className="mt-3 text-center text-sm text-yellow-500 italic">
        "Dogs Playing Poker" painting by C.M. Coolidge
      </p>
    </div>
  );
}