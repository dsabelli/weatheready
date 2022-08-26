import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CurrentWeather from "../features/weather/CurrentWeather";

const Landing = () => {
  return (
    <div>
      <Link className="no-underline" to="today/a/a">
        <CurrentWeather />
      </Link>
    </div>
  );
};

export default Landing;
