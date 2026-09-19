interface DividerProps {
  className?: string;
  width?: string;
}

/** A brass horizontal rule used as a section accent. */
export default function Divider({ className = "", width = "48px" }: DividerProps) {
  return (
    <span
      className={`block h-[2px] bg-[#B8996A] ${className}`}
      style={{ width }}
      aria-hidden="true"
    />
  );
}
