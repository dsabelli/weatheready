import React, { forwardRef } from "react";
import { Tooltip } from "@mantine/core";

const CloudsIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-5 md:w-7" ref={ref}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-cloud"
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
  </div>
));

const Clouds = () => {
  return (
    <Tooltip label="Cloud Cover">
      <CloudsIcon />
    </Tooltip>
  );
};

export default Clouds;
