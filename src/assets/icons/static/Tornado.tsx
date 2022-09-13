import React from "react";
import { IconProps } from "../../../types";

const Tornado: React.FC<IconProps> = ({ className }) => {
  return (
    <div className={` ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <defs>
          <linearGradient
            id="a"
            x1="27.5"
            x2="36.5"
            y1="12.21"
            y2="27.79"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#d4d7dd" />
            <stop offset=".45" stopColor="#d4d7dd" />
            <stop offset="1" stopColor="#bec1c6" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="28"
            x2="36"
            y1="19.07"
            y2="32.93"
            href="#a"
          />
          <linearGradient
            id="c"
            x1="28.63"
            x2="35.38"
            y1="26.15"
            y2="37.85"
            href="#a"
          />
          <linearGradient
            id="d"
            x1="29.25"
            x2="34.75"
            y1="33.24"
            y2="42.76"
            href="#a"
          />
          <linearGradient
            id="e"
            x1="30.25"
            x2="33.75"
            y1="40.97"
            y2="47.03"
            href="#a"
          />
        </defs>
        <path
          fill="none"
          stroke="url(#a)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M17 20h30"
        >
          <animateTransform
            attributeName="transform"
            dur="2s"
            repeatCount="indefinite"
            type="translate"
            values="-3 0; 3 0; -3 0"
          />
        </path>
        <path
          fill="none"
          stroke="url(#b)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M19 26h26"
        >
          <animateTransform
            attributeName="transform"
            begin="-0.2s"
            dur="2s"
            repeatCount="indefinite"
            type="translate"
            values="-4 0; 4 0; -4 0"
          />
        </path>
        <path
          fill="none"
          stroke="url(#c)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M21.5 32h21"
        >
          <animateTransform
            attributeName="transform"
            begin="-0.4s"
            dur="2s"
            repeatCount="indefinite"
            type="translate"
            values="-5 0; 5 0; -5 0"
          />
        </path>
        <path
          fill="none"
          stroke="url(#d)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M24 38h16"
        >
          <animateTransform
            attributeName="transform"
            begin="-0.6s"
            dur="2s"
            repeatCount="indefinite"
            type="translate"
            values="-6 0; 6 0; -6 0"
          />
        </path>
        <path
          fill="none"
          stroke="url(#e)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M28 44h8"
        >
          <animateTransform
            attributeName="transform"
            begin="-0.8s"
            dur="2s"
            repeatCount="indefinite"
            type="translate"
            values="-7 0; 7 0; -7 0"
          />
        </path>
      </svg>
    </div>
  );
};

export default Tornado;
