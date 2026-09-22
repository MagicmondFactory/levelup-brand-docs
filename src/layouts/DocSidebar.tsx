import { NavLink } from 'react-router-dom';
import { NAV_STRUCTURE, BRAND_DOCS_VERSION, LAST_UPDATED } from '../utils/constants';

interface DocSidebarProps {
  onOpenSearch: () => void;
  onCloseMobile?: () => void;
}

export function DocSidebar({ onOpenSearch, onCloseMobile }: DocSidebarProps) {
  return (
    <aside className="w-[280px] flex-shrink-0 bg-[#FAFAFC] border-r border-[#E5E7EB] flex flex-col h-full overflow-y-auto select-none">
      {/* Brand Header */}
      <div className="p-6 border-b border-[#E5E7EB] flex items-center justify-between">
        <NavLink to="/" onClick={onCloseMobile} className="flex items-center gap-2.5">
          <img
            src="/assets/logos/LEVELUP.svg"
            alt="LevelUp Media"
            className="h-[22px] w-auto object-contain"
          />
          <span className="text-lg font-bold text-[#0F172A] tracking-tight font-['Radio_Canada_Big']">
            Docs
          </span>
        </NavLink>
      </div>

      {/* Search trigger */}
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={onOpenSearch}
          className="w-full flex items-center justify-between px-3 py-2 bg-white hover:border-[#D1D5DB] border border-[#E5E7EB] rounded-[6px] text-[13px] text-[#64748B] transition-colors"
        >
          <span>Search guidelines...</span>
          <span className="text-[11px] font-mono bg-[#F4F5F8] text-[#64748B] px-1.5 py-0.5 rounded border border-[#E5E7EB]">
            ⌘K
          </span>
        </button>
      </div>

      {/* Nav List */}
      <nav className="flex-1 px-6 py-4 space-y-6">
        {NAV_STRUCTURE.map((group) => (
          <div key={group.label} className="space-y-1.5">
            <div className="text-[11px] font-['Space_Grotesk'] font-bold uppercase tracking-[0.08em] text-[#94A3B8]">
              {group.label}
            </div>
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={onCloseMobile}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-2.5 py-1.5 rounded-[6px] text-[14px] transition-colors ${
                        isActive
                          ? 'bg-[#E9EBFF] text-[#3343FF] font-semibold'
                          : 'text-[#475569] hover:text-[#0F172A] hover:bg-black/[0.03] font-normal'
                      }`
                    }
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[10px] font-mono font-bold bg-[#3343FF]/10 text-[#3343FF] px-1.5 py-0.2 rounded">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-6 border-t border-[#E5E7EB] text-[12px] text-[#64748B] space-y-1">
        <span className="inline-block font-mono text-[11px] bg-[#E2E8F0] text-[#475569] px-1.5 py-0.5 rounded mb-1">
          {BRAND_DOCS_VERSION}
        </span>
        <div className="font-medium text-[#475569]">Brand Guidelines v1.0</div>
        <div className="text-[11px] text-[#94A3B8]">Last updated {LAST_UPDATED}</div>
      </div>
    </aside>
  );
}
