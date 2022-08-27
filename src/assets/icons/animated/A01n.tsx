import React from "react";

const A01n = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <defs>
          <linearGradient
            id="a"
            x1="21.92"
            x2="38.52"
            y1="18.75"
            y2="47.52"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#86c3db" />
            <stop offset=".45" stopColor="#86c3db" />
            <stop offset="1" stopColor="#5eafcf" />
            <animateTransform
              attributeName="gradientTransform"
              dur="10s"
              repeatCount="indefinite"
              type="rotate"
              values="5 32 32; -15 32 32; 5 32 32"
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#a)"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".5"
          d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"
        >
          <animateTransform
            attributeName="transform"
            dur="10s"
            repeatCount="indefinite"
            type="rotate"
            values="-5 32 32; 15 32 32; -5 32 32"
          />
        </path>
      </svg>
    </div>
  );
};

export default A01n;
