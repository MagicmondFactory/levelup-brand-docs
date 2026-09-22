import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface MobileTopBarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileTopBar({ isOpen, onToggle }: MobileTopBarProps) {
  return (
    <div className="lg:hidden flex items-center justify-between px-6 py-4 bg-[#FAFAFC] border-b border-[#E5E7EB] sticky top-0 z-40">
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
      <button
        onClick={onToggle}
        className="p-1.5 text-[#64748B] hover:text-[#0F172A] rounded-lg hover:bg-black/5"
        aria-label="Toggle navigation drawer"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </div>
  );
}
