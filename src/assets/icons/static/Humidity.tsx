import React from "react";
import { IconProps } from "../../../types";
const Humidity: React.FC<IconProps> = ({ className }) => {
  return (
    <div className={` ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          data-name="layer2"
          d="M51.9 40.1a20.6 20.6 0 0 0-1-4.9C46.9 20.8 32 2 32 2S17.1 20.8 13 35.2a20.6 20.6 0 0 0-1 4.9c0 .5-.1 1-.1 1.5A20.2 20.2 0 0 0 32 62a20.2 20.2 0 0 0 20-20.4c0-.5 0-1-.1-1.5z"
          fill="none"
          stroke="#202020"
          stroke-miterlimit="10"
          stroke-width="3"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
        <path
          data-name="layer1"
          fill="none"
          stroke="#202020"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M38L0L26 50"
          strokeLinejoin="round"
          stroke-linecap="round"
        ></path>
        <circle
          data-name="layer1"
          cx="26"
          cy="32"
          r="4"
          fill="none"
          stroke="#202020"
          strokeMiterlimit="10"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></circle>
        <circle
          data-name="layer1"
          cx="38"
          cy="48"
          r="4"
          fill="none"
          stroke="#202020"
          strokeMiterlimit="10"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></circle>
      </svg>
    </div>
  );
};

export default Humidity;
