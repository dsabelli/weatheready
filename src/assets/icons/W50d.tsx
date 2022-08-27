import React from "react";

const W50d = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 64 64"
      >
        <defs>
          <linearGradient
            id="a"
            x1="27.5"
            x2="36.5"
            y1="17.21"
            y2="32.79"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#d4d7dd" />
            <stop offset=".45" stopColor="#d4d7dd" />
            <stop offset="1" stopColor="#bec1c6" />
          </linearGradient>
          <linearGradient id="b" y1="24.21" y2="39.79" xlinkHref="#a" />
          <linearGradient id="c" y1="31.21" y2="46.79" xlinkHref="#a" />
        </defs>
        <path
          fill="none"
          stroke="url(#a)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M17 25h30"
        >
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="5s"
            repeatCount="indefinite"
            type="translate"
            values="-4 0; 4 0; -4 0"
          />
        </path>
        <path
          fill="none"
          stroke="url(#b)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M17 32h30"
        >
          <animateTransform
            attributeName="transform"
            begin="-2s"
            dur="5s"
            repeatCount="indefinite"
            type="translate"
            values="-3 0; 3 0; -3 0"
          />
        </path>
        <path
          fill="none"
          stroke="url(#c)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M17 39h30"
        >
          <animateTransform
            attributeName="transform"
            begin="-4s"
            dur="5s"
            repeatCount="indefinite"
            type="translate"
            values="-4 0; 4 0; -4 0"
          />
        </path>
      </svg>
    </div>
  );
};

export default W50d;
