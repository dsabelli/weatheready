import React from "react";

const ClothingCard = ({ clothing }) => {
  return (
    <div className="flex bg-base-200 shadow-xl p-4  ">
      <div className="text-xl ">
        <h2>
          {clothing.top}
          {clothing.bottom}
        </h2>
      </div>
    </div>
  );
};

export default ClothingCard;
