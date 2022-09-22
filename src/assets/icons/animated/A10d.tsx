import React from "react";

const A10d = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 64 64"
      >
        <defs>
          <linearGradient
            id="f"
            x1="22.53"
            x2="25.47"
            y1="42.95"
            y2="48.05"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#4286ee" />
            <stop offset=".45" stopColor="#4286ee" />
            <stop offset="1" stopColor="#0950bc" />
          </linearGradient>

          <linearGradient
            id="d"
            x1="29.53"
            x2="32.47"
            y1="42.95"
            y2="48.05"
            xlinkHref="#f"
          />

          <linearGradient
            id="e"
            x1="36.53"
            x2="39.47"
            y1="42.95"
            y2="48.05"
            xlinkHref="#f"
          />
        </defs>
        <circle
          cx="19"
          cy="24"
          r="5"
          fill="#fbbf24"
          stroke="#f8af18"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <path
          fill="none"
          stroke="#fbbf24"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
        >
          <animateTransform
            attributeName="transform"
            dur="45s"
            repeatCount="indefinite"
            type="rotate"
            values="0 19 24; 360 19 24"
          />
        </path>
        <path
          fill="#f3f7fe"
          stroke="#e6effc"
          strokeMiterlimit="10"
          strokeWidth=".5"
          d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
        />
        <path
          fill="none"
          stroke="url(#f)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M24.39 43.03l-.78 4.94"
        >
          <animateTransform
            attributeName="transform"
            dur="0.7s"
            repeatCount="indefinite"
            type="translate"
            values="1 -5; -2 10"
          />
          <animate
            attributeName="opacity"
            dur="0.7s"
            repeatCount="indefinite"
            values="0;1;1;0"
          />
        </path>
        <path
          fill="none"
          stroke="url(#d)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M31.39 43.03l-.78 4.94"
        >
          <animateTransform
            attributeName="transform"
            begin="-0.4s"
            dur="0.7s"
            repeatCount="indefinite"
            type="translate"
            values="1 -5; -2 10"
          />
          <animate
            attributeName="opacity"
            begin="-0.4s"
            dur="0.7s"
            repeatCount="indefinite"
            values="0;1;1;0"
          />
        </path>
        <path
          fill="none"
          stroke="url(#e)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M38.39 43.03l-.78 4.94"
        >
          <animateTransform
            attributeName="transform"
            begin="-0.2s"
            dur="0.7s"
            repeatCount="indefinite"
            type="translate"
            values="1 -5; -2 10"
          />
          <animate
            attributeName="opacity"
            begin="-0.2s"
            dur="0.7s"
            repeatCount="indefinite"
            values="0;1;1;0"
          />
        </path>
      </svg>
    </div>
  );
};

export default A10d;
