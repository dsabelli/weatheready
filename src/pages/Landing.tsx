import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import ClothingCard from "../components/UI/ClothingCard";
import NavBar from "../components/UI/NavBar";
import CurrentWeather from "../features/weather/CurrentWeather";
import TodayWeather from "../features/weather/TodayWeather";

const Landing = () => {
  return (
    <div>
      <NavBar />
      <div className="flex mx-auto justify-center max-w-4xl">
        <Link className="" to="today/a/a">
          <CurrentWeather />
        </Link>
        <ClothingCard />
      </div>
      <Outlet />
    </div>
  );
};

export default Landing;
