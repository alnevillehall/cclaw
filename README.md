# [Firm Name] Law — Website Mockup & Client Prototype

A presentation-ready, responsive law firm website prototype designed for pre-sale client review and approval.

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Lucide React**.

---

## 1. Local Development Quick Start

To launch and explore the mockup locally:

```bash
# Ensure dependencies are installed
npm install

# Start the Next.js development server
npm run dev
```

Open your browser and navigate to:
**[http://localhost:3000](http://localhost:3000)**

To run a production static build and verify compilation:
```bash
npm run build
```

---

## 2. Pages Completed

| Route | Page Title | Core Sections & Hierarchy |
|---|---|---|
| `/` | **Homepage** | **Section A: Hero** (2-column editorial, compelling H1, primary consultation CTA, secondary practice areas link, visual placeholder)<br>**Section B: Practice Areas** (4 representative service cards with sample badges, link to overview)<br>**Section C: Attorney Introduction** (portrait placeholder, lead attorney bio, link to About)<br>**Section D: Firm Philosophy** (4 practice standards, draft label, ethical disclaimers)<br>**Section E: Consultation CTA** (full-width high-contrast call-to-action)<br>**Section F: Contact** (enquiry form with validation, preview disclaimer, demo feedback, contact details sidebar, office map placeholder)<br>**Section G: Footer** (branding, nav, contact placeholders, disclaimers, prototype identification) |
| `/about` | **About / Attorney Profile** | **Page Hero** (title & breadcrumb navigation)<br>**Attorney Spotlight** (portrait frame, title, narrative bio)<br>**Philosophy Statement** (editorial quote presentation)<br>**Credentials Framework** (clear placeholder framework pending verification)<br>**Consultation CTA** (direct counsel inquiry link) |
| `/practice-areas` | **Practice Areas Overview** | **Page Hero** (title & breadcrumb navigation)<br>**Strategic Overview** (concentrated disciplines statement)<br>**Full Practice Areas Grid** (6 representative practice disciplines with badges)<br>**How Matters Are Handled** (3-stage process overview)<br>**Consultation CTA** (assessment request banner) |

---

## 3. Centralized Configuration

All placeholder content, client variables, and representative practice data are centralized in a single configuration file:

### [`lib/placeholders.ts`](./lib/placeholders.ts)

When the client approves the proposal and provides verified information, updating this single file will immediately populate the entire website without modifying UI components.

Configurable values include:
- `firm.name`, `firm.shortName`, `firm.tagline`
- `firm.phone`, `firm.email`, `firm.location` (street, city, state, zip)
- `firm.officeHours`, `firm.logo`
- `attorney.name`, `attorney.title`, `attorney.role`, `attorney.bioHeadline`, `attorney.bioSummary`, `attorney.bioParagraphs`
- `attorney.philosophy`, `attorney.sampleCredentials`
- `practiceAreas` (slug, title, icon, badge, short description, detailed description)
- `firmPhilosophy` (eyebrow, headline, principles)
- `processOverview` (step number, title, description)
- `sampleNotice` (disclaimers and prototype notices)

---

## 4. Key Design & Technical Features

1. **Editorial Typography & Visual Restraint:**
   - Heading font: **Cormorant Garamond** (Google Fonts) for literary authority without dated clichés.
   - Body & UI font: **Inter** for crisp legibility and high contrast.
   - Colour Palette: Deep Navy (`#0F1F3D`), Ivory (`#F8F5EE`), Brass (`#B8996A`), Mist (`#E8E4DC`), Charcoal (`#2C2C2C`).
   - Clichés avoided: No decorative columns, scales of justice watermarks, or gavels.

2. **Mobile-First Responsive Layout:**
   - Tested and verified across all standard viewports: 320px, 375px, 768px, 1024px, and 1440px+.
   - Smooth slide-out mobile drawer with body scroll locking and Escape-key closure.

3. **Accessibility & WCAG 2.2 AA Focus:**
   - Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Single distinct `<h1>` per page.
   - Visible brass focus indicators (`focus-visible:outline-2 focus-visible:outline-[#B8996A]`).
   - Fully supports `prefers-reduced-motion: reduce`.

4. **Interactive Demo Form (Zero Backend Transmission):**
   - Live client-side validation for name, email format, and enquiry.
   - Accessible error announcements and feedback state.
   - Prominent notices instructing visitors that this is a prototype and not to submit confidential or privileged information.

---

## 5. Information Requiring Client Confirmation

The following details are currently held in placeholders and must be confirmed by the client for the production launch:

1. **Firm & Attorney Name:** Exact legal entity name and preferred professional title.
2. **Practice Areas:** Final selection of legal services to replace the sample disciplines.
3. **Headshot & Imagery:** High-resolution professional portrait and any preferred office/architectural imagery.
4. **Verified Credentials:** Official law school, bar admissions, jurisdictions, and professional memberships.
5. **Contact Details:** Official telephone number, office address, suite number, and intake email address.
6. **Office Hours & Consultations:** Consultation availability, policies, and whether consultations are complimentary or fee-based.

---

## 6. Known Limitations (Mockup Scope)

- **No Backend / Database:** The contact form provides a simulated frontend confirmation state only. No data is stored, transmitted, or logged.
- **Representative Content:** Credentials and practice areas are sample structures pending client documentation.
- **Map Integration:** The office location map is a styled UI placeholder awaiting client address and Google Maps API key / embed URL.
