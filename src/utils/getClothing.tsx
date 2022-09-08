import Boots from "../assets/icons/static/clothing/Boots";
import Hat from "../assets/icons/static/clothing/Hat";
import Jacket from "../assets/icons/static/clothing/Jacket";
import Mittens from "../assets/icons/static/clothing/Mittens";
import Pants from "../assets/icons/static/clothing/Pants";
import RainBoots from "../assets/icons/static/clothing/RainBoots";
import Scarf from "../assets/icons/static/clothing/Scarf";
import Shorts from "../assets/icons/static/clothing/Shorts";
import Sunglasses from "../assets/icons/static/clothing/Sunglasses";
import Sunscreen from "../assets/icons/static/clothing/Sunscreen";
import Sweater from "../assets/icons/static/clothing/Sweater";
import Toque from "../assets/icons/static/clothing/Toque";
import TShirt from "../assets/icons/static/clothing/TShirt";
import Umbrella from "../assets/icons/static/clothing/Umbrella";
import WinterJacket from "../assets/icons/static/clothing/WinterJacket";
import Info from "../assets/icons/static/Info";

const getClothing = (
  temp: number,
  clouds: number,
  uvi: number,
  sunset: number,
  pop: number,
  rain: number
) => {
  let clothing;

  temp = Math.round(temp);

  switch (true) {
    case temp < 5:
      clothing = (
        <>
          <WinterJacket />
          <Pants />
        </>
      );
      break;
    case temp >= 5 && temp <= 15:
      clothing = (
        <>
          <Sweater />
          <Pants />
        </>
      );
      break;
    case temp > 15 && temp <= 20:
      clothing = (
        <>
          <Jacket />
          <Pants />
        </>
      );

      break;
    case temp > 20:
      clothing = (
        <>
          <TShirt />
          <Shorts />
        </>
      );

      break;
  }

  const accessories = (
    <>
      {clouds < 50 &&
        new Date().getHours() < new Date(sunset * 1000).getHours() && (
          <Sunglasses />
        )}
      {uvi >= 5 && (
        <>
          <Sunscreen />
          <Hat />
        </>
      )}
      {rain ||
        (pop * 100 >= 60 && (
          <>
            <Umbrella />
            <RainBoots />
          </>
        ))}
      {temp <= 0 && (
        <>
          <Toque />
          <Mittens />
          <Scarf />
        </>
      )}
    </>
  );

  return (
    <div className="flex">
      {clothing}
      {
        <Info>
          <div>
            <div className="flex justify-center items-center">
              {accessories}
            </div>
            <h3 className="text-center text-xs">Accessories</h3>
          </div>
        </Info>
      }
    </div>
  );
};

export { getClothing };