import React from "react";
import { Link, Outlet, Location, useLocation } from "react-router-dom";
import AlertBanner from "../components/UI/AlertBanner";
import NavBar from "../components/UI/NavBar";
import CurrentWeather from "../features/weather/CurrentWeather";

const Landing = () => {
  let location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="">
      <NavBar />
      <AlertBanner />
      <div className="flex mx-auto justify-center max-w-4xl">
        {!pathname.includes("app/") && (
          <>
            <Link className="w-full" to="today">
              <CurrentWeather />
            </Link>
          </>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Landing;
