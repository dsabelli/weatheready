import React from "react";

const W04n = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <defs>
          <linearGradient
            id="a"
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
        </defs>
        <path
          fill="url(#a)"
          stroke="#e6effc"
          strokeMiterlimit="10"
          strokeWidth=".5"
          d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
        >
          <animateTransform
            attributeName="transform"
            dur="7s"
            repeatCount="indefinite"
            type="translate"
            values="-3 0; 3 0; -3 0"
          />
        </path>
      </svg>
    </div>
  );
};

export default W04n;
