import React, { forwardRef } from "react";
import { Tooltip } from "@mantine/core";

const SunglassesIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-6 md:w-10 z-30 accessory" ref={ref}>
    <svg
      version="1.1"
      viewBox="75 0 550 550"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path d="m621.7 231.77c-0.21484-0.38672-0.42969-0.77344-0.70312-1.1367-7.4844-9.75-46.059-58.633-70.352-63.875-18.699-4.0312-61.832 17.105-70.289 21.387-4.3086 2.1797-6.043 7.4414-3.8633 11.762 2.1797 4.3047 7.4336 6.0391 11.762 3.8633 21.715-10.977 50.379-21.691 58.703-19.895 11.461 2.4727 35.359 27.055 52.609 47.965-46.914-2.75-147.01-4.9883-235.24 17-0.22266-0.015625-0.44141-0.066406-0.66797-0.066406h-27.316c-0.23047 0-0.44531 0.046874-0.67188 0.066406-86.773-21.633-185-19.824-232.86-17.145 17.242-20.883 41.059-45.363 52.5-47.828 8.3789-1.8125 36.996 8.918 58.707 19.895 4.3242 2.1836 9.5781 0.44922 11.754-3.8633 2.1836-4.3125 0.45312-9.5781-3.8594-11.762-8.457-4.2773-51.613-25.422-70.289-21.387-24.293 5.2383-62.867 54.125-70.355 63.875-0.25781 0.33594-0.45312 0.69922-0.65625 1.0586l-1.5039 0.003906c-5.0312 0.003906-9.1094 3.8281-9.1094 8.5391 0 0 4.0781 34.164 9.1094 34.164h0.77734c2.6836 39.594 17.812 83.234 48.414 102.61 19.754 12.496 53.773 16.75 84.043 16.75 28.828 0 54.258-3.8594 60.707-8.0977 25.535-16.801 52.059-71.48 65.359-102.72h23.148c13.285 31.238 39.789 85.898 65.363 102.72 6.4492 4.2383 31.871 8.0977 60.707 8.0977 30.266 0 64.289-4.2539 84.039-16.75 30.602-19.367 45.73-63.012 48.418-102.61h0.80859c5.0273 0 9.1055-34.164 9.1055-34.164 0-4.4531-3.6523-8.0703-8.2969-8.4609zm-358.13 139.18c-10.254 5.5078-94.074 11.406-125.91-8.7383-24.977-15.812-37.652-53.926-40.215-87.875 3.2852-0.39453 6.1523-15.164 7.7148-25.152 46.633-2.4453 140.14-3.9414 221.91 15.555-9.793 24.648-39.625 90.496-63.504 106.21zm298.74-8.7383c-31.828 20.137-115.65 14.25-125.78 8.8203-24.012-15.793-53.844-81.641-63.629-106.29 81.777-19.504 175.3-18.004 221.93-15.559 1.5586 9.957 4.4102 24.668 7.6875 25.141-2.5625 33.953-15.242 72.074-40.215 87.887z" />
    </svg>
  </div>
));

const Sunglasses = () => {
  return (
    <Tooltip label="Sunglasses">
      <SunglassesIcon />
    </Tooltip>
  );
};

export default Sunglasses;
