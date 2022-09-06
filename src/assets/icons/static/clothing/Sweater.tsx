import React, { forwardRef } from "react";
import { Tooltip } from "@mantine/core";

const SweaterIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-16 md:w-24" ref={ref}>
    <svg
      version="1.1"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path d="m527.57 479.92c1.6797-1.1523 2.6055-3.125 2.4102-5.1523l-4.8164-56c-0.50391-5.6016-1.2891-11.703-2.2383-17.414l-25.648-153.16c-0.55859-3.2461-1.1758-6.4961-1.9023-9.6875l-5.6016-24.527c-2.3984-10.43-5.7148-20.621-9.9141-30.465l-6.6641-16.406c-2.793-6.5469-7.6758-11.98-13.887-15.457l-27.047-15.176v-36.402c0.011719-9.8047-4.2148-19.133-11.594-25.59l-12.434-11.199c-9.4961-8.3594-20.898-14.262-33.207-17.191-16.293-3.8672-33.266-3.8672-49.559 0-12.301 2.9844-23.695 8.9023-33.207 17.246l-12.434 11.199c-7.332 6.4609-11.535 15.766-11.535 25.535v36.344l-27.047 15.176-0.003906 0.003906c-6.207 3.4727-11.094 8.9102-13.887 15.453l-6.9453 16.406v0.003906c-4.3711 9.8438-7.8555 20.055-10.414 30.52l-5.6016 24.527c-0.72656 3.1914-1.3438 6.4414-1.9023 9.6875l-25.426 153.16c-0.95312 5.6016-1.7344 11.535-2.2383 17.414l-4.8164 56v0.003906c-0.19531 2.0273 0.73047 4 2.4102 5.1523 1.9883 1.375 3.0312 3.7617 2.6875 6.1562l-2.0703 14.84-0.61719 4.0898 41.609 4.5938 0.33594-2.6328 1.5664-9.3516c0.75-4.3086 3.8711-7.8203 8.0625-9.0742 2.0312-0.57031 3.5703-2.2383 3.9766-4.3125l3.6406-17.641c0 3.1367 0.39062 6.2148 0.39062 9.3516v10.754c0.16797 2.4336 1.6484 4.582 3.8633 5.6016 1.6289 0.71875 2.7422 2.2617 2.9141 4.0312l1.7344 17.473v2.8008h218.85v-2.8008l1.7344-17.473h0.003907c0.17188-1.7695 1.2812-3.3125 2.9102-4.0312 2.2148-1.0195 3.6992-3.168 3.8633-5.6016v-10.754c0-3.1367 0-6.2148 0.39062-9.3516l3.6406 17.641c0.41016 2.0742 1.9453 3.7422 3.9766 4.3125 4.1914 1.2539 7.3125 4.7656 8.0664 9.0742l1.5664 9.3516 0.33594 2.6328 41.609-4.5938-0.61719-4.0898-2.0703-14.84c-0.32422-2.418 0.76562-4.8086 2.7969-6.1562zm-244.33-401.13 12.434-11.199c8.832-7.7578 19.426-13.234 30.855-15.961 15.426-3.6914 31.504-3.6914 46.93 0 11.402 2.7578 21.969 8.2344 30.801 15.961l12.434 11.199h-0.003907c6.1602 5.4023 9.6914 13.199 9.6875 21.391v37.352l-9.1836 10.695c-8.6719 10.254-19.246 18.734-31.137 24.977l-1.625 0.83984-0.50391 0.39062 0.003906 0.003906c-9.3828 8.1758-21.406 12.68-33.852 12.68-12.449 0-24.473-4.5039-33.855-12.68l-1.9609-1.1758h0.003907c-12.023-6.1914-22.715-14.676-31.473-24.977l-9.2969-10.863v-37.297c0.027344-8.1836 3.5781-15.957 9.7422-21.336zm-60.812 404.38c-3.0586 0.90625-5.8047 2.6523-7.9219 5.0352-2.1172 2.3867-3.5273 5.3164-4.0625 8.4609l-1.1758 6.7773-30.465-3.3594 1.8477-13.215v-0.003907c0.62109-4.5-1.3242-8.9727-5.0391-11.59l4.8164-56c0.50391-5.6016 1.2305-11.48 2.1289-16.801l25.703-153.16c0.50391-3.1367 1.1211-6.2148 1.8477-9.2969l5.6016-24.586-0.003906 0.003906c2.293-10.109 5.5-19.984 9.5781-29.512l5.6016-12.824 2.2969 70.895v9.1836l-2.8594 82.824-1.3984 105.62v11.199zm242.37-37.52c-1.5312 10.008-2.3359 20.113-2.4102 30.238v10.586c0.007813 0.29297-0.14062 0.57031-0.39062 0.72656-3.4531 1.5703-5.8203 4.8516-6.2148 8.625l-1.5117 15.23h-208.27l-1.5117-15.23c-0.39453-3.7734-2.7617-7.0547-6.2148-8.625-0.28516-0.089844-0.49609-0.32422-0.5625-0.61328v-10.586c-0.074219-10.125-0.87891-20.23-2.4062-30.238l-0.72656-4.7031 1.3438-105.06 2.6875-82.938v-9.5195l-2.6328-80.414c2.1094-2.5781 4.6953-4.7266 7.6172-6.3281l26.266-14.727 8.6797 10.078h-0.003906c9.1562 10.852 20.34 19.812 32.93 26.375l1.1211 0.61719c4.5156 3.7344 9.5742 6.7539 15.008 8.9609v82.262h5.6016l-0.003906-79.969c10.949 3.3594 22.652 3.3594 33.602 0v79.969h5.6016l-0.003906-82.262c5.4219-2.2812 10.449-5.3984 14.898-9.2422l1.2891-0.72656c12.539-6.5625 23.688-15.5 32.812-26.32l8.625-10.023 26.375 15.008c2.9922 1.6875 5.6211 3.9531 7.7305 6.6641l-2.7461 80.137v9.5195l2.6875 82.879 1.457 104.89zm12.77 37.52-6.3281-30.184v-11.199l-1.5703-105.79-2.6875-82.992v-9.1836l2.2969-70.895 5.6016 12.824h-0.003906c4.0586 9.5078 7.2422 19.367 9.5195 29.453l5.6016 24.586c0.72656 3.0781 1.3438 6.1602 1.8477 9.2969l25.594 153.16c0.89453 5.6016 1.625 11.199 2.1289 16.801l4.8164 56h-0.003907c-3.7148 2.6172-5.6602 7.0898-5.0391 11.594l1.8477 13.215-30.465 3.3594-1.1758-6.7773v0.003906c-0.57422-3.1055-2-5.9883-4.1133-8.332-2.1172-2.3438-4.8398-4.0508-7.8711-4.9414z" />
      <path d="m350 181.44c5.3555-0.003906 10.566-1.7539 14.84-4.9844l48.551-36.457v-31.246c-0.003906-7.7422-3.3008-15.113-9.0703-20.273l-9.5195-8.4023c-7.3516-6.5-16.172-11.113-25.703-13.438-12.57-3.0234-25.68-3.0234-38.25 0-9.5156 2.3594-18.316 6.9883-25.648 13.496l-9.5195 8.457c-5.7773 5.1289-9.082 12.488-9.0703 20.215v31.191l48.551 36.68c4.3008 3.1523 9.5078 4.8203 14.84 4.7617zm-50.398-88.648 9.5195-8.5117c6.668-5.8867 14.66-10.074 23.293-12.211 11.707-2.7969 23.91-2.7969 35.617 0 8.5234 2.0625 16.418 6.1562 23.016 11.93l9.3516 8.6797c4.5938 4.0781 7.2227 9.9297 7.2266 16.074v28l-46.426 35.223c-3.293 2.4805-7.3008 3.8203-11.422 3.8203-4.125 0-8.1328-1.3398-11.426-3.8203l-46.367-35.055v-28c0.078125-6.2305 2.8555-12.113 7.6172-16.129z" />
      <path d="m432.49 411.1v-52.418h-164.7v52.418c-1.3984 8.7266-5.4688 16.809-11.648 23.125l-1.5117 1.5117 8.0078 13.273c3.4727 5.8047 5.3125 12.441 5.3203 19.207v12.656h164.36v-12.656c0.089844-6.7891 2.0273-13.43 5.6016-19.207l8.0078-13.273-1.5117-1.5117h-0.003907c-6.2812-6.2812-10.453-14.363-11.926-23.125zm0.33594 35.055c-3.9883 6.668-6.0977 14.293-6.1055 22.062v7.0547l-153.44 0.003907v-7.0586c-0.007812-7.7695-2.1172-15.395-6.1055-22.062l-5.6016-9.6328c6.2148-6.8789 10.285-15.422 11.707-24.582v-47.656h153.44v47.656c1.4336 9.2812 5.5859 17.934 11.93 24.863z" />
    </svg>
  </div>
));

const Sweater = () => {
  return (
    <Tooltip label="T-shirt">
      <SweaterIcon />
    </Tooltip>
  );
};

export default Sweater;
