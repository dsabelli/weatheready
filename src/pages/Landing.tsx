import React from "react";
import { Link, Outlet, Location, useLocation } from "react-router-dom";
import AlertBanner from "../components/UI/AlertBanner";
import Map from "../features/weatherRadarApi/Map";
import NavBar from "../components/layout/NavBar";
import CurrentWeather from "../features/weather/CurrentWeather";
import Footer from "../components/layout/Footer";

const Landing = () => {
  let location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="flex flex-col justify-between h-screen overflow-auto text-base-content">
      <div className="w-full">
        <NavBar />
        <AlertBanner />
        {!pathname.includes("app/") && (
          <div className="mx-auto px-4">
            <CurrentWeather />
            <Map height={"33vh"} />
          </div>
        )}
        <div className="px-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
