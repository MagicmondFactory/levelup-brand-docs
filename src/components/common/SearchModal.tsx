import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { query, setQuery, results } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen, setQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white border border-[#E5E7EB] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-[#E5E7EB] gap-3">
          <Search className="w-4 h-4 text-[#94A3B8] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guidelines..."
            className="w-full text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-[#94A3B8] hover:text-[#0F172A]">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="text-[10px] font-mono bg-[#F4F5F8] text-[#64748B] px-1.5 py-0.5 rounded border border-[#E5E7EB]">
            ESC
          </kbd>
        </div>

        <div className="overflow-y-auto p-2">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-[#94A3B8] text-xs">
              Type keywords to search sections, assets, and rules.
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-[#64748B] text-xs">
              No results found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            results.map((item) => (
              <button
                key={item.url + item.title}
                onClick={() => handleSelect(item.url)}
                className="w-full text-left p-3 rounded-lg hover:bg-[#F4F5F8] text-[#0F172A] transition-colors"
              >
                <div className="text-xs font-mono font-semibold text-[#3343FF] uppercase mb-0.5">
                  {item.category}
                </div>
                <div className="text-sm font-semibold">{item.title}</div>
                <div className="text-xs text-[#64748B] line-clamp-1 mt-0.5">{item.snippet}</div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
