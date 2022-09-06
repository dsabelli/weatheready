import React, { forwardRef } from "react";
import { Tooltip } from "@mantine/core";
import { IconProps } from "../../../../types";

export const NavIcon: React.FC<IconProps> = ({ className, rotate = 180 }) => {
  return (
    <div
      className={` ${className}`}
      style={{ transform: `rotate(${rotate - 180}deg)` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-navigation-2"
      >
        <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
      </svg>
    </div>
  );
};

const NavigationIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div className="w-5 md:w-7" ref={ref} {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-navigation-2"
    >
      <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
    </svg>
  </div>
));

const Navigation: React.FC<IconProps> = ({ rotate = 180 }) => {
  return (
    <Tooltip label="Wind Speed/Direction">
      <div style={{ transform: `rotate(${rotate - 180}deg)` }}>
        <NavigationIcon />
      </div>
    </Tooltip>
  );
};

export default Navigation;
