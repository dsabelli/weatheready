import React, { forwardRef } from "react";
import { Tooltip, Popover, Text } from "@mantine/core";

const WinterJacketIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-10 md:w-14 z-30" ref={ref}>
    <svg
      version="1.1"
      viewBox="75 0 550 550"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path
        d="m350.06 527.19c-32.93 0-65.742-3.1914-98.328-9.6836-7.8633-1.5938-13.445-8.3164-13.445-16.293v-20.852c0-2.9609 2.3945-5.3555 5.3555-5.3555s5.3555 2.3945 5.3555 5.3555v20.852c0 2.8477 1.9375 5.2422 4.6719 5.6953 63.918 12.648 128.64 12.648 192.55 0 2.7344-0.57031 4.6719-2.9609 4.6719-5.6953v-20.852c0-2.9609 2.3945-5.3555 5.3555-5.3555s5.3555 2.3945 5.3555 5.3555v20.852c0 8.0898-5.4688 14.812-13.445 16.293-32.363 6.4922-65.289 9.6836-98.102 9.6836z"
        fillRule="evenodd"
      />
      <path
        d="m350.06 43.637c-42.613 0-69.844 12.078-69.844 20.508 0 8.3164 27.23 20.508 69.844 20.508 42.613 0 69.844-12.078 69.844-20.508-0.003906-8.4297-27.234-20.508-69.844-20.508zm0 51.727c-40.105 0-80.668-10.711-80.668-31.219 0-20.508 40.562-31.219 80.668-31.219 40.105 0 80.668 10.711 80.668 31.219-0.003906 20.512-40.676 31.219-80.668 31.219z"
        fillRule="evenodd"
      />
      <path
        d="m350.06 137.52c-40.105 0-80.668-10.711-80.668-31.219v-42.156c0-2.9609 2.3945-5.3555 5.3555-5.3555 2.9609 0 5.3555 2.3945 5.3555 5.3555v42.156c0 8.3164 27.23 20.508 69.844 20.508 42.613 0 69.844-12.078 69.844-20.508v-42.156c0-2.9609 2.3945-5.3555 5.3555-5.3555 2.9609 0 5.3555 2.3945 5.3555 5.3555v42.156c0.22266 20.508-40.449 31.219-80.441 31.219z"
        fillRule="evenodd"
      />
      <path
        d="m334.9 495.62c-2.9609 0-5.3555-2.3945-5.3555-5.3555v-358.67c0-2.9609 2.3945-5.3555 5.3555-5.3555 2.9609 0 5.3555 2.3945 5.3555 5.3555v358.67c0.11328 2.9648-2.2773 5.3555-5.3555 5.3555zm30.195 0c-2.9609 0-5.3555-2.3945-5.3555-5.3555v-358.67c0-2.9609 2.3945-5.3555 5.3555-5.3555 2.9609 0 5.3555 2.3945 5.3555 5.3555v358.67c0 2.9648-2.3945 5.3555-5.3555 5.3555z"
        fillRule="evenodd"
      />
      <path
        d="m556.28 432.05m-206.22 63.801c-38.281 0-76.566-3.875-113.82-11.395-6.1523-1.2539-10.598-6.4961-10.824-12.875-1.8242-65.398-2.1641-105.73-2.7344-156.66v-2.2773c-0.57031 5.9258-1.1406 11.848-1.7109 17.66-3.418 36.461-7.0625 74.059-14.242 105.05-1.1406 4.6719-5.2422 7.8633-10.027 7.8633l-53.777-1.1406c-2.9609-0.11328-5.582-1.3672-7.5195-3.6445-1.9375-2.2773-2.7344-5.1289-2.2773-7.9766 8.8867-58.336 20.965-146.52 28.141-218.99 2.3945-23.812 18.23-61.98 38.168-80.781 9.1133-8.5469 35.891-17.547 64.832-26.773 3.1914-1.0273 6.1523-1.9375 8.8867-2.8477 2.8477-0.91016 5.9258 0.68359 6.8359 3.418 0.91016 2.8477-0.57031 5.9258-3.418 6.8359-2.7344 0.91016-5.6953 1.8242-8.8867 2.8477-19.711 6.2656-52.641 16.75-60.727 24.383-16.18 15.266-32.473 49.906-34.863 73.945-7.1797 72.352-19.141 160.31-28.141 218.76l52.523 1.1406c6.9492-30.191 10.48-67.223 13.898-103.11 3.0781-31.789 6.1523-64.602 11.621-92.289 0.57031-2.7344 3.0781-4.5586 5.8125-4.3281 2.7344 0.22656 4.8984 2.5078 4.8984 5.3555 0.45703 29.625 0.68359 54.691 0.91016 76.793 0.57031 50.93 0.91016 91.148 2.7344 156.55 0 1.2539 0.91016 2.2773 2.1641 2.6211 73.035 14.812 150.17 14.926 223.2 0 1.2539-0.22656 2.1641-1.2539 2.1641-2.6211 1.8242-65.398 2.1641-105.62 2.7344-156.55 0.22656-22.105 0.45703-47.168 0.91016-76.68 0-2.7344 2.1641-5.0117 4.8984-5.3555 2.7344-0.22656 5.2422 1.5938 5.8125 4.3281 5.4688 27.801 8.6602 60.613 11.734 92.289 3.418 35.891 6.9492 72.918 13.898 103.11l52.523-1.1406c-8.8867-58.449-20.965-146.41-28.141-218.76-2.3945-24.156-18.688-58.676-34.863-73.945-8.0898-7.6328-41.016-18.117-60.727-24.383-3.1914-1.0273-6.2656-1.9375-8.8867-2.8477-2.8477-0.91016-4.3281-3.9883-3.418-6.8359 0.91016-2.8477 3.9883-4.3281 6.8359-3.418 2.6211 0.91016 5.6953 1.8242 8.8867 2.8477 28.941 9.2305 55.715 18.23 64.832 26.773 19.938 18.801 35.777 56.969 38.168 80.781 7.1797 72.465 19.254 160.65 28.141 218.99 0.45703 2.9609-0.34375 5.8125-2.2773 7.9766-1.9375 2.2773-4.5586 3.5312-7.5195 3.6445l-53.777 1.1406c-4.8984 0.11328-9-3.0781-10.027-7.8633-7.1797-30.992-10.824-68.59-14.242-105.05-0.57031-5.9258-1.1406-11.734-1.7109-17.66v2.1641c-0.57031 51.043-0.91016 91.262-2.7344 156.78-0.11328 6.2656-4.5586 11.621-10.824 12.875-37.598 7.4102-75.879 11.281-114.05 11.281z"
        fillRule="evenodd"
      />
      <path
        d="m514.36 468.51c-5.4688 0-10.141-3.7617-11.281-8.8867l-4.5586-20.621c-0.68359-2.9609 1.2539-5.8125 4.1016-6.3789 2.9609-0.68359 5.8125 1.2539 6.3789 4.1016l4.5586 20.621c0.11328 0.34375 0.45703 0.45703 0.79687 0.45703l38.055-0.79688c0.34375 0 0.57031-0.11328 0.57031-0.22656 0.11328-0.11328 0.22656-0.45703 0.22656-0.91016l-2.3945-18.457c-0.34375-2.9609 1.7109-5.6953 4.6719-6.0391 2.9609-0.34375 5.6953 1.7109 6.0391 4.6719l2.3945 18.457c0.45703 3.418-0.57031 6.8359-2.7344 9.3438-2.1641 2.5078-5.2422 3.875-8.5469 3.9883l-38.055 0.79688c-0.10938-0.12109-0.22266-0.12109-0.22266-0.12109z"
        fillRule="evenodd"
      />
      <path
        d="m417.39 433.42c-17.887 0-35.777-2.6211-53.891-7.9766-2.8477-0.79688-4.4453-3.875-3.6445-6.7227 0.79688-2.8477 3.875-4.4453 6.7227-3.6445 34.297 10.141 67.68 10.027 102.32-0.11328 2.8477-0.79688 5.8125 0.79687 6.7227 3.6445 0.79688 2.8477-0.79688 5.8125-3.6445 6.7227-18.465 5.4688-36.469 8.0898-54.582 8.0898z"
        fillRule="evenodd"
      />
      <path
        d="m472.77 243.48c-2.8477 0-5.2422-2.2773-5.3555-5.1289-2.6211-47.969 5.9258-84.086 25.406-107.21 1.9375-2.2773 5.3555-2.6211 7.6328-0.68359 2.2773 1.9375 2.5078 5.3555 0.68359 7.6328-17.66 20.965-25.293 54.461-22.789 99.582 0.11328 2.9609-2.1641 5.4688-5.1289 5.6953-0.21875 0.11719-0.33203 0.11719-0.44922 0.11719z"
        fillRule="evenodd"
      />
      <path
        d="m491.23 244.51c-5.9258 0-12.191-0.34375-19.027-1.0273-2.9609-0.34375-5.1289-2.9609-4.7852-5.9258 0.34375-2.9609 2.9609-5.1289 5.9258-4.7852 27.344 2.8477 46.828-0.45703 58.109-9.7969 2.2773-1.9375 5.6953-1.5938 7.6328 0.68359s1.5938 5.6953-0.68359 7.6328c-10.715 8.7773-26.324 13.219-47.172 13.219z"
        fillRule="evenodd"
      />
      <path
        d="m502.96 321.3c-6.2656 0-13.102-0.34375-20.621-1.1406-2.9609-0.34375-5.1289-2.9609-4.7852-5.9258 0.34375-2.9609 2.9609-5.1289 5.9258-4.7852 28.027 2.8477 46.145 0.11328 57.082-8.8867 2.2773-1.9375 5.6953-1.5938 7.6328 0.68359s1.5938 5.6953-0.68359 7.6328c-10.371 8.4336-24.383 12.422-44.551 12.422z"
        fillRule="evenodd"
      />
      <path
        d="m510.02 397.87c-6.0391 0-12.531-0.34375-19.484-1.0273-2.9609-0.34375-5.1289-2.9609-4.7852-5.9258 0.34375-2.9609 2.9609-5.1289 5.9258-4.7852 27.801 2.8477 47.738-0.45703 59.133-9.7969 2.2773-1.9375 5.6953-1.5938 7.6328 0.68359s1.5938 5.6953-0.68359 7.6328c-10.938 8.8906-26.66 13.219-47.738 13.219z"
        fillRule="evenodd"
      />
      <path
        d="m419.45 356.17c-18.57 0-37.258-2.7344-55.828-8.2031-2.8477-0.79688-4.4453-3.875-3.6445-6.7227 0.79688-2.8477 3.875-4.4453 6.7227-3.6445 34.863 10.254 69.617 10.367 103.45 0.45703 2.8477-0.79688 5.8125 0.79687 6.7227 3.6445 0.79688 2.8477-0.79688 5.8125-3.6445 6.7227-17.777 5.125-35.781 7.7461-53.781 7.7461z"
        fillRule="evenodd"
      />
      <path
        d="m419.21 278.35c-18.688 0-37.371-2.7344-55.715-8.0898-2.8477-0.79687-4.4453-3.875-3.6445-6.7227 0.79688-2.8477 3.875-4.4453 6.7227-3.6445 34.297 10.141 70.414 10.141 104.37 0.22656 2.8477-0.79688 5.9258 0.79687 6.7227 3.6445 0.79688 2.8477-0.79688 5.8125-3.6445 6.7227-17.891 5.2422-36.348 7.8633-54.809 7.8633z"
        fillRule="evenodd"
      />
      <path
        d="m421.72 201.1c-19.484 0-39.195-2.8477-58.109-8.4297-2.8477-0.79688-4.4453-3.875-3.6445-6.7227 0.79688-2.8477 3.875-4.4453 6.7227-3.6445 35.094 10.367 73.035 10.598 106.64 0.68359 2.8477-0.79688 5.8125 0.79688 6.7227 3.6445 0.79688 2.8477-0.79688 5.8125-3.6445 6.7227-17.547 5.125-36.004 7.7461-54.691 7.7461z"
        fillRule="evenodd"
      />
      <path
        d="m185.76 468.51h-0.22656l-38.055-0.79687c-3.418-0.11328-6.3789-1.4805-8.5469-3.9883-2.1641-2.5078-3.1914-5.9258-2.7344-9.3438l2.3945-18.457c0.34375-2.9609 3.0781-5.0117 6.0391-4.6719 2.9609 0.34375 5.0117 3.0781 4.6719 6.0391l-2.5117 18.457c0 0.45703 0.11328 0.79688 0.22656 0.91016s0.22656 0.22656 0.57031 0.22656l38.055 0.79688c0.34375 0 0.79688-0.11328 0.79688-0.45703l4.5586-20.621c0.68359-2.9609 3.5312-4.7852 6.3789-4.1016 2.9609 0.68359 4.7852 3.5312 4.1016 6.3789l-4.5586 20.621c-1.0234 5.3633-5.8086 9.0078-11.16 9.0078z"
        fillRule="evenodd"
      />
      <path
        d="m282.61 433.42c-18.117 0-36.117-2.7344-54.574-8.0898-2.8477-0.79688-4.4453-3.875-3.6445-6.7227 0.79688-2.8477 3.875-4.4453 6.7227-3.6445 34.523 10.141 68.02 10.254 102.32 0.11328 2.8477-0.79688 5.8125 0.79688 6.7227 3.6445 0.79687 2.8477-0.79688 5.8125-3.6445 6.7227-18.121 5.3555-36.008 7.9766-53.898 7.9766z"
        fillRule="evenodd"
      />
      <path
        d="m227.23 243.48h-0.34375c-2.9609-0.11328-5.2422-2.7344-5.1289-5.6953 2.5078-45.117-5.2422-78.73-22.789-99.582-1.9375-2.2773-1.5938-5.6953 0.68359-7.6328s5.6953-1.5938 7.6328 0.68359c19.484 23.129 28.027 59.133 25.406 107.21-0.22266 2.7305-2.6133 5.0117-5.4609 5.0117z"
        fillRule="evenodd"
      />
      <path
        d="m208.77 244.51c-20.852 0-36.348-4.3281-47.168-13.215-2.2773-1.9375-2.6211-5.2422-0.68359-7.6328 1.9375-2.2773 5.2422-2.6211 7.6328-0.68359 11.281 9.3438 30.875 12.648 58.223 9.7969 2.9609-0.34375 5.582 1.8242 5.9258 4.7852 0.34375 2.9609-1.8242 5.582-4.7852 5.9258-6.9531 0.68359-13.219 1.0234-19.145 1.0234z"
        fillRule="evenodd"
      />
      <path
        d="m197.04 321.3c-20.055 0-34.18-3.9883-44.434-12.531-2.2773-1.9375-2.6211-5.2422-0.79688-7.6328 1.9375-2.2773 5.2422-2.6211 7.6328-0.68359 10.938 9 29.055 11.848 57.082 8.8867 2.9609-0.34375 5.582 1.8242 5.9258 4.7852s-1.8242 5.582-4.7852 5.9258c-7.5234 0.91016-14.359 1.25-20.625 1.25z"
        fillRule="evenodd"
      />
      <path
        d="m190.09 397.87c-21.078 0-36.801-4.4453-47.625-13.332-2.2773-1.9375-2.6211-5.2422-0.79688-7.6328 1.9375-2.2773 5.3555-2.6211 7.6328-0.68359 11.395 9.3438 31.332 12.762 59.133 9.7969 2.9609-0.34375 5.582 1.8242 5.9258 4.7852 0.34375 2.9609-1.8242 5.582-4.7852 5.9258-6.9531 0.80078-13.445 1.1406-19.484 1.1406z"
        fillRule="evenodd"
      />
      <path
        d="m280.55 356.17c-18.117 0-36.004-2.6211-53.664-7.8633-2.8477-0.79688-4.4453-3.875-3.6445-6.7227 0.79688-2.8477 3.875-4.4453 6.7227-3.6445 33.84 10.027 68.703 9.7969 103.45-0.45703 2.8477-0.79688 5.8125 0.79688 6.7227 3.6445 0.79688 2.8477-0.79688 5.8125-3.6445 6.7227-18.688 5.4727-37.371 8.3203-55.945 8.3203z"
        fillRule="evenodd"
      />
      <path
        d="m280.79 278.35c-18.457 0-36.914-2.6211-54.805-7.8633-2.8477-0.79688-4.4453-3.875-3.6445-6.7227 0.79687-2.8477 3.875-4.4453 6.7227-3.6445 33.953 10.027 69.957 9.9141 104.37-0.22656 2.8477-0.79688 5.8125 0.79688 6.7227 3.6445 0.79687 2.8477-0.79688 5.8125-3.6445 6.7227-18.234 5.3555-37.035 8.0898-55.719 8.0898z"
        fillRule="evenodd"
      />
      <path
        d="m278.28 201.1c-18.688 0-37.145-2.5078-54.574-7.7461-2.8477-0.79687-4.4453-3.875-3.6445-6.7227 0.79688-2.8477 3.875-4.4453 6.7227-3.6445 33.613 9.9141 71.551 9.6836 106.64-0.68359 2.8477-0.79688 5.8125 0.79688 6.7227 3.6445 0.79687 2.8477-0.79688 5.8125-3.6445 6.7227-18.918 5.582-38.629 8.4297-58.227 8.4297z"
        fillRule="evenodd"
      />
    </svg>
  </div>
));

const WinterJacket = () => {
  let winterjacket;

  if (window.innerWidth >= 768) {
    winterjacket = (
      <Tooltip label="WinterJacket">
        <WinterJacketIcon />
      </Tooltip>
    );
  } else if (window.innerWidth < 768) {
    winterjacket = (
      <Popover width={100} position="top">
        <Popover.Target>
          <WinterJacketIcon />
        </Popover.Target>
        <Popover.Dropdown className={"bg-base-300 px-0 py-1 border-none "}>
          <Text className="text-primary-content text-sm font-bold text-center">
            WinterJacket
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return <>{winterjacket}</>;
};

export default WinterJacket;
