export default function MenuIcon({ strokeWidth = 2 }) {
  return (
    <>
      <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
    </>
  );
}