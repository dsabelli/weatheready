import React, { forwardRef } from "react";
import { Tooltip } from "@mantine/core";

const UmbrellaIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-5 md:w-7" ref={ref}>
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
  return (
    <Tooltip label="Rain">
      <UmbrellaIcon />
    </Tooltip>
  );
};

export default Umbrella;
