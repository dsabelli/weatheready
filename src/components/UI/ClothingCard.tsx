import React from "react";
import Boots from "../../assets/icons/static/clothing/Boots";
import Hat from "../../assets/icons/static/clothing/Hat";
import Jacket from "../../assets/icons/static/clothing/Jacket";
import Mittens from "../../assets/icons/static/clothing/Mittens";
import Pants from "../../assets/icons/static/clothing/Pants";
import RainBoots from "../../assets/icons/static/clothing/RainBoots";
import Scarf from "../../assets/icons/static/clothing/Scarf";
import Shorts from "../../assets/icons/static/clothing/Shorts";
import Sunglasses from "../../assets/icons/static/clothing/Sunglasses";
import Sunscreen from "../../assets/icons/static/clothing/Sunscreen";
import Sweater from "../../assets/icons/static/clothing/Sweater";
import Toque from "../../assets/icons/static/clothing/Toque";
import TShirt from "../../assets/icons/static/clothing/TShirt";
import Umbrella from "../../assets/icons/static/clothing/Umbrella";
import WinterJacket from "../../assets/icons/static/clothing/WinterJacket";

const ClothingCard = ({ clothing }) => {
  return (
    <div className="flex bg-base-200 shadow-xl p-4  ">
      <div className="text-xl flex flex-col justify-center items-center">
        {/* {clothing.top} */}
        {/* {clothing.bottom} */}
        <TShirt />
        <Pants />
        <RainBoots />
        <WinterJacket />
        <Sweater />
        <Jacket />
        <Toque />
        <Umbrella />
        <Boots />
        <Hat />
        <Mittens />
        <Scarf />
        <Shorts />
        <Sunglasses />
        <Sunscreen />
      </div>
    </div>
  );
};

export default ClothingCard;
