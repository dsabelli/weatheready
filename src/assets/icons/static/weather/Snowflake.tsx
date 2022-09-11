import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const SnowflakeIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-5 md:w-7" ref={ref}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-cloud-snow"
    >
      <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
      <line x1="8" y1="16" x2="8.01" y2="16"></line>
      <line x1="8" y1="20" x2="8.01" y2="20"></line>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
      <line x1="12" y1="22" x2="12.01" y2="22"></line>
      <line x1="16" y1="16" x2="16.01" y2="16"></line>
      <line x1="16" y1="20" x2="16.01" y2="20"></line>
    </svg>
  </div>
));

const Snowflake = () => {
  let snowflake;

  if (window.innerWidth >= 768) {
    snowflake = (
      <Tooltip label="Snow">
        <SnowflakeIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    snowflake = (
      <Popover width={100} position="top">
        <Popover.Target>
          <SnowflakeIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-primary-content text-sm font-bold text-center">
            Snow
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{snowflake}</>;
};

export default Snowflake;
