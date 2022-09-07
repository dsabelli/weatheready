import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const ShortsIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-12 md:w-16 z-30" ref={ref}>
    <svg
      version="1.1"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path d="m151.02 99.152c-2.9609 0.64453-5.0742 3.2695-5.0742 6.3008v52.852c-0.007813 0.17187-0.007813 0.34766 0 0.52344v0.52344l-4.8984 51.449-23.449 243.07c-0.16016 1.8086 0.45313 3.6016 1.6875 4.9336 1.2305 1.332 2.9688 2.0859 4.7852 2.0664h195.3c3.0312 0.003906 5.6562-2.1094 6.3008-5.0742l24.324-113.57 24.324 113.57c0.64453 2.9648 3.2695 5.0781 6.3008 5.0742h195.3c1.8164 0.019531 3.5547-0.73438 4.7852-2.0664 1.2344-1.332 1.8477-3.125 1.6875-4.9336l-23.273-242.55v0.003906c0.007812-0.17578 0.007812-0.35156 0-0.52734l-0.52344-5.6016-4.375-45.676v0.003906-0.17578-0.52344c0.003907-0.17578 0.003907-0.35156 0-0.52734v-52.852 0.003906c-0.074218-3.4492-2.8516-6.2266-6.3008-6.3008h-395.68c-0.40625-0.039063-0.81641-0.039063-1.2266 0zm7.6992 12.773h382.72v40.949h-382.73v-40.949zm-0.52344 53.898h95.898c-2.6875 22.113-20.059 39.023-42 39.023h-57.574zm109.55 0h38.324v112c0 21.586 15.199 39.734 35.176 43.926l-27.125 126.35h-182.88l22.051-230.3h58.801c29.18 0 53.016-22.859 55.648-51.977zm88.727 0h75.949c2.6172 29.117 26.293 51.977 55.477 51.977h58.977l22.051 230.3h-183.05l-29.398-137.2v-145.07zm89.602 0h95.727l3.6758 39.023h-57.574c-21.941 0-39.137-16.91-41.824-39.023zm-127.05 0.35156h24.5v142.1c-13.867-3.1094-24.5-14.969-24.5-30.449z" />
    </svg>
  </div>
));

const Shorts = () => {
  let shorts;

  if (window.innerWidth >= 768) {
    shorts = (
      <Tooltip label="Light Shorts or Sweater">
        <ShortsIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    shorts = (
      <Popover width={100} position="top">
        <Popover.Target>
          <ShortsIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-primary-content text-sm font-bold text-center">
            Shorts
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{shorts}</>;
};

export default Shorts;
