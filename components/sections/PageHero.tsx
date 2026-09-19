interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-[#0F1F3D] pt-24 sm:pt-28" aria-label={`${title} page header`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 py-16 sm:py-20 md:py-24">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav aria-label="Breadcrumb Navigation" className="mb-6 sm:mb-8">
            <ol
              className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-[#B8C5D8]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <li>
                <a href="/" className="hover:text-[#B8996A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8996A]">
                  Home
                </a>
              </li>
              <li aria-hidden="true" className="text-white/40 select-none">
                /
              </li>
              <li className="text-[#B8996A] font-medium" aria-current="page">
                {breadcrumb}
              </li>
            </ol>
          </nav>
        )}

        {/* Title */}
        <h1
          className="text-white mb-4"
          style={{
            fontFamily: "var(--font-cormorant-garamond)",
            fontSize: "clamp(34px, 5.5vw, 64px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
          }}
        >
          {title}
        </h1>

        {/* Optional subtitle */}
        {subtitle && (
          <p
            className="text-[#B8C5D8] max-w-[560px] text-[15px] sm:text-[17px] leading-relaxed font-normal"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {subtitle}
          </p>
        )}

        {/* Bottom brass accent rule */}
        <div className="mt-8 sm:mt-10 w-12 h-[2px] bg-[#B8996A]" aria-hidden="true" />
      </div>
    </section>
  );
}
