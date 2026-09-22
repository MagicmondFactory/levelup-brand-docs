import { useState, useRef } from 'react';
import { DEFAULT_SIGNATURE, SignatureData, generateEmailSignatureHTML } from '../utils/emailSignature';
import { Copy, Check, RefreshCw, User, Eye, Code } from 'lucide-react';

export default function EmailSignature() {
  const [data, setData] = useState<SignatureData>(DEFAULT_SIGNATURE);
  const [activeTab, setActiveTab] = useState<'preview' | 'html'>('preview');
  const [copiedRich, setCopiedRich] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const signatureHtml = generateEmailSignatureHTML(data, window.location.origin);

  const copyRichSignature = async () => {
    try {
      if (previewRef.current) {
        const type = 'text/html';
        const blob = new Blob([signatureHtml], { type });
        const dataItem = [new ClipboardItem({ [type]: blob, 'text/plain': new Blob([signatureHtml], { type: 'text/plain' }) })];
        await navigator.clipboard.write(dataItem);
        setCopiedRich(true);
        setTimeout(() => setCopiedRich(false), 2500);
        return;
      }
    } catch (err) {
      console.warn('ClipboardItem fallback:', err);
    }
    await navigator.clipboard.writeText(signatureHtml);
    setCopiedRich(true);
    setTimeout(() => setCopiedRich(false), 2500);
  };

  const copyRawHtml = async () => {
    await navigator.clipboard.writeText(signatureHtml);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2500);
  };

  const handleReset = () => {
    setData(DEFAULT_SIGNATURE);
  };

  return (
    <div className="space-y-10">
      {/* Header matching original page typography */}
      <header className="page-header pb-6 border-b border-[#E5E7EB]">
        <div className="text-xs font-['Space_Grotesk'] font-bold text-[#3343FF] uppercase tracking-[0.08em] mb-2">
          08 / STRATEGY &amp; ASSETS
        </div>
        <h1 className="text-4xl font-bold font-['Radio_Canada_Big'] text-[#0F172A] tracking-tight mb-2">
          Email Signature Generator
        </h1>
        <p className="text-[#475569] text-base leading-relaxed max-w-2xl">
          Official email signature format for LevelUp Media team members. Fill in your details below, copy the rendered signature or raw HTML, and paste it directly into your email client settings.
        </p>
      </header>

      {/* 2-Column Interface matching original Quiet & Generous light frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form: Details Editor (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 bg-[#FAFAFC] border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E5E7EB]">
              <h2 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                <User className="w-4 h-4 text-[#3343FF]" />
                <span>Signature Details</span>
              </h2>
              <button
                onClick={handleReset}
                className="text-xs text-[#64748B] hover:text-[#3343FF] flex items-center gap-1 transition-colors"
                title="Reset to default sample"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[#475569] font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  value={data.fullName}
                  onChange={(e) => setData({ ...data, fullName: e.target.value })}
                  placeholder="Mohammed Shareefuddin"
                  className="w-full bg-white border border-[#E5E7EB] focus:border-[#3343FF] px-3 py-2 text-[#0F172A] placeholder-[#94A3B8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#475569] font-medium mb-1">Job Designation</label>
                <input
                  type="text"
                  value={data.designation}
                  onChange={(e) => setData({ ...data, designation: e.target.value })}
                  placeholder="STATEGY AND OPERATIONS SENIOR EXECUTIVE"
                  className="w-full bg-white border border-[#E5E7EB] focus:border-[#3343FF] px-3 py-2 text-[#0F172A] placeholder-[#94A3B8] focus:outline-none uppercase"
                />
              </div>

              <div>
                <label className="block text-[#475569] font-medium mb-1">Phone / WhatsApp</label>
                <input
                  type="text"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  placeholder="+971 58 289 4780"
                  className="w-full bg-white border border-[#E5E7EB] focus:border-[#3343FF] px-3 py-2 text-[#0F172A] placeholder-[#94A3B8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#475569] font-medium mb-1">Official Email</label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  placeholder="shareefuddin@levelupmedia.ai"
                  className="w-full bg-white border border-[#E5E7EB] focus:border-[#3343FF] px-3 py-2 text-[#0F172A] placeholder-[#94A3B8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#475569] font-medium mb-1">Office Location</label>
                <input
                  type="text"
                  value={data.address}
                  onChange={(e) => setData({ ...data, address: e.target.value })}
                  placeholder="First Floor, DMCS, Dubai Media City, UAE"
                  className="w-full bg-white border border-[#E5E7EB] focus:border-[#3343FF] px-3 py-2 text-[#0F172A] placeholder-[#94A3B8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#475569] font-medium mb-1">Website</label>
                <input
                  type="text"
                  value={data.website}
                  onChange={(e) => setData({ ...data, website: e.target.value, websiteUrl: e.target.value.startsWith('http') ? e.target.value : `https://${e.target.value}` })}
                  placeholder="levelupmedia.ai"
                  className="w-full bg-white border border-[#E5E7EB] focus:border-[#3343FF] px-3 py-2 text-[#0F172A] placeholder-[#94A3B8] focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#FAFAFC] border border-[#E5E7EB] text-xs text-[#475569] space-y-1.5">
            <div className="font-bold text-[#0F172A]">Installation Instructions:</div>
            <ol className="list-decimal pl-4 space-y-1 leading-relaxed">
              <li>Click <strong>&ldquo;Copy Signature&rdquo;</strong> to copy formatted text and graphics.</li>
              <li>Open Gmail or Outlook settings &gt; Signature.</li>
              <li>Paste (⌘V / Ctrl+V) directly into the signature box.</li>
              <li>Save changes.</li>
            </ol>
          </div>
        </div>

        {/* Right Area: Preview & Actions (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 bg-white border border-[#E5E7EB] shadow-sm">
            {/* Action Bar */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E5E7EB]">
              {/* Tabs */}
              <div className="inline-flex items-center gap-1 bg-[#FAFAFC] p-1 border border-[#E5E7EB] shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'preview'
                      ? 'bg-white text-[#3343FF] shadow-sm'
                      : 'text-[#64748B] hover:text-[#0F172A]'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 shrink-0" />
                  <span>Preview</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('html')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'html'
                      ? 'bg-white text-[#3343FF] shadow-sm'
                      : 'text-[#64748B] hover:text-[#0F172A]'
                  }`}
                >
                  <Code className="w-3.5 h-3.5 shrink-0" />
                  <span>HTML Code</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="inline-flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={copyRichSignature}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#3343FF] hover:bg-[#1A28D4] text-white text-xs font-semibold whitespace-nowrap transition-colors shadow-sm shrink-0"
                >
                  {copiedRich ? <Check className="w-3.5 h-3.5 shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0 text-white" />}
                  <span>{copiedRich ? 'Copied Signature!' : 'Copy Signature'}</span>
                </button>

                <button
                  type="button"
                  onClick={copyRawHtml}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white hover:bg-[#FAFAFC] border border-[#E5E7EB] text-[#0F172A] text-xs font-semibold whitespace-nowrap transition-colors shrink-0"
                >
                  {copiedHtml ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <Code className="w-3.5 h-3.5 shrink-0" />}
                  <span>{copiedHtml ? 'Copied HTML!' : 'Copy HTML'}</span>
                </button>
              </div>
            </div>

            {/* Visual Display */}
            {activeTab === 'preview' ? (
              <div className="space-y-4">
                <div
                  ref={previewRef}
                  className="bg-white text-[#111111] p-6 sm:p-8 border border-[#E5E7EB] overflow-x-auto select-all"
                  style={{ minWidth: '280px' }}
                >
                  <div className="space-y-6 max-w-lg">
                    {/* Header: Name & Designation */}
                    <div>
                      <div className="text-[26px] sm:text-[30px] font-semibold text-[#111111] leading-tight font-['Radio_Canada_Big']">
                        {data.fullName || "Mohammed Shareefuddin"}
                      </div>
                      <div className="text-[13px] font-semibold uppercase tracking-wider text-[#111111] mt-1 font-['Geist']">
                        {data.designation || "STATEGY AND OPERATIONS SENIOR EXECUTIVE"}
                      </div>
                    </div>

                    {/* Contact rows with official SVG icons */}
                    <div className="space-y-2 text-[14px] text-[#111111] font-['Geist']">
                      <div className="flex items-center gap-3">
                        <img
                          src="/assets/icons/phone_in_talk.svg"
                          alt="Phone"
                          className="w-[18px] h-[18px] flex-shrink-0"
                        />
                        <span>{data.phone}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <img
                          src="/assets/icons/drafts.svg"
                          alt="Email"
                          className="w-[18px] h-[18px] flex-shrink-0"
                        />
                        <span>{data.email}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <img
                          src="/assets/icons/pin_drop.svg"
                          alt="Location"
                          className="w-[18px] h-[18px] flex-shrink-0"
                        />
                        <span>{data.address}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <img
                          src="/assets/icons/globe_asia.svg"
                          alt="Website"
                          className="w-[18px] h-[18px] flex-shrink-0"
                        />
                        <span>{data.website}</span>
                      </div>
                    </div>

                    {/* Full Logo with Tagline */}
                    <div className="pt-2">
                      <img
                        src="/assets/logos/Full%20logo%20with%20tag%20line.svg"
                        alt="LEVEL UP - YOUR GAME"
                        className="w-[240px] sm:w-[260px] h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#64748B]">Inline-styled table markup:</div>
                <pre className="p-4 bg-[#FAFAFC] border border-[#E5E7EB] text-xs font-mono text-[#0F172A] overflow-x-auto max-h-[420px] select-all leading-relaxed">
                  {signatureHtml}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
