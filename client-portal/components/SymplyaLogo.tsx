export default function SymplyaLogo({
  variant = 'full',
  className = '',
}: {
  variant?: 'full' | 'icon' | 'white'
  className?: string
}) {
  if (variant === 'icon') {
    return (
      <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g-icon" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0d2d70" />
            <stop offset="100%" stopColor="#39b54a" />
          </linearGradient>
        </defs>
        {/* Bulle de dialogue */}
        <path
          d="M20 4C11.163 4 4 10.716 4 19c0 4.21 1.8 8.02 4.72 10.78L6 36l7.04-2.34C14.96 34.53 17.42 35 20 35c8.837 0 16-6.716 16-15S28.837 4 20 4z"
          stroke="url(#g-icon)" strokeWidth="2.2" strokeLinejoin="round"
        />
        {/* Coche */}
        <path
          d="M13 19.5l4.5 4.5 9-9"
          stroke="url(#g-icon)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Nœuds réseau */}
        <circle cx="32" cy="16" r="2" fill="#39b54a" />
        <circle cx="28" cy="23" r="1.5" fill="#1a6fd4" />
        <circle cx="35" cy="24" r="1.5" fill="#0d2d70" />
        <line x1="32" y1="16" x2="28" y2="23" stroke="#39b54a" strokeWidth="1.2" />
        <line x1="28" y1="23" x2="35" y2="24" stroke="#1a6fd4" strokeWidth="1.2" />
        <line x1="32" y1="16" x2="35" y2="24" stroke="#0d2d70" strokeWidth="1.2" />
      </svg>
    )
  }

  if (variant === 'white') {
    return (
      <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 4C11.163 4 4 10.716 4 19c0 4.21 1.8 8.02 4.72 10.78L6 36l7.04-2.34C14.96 34.53 17.42 35 20 35c8.837 0 16-6.716 16-15S28.837 4 20 4z"
          stroke="white" strokeWidth="2.2" strokeLinejoin="round" strokeOpacity="0.9"
        />
        <path
          d="M13 19.5l4.5 4.5 9-9"
          stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
        />
        <circle cx="32" cy="16" r="2" fill="white" fillOpacity="0.8" />
        <circle cx="28" cy="23" r="1.5" fill="white" fillOpacity="0.6" />
        <circle cx="35" cy="24" r="1.5" fill="white" fillOpacity="0.5" />
        <line x1="32" y1="16" x2="28" y2="23" stroke="white" strokeWidth="1.2" strokeOpacity="0.6" />
        <line x1="28" y1="23" x2="35" y2="24" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
        <line x1="32" y1="16" x2="35" y2="24" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
      </svg>
    )
  }

  // variant === 'full'
  return (
    <svg className={className} viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g-full" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0d2d70" />
          <stop offset="100%" stopColor="#39b54a" />
        </linearGradient>
      </defs>
      {/* Icon */}
      <path
        d="M30 4C19.5 4 11 11.7 11 21c0 4.5 1.9 8.6 5 11.5L13.5 39l7.5-2.5C22.9 37 26.4 37.5 30 37.5c10.5 0 19-7.7 19-17.5S40.5 4 30 4z"
        stroke="url(#g-full)" strokeWidth="2" strokeLinejoin="round"
      />
      <path
        d="M22 21l4.5 4.5 8.5-8.5"
        stroke="url(#g-full)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="46" cy="15" r="2" fill="#39b54a" />
      <circle cx="42" cy="22" r="1.5" fill="#1a6fd4" />
      <circle cx="49" cy="23" r="1.5" fill="#0d2d70" />
      <line x1="46" y1="15" x2="42" y2="22" stroke="#39b54a" strokeWidth="1.2" />
      <line x1="42" y1="22" x2="49" y2="23" stroke="#1a6fd4" strokeWidth="1.2" />
      <line x1="46" y1="15" x2="49" y2="23" stroke="#0d2d70" strokeWidth="1.2" />
      {/* SYMPLYA text */}
      <text x="64" y="26" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="20" fill="#0d2d70" letterSpacing="1">
        SYMPLY
      </text>
      <text x="158" y="26" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="20" fill="#39b54a" letterSpacing="1">
        A
      </text>
      {/* Tagline */}
      <text x="64" y="40" fontFamily="system-ui, sans-serif" fontWeight="400" fontSize="9" fill="#39b54a" letterSpacing="2">
        ESPACE CLIENT
      </text>
    </svg>
  )
}
