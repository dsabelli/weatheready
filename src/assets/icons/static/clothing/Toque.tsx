import React, { forwardRef } from "react";
import { Tooltip } from "@mantine/core";

const ToqueIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-7 md:w-10 z-30" ref={ref}>
    <svg
      version="1.1"
      viewBox="75 0 550 550"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path d="m561.71 291.46v-14.59c-0.019532-41.828-13.836-82.477-39.305-115.65-25.473-33.172-61.176-57.02-101.57-67.836 0 0 1.625-1.7461 2.7383-2.6953 3.375-2.8711 8-6.8047 8-12.75s-4.6211-9.875-8-12.75c-1.1641-0.91406-2.2422-1.9336-3.2227-3.0469 0.125-1.5586 0.39844-3.1055 0.82422-4.6133 1.0664-4.4688 2.3906-10.031-1.0117-14.703-3.4219-4.7031-9.1523-5.1562-13.754-5.5195-1.543-0.0625-3.0742-0.27344-4.5781-0.625-0.77734-1.3008-1.4336-2.6758-1.9609-4.1016-1.7734-4.2969-3.9766-9.6445-9.5664-11.457-5.4375-1.7656-10.277 1.1914-14.164 3.5664-1.3438 0.90625-2.7852 1.668-4.2969 2.2617-1.5078-0.59375-2.9492-1.3555-4.293-2.2617-3.8867-2.375-8.7266-5.3281-14.164-3.5664-5.5898 1.8164-7.793 7.1602-9.5664 11.457-0.52734 1.4258-1.1836 2.7969-1.9609 4.1016-1.5039 0.35156-3.0352 0.55859-4.5781 0.62109-4.6016 0.36328-10.332 0.81641-13.754 5.5195-3.4023 4.6758-2.0742 10.234-1.0117 14.703v0.003906c0.42188 1.5 0.70312 3.0352 0.84375 4.5859-0.98438 1.125-2.0664 2.1523-3.2422 3.0742-3.375 2.8711-8 6.8047-8 12.75s4.6211 9.875 8 12.746v0.003906c1.0156 0.82812 1.9883 1.7188 2.9062 2.6562-39.25 10.523-74.121 33.297-99.527 65.012-27.027 33.57-41.688 75.414-41.52 118.51v14.578c-12.039 7.9844-18.168 16.898-18.168 26.539v84.801 0.11719c0 40.125 107.19 61.781 208.04 61.781 100.57 0 207.44-21.527 208.04-61.441 0.007813-0.11328 0.007813-0.23047 0.007813-0.34766l-0.003906-84.906c0-9.6406-6.1445-18.547-18.176-26.527zm-366.61-14.59c-0.011718-12.805 1.3516-25.57 4.0664-38.078 4.0039 1.0547 7.9414 2.3477 11.793 3.8672 2.875 1.1719 6.5508 5.543 10.105 9.7695 6.4062 7.6211 13.668 16.258 24.707 18.621 8.2539 1.7734 16.637-1.8828 24.742-5.4141 6.5664-2.8594 13.363-5.8086 18.672-5.168 4.0742 0.49609 9.3203 4.6016 14.391 8.5703 7.1172 5.5703 15.188 11.887 24.805 12.426 0.41406 0.023437 0.82422 0.035156 1.2344 0.035156 8.2734 0 15.816-4.5977 23.121-9.0508 5.9258-3.6094 12.051-7.3438 16.953-7.3438s11.027 3.7344 16.953 7.3438c7.6719 4.6758 15.613 9.4922 24.359 9.0156 9.6172-0.53906 17.684-6.8555 24.801-12.426 5.0703-3.9688 10.312-8.0742 14.387-8.5703 5.3125-0.64844 12.105 2.3086 18.668 5.168 8.1055 3.5312 16.492 7.1797 24.742 5.4141 11.035-2.3633 18.301-11 24.707-18.621 3.5547-4.2305 7.2305-8.6016 10.109-9.7734v0.007812c5.1484-1.9883 10.418-3.6367 15.781-4.9297 2.918 12.84 4.3906 25.969 4.3906 39.137v20.297c0 7.6406-12.836 19.32-48.863 29.195-34.074 9.3398-79.488 14.48-127.88 14.48-109.5 0-176.75-25.438-176.75-43.676zm15.859-72.855c2.875 1.1719 6.5508 5.543 10.105 9.7695 6.4062 7.6211 13.668 16.258 24.707 18.621 8.2539 1.7734 16.637-1.8828 24.742-5.4141 6.5664-2.8594 13.363-5.8125 18.672-5.168 4.0742 0.49609 9.3203 4.6016 14.391 8.5703 7.1172 5.5703 15.188 11.887 24.805 12.426 0.41406 0.023438 0.82422 0.035157 1.2344 0.035157 8.2734 0 15.816-4.5977 23.121-9.0508 5.9258-3.6094 12.051-7.3438 16.953-7.3438s11.027 3.7344 16.953 7.3438c7.6719 4.6758 15.613 9.4883 24.359 9.0156 9.6172-0.53906 17.684-6.8555 24.801-12.426 5.0703-3.9688 10.312-8.0742 14.387-8.5703 5.3125-0.64453 12.105 2.3086 18.668 5.168 8.1055 3.5312 16.492 7.1875 24.742 5.4141 11.035-2.3633 18.301-11 24.707-18.621 3.5547-4.2305 7.2305-8.6016 10.109-9.7734 1.2422-0.50781 2.5156-0.96875 3.7969-1.4141 3.2227 6.9492 5.9844 14.102 8.2773 21.41-5.9297 1.4414-11.754 3.2773-17.438 5.4883-6.1328 2.5-10.742 7.9844-15.625 13.789-5.1758 6.1562-10.531 12.523-16.801 13.867-3.7891 0.80859-10.039-1.9141-16.086-4.5469-7.9258-3.4492-16.91-7.3594-26.066-6.2461-8.0039 0.97656-14.828 6.3203-21.434 11.488-5.7383 4.4922-11.672 9.1367-16.832 9.4258-4.3594 0.25-10.352-3.418-16.164-6.9609-7.6016-4.6328-15.461-9.4219-24.352-9.4219-8.8945 0-16.754 4.7891-24.355 9.4219-5.8125 3.543-11.816 7.2305-16.164 6.9609-5.1641-0.28906-11.098-4.9336-16.836-9.4258-6.6016-5.168-13.43-10.512-21.434-11.488-9.1602-1.1211-18.141 2.7969-26.066 6.2461-6.0469 2.6328-12.301 5.3477-16.086 4.5469-6.2695-1.3438-11.625-7.7109-16.805-13.871-4.8828-5.8047-9.4922-11.289-15.621-13.789h-0.003907c-4.4297-1.7539-8.9609-3.2422-13.566-4.457 2.1992-7.2031 4.8672-14.25 7.9844-21.105 0.070313 0.027343 0.14453 0.054687 0.21875 0.082031zm117.66-128.83c2.7891-2.375 5.9492-5.0625 7.2109-8.9531 1.2969-3.9961 0.31641-8.1172-0.55078-11.75-0.25-1.0469-0.62109-2.6016-0.76172-3.6797 1.082-0.20313 2.7031-0.33203 3.7891-0.41797 3.7109-0.29297 7.9141-0.625 11.289-3.082 3.3438-2.4336 4.9414-6.3047 6.3516-9.7227 0.42188-1.0195 1.0469-2.5391 1.582-3.5117 0.96484 0.46484 2.2812 1.2734 3.1719 1.8164 3.2227 1.9688 6.8711 4.1992 11.137 4.1992 4.2656 0 7.918-2.2305 11.137-4.1992 0.89062-0.54297 2.2109-1.3477 3.1719-1.8164 0.53516 0.97266 1.1602 2.4922 1.582 3.5117 1.4102 3.418 3.0078 7.2891 6.3516 9.7227 3.375 2.457 7.5781 2.7891 11.289 3.082 1.0898 0.085937 2.707 0.21484 3.7891 0.41797-0.14062 1.0781-0.51172 2.6328-0.76172 3.6758-0.86719 3.6328-1.8477 7.7539-0.55078 11.75 1.2617 3.8906 4.4258 6.5781 7.2148 8.9531l0.007812 0.003906c1.0508 0.85938 2.0547 1.7773 3.0039 2.75-0.94922 0.97266-1.9531 1.8906-3.0078 2.75-2.7891 2.3711-5.9492 5.0625-7.2109 8.9531-1.2969 3.9961-0.31641 8.1172 0.55078 11.75 0.25 1.0469 0.62109 2.5977 0.76172 3.6797-1.082 0.20313-2.7031 0.33203-3.7891 0.41797-3.7109 0.29297-7.9141 0.625-11.289 3.082-3.3438 2.4336-4.9414 6.3047-6.3516 9.7227-0.42188 1.0195-1.0469 2.5391-1.582 3.5117-0.96484-0.46484-2.2812-1.2695-3.1719-1.8164-3.2227-1.9688-6.8711-4.1992-11.137-4.1992s-7.918 2.2305-11.137 4.1992c-0.89062 0.54297-2.207 1.3516-3.1719 1.8164-0.53516-0.97266-1.1602-2.4922-1.582-3.5117-1.4102-3.418-3.0078-7.2891-6.3516-9.7227-3.375-2.457-7.5781-2.7891-11.289-3.082-1.0898-0.085937-2.7109-0.21484-3.7891-0.41797 0.14062-1.0781 0.51172-2.6328 0.76172-3.6797 0.86719-3.6367 1.8477-7.7539 0.55078-11.75-1.2695-3.8906-4.4297-6.5781-7.2188-8.9492-1.0508-0.86328-2.0547-1.7812-3.0039-2.7539 0.94922-0.97266 1.9531-1.8906 3.0039-2.75zm-94.875 91.367c22.551-28.145 53.133-48.766 87.68-59.121 0.17969 2.0273 0.90625 3.9688 2.1016 5.6172 3.4219 4.7031 9.1523 5.1562 13.754 5.5195v0.003907c1.5391 0.0625 3.0742 0.26953 4.5781 0.62109 0.77734 1.3047 1.4336 2.6758 1.9609 4.1016 1.7734 4.2969 3.9766 9.6445 9.5664 11.457 5.4336 1.7617 10.277-1.1914 14.164-3.5664 1.3438-0.90625 2.7852-1.6641 4.293-2.2617 1.5117 0.59766 2.9492 1.3555 4.2969 2.2617 3.0625 1.8711 6.7148 4.1055 10.785 4.1016v0.003907c1.1484 0 2.2891-0.17969 3.3789-0.53906 5.5898-1.8164 7.793-7.1602 9.5664-11.457 0.52344-1.4258 1.1836-2.7969 1.9609-4.1016 1.5039-0.35156 3.0352-0.55859 4.5781-0.62109 4.6016-0.36328 10.332-0.81641 13.754-5.5195 1.1953-1.6523 1.9219-3.5977 2.1016-5.625 43.836 13.043 80.902 42.586 103.39 82.41-0.875 0.32422-1.7461 0.65625-2.6055 1.0078-6.1328 2.5-10.742 7.9844-15.625 13.789-5.1758 6.1562-10.531 12.523-16.801 13.867-3.7773 0.80469-10.039-1.9141-16.086-4.5469-7.9258-3.4492-16.91-7.3672-26.066-6.2461-8.0039 0.97656-14.828 6.3203-21.434 11.488-5.7383 4.4922-11.672 9.1367-16.832 9.4258-4.3594 0.26953-10.352-3.418-16.164-6.9609-7.6016-4.6328-15.461-9.4219-24.352-9.4219s-16.75 4.7891-24.352 9.4219c-5.8125 3.543-11.816 7.2188-16.164 6.9609-5.1641-0.28906-11.098-4.9336-16.836-9.4258-6.6016-5.168-13.43-10.512-21.434-11.488-9.1602-1.1133-18.141 2.793-26.066 6.2461-6.0469 2.6328-12.301 5.3516-16.086 4.5469-6.2695-1.3438-11.625-7.7109-16.805-13.871-4.6562-5.5391-9.0703-10.777-14.789-13.418h-0.003906c4.832-8.6641 10.383-16.914 16.586-24.66zm333.02 236.04c-0.003906 0.10156-0.007813 0.20312-0.007813 0.30469v0.066406c-0.050781 7.8047-9.9102 15.32-23.387 21.641l-0.003906-71.91c0.003906-1.2617-0.62109-2.4453-1.6641-3.1562-1.043-0.70703-2.3711-0.85547-3.543-0.39062-1.3984 0.55859-2.8359 1.1133-4.3086 1.6562-1.5078 0.55078-2.5117 1.9844-2.5156 3.5859v75.219c-6.0859 2.2617-12.477 4.2852-18.766 6.0117-3.5938 0.98438-7.3008 1.9258-11.121 2.8242l0.003906-73.438c0-1.1523-0.51562-2.2422-1.4102-2.9648s-2.0703-1.0039-3.1953-0.76172c-1.4375 0.3125-2.8945 0.62109-4.3633 0.92188-1.7773 0.35938-3.0586 1.918-3.0625 3.7344v75.129c-9.4531 1.9023-19.453 3.5586-29.883 4.9609l-0.003906-73.992c0-1.0898-0.46484-2.1328-1.2812-2.8555s-1.9062-1.0625-2.9883-0.92969c-1.4492 0.17969-2.9102 0.35547-4.3789 0.52734-1.9258 0.22266-3.3789 1.8516-3.3828 3.7891v74.945c-9.6641 1.0859-19.656 1.957-29.887 2.6094v-74.309c0.003906-1.0508-0.42969-2.0508-1.1875-2.7695-0.76172-0.72266-1.7852-1.0977-2.832-1.0391-1.4531 0.082032-2.9141 0.16406-4.3828 0.23828-2.0312 0.097656-3.625 1.7734-3.6289 3.8086v74.734c-9.793 0.45313-19.773 0.71094-29.883 0.76172v-74.539c0-1.0156-0.40625-1.9844-1.125-2.7031-0.71484-0.71484-1.6875-1.1133-2.7031-1.1133h-0.039062c-1.4453 0-2.8828-0.003906-4.3203-0.015624v0.003906c-1.0156-0.011719-1.9922 0.38672-2.7148 1.1055-0.72266 0.71484-1.1289 1.6875-1.1289 2.707v74.52c-10.121-0.10938-20.102-0.42578-29.883-0.94141l-0.003906-74.758c0-2.0234-1.582-3.6914-3.6055-3.8047-1.4648-0.082031-2.9258-0.17188-4.3828-0.26562h0.003906c-1.0508-0.0625-2.082 0.30859-2.8477 1.0273-0.76562 0.72266-1.1992 1.7266-1.1992 2.7812v74.281c-10.246-0.72266-20.234-1.6641-29.887-2.8203v-74.965h0.003906c-0.003906-1.9297-1.4414-3.5508-3.3555-3.7852-1.4688-0.18359-2.9258-0.37109-4.375-0.5625-1.0898-0.14062-2.1836 0.19141-3.0078 0.91797-0.82422 0.72266-1.2969 1.7656-1.293 2.8633v73.949c-10.461-1.4922-20.461-3.2461-29.887-5.2539v-75.145c-0.003906-1.8008-1.2617-3.3516-3.0195-3.7305-1.4648-0.31641-2.9141-0.64063-4.3477-0.96875-1.1328-0.26172-2.3203 0.007812-3.2266 0.73047-0.91016 0.72266-1.4375 1.8203-1.4375 2.9844v73.355c-2.3125-0.57812-4.5859-1.1719-6.8125-1.7812-7.8281-2.1016-15.531-4.6406-23.074-7.6016v-75.285c-0.003906-1.5664-0.96484-2.9727-2.4258-3.5508-1.4727-0.58984-2.9023-1.1836-4.293-1.7891l0.003906 0.003906c-1.1797-0.51172-2.5312-0.39062-3.6055 0.3125-1.0703 0.70703-1.7109 1.9023-1.7109 3.1875v71.621c-13.559-7.1719-19.031-14.203-19.082-19.539v-0.097656l0.003906-84.898c0-3.668 2.4727-7.6914 7.1055-11.715 0.011719 0.023437 0.023438 0.046874 0.035156 0.070312 6.0742 12.965 25.273 24.137 56.422 32.672 35.172 9.6406 81.82 14.949 131.35 14.949s96.18-5.3086 131.35-14.949c31.164-8.5391 50.367-19.719 56.43-32.695 0.011718-0.019531 0.019531-0.035156 0.027344-0.054687 4.6367 4.0273 7.1094 8.0508 7.1094 11.719z" />
    </svg>
  </div>
));

const Toque = () => {
  return (
    <Tooltip label="Toque">
      <ToqueIcon />
    </Tooltip>
  );
};

export default Toque;
