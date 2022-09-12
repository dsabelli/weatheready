import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const TShirtIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-10 md:w-14 z-30" ref={ref}>
    <svg
      version="1.1"
      viewBox="75 0 550 550"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="8"
    >
      <path d="m299.62 31.906-58.273 21.254c-22.016 8.0312-42.383 19.996-60.113 35.316l-80.48 69.543 53.59 73.648 55.043-34.832 1.5469 332.36h284.16v-332.32l56.082 34.738 48.066-73.543-76.566-67.84c-18.578-16.465-40.156-29.191-63.551-37.488l-58.867-20.875c-3.3906 26.102-38.469 69.18-50.316 69.18-11.969 0-46.949-42.762-50.32-69.145zm-92.996 173.3 1.4805-0.9375-1.4883-0.81641-0.007813-1.5508-1.3086 0.82812-1.4922-0.81641 0.007812 1.7539-47.977 30.363c-1.2461 0.78906-2.8906 0.47266-3.7617-0.71875l-53.59-73.652c-0.85547-1.1758-0.66797-2.8125 0.43359-3.7656l80.48-69.539c17.988-15.543 38.652-27.684 60.984-35.828l61.773-22.531c0 29.812 41.266 70.25 47.781 70.25s47.781-40.934 47.781-70.25l62.336 22.105c23.734 8.418 45.625 21.332 64.473 38.031l76.566 67.844c1.0391 0.92188 1.2461 2.4648 0.48828 3.6289l-48.066 73.539c-0.83203 1.2734-2.5273 1.6484-3.8203 0.84766l-49.004-30.355v-1.7344l-1.4727 0.82031-1.3281-0.82031v1.5586l-1.4727 0.82031 1.4727 0.91406v324c0 1.5469-1.2539 2.8008-2.8008 2.8008h-284.16c-1.543 0-2.793-1.2461-2.8008-2.7852z" />
      <path
        d="m399.69 29.168c-6.1953 39.012-45.961 70.246-49.691 70.246s-39.324-26.109-50.617-70.246l2.75-1.168c13.723 9.875 30.641 15.07 47.809 15.07 17.168 0 34.09-5.1953 47.809-15.07z"
        fillRule="evenodd"
      />
    </svg>
  </div>
));

const TShirt = () => {
  let tshirt;

  if (window.innerWidth >= 768) {
    tshirt = (
      <Tooltip label="TShirt">
        <TShirtIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    tshirt = (
      <Popover width={100} position="top">
        <Popover.Target>
          <TShirtIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-primary-content text-sm font-bold text-center">
            TShirt
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{tshirt}</>;
};

export default TShirt;
