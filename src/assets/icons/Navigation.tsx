import React from "react";

interface Props {
  className: string;
  rotate: number;
}

const Navigation: React.FC<Props> = ({ className, rotate }) => {
  return (
    <div
      className={`${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-navigation-2"
      >
        <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
      </svg>
    </div>
  );
};

export default Navigation;
