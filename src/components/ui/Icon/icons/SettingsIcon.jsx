export default function SettingsIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M12 8a4 4 0 100 8 4 4 0 000-8z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M2 12h2m16 0h2M12 2v2m0 16v2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}