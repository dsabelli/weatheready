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
  date: number,
  sunset: number,
  pop: number,
  rain: number
) => {
  let clothing;

  temp = Math.round(temp);

  if (
    clouds <= 25 &&
    new Date(date * 1000).getHours() < new Date(sunset * 1000).getHours() - 2 &&
    new Date(date * 1000).getHours() > 9
  )
    temp += 2;

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
      {(uvi >= 4 && !rain) ||
        (uvi >= 4 && pop * 100 < 20 && (
          <>
            <Sunscreen />
            <Hat />
          </>
        ))}
      {rain ||
        (pop * 100 >= 50 && temp > 5 && (
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
    <div className="flex gap-1">
      {clothing}
      {
        <Info>
          <div>
            <div className="flex justify-center items-center gap-1">
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
