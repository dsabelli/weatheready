import React, { forwardRef } from "react";
import { Tooltip } from "@mantine/core";

const BootsIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-12 md:w-20" ref={ref}>
    <svg
      version="1.1"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path d="m620.77 474.31c0.18359-0.32031 0.37109-0.61719 0.49219-0.97266 0.11719-0.33984 0.14063-0.69922 0.19141-1.0586 0.039062-0.29297 0.15625-0.54688 0.15234-0.84375-0.16406-7.4297-0.58203-14.43-1.2812-21.078-0.003906-0.039063 0.011719-0.078125 0.003907-0.11719-0.003907-0.035156-0.027344-0.0625-0.035157-0.09375-4.3438-40.672-20.66-66.578-71.863-77h-0.035156c-0.023437-0.003906-0.035156-0.015625-0.054687-0.023437-155.1-28.895-155.05-77.984-155-129.96v-139.73c10.395-1.4297 16.465-2.543 16.633-2.5703 0.20312-0.039063 0.35156-0.16406 0.54688-0.22266 0.375-0.11328 0.73438-0.24609 1.0703-0.4375 0.30078-0.16406 0.56641-0.33984 0.81641-0.55469 0.30859-0.24219 0.57031-0.5 0.8125-0.80078 0.20703-0.25781 0.37891-0.51562 0.54297-0.80469 0.19141-0.33594 0.33984-0.67578 0.46094-1.0547 0.10156-0.32422 0.15625-0.64453 0.19531-0.99219 0.027343-0.22266 0.12891-0.42188 0.12891-0.64844v-67.551c0-0.09375-0.050781-0.17187-0.054687-0.26953-0.003907-0.089843 0.039062-0.16797 0.027343-0.25391-0.027343-0.29688-0.17188-0.54297-0.24609-0.82422-0.089844-0.35938-0.15234-0.71875-0.30859-1.0469-0.17188-0.37109-0.42188-0.67188-0.66797-0.98438-0.18359-0.24219-0.34766-0.49219-0.57031-0.69922-0.30859-0.28516-0.66016-0.48047-1.0234-0.69531-0.26953-0.15234-0.50391-0.32422-0.79688-0.4375-0.36328-0.13281-0.76172-0.17188-1.1523-0.23438-0.28125-0.039062-0.52734-0.16406-0.81641-0.16406-0.09375 0-0.16797 0.042968-0.25781 0.050781-0.09375 0.003906-0.17188-0.035157-0.26953-0.027344-1.0742 0.10156-109.05 10.008-215.58 0-0.09375-0.003906-0.17188 0.035156-0.26172 0.027344-0.089843-0.003907-0.16797-0.050781-0.25781-0.050781-0.28125 0-0.51953 0.11719-0.79688 0.16406-0.39844 0.054688-0.79688 0.09375-1.1641 0.23438-0.30078 0.11719-0.55469 0.29297-0.82812 0.46094-0.34766 0.20313-0.68359 0.38672-0.97266 0.65625-0.24219 0.22266-0.42188 0.49219-0.61719 0.75781-0.23438 0.30859-0.46484 0.58984-0.63281 0.94141-0.15625 0.33203-0.22266 0.6875-0.3125 1.0469-0.074219 0.28125-0.22266 0.53125-0.24609 0.82812-0.003907 0.09375 0.035156 0.17188 0.027343 0.26172 0 0.089844-0.050781 0.16797-0.050781 0.25781v48.859c-31.617-0.027344-66.965-1.1523-102.2-4.457-0.09375-0.003906-0.17188 0.035156-0.26172 0.027344-0.089844 0-0.16797-0.050781-0.25781-0.050781-0.29297 0-0.54297 0.125-0.81641 0.16797-0.38672 0.054687-0.76562 0.09375-1.1211 0.23047-0.32422 0.11719-0.58984 0.30078-0.87891 0.47656-0.33203 0.19531-0.65625 0.37109-0.93359 0.63281-0.24609 0.23047-0.42969 0.50391-0.63281 0.77734-0.23047 0.29688-0.46094 0.58203-0.62109 0.92578-0.15625 0.33203-0.22266 0.6875-0.3125 1.0469-0.074219 0.28125-0.22266 0.52734-0.24609 0.82422-0.003906 0.089844 0.035156 0.17188 0.027344 0.26172 0 0.089843-0.050781 0.16797-0.050781 0.25781v67.562c0 0.19141 0.089843 0.34766 0.10547 0.52734 0.039062 0.42188 0.11328 0.8125 0.24219 1.2031 0.10156 0.3125 0.22266 0.58984 0.375 0.875 0.18359 0.34766 0.39062 0.65625 0.64453 0.95312 0.21875 0.25781 0.44141 0.47656 0.69922 0.69531 0.28516 0.23437 0.58203 0.4375 0.91797 0.61719 0.32031 0.17188 0.64844 0.29688 1.0039 0.40234 0.20312 0.0625 0.35938 0.19141 0.56641 0.23047 4.4961 0.83984 8.9922 1.6133 13.484 2.3242 3.7344 102.24-2.6836 166.18-7.3906 212.94-4.9883 49.531-8.2812 82.363 2.9609 124.81v39.047c0 0.3125 0.12891 0.58203 0.17188 0.875 0.0625 0.37109 0.089843 0.74609 0.22266 1.0938 0.12891 0.33984 0.33594 0.62109 0.52734 0.92969 0.19141 0.30859 0.35156 0.61719 0.58984 0.87891 0.24609 0.26172 0.54297 0.44922 0.83594 0.66016 0.29297 0.21094 0.55469 0.4375 0.88672 0.59375 0.33203 0.15234 0.69922 0.20703 1.0586 0.30078 0.29688 0.074219 0.55469 0.22266 0.86719 0.24609 21.723 1.6953 43.535 2.2617 62.965 2.2617 38.566 0 67.762-2.2305 68.195-2.2617 0.3125-0.023437 0.57031-0.17188 0.86719-0.24609 0.36328-0.09375 0.72656-0.14453 1.0586-0.30078 0.33203-0.15625 0.59375-0.37891 0.88672-0.59375 0.29297-0.21094 0.58984-0.39844 0.83594-0.66016 0.24219-0.26172 0.40234-0.57812 0.58984-0.87891 0.19141-0.30859 0.39844-0.58984 0.52734-0.92969 0.12891-0.35156 0.15625-0.72266 0.21875-1.0938 0.050781-0.29688 0.17969-0.56641 0.17969-0.875v-15.035c67.297 15.348 110.36 21.707 156.08 21.707 34.266 0 70.074-3.5547 118.77-9.5352 0.28516-0.035156 0.50781-0.18359 0.77734-0.25781 0.37109-0.10547 0.73828-0.18359 1.0703-0.35938 0.32422-0.16406 0.58203-0.37891 0.85547-0.60547 0.29297-0.22266 0.57812-0.42578 0.8125-0.69922 0.23047-0.26953 0.38672-0.57812 0.56641-0.87891 0.18359-0.32031 0.37109-0.60938 0.49219-0.96484 0.11719-0.33984 0.14062-0.69922 0.19141-1.0586 0.039063-0.29297 0.15625-0.54688 0.15234-0.84375-0.16406-7.4219-0.58203-14.402-1.2812-21.039-0.003906-0.054688 0.015625-0.10156 0.011719-0.15234-0.003907-0.042969-0.039063-0.085937-0.042969-0.125-0.50391-4.7148-1.1602-9.2461-2.0156-13.57 30.605-0.71094 62.828-4.0156 106.73-9.4141 0.28125-0.035156 0.50391-0.17969 0.76562-0.25781 0.375-0.10547 0.75-0.18359 1.0859-0.35938 0.3125-0.16406 0.57031-0.37891 0.83984-0.59375 0.29688-0.23047 0.58203-0.4375 0.82422-0.71875 0.23047-0.27734 0.38281-0.58594 0.5625-0.88672zm-238.63-234.05v2.9023c-0.054688 54.266-0.11719 110.37 164.14 140.98h0.011718c42.891 8.7578 57.688 28.34 62.312 61.969-44.414 5.7305-80.965 8.6367-111.42 8.8555-10.836-15.332-28.48-26.02-57.074-31.84h-0.035156c-0.023438-0.003906-0.035157-0.015625-0.054688-0.023438-155.1-28.895-155.05-77.984-155-129.95v-139.76c10.328-1.4102 16.391-2.5078 16.637-2.5586 0.20312-0.039062 0.35156-0.16406 0.54297-0.21875 0.37891-0.11719 0.73438-0.25391 1.082-0.44141 0.29688-0.16406 0.55859-0.33984 0.81641-0.54688 0.30078-0.24609 0.57031-0.50391 0.81641-0.80469 0.20703-0.25391 0.375-0.50781 0.53906-0.79687 0.19141-0.33984 0.33984-0.68359 0.46094-1.0586 0.10156-0.32422 0.16406-0.64844 0.20312-0.99219 0.027344-0.22266 0.12891-0.41406 0.12891-0.64453v-35.449c30.711-0.42578 57.309-2.8008 75.902-5.0234l-0.003906 135.4zm-292.53-99.625v-56.762c34.016 2.957 67.949 3.9883 98.375 3.9883 1.3945 0 2.7383-0.011719 4.1172-0.015625 0.078126 0 0.14063 0.042969 0.22266 0.042969 0.085937 0 0.15234-0.042969 0.23047-0.042969 48.91-0.16406 88.004-2.8398 102.48-3.9805v56.746c-21.137 3.4062-113.18 16.332-205.43 0.023437zm313.73-106.76v56.75c-12.504 2.0273-49.828 7.3906-97.109 8.0586v-20.914c0-0.09375-0.050781-0.16797-0.050781-0.25781-0.003906-0.089844 0.035156-0.17188 0.027344-0.26172-0.027344-0.29297-0.17188-0.53125-0.24219-0.80469-0.09375-0.37109-0.16406-0.73828-0.32422-1.082-0.15625-0.32031-0.375-0.58203-0.58203-0.86719-0.21875-0.29297-0.41406-0.58984-0.6875-0.83594-0.26172-0.23438-0.57031-0.39844-0.875-0.58984-0.30859-0.19141-0.59375-0.38672-0.93359-0.50781-0.35156-0.12891-0.72266-0.16406-1.0977-0.22266-0.28125-0.042969-0.53125-0.16797-0.82422-0.16797-0.09375 0-0.16797 0.050781-0.25781 0.050781-0.089844 0.003906-0.17188-0.035156-0.26172-0.027344-0.68359 0.0625-43.77 4.0078-102.2 4.4297l0.003906-42.734c34.016 2.957 67.945 3.9805 98.375 3.9805 51.043 0.007812 92.102-2.8164 107.04-3.9961zm-303.14 333.34c4.7109-46.777 11.105-110.63 7.5078-212.45 27.848 3.7422 55.227 5.1172 80.242 5.1172 35.027 0 65.336-2.6445 85.863-5.0742v138.33c-0.054687 54.258-0.11328 110.36 164.14 140.97h0.011718c42.902 8.7656 57.695 28.348 62.316 61.98-126.93 16.367-168.67 6.707-209-2.6562-18.16-4.2188-36.941-8.5742-62.965-10.457-0.34766-0.027344-0.66016 0.089844-0.99219 0.125-0.28125 0.027344-0.55469-0.027344-0.83594 0.042969-0.57031 0.14453-56.844 14.504-124.31 2.207-9.8789-39.23-6.7344-70.91-1.9727-118.14zm128.97 135.22c-0.22266-0.050782-0.4375 0.003906-0.65625-0.023438-0.21094-0.023437-0.39062-0.11719-0.60938-0.11719-0.16406 0-0.29688 0.078125-0.45312 0.09375-0.40234 0.035156-0.77734 0.11719-1.1641 0.23438-0.32031 0.10156-0.62109 0.19531-0.91797 0.35156-0.33594 0.17188-0.62891 0.37891-0.92578 0.62109-0.26953 0.21094-0.51953 0.42969-0.74609 0.69531-0.23438 0.26953-0.41406 0.56641-0.58984 0.875-0.19141 0.33594-0.34766 0.66016-0.46484 1.0312-0.050782 0.15234-0.15625 0.27344-0.19531 0.4375-0.050781 0.21094 0.003906 0.42188-0.015625 0.63281-0.027344 0.21875-0.12891 0.40234-0.12891 0.62891v16.824c-16.062 1.0117-67.285 3.6523-119.09 0.023438v-27.91c20.059 3.4492 39.02 4.8047 55.793 4.8047 37.289 0 63.98-6.082 69.352-7.4023 24.68 1.8477 42.043 5.8633 60.387 10.125 25.176 5.8477 50.859 11.805 96.285 11.805 29.035 0 66.18-2.4531 116.36-8.9141 0.21875 3.0117 0.38672 6.1328 0.50391 9.3398-112.2 13.641-152.45 13.684-272.72-14.156zm274.35-36.352c29.527-0.54297 64.457-3.4453 106.19-8.8242 0.21875 3.0195 0.38672 6.1445 0.50781 9.3594-42.141 5.1289-73.422 8.2305-103.14 8.7695-1.0195-3.2383-2.2148-6.3359-3.5586-9.3047z" />
    </svg>
  </div>
));

const Boots = () => {
  return (
    <Tooltip label="Boots">
      <BootsIcon />
    </Tooltip>
  );
};

export default Boots;
