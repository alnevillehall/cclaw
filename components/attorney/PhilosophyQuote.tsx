import { attorney } from "@/lib/placeholders";

export default function PhilosophyQuote() {
  return (
    <section className="bg-[#0F1F3D] py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="max-w-[760px] mx-auto flex flex-col items-center text-center gap-8">
          {/* Brass rule top */}
          <div className="w-12 h-[2px] bg-[#B8996A]" aria-hidden="true" />

          {/* Quote mark decoration */}
          <span
            className="text-[#B8996A] select-none"
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              fontSize: "120px",
              lineHeight: 0.6,
              fontWeight: 300,
              opacity: 0.4,
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote>
            <p
              className="text-white"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                fontSize: "clamp(20px, 2.5vw, 30px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.55,
              }}
            >
              {attorney.philosophy}
            </p>
            <footer className="mt-8">
              <cite
                className="not-italic text-[#B8996A] text-[12px] tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
              >
                — {attorney.name}
              </cite>
            </footer>
          </blockquote>

          {/* Brass rule bottom */}
          <div className="w-12 h-[2px] bg-[#B8996A]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
