import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const UmbrellaIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-5 md:w-6" ref={ref}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-umbrella"
    >
      <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
    </svg>
  </div>
));

const Umbrella = () => {
  let umbrella;

  if (window.innerWidth >= 768) {
    umbrella = (
      <Tooltip label="Chance of Precipitation">
        <UmbrellaIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    umbrella = (
      <Popover width={100} position="top">
        <Popover.Target>
          <UmbrellaIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-primary-content text-sm font-bold text-center">
            Chance of Precipitation
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{umbrella}</>;
};

export default Umbrella;
