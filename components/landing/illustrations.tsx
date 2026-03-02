import React from "react";

export const GridPattern = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <pattern
        id="grid-pattern"
        x="0"
        y="0"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M0 40V0H40"
          stroke="url(#grid-gradient)"
          strokeWidth="1"
          strokeOpacity="0.5"
          fill="none"
        />
      </pattern>
      <linearGradient
        id="grid-gradient"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#10b981" stopOpacity="0.1" />
        <stop offset="1" stopColor="#14b8a6" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>
);

export const ResumeIllustration = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Floating Elements Background */}
    <circle cx="320" cy="50" r="40" fill="url(#grad1)" opacity="0.6" />
    <circle cx="80" cy="250" r="60" fill="url(#grad2)" opacity="0.4" />
    <path
      d="M 350 200 Q 380 230 360 260 T 310 240 Z"
      fill="url(#grad3)"
      opacity="0.5"
    />

    {/* Main Resume Card */}
    <g transform="translate(110, 20)">
      <rect
        width="180"
        height="250"
        rx="8"
        fill="white"
        filter="url(#drop-shadow)"
      />
      {/* Header */}
      <rect
        x="20"
        y="25"
        width="40"
        height="40"
        rx="20"
        fill="#10b981"
        opacity="0.2"
      />
      <circle cx="40" cy="45" r="12" fill="#10b981" />
      <rect x="75" y="30" width="80" height="12" rx="4" fill="#334155" />
      <rect x="75" y="50" width="50" height="8" rx="4" fill="#94a3b8" />

      {/* Content Lines */}
      <rect x="20" y="90" width="140" height="6" rx="3" fill="#e2e8f0" />
      <rect x="20" y="105" width="120" height="6" rx="3" fill="#e2e8f0" />
      <rect x="20" y="120" width="130" height="6" rx="3" fill="#e2e8f0" />

      {/* Experience block 1 */}
      <rect x="20" y="150" width="60" height="8" rx="4" fill="#10b981" />
      <rect x="20" y="165" width="140" height="4" rx="2" fill="#cbd5e1" />
      <rect x="20" y="175" width="125" height="4" rx="2" fill="#cbd5e1" />

      {/* Experience block 2 */}
      <rect x="20" y="200" width="70" height="8" rx="4" fill="#14b8a6" />
      <rect x="20" y="215" width="135" height="4" rx="2" fill="#cbd5e1" />
      <rect x="20" y="225" width="115" height="4" rx="2" fill="#cbd5e1" />
    </g>

    {/* Floating smaller cards */}
    <g transform="translate(40, 60)" filter="url(#drop-shadow-sm)">
      <rect width="90" height="50" rx="6" fill="white" />
      <path
        d="M70 20 L75 25 L85 15"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="15" y="15" width="45" height="6" rx="3" fill="#334155" />
      <rect x="15" y="30" width="30" height="4" rx="2" fill="#cbd5e1" />
    </g>

    <g transform="translate(260, 160)" filter="url(#drop-shadow-sm)">
      <rect width="100" height="60" rx="6" fill="white" />
      <rect
        x="15"
        y="15"
        width="20"
        height="20"
        rx="4"
        fill="#06b6d4"
        opacity="0.2"
      />
      <path
        d="M20 25 L25 30 L30 20"
        stroke="#06b6d4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="45" y="18" width="40" height="6" rx="3" fill="#334155" />
      <rect x="45" y="32" width="30" height="4" rx="2" fill="#cbd5e1" />
    </g>

    <defs>
      <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#34d399" />
        <stop offset="1" stopColor="#10b981" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#2dd4bf" />
        <stop offset="1" stopColor="#14b8a6" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#22d3ee" />
        <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
      </linearGradient>
      <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.1" />
      </filter>
      <filter id="drop-shadow-sm" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1" />
      </filter>
    </defs>
  </svg>
);

export const AbstractRings = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="100"
      cy="100"
      r="90"
      stroke="url(#ring-grad1)"
      strokeWidth="1"
      strokeDasharray="4 8"
      opacity="0.5"
    />
    <circle
      cx="100"
      cy="100"
      r="70"
      stroke="url(#ring-grad2)"
      strokeWidth="2"
      opacity="0.3"
    />
    <circle
      cx="100"
      cy="100"
      r="50"
      stroke="url(#ring-grad3)"
      strokeWidth="1"
      strokeDasharray="2 4"
      opacity="0.6"
    />

    <defs>
      <linearGradient id="ring-grad1" x1="0" y1="0" x2="200" y2="200">
        <stop stopColor="#10b981" />
        <stop offset="1" stopColor="#14b8a6" />
      </linearGradient>
      <linearGradient id="ring-grad2" x1="0" y1="0" x2="200" y2="200">
        <stop stopColor="#22d3ee" />
        <stop offset="1" stopColor="#10b981" />
      </linearGradient>
      <linearGradient id="ring-grad3" x1="0" y1="200" x2="200" y2="0">
        <stop stopColor="#14b8a6" />
        <stop offset="1" stopColor="#2dd4bf" />
      </linearGradient>
    </defs>
  </svg>
);
