import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface MobileTopBarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileTopBar({ isOpen, onToggle }: MobileTopBarProps) {
  return (
    <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#0B0E14] border-b border-[#1C2537] sticky top-0 z-40">
      <NavLink to="/" className="flex items-center gap-2">
        <img
          src="/assets/logos/LEVELUP.svg"
          alt="LevelUp Media"
          className="h-5 w-auto object-contain brightness-105"
        />
        <span className="text-xs uppercase font-mono tracking-widest font-bold text-sky-400">
          Brand Manual
        </span>
      </NavLink>
      <button
        onClick={onToggle}
        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#151C2C]"
        aria-label="Toggle navigation drawer"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </div>
  );
}
