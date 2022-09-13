import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const SunsetIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-5 md:w-7" ref={ref}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-sunset"
    >
      <path d="M17 18a5 5 0 0 0-10 0"></path>
      <line x1="12" y1="9" x2="12" y2="2"></line>
      <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
      <line x1="1" y1="18" x2="3" y2="18"></line>
      <line x1="21" y1="18" x2="23" y2="18"></line>
      <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
      <line x1="23" y1="22" x2="1" y2="22"></line>
      <polyline points="16 5 12 9 8 5"></polyline>
    </svg>
  </div>
));

const Sunset = () => {
  let sunset;

  if (window.innerWidth >= 768) {
    sunset = (
      <Tooltip label="Sunset">
        <SunsetIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    sunset = (
      <Popover width={100} position="top">
        <Popover.Target>
          <SunsetIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-base-content text-sm font-bold text-center">
            Sunset
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{sunset}</>;
};

export default Sunset;
