import React from "react";

const A10n = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 64 64"
      >
        <defs>
          <linearGradient
            id="b"
            x1="13.58"
            x2="24.15"
            y1="15.57"
            y2="33.87"
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
              values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"
            />
          </linearGradient>
          <linearGradient
            id="c"
            x1="22.56"
            x2="39.2"
            y1="21.96"
            y2="50.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#f3f7fe" />
            <stop offset=".45" stopColor="#f3f7fe" />
            <stop offset="1" stopColor="#deeafb" />
          </linearGradient>
          <linearGradient
            id="a"
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
            xlinkHref="#a"
          />
          <linearGradient
            id="e"
            x1="36.53"
            x2="39.47"
            y1="42.95"
            y2="48.05"
            xlinkHref="#a"
          />
        </defs>
        <path
          fill="#72b9d5"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".5"
          d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"
        >
          <animateTransform
            attributeName="transform"
            dur="10s"
            repeatCount="indefinite"
            type="rotate"
            values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"
          />
        </path>
        <path
          fill="#e6effc"
          stroke="#e6effc"
          strokeMiterlimit="10"
          strokeWidth=".5"
          d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
        />
        <path
          fill="none"
          stroke="url(#a)"
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

export default A10n;
