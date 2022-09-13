import React from "react";
import { IconProps } from "../../../types";

const Compass: React.FC<IconProps> = ({ className }) => {
  return (
    <div className={` ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <defs>
          <linearGradient
            id="a"
            x1="23"
            x2="41"
            y1="16.41"
            y2="47.59"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#6b7280" />
            <stop offset=".45" stopColor="#6b7280" />
            <stop offset="1" stopColor="#374151" />
          </linearGradient>
        </defs>
        <circle
          cx="32"
          cy="32"
          r="18"
          fill="url(#a)"
          stroke="#e5e7eb"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth=".5"
          d="M36.47 39.46l-4.3-15.09a.17.17 0 00-.17-.17.16.16 0 00-.17.17l-4.32 15.09a.35.35 0 00.07.29q.06.11.24 0l4-1.5a.47.47 0 01.33 0l4 1.5c.13.07.22.07.28 0a.26.26 0 00.04-.29z"
        >
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            dur="1s"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
            repeatCount="indefinite"
            type="rotate"
            values="-3 32 32;3 32 32;-3 32 32"
          />
        </path>
      </svg>
    </div>
  );
};

export default Compass;
