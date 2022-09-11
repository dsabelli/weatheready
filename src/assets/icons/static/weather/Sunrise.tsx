import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const SunriseIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-5 md:w-7" ref={ref}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-sunrise"
    >
      <path d="M17 18a5 5 0 0 0-10 0"></path>
      <line x1="12" y1="2" x2="12" y2="9"></line>
      <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
      <line x1="1" y1="18" x2="3" y2="18"></line>
      <line x1="21" y1="18" x2="23" y2="18"></line>
      <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
      <line x1="23" y1="22" x2="1" y2="22"></line>
      <polyline points="8 6 12 2 16 6"></polyline>
    </svg>
  </div>
));

const Sunrise = () => {
  let sunrise;

  if (window.innerWidth >= 768) {
    sunrise = (
      <Tooltip label="Sunrise">
        <SunriseIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    sunrise = (
      <Popover width={100} position="top">
        <Popover.Target>
          <SunriseIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-primary-content text-sm font-bold text-center">
            Sunrise
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{sunrise}</>;
};

export default Sunrise;
