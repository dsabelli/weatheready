import React from "react";
import { Link, Outlet, Location, useLocation } from "react-router-dom";
import AlertBanner from "../components/UI/AlertBanner";
import Map from "../features/weatherRadarApi/Map";
import NavBar from "../components/layout/NavBar";
import CurrentWeather from "../features/weather/CurrentWeather";

const Landing = () => {
  let location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="">
      <NavBar />
      <AlertBanner />
      <div className="flex mx-auto justify-center max-w-4xl">
        {!pathname.includes("app/") && <CurrentWeather />}
      </div>
      {!pathname.includes("app/") && <Map height={"33vh"} />}
      <Outlet />
    </div>
  );
};

export default Landing;
