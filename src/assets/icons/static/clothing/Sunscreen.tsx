import React, { forwardRef } from "react";
import { Tooltip } from "@mantine/core";

const SunscreenIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-12 md:w-16 z-30" ref={ref}>
    <svg
      version="1.1"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path d="m353.94 357.38c-0.12109 0-0.25391 0-0.375-0.007812-4.0234-0.11328-7.6641-2.0625-9.9883-5.3281l-14.457-20.309-24.445 4.8828c-3.9492 0.78516-7.9258-0.28906-10.93-2.957-3.0039-2.668-4.5469-6.4961-4.2266-10.508l1.9805-24.844-21.867-11.977c-3.5273-1.9336-5.8789-5.3203-6.4688-9.2969s0.69922-7.8945 3.5195-10.762l17.492-17.762-9.0547-23.223c-1.457-3.7422-1.0938-7.8594 1.0156-11.273 2.1094-3.4258 5.6094-5.6094 9.6133-5.9844l24.816-2.3633 7.9883-23.613c1.2891-3.8086 4.2188-6.7188 8.0273-7.9883 3.8164-1.2695 7.9062-0.69141 11.211 1.5977l20.523 14.141 21.297-12.945c3.4336-2.0898 7.5508-2.4375 11.285-0.95312s6.4961 4.5547 7.5586 8.4297l6.6367 24.023 24.641 3.7695c3.9766 0.60547 7.3438 2.9883 9.2578 6.5234 1.9141 3.5391 2.043 7.6641 0.375 11.32l-10.359 22.672 16.453 18.723c2.6523 3.0234 3.707 7.0078 2.9023 10.949-0.8125 3.9375-3.3594 7.1875-6.9922 8.9141l-22.512 10.707 0.57031 24.922c0.09375 4.0234-1.6602 7.7578-4.8164 10.246-3.1562 2.4922-7.1953 3.3398-11.078 2.332l-24.125-6.2617-15.586 19.449c-2.4141 3.0273-6.0078 4.7539-9.8828 4.7539zm-24.258-39.789c4.0586 0 7.9531 1.9492 10.359 5.3398l13.945 19.59 15.035-18.77c3.125-3.9023 8.2695-5.6094 13.113-4.3477l23.277 6.0469-0.54297-24.043c-0.11328-4.9922 2.7344-9.6133 7.2422-11.762l21.719-10.332-15.875-18.07c-3.293-3.7539-4.0898-9.1172-2.0156-13.664l9.9961-21.879-23.773-3.6406c-4.9375-0.75781-8.9961-4.3594-10.324-9.1758l-6.4023-23.184-20.551 12.496c-4.2734 2.5938-9.6875 2.4453-13.805-0.39062l-19.805-13.645-7.7227 22.777c-1.6055 4.7305-5.8516 8.1016-10.828 8.5781l-23.941 2.2773 8.7344 22.41c1.8203 4.6562 0.71875 9.9688-2.7812 13.535l-16.883 17.133 21.094 11.555c4.3867 2.3984 6.9609 7.168 6.5625 12.152l-1.9141 23.977 23.586-4.7148c0.83984-0.16797 1.6719-0.25 2.5-0.25zm77.395 8.2891h0.007812zm-0.011719 0c0.011719 0 0 0 0 0z" />
      <path d="m355.83 321.47c-31.828 0-57.719-25.891-57.719-57.719s25.891-57.719 57.719-57.719 57.719 25.891 57.719 57.719-25.891 57.719-57.719 57.719zm0-101.45c-24.109 0-43.719 19.609-43.719 43.719 0 24.109 19.609 43.719 43.719 43.719s43.719-19.609 43.719-43.719c0-24.109-19.609-43.719-43.719-43.719z" />
      <path d="m395.4 532.09h-79.129c-15.23 0-27.617-12.395-27.617-27.625v-33.898c0-3.8633 3.1367-7 7-7 3.8633 0 7 3.1367 7 7v33.898c0 7.5117 6.1133 13.625 13.617 13.625h79.129c7.5039 0 13.617-6.1133 13.617-13.625v-34.254c0-3.8633 3.1367-7 7-7s7 3.1367 7 7v34.254c0 15.227-12.387 27.625-27.617 27.625z" />
      <path d="m395.4 532.07h-79.129c-15.23 0-27.617-12.387-27.617-27.617v-1.0625c0-3.8633 3.1367-7 7-7h120.36c3.8633 0 7 3.1367 7 7v1.0625c0 15.23-12.387 27.617-27.617 27.617zm-91.383-21.68c2.2109 4.5469 6.8711 7.6797 12.254 7.6797h79.129c5.3867 0 10.043-3.1367 12.254-7.6797z" />
      <path d="m374.91 510.4c-3.1094 0-5.9375-2.082-6.7656-5.2266-0.625-2.3906-5.2539-5.7109-12.32-5.7109-7.0664 0-11.684 3.3125-12.32 5.7109-0.98047 3.7422-4.8086 5.9727-8.5508 4.9922s-5.9727-4.8086-4.9922-8.5508c2.5-9.5117 13.133-16.148 25.852-16.148 12.723 0 23.363 6.6445 25.852 16.148 0.98047 3.7422-1.25 7.5703-4.9922 8.5508-0.56641 0.16016-1.1641 0.23438-1.7617 0.23438z" />
      <path d="m420.03 477.56h-128.38c-18.852 0-34.625-14.738-35.906-33.543l-22.551-330.83-2.6211-38.48c-0.375-5.543 1.457-10.902 5.1602-15.062 3.6953-4.1641 8.793-6.6094 14.344-6.8984 0.40234-0.019532 0.72656-0.027344 1.0547-0.027344h209.43c0.32812 0 0.65234 0.007812 0.96875 0.027344 5.6367 0.28906 10.734 2.7344 14.43 6.9062 3.6953 4.1641 5.5234 9.5195 5.1445 15.082v0.007813l-2.6211 38.445-22.547 330.83c-1.2773 18.816-17.051 33.543-35.906 33.543zm-168.91-410.82c-0.14062 0-0.28906 0.007813-0.42969 0.007813-1.6875 0.085937-3.3242 0.86719-4.5078 2.2031-1.1836 1.3359-1.7734 3.0508-1.6523 4.8438l0.054688 0.88672 2.5664 37.559 22.551 330.84c0.78516 11.488 10.414 20.496 21.941 20.496h128.38c11.516 0 21.16-9.0078 21.941-20.496l22.539-330.83 2.6211-38.453c0.12109-1.7812-0.46484-3.5-1.6523-4.8359-1.1836-1.3359-2.8203-2.1172-4.582-2.2109-0.054687 0-0.20703-0.007813-0.34375-0.007813zm222.99 7.5234h0.007813z" />
      <path d="m291.65 477.56h-0.16797-0.14062-0.12891-0.11328-0.09375c-5.918-0.10156-11.762-1.6797-16.895-4.5547h-0.007813c-3.3711-1.8867-4.5742-6.1523-2.6875-9.5312 1.8867-3.3711 6.1523-4.5742 9.5312-2.6875 0.007813 0 0.019532 0.007813 0.019532 0.007813 3.1445 1.7539 6.7188 2.707 10.34 2.7617h0.027343 0.16016 0.039062 0.12109c3.8633 0 7 3.1367 7 7-0.003906 3.8672-3.1406 7.0039-7.0039 7.0039zm157.31-27.012c-0.16016 0-0.31641-0.007813-0.48438-0.019531-3.8555-0.26172-6.7656-3.6016-6.5039-7.457l8.25-121.09c0.26172-3.8555 3.6016-6.7773 7.457-6.5039 3.8555 0.26172 6.7656 3.6016 6.5039 7.457l-8.25 121.09c-0.25391 3.6875-3.3242 6.5234-6.9727 6.5234z" />
      <path d="m471.49 119.72h-231.32c-3.6758 0-6.7305-2.8477-6.9805-6.5156l-2.6211-38.48c-0.375-5.543 1.457-10.902 5.1602-15.062 3.6953-4.1641 8.793-6.6094 14.344-6.8867 0.40234-0.019532 0.72656-0.027344 1.0547-0.027344h209.43c0.32812 0 0.65234 0.007812 0.98828 0.027344 5.6172 0.28906 10.715 2.7344 14.41 6.9062 3.6953 4.1641 5.5234 9.5195 5.1445 15.082v0.007812l-2.6211 38.453c-0.26172 3.6406-3.3164 6.4961-6.9922 6.4961zm-224.79-14h218.24l2.1758-31.93c0.12109-1.7812-0.46484-3.5-1.6523-4.8359-1.1836-1.3359-2.8203-2.1172-4.582-2.2109-0.066406 0-0.20703-0.007813-0.34375-0.007813h-209.43c-0.14062 0-0.28125 0.007813-0.41016 0.007813-1.707 0.085937-3.332 0.86719-4.5156 2.2031-1.1836 1.3359-1.7734 3.0508-1.6523 4.8438l0.054687 0.88672zm227.41-31.461h0.007813z" />
    </svg>
  </div>
));

const Sunscreen = () => {
  return (
    <Tooltip label="Sunscreen">
      <SunscreenIcon />
    </Tooltip>
  );
};

export default Sunscreen;
