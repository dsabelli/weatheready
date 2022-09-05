import React from "react";
import NavBar from "../components/UI/NavBar";
import AlertWeather from "../features/weather/AlertWeather";

const Alert = () => {
  return (
    <div>
      <NavBar />
      <AlertWeather />
    </div>
  );
};

export default Alert;
