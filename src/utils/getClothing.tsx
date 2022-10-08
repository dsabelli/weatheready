import { nanoid } from "nanoid";
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
  const dateHours = new Date(date * 1000).getHours();
  const sunsetHours = new Date(sunset * 1000).getHours();
  temp = Math.round(temp);

  //if it's mostly sunny, after 8am and before 2 hours to sunset, add 2C to temperature
  //corrects for very sunny weather, think full sun at noon
  if (clouds <= 25 && dateHours < sunsetHours - 2 && dateHours > 8) temp += 2;

  //switch statement with temperature breakpoints
  //breakpoints are based on studies of human comfort and clothing thermal insulation values
  switch (true) {
    case temp < 5:
      clothing = (
        <>
          <WinterJacket />
          <Pants />
        </>
      );
      break;
    case temp >= 5 && temp <= 12:
      clothing = (
        <>
          <Sweater />
          <Pants />
        </>
      );
      break;
    case temp > 12 && temp <= 20:
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

  //accessories are rendered when conditions are met
  const accessories: JSX.Element[] = [];

  if (temp <= 0) accessories.push(<Scarf />);
  if (temp < 5) accessories.push(<Toque />, <Mittens />);
  if (
    clouds < 50 &&
    dateHours < sunsetHours &&
    dateHours !== 2 &&
    dateHours > 8
  )
    accessories.push(<Sunglasses />);
  if (
    (uvi >= 5 && !rain && temp >= 15) ||
    (uvi >= 5 && pop * 100 < 20 && temp >= 15)
  )
    accessories.push(<Sunscreen />, <Hat />);
  if (rain > 0 || (pop * 100 >= 50 && temp > 5))
    accessories.push(<Umbrella />, <RainBoots />);

  return (
    <div className="flex gap-1">
      {clothing}
      {
        <Info>
          <div>
            <div className="flex justify-center items-center gap-1">
              {/* if no conditions are met, return "N/A" */}
              {accessories.length
                ? accessories.map((a) => <div key={nanoid()}>{a}</div>)
                : "N/A"}
            </div>
            <h3 className="text-center text-xs">Accessories</h3>
          </div>
        </Info>
      }
    </div>
  );
};

export { getClothing };
