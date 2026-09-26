import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Download, RefreshCw, FileText, Image as ImageIcon } from 'lucide-react';
import { BUSINESS_CARDS_URL } from '../../utils/constants';

export interface BusinessCardData {
  firstName: string;
  lastName: string;
  designation: string;
  email: string;
  contact: string;
  website: string;
  address: string;
}

const DEFAULT_CARD: BusinessCardData = {
  firstName: 'JOSEPH',
  lastName: 'BOU CHACRA',
  designation: 'FOUNDER & CEO',
  email: 'JOSEPH_15@LEVELUP.AI',
  contact: '+971 - 965-4558-154',
  website: 'LEVELUPMEDIA.AI',
  address: 'TOWER 6, PALM BEACH, DUBAI (UAE)',
};

export function BusinessCardGenerator() {
  const [card, setCard] = useState<BusinessCardData>(DEFAULT_CARD);
  const [activeSide, setActiveSide] = useState<'back' | 'front'>('back');
  const [isExporting, setIsExporting] = useState(false);

  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const handleDownloadImage = async (side: 'front' | 'back' | 'both') => {
    setIsExporting(true);
    try {
      const renderCard = async (elem: HTMLElement, name: string) => {
        const canvas = await html2canvas(elem, {
          scale: 3, // High DPI for print sharpness
          useCORS: true,
          backgroundColor: null,
          logging: false,
        });
        const link = document.createElement('a');
        link.download = `levelup-business-card-${name}-${card.firstName.toLowerCase()}-${card.lastName.toLowerCase()}.jpg`;
        link.href = canvas.toDataURL('image/jpeg', 0.95);
        link.click();
      };

      if ((side === 'front' || side === 'both') && frontRef.current) {
        await renderCard(frontRef.current, 'front');
      }
      if ((side === 'back' || side === 'both') && backRef.current) {
        await renderCard(backRef.current, 'back');
      }
    } catch (err) {
      console.error('Failed to export business card image:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleDownloadPDF = async () => {
    setIsExporting(true);
    try {
      if (!frontRef.current || !backRef.current) return;

      // Standard business card size: 3.5in x 2in (88.9mm x 50.8mm) or 90mm x 54mm
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [89, 51], // standard 3.5 x 2 inch
      });

      const frontCanvas = await html2canvas(frontRef.current, { scale: 3, useCORS: true, logging: false });
      const frontData = frontCanvas.toDataURL('image/jpeg', 0.98);
      pdf.addImage(frontData, 'JPEG', 0, 0, 89, 51);

      pdf.addPage([89, 51], 'landscape');
      const backCanvas = await html2canvas(backRef.current, { scale: 3, useCORS: true, logging: false });
      const backData = backCanvas.toDataURL('image/jpeg', 0.98);
      pdf.addImage(backData, 'JPEG', 0, 0, 89, 51);

      pdf.save(`levelup-business-card-${card.firstName.toLowerCase()}-${card.lastName.toLowerCase()}.pdf`);
    } catch (err) {
      console.error('Failed to export PDF:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="border border-[#E5E7EB] bg-white">
      {/* Card Header & External Drive Link */}
      <div className="p-6 border-b border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-['Radio_Canada_Big'] text-lg font-bold text-[#0F172A]">
              1. Business Card Specification &amp; Generator
            </h3>
            <span className="text-[10px] font-bold font-['Space_Grotesk'] px-2 py-0.5 bg-[#E9EBFF] text-[#3343FF]">
              INTERACTIVE
            </span>
          </div>
          <p className="text-sm text-[#475569] leading-relaxed max-w-2xl mt-1">
            Standard 89mm × 51mm print format. Enter employee name &amp; designation below to generate a production-ready print layout, or download PDF/JPEG directly.
          </p>
        </div>
        <a
          href={BUSINESS_CARDS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-download-btn shrink-0 self-start sm:self-center"
        >
          Open Cards Folder ↗
        </a>
      </div>

      <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Form (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-['Space_Grotesk'] font-bold text-[#0F172A] uppercase tracking-wider">
              Cardholder Details
            </span>
            <button
              onClick={() => setCard(DEFAULT_CARD)}
              className="text-xs text-[#3343FF] hover:underline flex items-center gap-1 font-medium"
            >
              <RefreshCw className="w-3 h-3" />
              Reset Sample
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#475569] mb-1">First Name</label>
              <input
                type="text"
                value={card.firstName}
                onChange={(e) => setCard({ ...card, firstName: e.target.value.toUpperCase() })}
                className="w-full text-xs font-medium px-3 py-2 border border-[#E5E7EB] focus:outline-none focus:border-[#3343FF] bg-[#FAFAFC]"
                placeholder="JOSEPH"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#475569] mb-1">Last Name</label>
              <input
                type="text"
                value={card.lastName}
                onChange={(e) => setCard({ ...card, lastName: e.target.value.toUpperCase() })}
                className="w-full text-xs font-medium px-3 py-2 border border-[#E5E7EB] focus:outline-none focus:border-[#3343FF] bg-[#FAFAFC]"
                placeholder="BOU CHACRA"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#475569] mb-1">Designation / Title</label>
            <input
              type="text"
              value={card.designation}
              onChange={(e) => setCard({ ...card, designation: e.target.value.toUpperCase() })}
              className="w-full text-xs font-medium px-3 py-2 border border-[#E5E7EB] focus:outline-none focus:border-[#3343FF] bg-[#FAFAFC]"
              placeholder="FOUNDER & CEO"
            />
          </div>

          <div className="pt-2 border-t border-[#F1F5F9] space-y-3">
            <div>
              <label className="block text-[11px] font-semibold text-[#64748B] mb-0.5">Email</label>
              <input
                type="text"
                value={card.email}
                onChange={(e) => setCard({ ...card, email: e.target.value.toUpperCase() })}
                className="w-full text-xs px-3 py-1.5 border border-[#E5E7EB] focus:outline-none focus:border-[#3343FF] bg-[#FAFAFC]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-[#64748B] mb-0.5">Contact Number</label>
              <input
                type="text"
                value={card.contact}
                onChange={(e) => setCard({ ...card, contact: e.target.value })}
                className="w-full text-xs px-3 py-1.5 border border-[#E5E7EB] focus:outline-none focus:border-[#3343FF] bg-[#FAFAFC]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-[#64748B] mb-0.5">Website</label>
              <input
                type="text"
                value={card.website}
                onChange={(e) => setCard({ ...card, website: e.target.value.toUpperCase() })}
                className="w-full text-xs px-3 py-1.5 border border-[#E5E7EB] focus:outline-none focus:border-[#3343FF] bg-[#FAFAFC]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-[#64748B] mb-0.5">Address</label>
              <input
                type="text"
                value={card.address}
                onChange={(e) => setCard({ ...card, address: e.target.value.toUpperCase() })}
                className="w-full text-xs px-3 py-1.5 border border-[#E5E7EB] focus:outline-none focus:border-[#3343FF] bg-[#FAFAFC]"
              />
            </div>
          </div>

          {/* Action Download Buttons */}
          <div className="pt-4 border-t border-[#E5E7EB] space-y-2">
            <span className="block text-[11px] font-bold font-['Space_Grotesk'] text-[#64748B] uppercase tracking-wider mb-2">
              Export for Print
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleDownloadPDF}
                disabled={isExporting}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#3343FF] text-white text-xs font-bold hover:bg-[#2532D9] transition-all shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={() => handleDownloadImage(activeSide)}
                disabled={isExporting}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#0F172A] text-white text-xs font-bold hover:bg-[#1E293B] transition-all shadow-sm"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Download JPEG</span>
              </button>
            </div>
            <button
              onClick={() => handleDownloadImage('both')}
              disabled={isExporting}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 border border-[#E5E7EB] text-[#0F172A] text-xs font-semibold hover:bg-[#F4F5F8] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Both Faces (Front &amp; Back JPEGs)</span>
            </button>
          </div>
        </div>

        {/* Right: Live Preview & Side Toggle (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          {/* Side Switcher Tab */}
          <div className="flex items-center gap-1 p-1 bg-[#F1F5F9] mb-4 self-center">
            <button
              onClick={() => setActiveSide('back')}
              className={`px-4 py-1.5 text-xs font-bold transition-all ${
                activeSide === 'back'
                  ? 'bg-white text-[#0F172A] shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              Back Face (Details)
            </button>
            <button
              onClick={() => setActiveSide('front')}
              className={`px-4 py-1.5 text-xs font-bold transition-all ${
                activeSide === 'front'
                  ? 'bg-white text-[#0F172A] shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              Front Face (Navy Logo)
            </button>
          </div>

          {/* Cards Wrapper (Both mounted so html2canvas can capture accurately) */}
          <div className="w-full flex flex-col items-center justify-center py-4 bg-[#FAFAFC] border border-[#E5E7EB]">
            {/* BACK FACE (Details) */}
            <div
              ref={backRef}
              style={{
                display: activeSide === 'back' ? 'block' : 'none',
                width: '460px',
                maxWidth: '100%',
                aspectRatio: '1.75 / 1', // ~89mm x 51mm
              }}
              className="bg-white border border-[#E5E7EB] shadow-md p-6 sm:p-7 relative flex flex-col justify-between overflow-hidden select-none"
            >
              {/* Subtle watermark in top right */}
              <div className="absolute top-5 right-5 pointer-events-none opacity-[0.14]">
                <img src="/assets/logos/UP.svg" alt="UP Watermark" className="w-16 h-auto" />
              </div>

              {/* Top: Name & Designation */}
              <div className="relative z-10">
                <h2 className="font-['Radio_Canada_Big'] text-xl sm:text-2xl font-black text-[#070732] leading-tight tracking-tight">
                  {card.firstName || 'JOSEPH'}
                </h2>
                <h2 className="font-['Radio_Canada_Big'] text-xl sm:text-2xl font-black text-[#070732] leading-tight tracking-tight mb-1.5">
                  {card.lastName || 'BOU CHACRA'}
                </h2>
                <div className="font-['Radio_Canada_Big'] text-[11px] sm:text-xs font-extrabold text-[#475569] uppercase tracking-wider">
                  {card.designation || 'FOUNDER & CEO'}
                </div>
              </div>

              {/* Bottom: Contact Table with clean hairline dividers */}
              <div className="relative z-10 w-full text-[10px] sm:text-[11px] font-['Geist'] text-[#0F172A] border-t border-[#E5E7EB] pt-2 space-y-1.5">
                <div className="flex justify-between items-center py-0.5 border-b border-[#F1F5F9]">
                  <span className="font-bold text-[#64748B] uppercase tracking-wider text-[9px]">EMAIL</span>
                  <span className="font-semibold text-right text-[#070732] truncate">{card.email || 'JOSEPH_15@LEVELUP.AI'}</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-[#F1F5F9]">
                  <span className="font-bold text-[#64748B] uppercase tracking-wider text-[9px]">CONTACT</span>
                  <span className="font-semibold text-right text-[#070732]">{card.contact || '+971 - 965-4558-154'}</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-[#F1F5F9]">
                  <span className="font-bold text-[#64748B] uppercase tracking-wider text-[9px]">WEBSITE</span>
                  <span className="font-semibold text-right text-[#070732]">{card.website || 'LEVELUPMEDIA.AI'}</span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="font-bold text-[#64748B] uppercase tracking-wider text-[9px]">ADDRESS</span>
                  <span className="font-semibold text-right text-[#070732] text-[9.5px] sm:text-[10px]">{card.address || 'TOWER 6, PALM BEACH, DUBAI (UAE)'}</span>
                </div>
              </div>
            </div>

            {/* FRONT FACE (Deep Navy Brand Mark with Subtle UP Slanted Pattern) */}
            <div
              ref={frontRef}
              style={{
                display: activeSide === 'front' ? 'block' : 'none',
                width: '460px',
                maxWidth: '100%',
                aspectRatio: '1.75 / 1',
              }}
              className="bg-[#3343FF] border border-[#2735DB] shadow-md p-6 relative flex flex-col items-center justify-center overflow-hidden select-none"
            >
              {/* Background angled dynamic pattern */}
              <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
                <img src="/assets/logos/UP.svg" alt="Pattern" className="w-[120%] h-auto brightness-0 invert scale-125" />
              </div>

              {/* Centered White Wordmark */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/logos/LEVELUP-white.svg"
                  alt="LevelUp Media"
                  className="w-48 sm:w-56 h-auto drop-shadow-sm mb-4"
                />
                <span className="text-[10px] sm:text-xs font-['Space_Grotesk'] font-bold text-white/80 tracking-[0.25em] uppercase">
                  LEVEL UP YOUR GAME
                </span>
              </div>
            </div>

            {/* Dimension Specs tag */}
            <div className="mt-3 text-[11px] text-[#64748B] font-['Space_Grotesk'] flex items-center gap-3">
              <span>Standard Size: 89mm × 51mm</span>
              <span>•</span>
              <span>Aspect Ratio: 1.75:1</span>
              <span>•</span>
              <span>Color Profile: High Contrast</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
