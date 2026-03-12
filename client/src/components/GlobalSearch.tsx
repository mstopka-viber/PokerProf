import { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "wouter";
import { Search, BookOpen, ArrowRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { searchContent } from "@/lib/search-data";

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => searchContent(searchQuery), [searchQuery]);

  const handleClose = () => {
    setIsOpen(false);
    setSearchQuery("");
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Game Basics': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Strategy': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Terminology': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative w-full max-w-sm flex items-center gap-2 px-3 py-2 text-sm text-gray-500 border-2 border-gray-200 rounded-md bg-white hover:border-purple-200 transition-colors"
      >
        <Search className="h-4 w-4" />
        <span className="flex-1 text-left">Search poker concepts...</span>
      </button>

      {/* Custom modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={handleClose}
        >
          <div
            className="w-full max-w-2xl mx-4 rounded-lg shadow-2xl flex flex-col"
            style={{ backgroundColor: '#ffffff', maxHeight: '560px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-600" />
                <span className="font-semibold text-gray-900">Search Poker Guide</span>
              </div>
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search input */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for poker concepts, strategies, terms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                {searchQuery && (
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto px-6 py-4" style={{ backgroundColor: '#ffffff' }}>
              {!searchQuery && (
                <div className="flex flex-col items-center justify-center h-32 text-gray-400">
                  <Search className="h-10 w-10 mb-3 opacity-40" />
                  <p className="text-sm">Start typing to search across all poker content</p>
                </div>
              )}

              {searchQuery && results.length === 0 && (
                <div className="flex flex-col items-center justify-center h-32 text-gray-400">
                  <Search className="h-10 w-10 mb-3 opacity-40" />
                  <p className="text-sm">No results for "{searchQuery}"</p>
                  <p className="text-xs mt-1">Try "bluff", "position", "odds", or "flop"</p>
                </div>
              )}

              {results.length > 0 && (
                <div className="space-y-2 pb-2">
                  {results.map((result) => (
                    <Link key={result.id} href={result.href} onClick={handleClose}>
                      <div className="p-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-purple-200 cursor-pointer transition-colors">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-sm text-gray-900 truncate">{result.title}</span>
                              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${getCategoryColor(result.category)}`}>
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 mb-1">Found in: {result.page}</p>
                            {result.excerpt && (
                              <p className="text-sm text-gray-600 line-clamp-2">{result.excerpt}</p>
                            )}
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0 mt-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {results.length > 0 && (
              <div className="px-6 py-3 border-t border-gray-200 text-center" style={{ backgroundColor: '#f9fafb' }}>
                <p className="text-xs text-gray-500">
                  Found {results.length} result{results.length !== 1 ? 's' : ''}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
