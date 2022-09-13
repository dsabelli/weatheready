import React from "react";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import AlertWeather from "../features/weather/AlertWeather";

const Alert = () => {
  return (
    <div>
      <NavBar />
      <AlertWeather />
      <Footer />
    </div>
  );
};

export default Alert;
