import { Menu, X, Download } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { BROCHURE_URL } from '../utils/constants';

interface MobileTopBarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileTopBar({ isOpen, onToggle }: MobileTopBarProps) {
  return (
    <div className="lg:hidden flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#FAFAFC] border-b border-[#E5E7EB] sticky top-0 z-40">
      {/* Left: Hamburger menu immediately beside the logo */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onToggle}
          className="p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-black/5 transition-colors"
          aria-label="Toggle navigation drawer"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/assets/logos/LEVELUP.svg"
            alt="LevelUp Media"
            className="h-5 w-auto object-contain"
          />
          <span className="text-base font-bold font-['Radio_Canada_Big'] text-[#0F172A]">
            Docs
          </span>
        </NavLink>
      </div>

      {/* Right: Download Brand Guide option in mobile top bar */}
      <a
        href={BROCHURE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0F172A] bg-white border border-[#E5E7EB] shadow-sm hover:bg-[#3343FF] hover:text-white hover:border-[#3343FF] transition-all shrink-0"
      >
        <Download className="w-3.5 h-3.5 shrink-0" />
        <span>Brand Guide</span>
      </a>
    </div>
  );
}
