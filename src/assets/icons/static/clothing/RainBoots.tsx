import React, { forwardRef } from "react";
import { Tooltip } from "@mantine/core";

const RainBootsIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-12 md:w-16 z-30" ref={ref}>
    <svg
      version="1.1"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path d="m557.77 417.2c0-1.1211-4.4805-25.199-49.281-22.961 0 0-21.85 2.8008-45.359-3.9219-30.238-8.9609-48.16-29.121-53.199-61.039 0-0.55859-16.238-84.559 14-258.72v-0.55859c0-5.6016-3.3594-11.762-10.641-12.32h-193.76c-0.55859 0-3.9219 0-6.1602 2.2383-1.6797 1.1211-3.3594 3.9219-3.3594 8.3984 0 0 0.55859 6.7188 1.1211 17.922h-61.602c-0.55859 0-3.9219 0-6.1602 2.2383-1.6797 1.1211-3.3594 3.9219-3.3594 8.3984 0.55859 6.1602 8.9609 151.76 20.16 198.24 0 1.1211 12.879 89.039 7.8398 112.56v0.55859c0 2.2383-4.4805 49.84 1.6797 76.719l0.55859 2.8008 2.8008 1.1211c1.1211 0.55859 25.762 11.199 91.281 11.762h5.0391l1.1211-16.238c22.961 4.4805 91.281 17.359 145.6 17.359 33.602 0 62.16-4.4805 72.238-19.039l1.1211-1.1211v-1.6797-6.7188c37.52 0 59.922-6.1602 68.879-19.039l1.1211-1.1211v-1.6797c0 0.003906 1.1172-20.715-1.6797-34.156zm-159.04-85.68c13.441 85.68 109.76 73.922 110.32 73.922 34.16-1.6797 37.52 13.441 37.52 14 0.55859 2.2383 0.55859 5.0391 1.1211 7.2812-8.3984 9.5195-29.68 14.559-61.602 15.121-3.3594-7.2812-14-20.719-48.16-19.039-3.3594 0.55859-86.801 10.078-98.559-64.961 0-0.55859-15.68-82.32 12.879-251.44h54.32c-22.398 150.64-8.3984 221.76-7.8398 225.12zm-176.96-262.64h190.96c-1.6797 10.641-3.3594 21.281-5.0391 31.359h-53.762c0-0.55859 0-1.1211 0.55859-1.6797v-0.55859c0-5.6016-3.3594-11.762-10.641-12.32h-120.96c-0.55859-7.8398-1.1172-14-1.1172-16.801zm120.96 28.562c-1.6797 10.641-3.3594 20.16-5.0391 29.68h-184.24c-1.1211-15.121-1.6797-25.762-1.6797-29.68zm-188.72 35.277h183.12c-22.961 151.76-8.9609 224-8.3984 226.8 13.441 85.68 109.76 73.922 110.32 73.922 34.16-1.6797 37.52 13.441 37.52 14 0.55859 2.8008 1.1211 6.1602 1.1211 9.5195-26.879 22.961-122.64 7.2812-123.76 7.2812-48.16-6.1602-91.281-11.762-91.281-11.762-57.68-7.2812-77.84-13.441-85.121-16.801 0.55859-13.441 1.1211-24.078 1.1211-25.762 5.0391-26.32-7.2812-112.56-7.8398-117.04-7.2812-31.918-13.441-112.56-16.801-160.16zm324.24 345.52c-23.52 26.879-160.16 5.6016-211.68-5.0391l-6.1602-1.6797-1.6797 18.48c-47.602-0.55859-71.68-7.2812-78.961-9.5195-2.2383-11.199-2.2383-25.762-2.2383-38.641 10.078 3.9219 32.48 10.078 84.559 16.238 0 0 42.559 5.6016 90.719 11.762 2.2383 0.55859 33.039 5.0391 64.398 5.0391 22.961 0 47.039-2.8008 60.48-11.762 1.125 6.7227 0.5625 12.324 0.5625 15.121zm70-28.559c-5.0391 5.0391-19.039 12.879-58.801 12.879 0-5.0391-0.55859-10.641-1.6797-15.68 29.121 0 49.281-4.4805 60.48-13.441 0.5626 7.2812 0 13.441 0 16.243z" />
    </svg>
  </div>
));

const RainBoots = () => {
  return (
    <Tooltip label="Rain Boots">
      <RainBootsIcon />
    </Tooltip>
  );
};

export default RainBoots;
