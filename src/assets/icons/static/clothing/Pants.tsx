import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const PantsIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-10 md:w-12 z-30" ref={ref}>
    <svg
      version="1.1"
      viewBox="75 0 550 550"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path d="m350 72.238c-2.1406-0.019531-4.0782 1.2539-4.9102 3.2266-0.82812 1.9727-0.37892 4.25 1.1329 5.7617 1.5117 1.5117 3.7891 1.957 5.7617 1.1289s3.2461-2.7695 3.2227-4.9062c-0.03125-2.8633-2.3438-5.1797-5.207-5.2109zm0 5.6016c-0.21484 0-0.39062-0.17578-0.39062-0.39062l0.39062-0.33594z" />
      <path d="m449.69 281.18-8.793-175.95-4.1445-55.719c-57.703-6.1055-115.89-6.1055-173.6 0l-4.1445 55.551-8.6797 176.12-8.1758 231.73 77.559 2.2969 7.8984-152.71 1.6797-25.48c2.2852-36.777 9.25-73.117 20.719-108.14 11.566 35.008 18.621 71.348 21 108.14l1.6797 25.48 7.6172 152.71 77.559-2.1836zm-96.824-191.24c3.7539 0 7.4492 0 11.199-0.33594v35.281-0.003906c0.10547 8.3359-4.1367 16.121-11.199 20.555zm-30.855-7.2266v-13.328c9.2891 1.1406 18.641 1.7188 28 1.7383 9.3594-0.019532 18.711-0.59766 28-1.7383v13.328c-18.602 2.1836-37.398 2.1836-56 0zm-44.801 9.6875 20.047 1.8477-0.72656 11.535v0.003906c-2.0742 0.58594-4.2422 0.75781-6.3828 0.50391l-13.832-1.8477zm26.207-2.7969v-0.67187h-1.3438l-28.336-2.5742h-1.3984l-1.3438 17.473-6.1602-0.83984 2.0703-27.383v-0.003907c13.566 4.8398 27.523 8.4922 41.723 10.918v3.7539c-0.042969 4.6641-2.082 9.0898-5.6016 12.152l-0.55859 0.39062zm-36.008-20.047 0.95312-13.496v-0.003906c15.523 5.8906 31.633 10.113 48.047 12.602v13.383c-16.715-2.3672-33.137-6.4766-49-12.262zm116.2-0.89844c16.383-2.418 32.469-6.5469 47.992-12.32l1.0078 13.496c-15.867 5.7578-32.289 9.8516-49 12.207zm7.6719 17.863c14.195-2.4258 28.156-6.0781 41.719-10.918l2.0703 27.328-25.535 3.3594c-4.6172 0.59375-9.2695-0.82812-12.766-3.9062-3.4961-3.0742-5.4961-7.5078-5.4883-12.168zm30.406-32.648c-46.508 15.512-96.797 15.512-143.3 0 47.668-4.3672 95.637-4.3672 143.3 0zm-43.398 308.34-1.6797-25.535c-2.4492-38.676-9.9805-76.859-22.402-113.57l-3.9766-11.199-4.0898 11.199h0.003907c-12.422 36.707-19.953 74.891-22.402 113.57l-1.7344 25.535-7.6172 147.39-66.414-1.793 7.9531-226.41 8.625-172.87 25.145 3.3047h-0.003906c0.93359 0.054688 1.8672 0.054688 2.8008 0 5.7773 0 11.316-2.2969 15.402-6.3789 4.0859-4.0859 6.3828-9.6289 6.3828-15.406v-2.6875c10.922 1.6133 21.941 2.4766 32.984 2.5781v78.902h5.6016v-16.801h-0.003906c5.0508-2.4375 9.3086-6.2578 12.281-11.016 2.9727-4.7539 4.5391-10.254 4.5195-15.863v-35.953c5.6016-0.44922 10.754-1.0625 16.07-1.8477v2.8555c0 5.7773 2.2969 11.32 6.3828 15.406 4.0859 4.082 9.625 6.3789 15.402 6.3789 0.93359 0.054688 1.8672 0.054688 2.8008 0l25.145-3.3047 8.6211 172.7 8.0078 226.13-66.469 2.0743z" />
    </svg>
  </div>
));

const Pants = () => {
  let pants;

  if (window.innerWidth >= 768) {
    pants = (
      <Tooltip label="Pants">
        <PantsIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    pants = (
      <Popover width={100} position="top">
        <Popover.Target>
          <PantsIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-primary-content text-sm font-bold text-center">
            Pants
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{pants}</>;
};

export default Pants;
