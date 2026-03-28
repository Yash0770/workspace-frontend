import { ICON_MAP } from "./iconMap";

export default function Icon({
  name,
  size = 20,
  className = "",
  strokeWidth = 2,
}) {
  const IconComponent = ICON_MAP[name];  

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <IconComponent strokeWidth={strokeWidth} />
    </svg>
  );
}