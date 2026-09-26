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
  const [activeSide, setActiveSide] = useState<'front' | 'back'>('front');
  const [isExporting, setIsExporting] = useState(false);

  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const handleDownloadImage = async (side: 'front' | 'back' | 'both') => {
    setIsExporting(true);
    try {
      const renderCard = async (elem: HTMLElement, name: string) => {
        // Temporarily ensure element is positioned for offscreen capture if hidden
        const prevDisplay = elem.style.display;
        elem.style.display = 'block';
        const canvas = await html2canvas(elem, {
          scale: 3, // High DPI for print sharpness
          useCORS: true,
          backgroundColor: null,
          logging: false,
        });
        elem.style.display = prevDisplay;
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

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [89, 51], // standard 3.5 x 2 inch
      });

      const prevFrontDisplay = frontRef.current.style.display;
      frontRef.current.style.display = 'block';
      const frontCanvas = await html2canvas(frontRef.current, { scale: 3, useCORS: true, logging: false });
      frontRef.current.style.display = prevFrontDisplay;

      const prevBackDisplay = backRef.current.style.display;
      backRef.current.style.display = 'block';
      const backCanvas = await html2canvas(backRef.current, { scale: 3, useCORS: true, logging: false });
      backRef.current.style.display = prevBackDisplay;

      const frontData = frontCanvas.toDataURL('image/jpeg', 0.98);
      pdf.addImage(frontData, 'JPEG', 0, 0, 89, 51);

      pdf.addPage([89, 51], 'landscape');
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
              onClick={() => setActiveSide('front')}
              className={`px-4 py-1.5 text-xs font-bold transition-all ${
                activeSide === 'front'
                  ? 'bg-white text-[#0F172A] shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              Front Face (Brand Mark)
            </button>
            <button
              onClick={() => setActiveSide('back')}
              className={`px-4 py-1.5 text-xs font-bold transition-all ${
                activeSide === 'back'
                  ? 'bg-white text-[#0F172A] shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              Back Face (Details &amp; Name)
            </button>
          </div>

          {/* Cards Wrapper (Both mounted so html2canvas can capture accurately) */}
          <div className="w-full flex flex-col items-center justify-center py-4 bg-[#FAFAFC] border border-[#E5E7EB]">
            {/* BACK FACE (Details & White background) */}
            <div
              ref={backRef}
              style={{
                display: activeSide === 'back' ? 'block' : 'none',
                width: '500px',
                maxWidth: '100%',
                aspectRatio: '1.75 / 1',
              }}
              className="bg-white border border-[#E5E7EB] shadow-lg relative flex flex-col justify-between overflow-hidden select-none px-8 py-7"
            >
              {/* Top Section */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-['Radio_Canada_Big'] text-[26px] font-black text-[#070732] leading-[1.08] tracking-[-0.03em]">
                    {card.firstName || 'JOSEPH'}<br />
                    {card.lastName || 'BOU CHACRA'}
                  </h2>
                  <div className="font-['Radio_Canada_Big'] text-[11px] font-extrabold text-[#64748B] tracking-[0.06em] uppercase mt-2.5">
                    {card.designation || 'FOUNDER & CEO'}
                  </div>
                </div>

                {/* Top-Right UP Mark in pale lilac/periwinkle tint matching reference */}
                <div className="w-20 pt-0.5">
                  <svg viewBox="0 0 324 193" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M162.557 129C160.191 143.067 155.312 154.79 147.918 164.167C140.524 173.545 130.912 180.579 119.082 185.268C107.4 189.957 88.7833 192.301 72.9609 192.301C51.8148 192.301 30.3145 187.99 18.1888 179.369C6.06316 170.596 4.36931e-06 157.512 0 140.118C1.00662e-06 137.849 0.074075 135.504 0.221944 133.084C0.517691 130.664 0.887323 128.168 1.33095 125.597L17.3014 33.4817H66.3218L62.9218 52.1571L23.0799 92.1189L59.7066 71.1959L50.3513 126.051C50.2034 127.261 50.0556 128.471 49.9078 129.681C49.7599 130.891 49.6862 132.101 49.6862 133.311C49.6862 139.815 51.4607 145.034 55.0097 148.966C58.7066 152.899 69.264 154.865 76.9534 154.865C85.9737 154.865 98.0837 152.142 103.555 146.697C109.026 141.252 112.502 134.37 113.981 126.051L129.672 31.2531L184.452 0L162.557 129Z" fill="#E8EBFC"/>
                    <path d="M281.384 33.4817C289.96 33.4817 297.354 35.3722 303.565 39.1536C309.924 42.7837 314.877 47.9267 318.426 54.5819C321.975 61.2372 323.75 68.8757 323.75 77.4973C323.75 86.1189 322.345 94.2112 319.536 101.774C316.874 109.186 312.955 115.69 307.78 121.286C302.752 126.883 296.689 131.269 289.591 134.445C282.641 137.622 274.803 139.21 266.079 139.21H223.713L215.062 189.579H166.041L181.108 102.671H230.147L230.145 102.681H255.654C259.794 102.681 263.121 101.774 265.635 99.9589C268.297 98.1439 270.219 95.7237 271.402 92.6986C272.733 89.6735 273.399 86.3456 273.399 82.7155C273.399 78.7829 272.216 75.7577 269.85 73.6401C267.632 71.5226 265.554 70.9148 259.625 70.9333H237.834V70.9148H186.673L193.102 33.4817H281.384Z" fill="#E8EBFC"/>
                  </svg>
                </div>
              </div>

              {/* Full-width Divider */}
              <div className="w-full border-t border-[#E5E7EB] my-2"></div>

              {/* Bottom Contact List */}
              <div className="w-full space-y-2 text-[10.5px] font-['Radio_Canada_Big']">
                <div className="flex justify-between items-center border-b border-[#F1F5F9] pb-1.5">
                  <span className="font-extrabold text-[#334155] tracking-[0.08em] uppercase text-[9.5px]">EMAIL</span>
                  <span className="font-bold text-[#0F172A] tracking-[0.02em]">{card.email || 'JOSEPH_15@LEVELUP.AI'}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#F1F5F9] pb-1.5">
                  <span className="font-extrabold text-[#334155] tracking-[0.08em] uppercase text-[9.5px]">CONTACT</span>
                  <span className="font-bold text-[#0F172A] tracking-[0.02em]">{card.contact || '+971 - 965-4558-154'}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#F1F5F9] pb-1.5">
                  <span className="font-extrabold text-[#334155] tracking-[0.08em] uppercase text-[9.5px]">WEBSITE</span>
                  <span className="font-bold text-[#0F172A] tracking-[0.02em]">{card.website || 'LEVELUPMEDIA.AI'}</span>
                </div>
                <div className="flex justify-between items-center pt-0.5">
                  <span className="font-extrabold text-[#334155] tracking-[0.08em] uppercase text-[9.5px]">ADDRESS</span>
                  <span className="font-bold text-[#0F172A] tracking-[0.02em]">{card.address || 'TOWER 6, PALM BEACH, DUBAI (UAE)'}</span>
                </div>
              </div>
            </div>

            {/* FRONT FACE (Exact Original Artwork directly from design PDF) */}
            <div
              ref={frontRef}
              style={{
                display: activeSide === 'front' ? 'block' : 'none',
                width: '500px',
                maxWidth: '100%',
                aspectRatio: '1.75 / 1',
              }}
              className="bg-[#3343FF] border border-[#2333E8] shadow-lg relative overflow-hidden select-none p-0 flex items-center justify-center"
            >
              <img
                src="/assets/images/business-card-front.png"
                alt="LevelUp Business Card Front Face"
                className="w-full h-full object-cover block"
                crossOrigin="anonymous"
              />
            </div>

            {/* Dimension Specs tag */}
            <div className="mt-3 text-[11px] text-[#64748B] font-['Space_Grotesk'] flex items-center gap-3">
              <span>Standard Size: 89mm × 51mm (3.5&quot; × 2&quot;)</span>
              <span>•</span>
              <span>Font: Radio Canada Big</span>
              <span>•</span>
              <span>Vector Print Precision</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
