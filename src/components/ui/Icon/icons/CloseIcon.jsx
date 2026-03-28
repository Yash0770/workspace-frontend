export default function CloseIcon({ strokeWidth = 2 }) {
  return (
    <path
      d="M6 6l12 12M6 18L18 6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  );
}