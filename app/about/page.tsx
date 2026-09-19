import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import AttorneySpotlight from "@/components/attorney/AttorneySpotlight";
import PhilosophyQuote from "@/components/attorney/PhilosophyQuote";
import CredentialTimeline from "@/components/attorney/CredentialTimeline";
import CtaBanner from "@/components/sections/CtaBanner";
import { attorney, firm } from "@/lib/placeholders";

export const metadata: Metadata = {
  title: `About ${attorney.name} | ${firm.name}`,
  description: `Professional profile for ${attorney.name}, founder of ${firm.name}. Dedicated, principled legal counsel. Request an initial consultation.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${attorney.name}`}
        subtitle={`Founder & Principal Attorney of ${firm.name}. Principled legal representation tailored to client priorities.`}
        breadcrumb="About"
      />

      {/* Attorney Image & Introductory Biography */}
      <AttorneySpotlight />

      {/* Professional Philosophy */}
      <PhilosophyQuote />

      {/* Approved Credentials & Background Framework */}
      <CredentialTimeline />

      {/* Consultation CTA */}
      <CtaBanner
        headline={`Consult With ${attorney.name} Directly`}
        subline="Every inquiry is evaluated personally to determine the most effective legal strategy for your matter."
        buttonLabel="Request a Consultation"
        buttonHref="/#contact"
      />
    </>
  );
}
