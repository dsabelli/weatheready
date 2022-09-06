interface Accessories {
  umbrella?: boolean;
  sunscreen?: boolean;
  sunglasses?: boolean;
  hat?: boolean;
  toque?: boolean;
  gloves?: boolean;
  boots?: boolean;
  scarf?: boolean;
}
interface Clothing {
  top: string;
  bottom: string;
  accessories?: Accessories;
}

const getClothing = (temp: number, clouds: number): Clothing => {
  let clothing: Clothing = {
    top: "string",
    bottom: "string",
  };

  // switch (true) {
  //   case clouds === 0:
  //     temp += 2;
  //     console.log(temp);
  //     break;
  //   case clouds > 0 && clouds <= 15:
  //     temp += 1;
  //     break;
  //   case clouds > 15 && clouds <= 30:
  //     temp += 0.5;
  //     break;
  //   case clouds > 30 && clouds <= 45:
  //     temp += 0;
  //     break;
  //   case clouds > 45 && clouds <= 60:
  //     temp -= 0.5;
  //     break;
  //   case clouds > 60 && clouds <= 75:
  //     temp -= 1;
  //     break;
  //   case clouds > 75 && clouds <= 100:
  //     temp -= 2;
  //     break;
  // }
  temp = Math.round(temp);
  switch (true) {
    case temp < 5:
      clothing = {
        top: "Winter Coat",
        bottom: "Insulated Pants",
        accessories: { toque: true, scarf: true, boots: true },
      };
      break;
    case temp >= 5 && temp <= 15:
      clothing = {
        top: "thick sweater",
        bottom: "pants",
      };
      break;
    case temp > 15 && temp <= 20:
      clothing = {
        top: "thin sweater",
        bottom: "pants",
      };
      break;
    case temp > 20:
      clothing = {
        top: "short-sleeve",
        bottom: "shorts",
      };
      break;
  }

  return clothing;
};

export { getClothing };
