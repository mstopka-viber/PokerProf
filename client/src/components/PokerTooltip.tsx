import { useState, useRef, type ReactNode } from "react";
import { pokerGlossary } from "@/lib/poker-glossary";

interface PokerTooltipProps {
  term: string;
  children?: ReactNode;
}

export default function PokerTooltip({ term, children }: PokerTooltipProps) {
  // Try exact match first, then case-insensitive fallback
  const definition = pokerGlossary[term] ?? 
    Object.entries(pokerGlossary).find(([k]) => k.toLowerCase() === term.toLowerCase())?.[1];
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);

  if (!definition) return <>{children || term}</>;

  const showTooltip = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPos({
        top: rect.top - 8,
        left: rect.left + rect.width / 2,
      });
    }
    setVisible(true);
  };

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={() => setVisible(false)}
        className="border-b border-dotted border-purple-400 cursor-help text-purple-700 hover:text-purple-900 transition-colors"
      >
        {children || term}
      </span>

      {visible && (
        <div
          onMouseLeave={() => setVisible(false)}
          style={{
            position: 'fixed',
            top: pos.top,
            left: pos.left,
            transform: 'translate(-50%, -100%)',
            zIndex: 99999,
            backgroundColor: '#1f2937',
            color: '#ffffff',
            padding: '10px 14px',
            borderRadius: '8px',
            maxWidth: '300px',
            minWidth: '180px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            pointerEvents: 'none',
          }}
        >
          <p style={{ fontWeight: 700, marginBottom: '4px', fontSize: '13px', color: '#ffffff' }}>{term}</p>
          <p style={{ fontSize: '12px', color: '#d1d5db', lineHeight: '1.5', margin: 0 }}>{definition}</p>
          <div style={{
            position: 'absolute',
            bottom: '-6px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '7px solid transparent',
            borderRight: '7px solid transparent',
            borderTop: '7px solid #1f2937',
          }} />
        </div>
      )}
    </>
  );
}
