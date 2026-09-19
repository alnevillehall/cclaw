import Hero from "@/components/sections/Hero";
import FirmIntro from "@/components/sections/FirmIntro";
import PracticeAreasGrid from "@/components/sections/PracticeAreasGrid";
import TrustBar from "@/components/sections/TrustBar";
import FirmPhilosophy from "@/components/sections/FirmPhilosophy";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* SECTION A — HERO: Headline + attorney portrait */}
      <Hero />

      {/* SECTION B — ATTORNEY INTRODUCTION: Personal brand before services */}
      <FirmIntro />

      {/* SECTION C — PRACTICE AREAS */}
      <PracticeAreasGrid preview={true} />

      {/* SECTION D — TRUST: Placeholder for testimonials/credentials once supplied */}
      <TrustBar />

      {/* SECTION E — FIRM PHILOSOPHY */}
      <FirmPhilosophy />

      {/* SECTION F — CONSULTATION CTA */}
      <CtaBanner
        headline="Direct Counsel When Decisions Matter Most"
        subline="Schedule a confidential preliminary consultation to review the facts of your matter and explore strategic avenues."
        buttonLabel="Schedule a Consultation"
        buttonHref="/#contact"
      />

      {/* SECTION G — CONTACT */}
      <ContactSection />
    </>
  );
}
