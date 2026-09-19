// ─────────────────────────────────────────────────────────────────────────────
// lib/placeholders.ts
// Centralized configuration for the CCLAW Firm website mockup.
// All client-supplied information is maintained here for easy updates.
//
// BRANDING STATUS: Provisional — client may update firm name and logo
// before official launch. All copy marked [DRAFT] requires client approval.
//
// LOGO STATUS: The client-supplied image is a 3D rendered presentation mockup.
// It cannot be used directly as a web asset (no transparent background, 3D
// shadow effects). The original flat/vector/transparent logo asset must be
// supplied before production deployment.
//
// NOTE: No credentials, awards, years of experience, or client reviews are
// fabricated. All copy is clearly identified as draft and subject to
// attorney-level review before publication.
// ─────────────────────────────────────────────────────────────────────────────

export const firm = {
  name: "The CCLAW Firm",
  shortName: "CCLAW",
  // [DRAFT] — Client to confirm preferred tagline before launch
  tagline: "Dedicated Legal Representation. A Clear Path Forward.",
  phone: "Pending Setup",
  email: "Email Pending Setup",
  location: {
    street: "Office Location",
    city: "Pending Confirmation",
    state: "",
    zip: "",
    display: "Location Pending Confirmation",
  },
  // [DRAFT] — Pending client confirmation of operating hours
  officeHours: "Monday – Friday, 9:00 AM – 5:00 PM (Proposed - Pending Approval)",
  established: "Pending Verification",
  linkedIn: "https://www.linkedin.com/",
  logo: {
    // Wordmark used in navigation and footer until flat vector asset is supplied.
    primaryText: "The CCLAW Firm",
    secondaryText: "Attorneys at Law",
    symbolText: "§",
  },
  branding: {
    // Provisional: client may update firm name and logo before official launch.
    status: "provisional" as const,
    logoAssetRequired: true,
    logoNote:
      "The client-supplied logo is a 3D rendered mockup presentation. A flat, transparent-background SVG or PNG at minimum 400px height is required before production deployment. The wordmark 'The CCLAW Firm' is used as a temporary text-based substitute.",
  },
};

export const attorney = {
  // Name extracted from the client-supplied logo image:
  // "CHADAYNE CLIVE / LLOYD ANTONIO WALKER" — CCLAW initials confirmed.
  name: "Chadayne Clive Lloyd Antonio Walker",
  title: "Principal Attorney & Founder",
  role: "Attorney at Law",
  // [DRAFT] — Pending client-supplied biography
  bioHeadline: "A dedicated advocate committed to personalized, meticulous counsel.",
  bioSummary:
    "Chadayne Clive Lloyd Antonio Walker is establishing an independent practice dedicated to providing high-touch, responsive legal counsel in personal injury, criminal defense, and immigration matters. With a commitment to thorough preparation and direct client communication, the firm offers clients the focused attention of a boutique practice paired with rigorous analytical advocacy.",
  bioParagraphs: [
    "Attorney Walker founded The CCLAW Firm to provide focused, individual attention to clients navigating critical legal decisions. Rather than delegating client matters to junior staff, the firm emphasizes direct attorney engagement at every stage of representation.",
    "[Professional background, prior legal experience, and notable areas of focus to be detailed here upon client submission of approved curriculum vitae.]",
    "The firm approaches each matter with meticulous factual investigation, clear risk assessment, and candid strategic guidance tailored to each client's objectives.",
  ],
  // [DRAFT] — Pending client review and approval
  philosophy:
    '"Effective legal counsel begins with listening closely, preparing thoroughly, and advising with candor. Every client deserves dedicated attention and a clear, principled strategy."',
  credentialsNotice:
    "Formal credentials, bar admissions, academic honors, and professional memberships will be displayed here upon receipt of verified client information.",
  sampleCredentials: [
    { label: "Juris Doctor (J.D.)", sub: "Pending Verification" },
    { label: "Bar Admission", sub: "Pending Verification" },
    { label: "Undergraduate Degree", sub: "Pending Verification" },
    { label: "Professional Affiliations", sub: "Pending Verification" },
  ],
};

export const photography = {
  attorneyPortraitPlaceholder: "Attorney Portrait — High-Resolution Asset Pending Client Delivery",
  heroArchitecturePlaceholder: "Dignified Legal Architecture — Interior/Exterior Asset Pending Client Selection",
  aboutOfficePlaceholder: "Law Office Environment — Asset Pending Client Delivery",
};

export const sampleNotice = {
  // Updated: these are now the client's confirmed practice areas.
  // Descriptions are drafts and require attorney review before publication.
  practiceAreas:
    "These are the firm's confirmed practice areas. Practice area descriptions are draft copy pending attorney review and approval before publication.",
  formPreview: "Demonstration preview only. Enquiries are not transmitted or stored.",
  confidentialNotice:
    "Do not submit sensitive, privileged, or confidential legal information through this demonstration form.",
  prototypeIdentification: "PRE-SALE PROTOTYPE — Designed for Client Evaluation & Approval",
};

export interface PracticeArea {
  slug: string;
  icon: "Scale" | "Shield" | "Users";
  title: string;
  badge: string;
  short: string;
  description: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// CONFIRMED PRACTICE AREAS (3 areas — supplied directly by client)
// Copy is draft and requires attorney review before publication.
// Inclusive language is used throughout to signal that services are available
// to all prospective clients regardless of background.
// ─────────────────────────────────────────────────────────────────────────────
export const practiceAreas: PracticeArea[] = [
  {
    slug: "personal-injury",
    icon: "Scale",
    title: "Personal Injury",
    badge: "Practice Area",
    short:
      "Dedicated representation for individuals who have suffered physical harm due to the negligence or wrongful conduct of others.",
    description:
      // [DRAFT — Attorney review required before publication]
      "When you or a loved one is injured through no fault of your own, you deserve a legal advocate who will fight to protect your rights. The CCLAW Firm provides direct attorney representation at every stage of your personal injury claim — from the initial investigation through settlement negotiations or trial. We handle accident and injury cases for clients from all walks of life, with a commitment to pursuing the compensation our clients deserve. [Specific case types and jurisdictional scope to be confirmed with attorney before publication.]",
  },
  {
    slug: "criminal-defense",
    icon: "Shield",
    title: "Criminal Defense",
    badge: "Practice Area",
    short:
      "Vigorous defense for individuals facing criminal charges, with unwavering commitment to constitutional rights and equal justice.",
    description:
      // [DRAFT — Attorney review required before publication]
      "Every person accused of a crime is entitled to a vigorous, principled defense — regardless of the charge or the circumstances. The CCLAW Firm is committed to protecting the constitutional rights of each client with the same dedication and rigor. Attorney Walker provides direct, strategic criminal defense representation and understands the real-world consequences a criminal charge carries for individuals and their families. The firm serves clients facing charges across the full spectrum of criminal proceedings. [Specific practice scope and jurisdictional details to be confirmed with attorney before publication.]",
  },
  {
    slug: "immigration",
    icon: "Users",
    title: "Immigration",
    badge: "Practice Area",
    short:
      "Compassionate, knowledgeable immigration counsel for individuals, families, and communities from all backgrounds.",
    description:
      // [DRAFT — Attorney review required before publication]
      "Immigration law touches the most personal and consequential decisions people make — where to live, where to work, and where to build a family. The CCLAW Firm welcomes clients from all cultural, national, and linguistic backgrounds and is committed to providing clear, honest guidance through the complexities of the U.S. immigration system. Whether you are pursuing a visa, seeking permanent residence, navigating naturalization, or facing removal proceedings, Attorney Walker is dedicated to standing with you through every step of the process. [Specific practice scope to be confirmed with attorney before publication.]",
  },
];

export const firmPhilosophy = {
  eyebrow: "Practice Standards",
  headline: "A deliberate, client-centered approach to legal counsel.",
  principles: [
    {
      title: "Direct Attorney Access [Proposed]",
      body: "Clients communicate directly with counsel. Your questions are addressed personally by the attorney managing your matter, fostering clarity and accountability. (Pending client approval of business claims)",
    },
    {
      title: "Rigorous Factual Preparation",
      body: "Every strategy is grounded in exhaustive legal research and detailed factual analysis before formal positions or actions are initiated.",
    },
    {
      title: "Candid Legal Guidance",
      body: "We provide realistic, unvarnished assessments of risks, timelines, and legal options so that you can make fully informed decisions.",
    },
    {
      title: "Equal, Principled Advocacy",
      body: "Every client — regardless of background, identity, or circumstance — receives the same standard of dedicated, meticulous representation.",
    },
  ],
};

export const processOverview = [
  {
    step: "01",
    title: "Initial Consultation",
    body: "A structured, confidential discussion to examine the facts of your matter, assess legal issues, and determine how the firm can assist.",
  },
  {
    step: "02",
    title: "Case Analysis & Strategy",
    body: "Detailed review of relevant documents, statutory authorities, and factual evidence to form a customized legal action plan.",
  },
  {
    step: "03",
    title: "Dedicated Execution",
    body: "Assertive, principled implementation of your legal strategy with frequent updates and collaborative decision-making.",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Contact", href: "/#contact" },
];
