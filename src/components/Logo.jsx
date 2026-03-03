export default function Logo({ size = 40, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fondo hexagonal */}
      <path 
        d="M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z" 
        fill="url(#gradient1)"
        stroke="url(#gradient2)"
        strokeWidth="2"
      />
      
      {/* Líneas de código decorativas */}
      <line x1="25" y1="30" x2="40" y2="30" stroke="#10b981" strokeWidth="2" opacity="0.5"/>
      <line x1="60" y1="70" x2="75" y2="70" stroke="#10b981" strokeWidth="2" opacity="0.5"/>
      <circle cx="45" cy="30" r="2" fill="#34d399"/>
      <circle cx="55" cy="70" r="2" fill="#34d399"/>
      
      {/* Letra K */}
      <path 
        d="M30 35 L30 55 M30 45 L40 35 M30 45 L40 55" 
        stroke="#ffffff" 
        strokeWidth="3.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Letra P */}
      <path 
        d="M48 35 L48 55 M48 35 L56 35 Q60 35 60 40 Q60 45 56 45 L48 45" 
        stroke="#ffffff" 
        strokeWidth="3.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Letra D */}
      <path 
        d="M68 35 L68 55 M68 35 L74 35 Q78 35 78 45 Q78 55 74 55 L68 55" 
        stroke="#ffffff" 
        strokeWidth="3.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Gradientes */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#064e3b" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#065f46" stopOpacity="0.7"/>
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981"/>
          <stop offset="100%" stopColor="#34d399"/>
        </linearGradient>
      </defs>
    </svg>
  )
}
