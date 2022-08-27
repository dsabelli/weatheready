import React from "react";
import A01d from "../assets/icons/animated/A01d";
import A01n from "../assets/icons/animated/A01n";
import A02d from "../assets/icons/animated/A02d";
import A02n from "../assets/icons/animated/A02n";
import A03d from "../assets/icons/animated/A03d";
import A03n from "../assets/icons/animated/A03n";
import A04d from "../assets/icons/animated/A04d";
import A04n from "../assets/icons/animated/A04n";
import A09d from "../assets/icons/animated/A09d";
import A09n from "../assets/icons/animated/A09n";
import A10d from "../assets/icons/animated/A10d";
import A10n from "../assets/icons/animated/A10n";
import A11d from "../assets/icons/animated/A11d";
import A11n from "../assets/icons/animated/A11n";
import A13d from "../assets/icons/animated/A13d";
import A13n from "../assets/icons/animated/A13n";
import A50d from "../assets/icons/animated/A50d";
import A50n from "../assets/icons/animated/A50n";

const getAnimatedIcon = (icon: string) => {
  let weatherIcon;

  switch (true) {
    case icon === "01d":
      weatherIcon = <A01d />;
      break;
    case icon === "01n":
      weatherIcon = <A01n />;
      break;
    case icon === "02d":
      weatherIcon = <A02d />;
      break;
    case icon === "02n":
      weatherIcon = <A02n />;
      break;
    case icon === "03d":
      weatherIcon = <A03d />;
      break;
    case icon === "03n":
      weatherIcon = <A03n />;
      break;
    case icon === "04d":
      weatherIcon = <A04d />;
      break;
    case icon === "04n":
      weatherIcon = <A04n />;
      break;
    case icon === "09d":
      weatherIcon = <A09d />;
      break;
    case icon === "09n":
      weatherIcon = <A09n />;
      break;
    case icon === "10d":
      weatherIcon = <A10d />;
      break;
    case icon === "10n":
      weatherIcon = <A10n />;
      break;
    case icon === "11d":
      weatherIcon = <A11d />;
      break;
    case icon === "11n":
      weatherIcon = <A11n />;
      break;
    case icon === "13d":
      weatherIcon = <A13d />;
      break;
    case icon === "13n":
      weatherIcon = <A13n />;
      break;
    case icon === "50d":
      weatherIcon = <A50d />;
      break;
    case icon === "50n":
      weatherIcon = <A50n />;
      break;
  }

  return <>{weatherIcon}</>;
};

export { getAnimatedIcon };
