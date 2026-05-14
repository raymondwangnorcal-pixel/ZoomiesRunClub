export function PawPrint({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className={className}
      fill="currentColor"
    >
      <circle cx="18" cy="20" r="8" />
      <circle cx="32" cy="14" r="8" />
      <circle cx="46" cy="20" r="8" />
      <circle cx="24" cy="35" r="7" />
      <circle cx="40" cy="35" r="7" />
      <path d="M18 43c0-9 7-15 14-15s14 6 14 15c0 8-6 12-14 12s-14-4-14-12Z" />
    </svg>
  );
}

export function RouteLine({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 220"
      className={className}
      fill="none"
    >
      <path
        d="M18 166C74 50 155 52 203 112c52 66 110 86 172 11 43-52 92-58 127-17"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="1 24"
      />
      <path
        d="M18 166C74 50 155 52 203 112c52 66 110 86 172 11 43-52 92-58 127-17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
