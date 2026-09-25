export function CoverBanner() {
  return (
    <div className="doc-cover-banner">
      <img
        src="/assets/images/cover bg.svg"
        alt="LevelUp Media Cover Background"
        className="cover-hero-img"
      />
      <div className="cover-text-overlay">
        <div className="cover-content-aligned space-y-6 sm:space-y-8 md:space-y-10">
          {/* Primary Wordmark Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logos/LEVELUP-white.svg"
              alt="LevelUp Logo"
              className="h-6 sm:h-8 md:h-10 w-auto object-contain block"
            />
          </div>

          {/* Secondary Brand Guidelines Display Mark */}
          <div className="w-full max-w-[580px] sm:max-w-[700px]">
            <img
              src="/assets/images/brand-guidelines.svg"
              alt="Brand Guidelines"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
