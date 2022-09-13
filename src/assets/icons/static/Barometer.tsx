import React from "react";

const Barometer = () => {
  return (
    <div className="w-7 md:w-10 animate-pulse-slow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <defs>
          <linearGradient
            id="a"
            x1="23"
            y1="16.41"
            x2="41"
            y2="47.59"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#6b7280" />
            <stop offset="0.45" stopColor="#6b7280" />
            <stop offset="1" stopColor="#374151" />
          </linearGradient>
        </defs>
        <circle
          cx="32"
          cy="32"
          r="18"
          stroke="#e5e7eb"
          strokeMiterlimit="10"
          strokeWidth="2"
          fill="url(#a)"
        />
        <path
          d="M32,25V19M45.5,32h-6M25,32H19m22.5-8.5-3,3m-13,0-3-3m16,14,3,3m-19,0,3-3"
          fill="none"
          stroke="#9ca3af"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="32" r="3" fill="#ef4444" />
        <line
          x1="32"
          y1="35.5"
          x2="32"
          y2="20.5"
          fill="none"
          stroke="#ef4444"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default Barometer;
