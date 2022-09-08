import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const JacketIcon = forwardRef<HTMLDivElement>((props, ref) => (
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
      <path d="m507.65 128.66c-5.3633-19.371-21.449-33.137-22.133-33.711l-0.66016-0.41016c-0.51562-0.23047-50.047-22.008-73.41-30.301 0.76562-2.5547 1.3438-5.0625 1.7305-7.4805 1.4062-8.8555 0.10156-15.488-3.9883-20.273-6.4023-7.4922-18.484-8.457-28.301-8.457-5.0977 0-10.504 0.29687-15.746 0.58203-5.0781 0.27344-10.332 0.55859-15.137 0.55859-4.8008 0-10.059-0.28516-15.137-0.55859-5.2344-0.28516-10.645-0.58203-15.746-0.58203-9.8125 0-21.902 0.96484-28.301 8.4492-4.082 4.7891-5.3867 11.418-3.9883 20.277 0.37891 2.4297 0.96484 4.9336 1.7305 7.4805-23.363 8.2891-72.902 30.07-73.41 30.301l-0.66016 0.41016c-0.67578 0.57812-16.762 14.34-22.137 33.711-7.5664 27.289-32.238 120.21-32.238 170.48 0 34.828 4.7617 115.17 7.8945 168.35 1.5273 25.867 2.7422 46.312 2.7422 50.512 0 12.176 18.129 13.988 28.941 13.988 2.1211 0 3.457-0.078125 3.457-0.078125 0.59375-0.035156 14.688-0.89453 22.02-9.1016 3.1523-3.5234 4.5938-7.8164 4.3125-12.785-0.13281-2.4062-0.30859-5.0273-0.49219-7.875-1.1133-17.457-2.8125-43.848-0.20312-65.309 1.7266-14.129 2.2695-34.266 2.8047-53.75 0.41406-15.301 0.85156-31.109 1.8477-43.457 1.2617-15.598 5.1641-30.742 8.7812-44.262-0.32031 13.105-0.62109 27.805-0.62109 36.344 0 3.9023-0.3125 13.453-0.69922 25.531-2.5938 80.16-3.0391 127.7 2.3398 133.4 8.793 9.3398 59.961 13.531 106.77 13.531 1.7305 0 3.4609-0.011719 5.2031-0.011719h0.003906c45.328-0.30859 93.094-4.5078 101.57-13.52 5.3711-5.7109 4.9297-53.246 2.3359-133.4-0.38672-12.074-0.69922-21.598-0.69922-25.531 0-8.5391-0.30859-23.238-0.62109-36.344 3.6172 13.52 7.5195 28.668 8.7812 44.262 1.0039 12.348 1.4297 28.172 1.8555 43.469 0.53125 19.48 1.0742 39.602 2.8008 53.738 2.6133 21.461 0.91406 47.852-0.20312 65.309-0.17969 2.8438-0.35156 5.4727-0.49219 7.875-0.28516 4.9688 1.1602 9.2617 4.3047 12.785 7.3359 8.2031 21.422 9.0664 22.02 9.1016 0 0 1.3398 0.078125 3.4648 0.078125 4.4805 0 11.008-0.33984 16.723-1.9023 10.09-2.7891 12.215-8.1133 12.215-12.086 0-4.1992 1.2148-24.641 2.7422-50.512 3.1406-53.176 7.8906-133.53 7.8906-168.35-0.011719-50.258-24.684-143.19-32.25-170.47zm-173.09-94.629c5.1562 0.28125 10.488 0.56641 15.438 0.56641 4.9492 0 10.281-0.28516 15.434-0.56641 5.1641-0.28125 10.5-0.57031 15.449-0.57031 6.6797 0 11.879 0.55859 15.898 1.7188 6.0664 23.605-18.426 52.809-27.883 62.977-2.5195-15.418-1.4961-29.52-1.4844-29.668l0.25781-3.3281-3.3164 0.42578c-43.688 5.6211-63.945-6.9219-65.082-14.891-0.98047-6.8438 5.1523-14.168 7.0234-16.23 3.5117-0.66797 7.7227-0.99609 12.82-0.99609 4.957-0.003906 10.289 0.28125 15.445 0.5625zm192.01 433.12c-1.5977 26.969-2.7422 46.465-2.7422 50.836 0 3.0312-2.7656 5.3359-8.2305 6.8477-5.3945 1.4766-11.891 1.707-15.281 1.707-1.9102 0-3.1211-0.078125-3.1602-0.078125-0.125 0-12.426-0.74609-18.273-7.2852-2.1836-2.4414-3.1367-5.3242-2.9336-8.8477 0.14062-2.3867 0.3125-5.0195 0.49219-7.8516 1.1328-17.641 2.8438-44.328 0.16797-66.293-1.6797-13.883-2.2305-33.898-2.7617-53.246-0.42187-15.367-0.85547-31.246-1.8633-43.754-1.3594-16.953-5.7109-33.141-9.5352-47.438-2.5156-9.3906-4.6992-17.5-5.4141-23.727l-5.4102 0.38672c0.015625 0.46094 1.3594 45.434 1.3594 63.293 0 4.0039 0.29297 13.105 0.69922 25.703 1.1797 36.707 3.9648 122.67-0.86719 129.51-5.1406 5.4727-39.918 11.258-94.891 11.77l-0.003907-340.91c0-1.4961-1.2109-2.7148-2.7148-2.7148-1.5 0-2.7109 1.2227-2.7109 2.7148v340.96h-2.4883c-59.562 0-97.418-6.082-102.77-11.762-4.8828-6.8867-2.1016-92.859-0.91797-129.58 0.41016-12.59 0.70703-21.688 0.70703-25.691 0-17.859 1.3398-62.836 1.3477-63.293l-5.4141-0.38672c-0.69922 6.2266-2.8789 14.336-5.4023 23.738-3.832 14.285-8.1719 30.469-9.5352 47.426-1.0117 12.5-1.4453 28.379-1.8594 43.742-0.53906 19.348-1.082 39.375-2.7656 53.258-2.6758 21.965-0.96484 48.652 0.16797 66.293 0.18359 2.832 0.35156 5.4727 0.48828 7.8516 0.35156 6.1055-2.8242 10.5-9.7227 13.418-5.5664 2.3516-11.418 2.7109-11.48 2.7109-0.039063 0-1.2539 0.078125-3.1523 0.078125-11.367 0-23.508-2.25-23.508-8.5508 0-4.375-1.1523-23.867-2.75-50.836-3.1406-53.098-7.8867-133.35-7.8867-168.02 0-49.566 24.523-141.91 32.039-169.02 4.5547-16.398 18.016-28.887 20.137-30.773 4.7031-2.0664 51.398-22.512 73.227-30.184 0.15625 0.22266 0.30859 0.42188 0.5 0.6875 1.1641 1.5234 2.8633 3.6523 5.0078 6.1133 1.0703 1.2266 2.3203 2.4883 3.5859 3.8516 1.2812 1.3555 2.7734 2.6641 4.2383 4.0781 1.4883 1.3828 3.1914 2.6562 4.832 4.0195 1.6875 1.3203 3.5781 2.4453 5.3594 3.6797 1.7422 1.1797 3.4766 2.3633 5.1953 3.5273 1.6406 1.2422 3.0742 2.6094 4.5742 3.8594 1.4062 1.3594 2.6953 2.7773 3.9688 4.0664 1.1602 1.3945 2.2578 2.7109 3.2695 3.9297 0.93359 1.2812 1.7969 2.457 2.5547 3.5 0.71094 1.082 1.3203 2.0312 1.832 2.8047 0.95703 1.5859 1.4727 2.5273 1.4727 2.5273s-0.4375-0.96875-1.2695-2.6445c-0.44922-0.81641-0.98438-1.8086-1.6055-2.9531-0.67578-1.1094-1.457-2.3633-2.2852-3.7305-0.92969-1.3086-1.9336-2.7383-2.9961-4.2344-1.1797-1.4219-2.3789-2.9531-3.7188-4.4805-1.4453-1.4219-2.9023-3.0195-4.4844-4.4258-1.6523-1.3203-3.332-2.6719-5.0117-4.0156-1.6055-1.3203-3.3047-2.5156-4.8047-3.9023-1.4609-1.4375-2.9688-2.7617-4.2969-4.1992-1.2891-1.4727-2.6055-2.8164-3.7305-4.207-1.1094-1.4062-2.1992-2.6953-3.1289-3.9531-1.8594-2.5078-3.3086-4.6641-4.2773-6.1836-0.60938-0.96484-1.0312-1.6641-1.2617-2.0508-1.0547-3.0625-1.8125-6.0664-2.2695-8.9336-1.1406-7.1914-0.24219-12.387 2.75-15.895 0.58984-0.6875 1.2891-1.293 2.043-1.8711-2.1016 3.7852-3.7852 8.5078-3.0977 13.324 1.6367 11.418 23.777 24.84 67.938 19.898-0.20703 6.0195-0.22266 19.371 2.7109 33.023l1.0312 4.7617 3.5039-3.3672c1.6406-1.5742 37.832-36.688 33.777-67.738 0.81641 0.59766 1.5664 1.2422 2.1914 1.9766 2.9961 3.5 3.8984 8.7031 2.7539 15.898-0.46094 2.918-1.2422 5.9883-2.3281 9.1328l-0.89062 2.5742 0.039063 0.015626c-1.0703 3.2305-2.043 6.4688-2.9102 9.7383-1.0742 4.1875-2.0273 8.4062-2.6953 12.695-0.35156 2.1406-0.63281 4.2891-0.83984 6.4531l-0.27344 3.2539-0.10547 3.2695c-0.066406 1.082 0.023438 2.1836 0.050781 3.2773 0.023438 1.0859 0.0625 2.1836 0.21875 3.2773 0.14453 1.0859 0.18359 2.1836 0.42969 3.2695l0.28516 1.3086c-3.2969-0.58984-6.5859-1.0547-9.9023-1.3711-3.9805-0.35156-7.9805-0.53125-11.973-0.37891-3.9883 0.15234-8.0039 0.60547-11.84 1.7461-1.9141 0.58203-3.7852 1.332-5.4922 2.3672-0.85156 0.51562-1.6523 1.125-2.4062 1.7734-0.73438 0.68359-1.3789 1.4297-1.9727 2.2344 0.63281-0.77344 1.3086-1.4844 2.0781-2.1055 0.77734-0.60547 1.5898-1.1602 2.457-1.6172 1.7344-0.92578 3.6016-1.5586 5.5-2.0234 3.8203-0.91797 7.7656-1.1328 11.68-1.0625 3.9219 0.0625 7.8398 0.46094 11.727 1.0234 3.875 0.58203 7.7617 1.3398 11.512 2.3086l1.9023 0.49219-0.33203-2.0781-0.47656-3.0352c-0.17187-1.0078-0.14453-2.0508-0.23437-3.0703-0.09375-1.0234-0.078126-2.0625-0.039063-3.0977s0.003906-2.0664 0.125-3.1094l0.27344-3.0977 0.4375-3.1016c0.3125-2.0625 0.69922-4.1172 1.1523-6.1641 0.86328-4.0898 2.0156-8.1328 3.2812-12.125 1.0117-3.1523 2.1523-6.2812 3.3594-9.3359 22.055 7.8164 68.008 27.934 72.676 29.98 2.1094 1.8867 15.586 14.375 20.125 30.773 7.5273 27.113 32.043 119.44 32.043 169.02 0 34.691-4.7422 114.95-7.8828 168.04z" />
    </svg>
  </div>
));

const Jacket = () => {
  let jacket;

  if (window.innerWidth >= 768) {
    jacket = (
      <Tooltip label="Light Jacket or Thin Sweater">
        <JacketIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    jacket = (
      <Popover width={100} position="top">
        <Popover.Target>
          <JacketIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-primary-content text-sm font-bold text-center">
            Jacket
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{jacket}</>;
};

export default Jacket;
