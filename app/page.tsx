import Hero from "@/components/sections/Hero";
import PracticeAreasGrid from "@/components/sections/PracticeAreasGrid";
import FirmIntro from "@/components/sections/FirmIntro";
import FirmPhilosophy from "@/components/sections/FirmPhilosophy";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* SECTION A — HERO */}
      <Hero />

      {/* SECTION B — PRACTICE AREAS */}
      <PracticeAreasGrid preview={true} />

      {/* SECTION C — ATTORNEY INTRODUCTION */}
      <FirmIntro />

      {/* SECTION D — FIRM PHILOSOPHY */}
      <FirmPhilosophy />

      {/* SECTION E — CONSULTATION CTA */}
      <CtaBanner
        headline="Direct Counsel When Decisions Matter Most"
        subline="Schedule a confidential preliminary consultation to review the facts of your matter and explore strategic avenues."
        buttonLabel="Request a Consultation"
        buttonHref="/#contact"
      />

      {/* SECTION F — CONTACT */}
      <ContactSection />
    </>
  );
}
