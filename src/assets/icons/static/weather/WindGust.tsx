import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const WindGustIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-5 md:w-7" ref={ref}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-wind"
    >
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
    </svg>
  </div>
));

const WindGust = () => {
  let windGust;

  if (window.innerWidth >= 768) {
    windGust = (
      <Tooltip label="Wind Gust">
        <WindGustIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    windGust = (
      <Popover width={100} position="top">
        <Popover.Target>
          <WindGustIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-base-content text-sm font-bold text-center">
            Wind Gust
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{windGust}</>;
};

export default WindGust;
