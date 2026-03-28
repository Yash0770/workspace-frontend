export default function SearchIcon({ strokeWidth = 2 }) {
  return (
    <>
    <h1>search</h1>
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <line
        x1="20"
        y1="20"
        x2="16.5"
        y2="16.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </>
  );
}