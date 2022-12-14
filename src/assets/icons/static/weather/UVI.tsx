import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const UVIIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-5 md:w-7" ref={ref}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-sun"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  </div>
));

const UVI = () => {
  let uvi;

  if (window.innerWidth >= 768) {
    uvi = (
      <Tooltip label="UVI">
        <UVIIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    uvi = (
      <Popover width={100} position="top">
        <Popover.Target>
          <UVIIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-base-content text-sm font-bold text-center">
            UVI
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{uvi}</>;
};

export default UVI;
