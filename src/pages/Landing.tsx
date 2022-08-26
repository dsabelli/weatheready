import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClothingCard from "../components/UI/ClothingCard";
import NavBar from "../components/UI/NavBar";
import CurrentWeather from "../features/weather/CurrentWeather";

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
    </div>
  );
};

export default Landing;
