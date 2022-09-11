import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";
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
  let navigation;

  if (window.innerWidth >= 768) {
    navigation = (
      <Tooltip label="Wind Speed / Direction">
        <div style={{ transform: `rotate(${rotate - 180}deg)` }}>
          <NavigationIcon />
        </div>
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    navigation = (
      <Popover width={100} position="top">
        <Popover.Target>
          <div style={{ transform: `rotate(${rotate - 180}deg)` }}>
            <NavigationIcon />
          </div>
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-primary-content text-sm font-bold text-center">
            Wind Speed / Direction
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{navigation}</>;
};

export default Navigation;
