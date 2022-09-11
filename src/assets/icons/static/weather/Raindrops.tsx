import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const RaindropsIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-5 md:w-7" ref={ref}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-cloud-rain"
    >
      <line x1="16" y1="13" x2="16" y2="21"></line>
      <line x1="8" y1="13" x2="8" y2="21"></line>
      <line x1="12" y1="15" x2="12" y2="23"></line>
      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
    </svg>
  </div>
));

const Raindrops = () => {
  let raindrops;

  if (window.innerWidth >= 768) {
    raindrops = (
      <Tooltip label="Rain">
        <RaindropsIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    raindrops = (
      <Popover width={100} position="top">
        <Popover.Target>
          <RaindropsIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-primary-content text-sm font-bold text-center">
            Rain
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{raindrops}</>;
};

export default Raindrops;
