import React, { forwardRef } from "react";
import { Tooltip } from "@mantine/core";

const UmbrellaIcon = forwardRef<HTMLDivElement>((props, ref) => (
  <div {...props} className="w-16 md:w-24" ref={ref}>
    <svg
      version="1.1"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path d="m320.67 533.08c-19.141 0-34.715-15.574-34.715-34.715v-29.332c0-2.9766 2.4102-5.3828 5.3828-5.3828 2.9766 0 5.3828 2.4102 5.3828 5.3828v29.332c0 13.211 10.742 23.945 23.945 23.945 13.207 0 23.953-10.738 23.953-23.949l0.003906-466.05c0-2.9766 2.4102-5.3828 5.3828-5.3828 2.9766 0 5.3828 2.4102 5.3828 5.3828l-0.003907 466.05c0 19.141-15.574 34.719-34.715 34.719z" />
      <path d="m201.04 300.95c-0.66797 0-1.332-0.125-1.9648-0.36719-53.719-21.074-81.641-1.5234-82.809-0.67188-1.6406 1.1797-3.8242 1.3555-5.6211 0.44141-1.8047-0.91797-2.9531-2.7656-2.9531-4.7852 0-129.21 108.7-234.33 242.31-234.33 2.9766 0 5.3828 2.4102 5.3828 5.3828 0 2.9766-2.4102 5.3828-5.3828 5.3828-78.207 0-142.05 99.953-142.3 222.81-0.003906 1.9141-1.0234 3.6914-2.6875 4.6484l-1.1406 0.68359c-0.85938 0.53125-1.8398 0.80469-2.8281 0.80469zm-48.477-20.844c12.27 0 27.105 2.125 44.438 8.2148 1.8789-94.062 40.23-174.41 94.047-208.97-96.312 24.492-168.27 107.54-172.4 207.15 7.1133-3.0312 18.477-6.3945 33.914-6.3945z" />
      <path d="m586.92 300.95c-1.1055 0-2.2031-0.33594-3.1406-1.0078-34.102-24.441-78.648-2.6172-83.609-0.03125-1.6836 0.85156-3.6758 0.77734-5.2734-0.17969-1.6055-0.97656-2.5859-2.7227-2.5859-4.5977-0.14453-123.04-63.988-223.12-142.31-223.12-2.9766 0-5.3828-2.4102-5.3828-5.3828 0-2.9766 2.4102-5.3828 5.3828-5.3828 133.61 0 242.31 105.12 242.31 234.32 0 2.0195-1.1289 3.8711-2.9219 4.7852-0.78125 0.39844-1.6211 0.59766-2.4648 0.59766zm-177.92-221.59c53.52 34.379 91.727 114.04 93.977 207.45 15.148-6.1953 48.539-16.332 78.344-0.97656-4.418-99.289-76.262-182.02-172.32-206.48z" />
      <path d="m298.95 300.95c-0.80469 0-1.6055-0.17969-2.3516-0.53516-48.02-23.273-84.746-4.8711-91.617-0.92578-1.6602 0.94531-3.7188 0.94531-5.3789-0.019531-1.6602-0.96875-2.6836-2.7461-2.6758-4.668 0.26562-128.79 68.938-233.56 153.07-233.56 2.9766 0 5.3828 2.4102 5.3828 5.3828 0 2.9766-2.4102 5.3828-5.3828 5.3828-18.293 0-43.887 84.68-44.008 222.6 0 1.957-1.0625 3.7656-2.7773 4.7109l-1.4414 0.83203c-0.85938 0.53125-1.8438 0.80469-2.8203 0.80469zm-50.273-22.844c13.625 0 29.406 2.5352 46.57 9.8555 0.66797-89.078 13.109-181 35.922-214-67.59 14.133-120.45 103.27-123.35 212.2 8.6758-3.6523 22.895-8.0586 40.855-8.0586z" />
      <path d="m496.44 300.79c-0.68359 0-1.332-0.10547-1.8516-0.34766-51.281-23.945-88.34-3.0195-92.402-0.54687-1.6523 1.0078-3.7383 1.0508-5.4336 0.085937-1.6914-0.94531-2.7461-2.7461-2.7461-4.6914-0.03125-138.34-25.652-223.29-44.008-223.29-2.9766 0-5.3828-2.4102-5.3828-5.3828 0-2.9766 2.4102-5.3828 5.3828-5.3828 84.254 0 152.93 104.91 153.08 233.88 0 2.0078-1.1055 3.8398-2.875 4.7734-0.98438 0.51172-2.4453 0.90234-3.7656 0.90234zm-50.262-22.434c13.402 0 28.973 2.4102 46.043 9.3086-2.4297-109.64-55.438-199.5-123.37-213.7 22.695 32.801 35.109 123.9 35.887 212.64 8.4883-3.6406 22.891-8.2461 41.441-8.2461z" />
      <path d="m398.72 300.83c-0.81641 0-1.6055-0.15625-2.2734-0.50391-46.23-24.324-85.773-5.1094-93.242-1-1.6719 0.91406-3.7031 0.87109-5.3359-0.085937-1.6406-0.97656-2.6445-2.7344-2.6445-4.6367 0.10156-113.13 19.332-233.37 54.777-233.37 35.547 0 54.758 120.59 54.781 234.05 0 1.9258-1.0234 3.7031-2.6914 4.6602-0.95312 0.55859-2.1836 0.88281-3.3711 0.88281zm-49.801-23.355c13.5 0 28.836 2.5039 45.066 9.6953-1.0117-133.53-25.988-215.16-43.984-215.16-17.914 0-42.824 81.191-43.965 214.06 9.1016-3.8047 24.242-8.5898 42.883-8.5898z" />
    </svg>
  </div>
));

const Umbrella = () => {
  return (
    <Tooltip label="Umbrella">
      <UmbrellaIcon />
    </Tooltip>
  );
};

export default Umbrella;
