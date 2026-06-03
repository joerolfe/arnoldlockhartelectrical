export default function ALLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 230 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Arnold Lockhart Electrical Fire & Security"
    >
      {/* ── Icon mark ─────────────────────────────── */}

      {/* Grey left leg of the A */}
      <polygon points="2,62 13,62 30,6 20,6" fill="#a0a0a0" />
      {/* Grey right leg upper portion (above the bolt) */}
      <polygon points="30,6 41,6 45,18 34,18" fill="#a0a0a0" />
      {/* Grey crossbar */}
      <rect x="17" y="37" width="16" height="6" rx="1" fill="#a0a0a0" />
      {/* Red lightning bolt */}
      <polygon
        points="42,6 28,34 37,34 23,62 47,28 38,28 52,6"
        fill="#dc2626"
      />

      {/* ── Wordmark ──────────────────────────────── */}

      {/* "Arnold" */}
      <text
        x="64"
        y="24"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="17"
        fontWeight="400"
        fill="#9a9a9a"
        letterSpacing="0.4"
      >
        Arnold
      </text>

      {/* "Lockhart" */}
      <text
        x="64"
        y="43"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="17"
        fontWeight="400"
        fill="#9a9a9a"
        letterSpacing="0.4"
      >
        Lockhart
      </text>

      {/* "Electrical" */}
      <text
        x="64"
        y="57"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="10.5"
        fontWeight="700"
        fill="#dc2626"
        letterSpacing="0.3"
      >
        Electrical
      </text>

      {/* "Fire & Security" */}
      <text
        x="128"
        y="57"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="10.5"
        fontWeight="700"
        fill="#dc2626"
        letterSpacing="0.3"
      >
        Fire &amp; Security
      </text>
    </svg>
  )
}
