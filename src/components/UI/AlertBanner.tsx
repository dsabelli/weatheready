import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useGetOneCallQuery } from "../../features/weatherApi/weatherApiSlice";
import Loader from "./Loader";
import Warning from "../../assets/icons/static/Warning";
import { ArrowRight } from "../../assets/icons/static/Arrow";
import { Link } from "react-router-dom";
const AlertBanner = () => {
  const { lat, lon } = useSelector((state: RootState) => state.location);

  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isSuccess: isWeatherSuccess,
    isError: isWeatherError,
    error: weatherError,
  } = useGetOneCallQuery({
    lat: lat,
    lon: lon,
    units: "metric",
  });

  let alertEls;

  if (isWeatherLoading) {
    alertEls = <Loader />;
  } else if (isWeatherSuccess) {
    const alerts = weatherData.alerts;
    console.log(alerts);

    alertEls = alerts[0].event
      .split(" ")
      .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="alert bg-red-800 text-primary-content shadow-lg my-4 mx-auto max-w-4xl">
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
          <Warning />
          <p>{alertEls}</p>
        </div>
        <Link to="/alert">
          <ArrowRight className="w-6" />
        </Link>
      </div>
    </div>
  );
};

export default AlertBanner;
