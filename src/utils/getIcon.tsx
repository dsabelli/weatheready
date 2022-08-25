import React from "react";
import W01d from "../assets/icons/W01d";
import W01n from "../assets/icons/W01n";
import W02d from "../assets/icons/W02d";
import W02n from "../assets/icons/W02n";
import W03d from "../assets/icons/W03d";
import W03n from "../assets/icons/W03n";
import W04d from "../assets/icons/W04d";
import W04n from "../assets/icons/W04n";
import W09d from "../assets/icons/W09d";
import W09n from "../assets/icons/W09n";
import W10d from "../assets/icons/W10d";
import W10n from "../assets/icons/W10n";
import W11d from "../assets/icons/W11d";
import W11n from "../assets/icons/W11n";
import W13d from "../assets/icons/W13d";
import W13n from "../assets/icons/W13n";
import W50d from "../assets/icons/W50d";
import W50n from "../assets/icons/W50n";

const getIcon = (icon: string) => {
  let weatherIcon;

  switch (true) {
    case icon === "01d":
      weatherIcon = <W01d />;
      break;
    case icon === "01n":
      weatherIcon = <W01n />;
      break;
    case icon === "02d":
      weatherIcon = <W02d />;
      break;
    case icon === "02n":
      weatherIcon = <W02n />;
      break;
    case icon === "03d":
      weatherIcon = <W03d />;
      break;
    case icon === "03n":
      weatherIcon = <W03n />;
      break;
    case icon === "04d":
      weatherIcon = <W04d />;
      break;
    case icon === "04n":
      weatherIcon = <W04n />;
      break;
    case icon === "09d":
      weatherIcon = <W09d />;
      break;
    case icon === "09n":
      weatherIcon = <W09n />;
      break;
    case icon === "10d":
      weatherIcon = <W10d />;
      break;
    case icon === "10n":
      weatherIcon = <W10n />;
      break;
    case icon === "11d":
      weatherIcon = <W11d />;
      break;
    case icon === "11n":
      weatherIcon = <W11n />;
      break;
    case icon === "13d":
      weatherIcon = <W13d />;
      break;
    case icon === "13n":
      weatherIcon = <W13n />;
      break;
    case icon === "50d":
      weatherIcon = <W50d />;
      break;
    case icon === "50n":
      weatherIcon = <W50n />;
      break;
  }

  return <div>{weatherIcon}</div>;
};

export { getIcon };
