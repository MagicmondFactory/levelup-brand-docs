import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { DocSidebar } from './DocSidebar';
import { MobileTopBar } from './MobileTopBar';
import { SearchModal } from '../components/common/SearchModal';
import { BROCHURE_URL } from '../utils/constants';

export function MainLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col font-['Geist'] antialiased">
      {/* Mobile Bar */}
      <MobileTopBar
        isOpen={isMobileOpen}
        onToggle={() => setIsMobileOpen(!isMobileOpen)}
      />

      <div className="flex-1 flex w-full relative">
        {/* Desktop Sidebar (Fixed 280px) */}
        <div className="hidden lg:block h-screen sticky top-0">
          <DocSidebar onOpenSearch={() => setIsSearchOpen(true)} />
        </div>

        {/* Mobile Drawer Overlay */}
        {isMobileOpen && (
          <div
            className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex"
            onClick={() => setIsMobileOpen(false)}
          >
            <div
              className="w-[280px] h-full bg-white shadow-2xl animate-in slide-in-from-left duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <DocSidebar
                onOpenSearch={() => {
                  setIsMobileOpen(false);
                  setIsSearchOpen(true);
                }}
                onCloseMobile={() => setIsMobileOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className={`flex-1 min-w-0 bg-white relative pb-24 ${location.pathname === '/' ? 'px-0' : 'px-6 sm:px-16'}`}>
          {/* Top-Right Action CTA (Desktop only; on mobile it is in the MobileTopBar) */}
          <div className="hidden lg:block absolute top-6 right-6 sm:right-16 z-30">
            <a
              href={BROCHURE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download-brochure"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download Brand Guide</span>
            </a>
          </div>

          {/* Dynamic Page Content */}
          {location.pathname === '/' ? (
            <Outlet />
          ) : location.pathname === '/email-signature' ? (
            <div className="w-full max-w-[1080px] mx-auto pt-8">
              <Outlet />
            </div>
          ) : (
            <div className="w-full max-w-[840px] mx-auto pt-8">
              <Outlet />
            </div>
          )}
        </main>
      </div>

      {/* Global Search Dialog */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}
