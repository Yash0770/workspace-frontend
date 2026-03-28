export default function PlusIcon({ strokeWidth = 2 }) {
  return (
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  );
}