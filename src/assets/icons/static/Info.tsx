import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const InfoIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-4 md:w-5 z-30" ref={ref}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="stroke-current"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  </div>
));

const Info = ({ children }: { children: any }) => {
  let info;

  if (window.innerWidth >= 768) {
    info = (
      <Tooltip label={children}>
        <InfoIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    info = (
      <Popover width={100} position="top">
        <Popover.Target>
          <InfoIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-base-content text-sm font-bold text-center">
            {children}
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{info}</>;
};
export default Info;
