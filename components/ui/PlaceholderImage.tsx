interface PlaceholderImageProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
}

/**
 * Renders a clearly labelled placeholder box wherever a client-supplied
 * image is expected. Replace with <Image> from "next/image" once assets arrive.
 */
export default function PlaceholderImage({
  label = "Image Placeholder",
  aspectRatio = "3/4",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[#E8E4DC] flex flex-col items-center justify-center gap-3 ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      {/* Grid overlay for visual texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="placeholder-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#2C2C2C" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#placeholder-grid)" />
      </svg>

      {/* Camera icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4A4A4A"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>

      <span
        className="text-[#4A4A4A] text-xs font-[var(--font-inter)] font-medium tracking-wide text-center px-4 max-w-[320px] leading-relaxed"
      >
        {label}
      </span>
    </div>
  );
}
