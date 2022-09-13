import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const HumidityIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-5 md:w-7" ref={ref}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      role="img"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        data-name="layer2"
        d="M51.9 40.1a20.6 20.6 0 0 0-1-4.9C46.9 20.8 32 2 32 2S17.1 20.8 13 35.2a20.6 20.6 0 0 0-1 4.9c0 .5-.1 1-.1 1.5A20.2 20.2 0 0 0 32 62a20.2 20.2 0 0 0 20-20.4c0-.5 0-1-.1-1.5z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      ></path>
      <path
        data-name="layer1"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M38 30L26 50"
        strokeLinejoin="round"
        strokeLinecap="round"
      ></path>
      <circle
        data-name="layer1"
        cx="26"
        cy="32"
        r="4"
        fill="none"
        stroke="currentColor"
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
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      ></circle>
    </svg>
  </div>
));

const Humidity = () => {
  let humidity;

  if (window.innerWidth >= 768) {
    humidity = (
      <Tooltip label="Humidity">
        <HumidityIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    humidity = (
      <Popover width={100} position="top">
        <Popover.Target>
          <HumidityIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-base-content text-sm font-bold text-center">
            Humidity
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{humidity}</>;
};

export default Humidity;
