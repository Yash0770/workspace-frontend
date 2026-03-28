export default function BellIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M15 17h5l-1.5-1.5A2 2 0 0118 14V11a6 6 0 10-12 0v3c0 .5-.2 1-.6 1.4L4 17h5" />
      <path d="M9 17a3 3 0 006 0" />
    </svg>
  );
}