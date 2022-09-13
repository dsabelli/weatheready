import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useGetOneCallQuery } from "../../features/weatherApi/weatherApiSlice";
import Loader from "./Loader";
import Warning from "../../assets/icons/static/Warning";
import { ArrowRight } from "../../assets/icons/static/Arrow";
import { Link } from "react-router-dom";
const AlertBanner = () => {
  let navigate = useNavigate();
  const { lat, lon } = useSelector((state: RootState) => state.location);

  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isSuccess: isWeatherSuccess,
    isError: isWeatherError,
    error: weatherError,
  } = useGetOneCallQuery(
    {
      lat: lat,
      lon: lon,
      units: "metric",
    },
    { skip: !lat }
  );

  let alertEls;

  if (isWeatherLoading) {
    alertEls = <Loader />;
  } else if (isWeatherSuccess) {
    const alerts = weatherData.alerts;

    if (alerts) {
      const alertEvent =
        alerts[0].event === "weather"
          ? "Special Weather Statement"
          : alerts[0].event
              .split(" ")
              .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
              .join(" ");
      const alertDescription = alerts[0].description
        .split(" ")
        .slice(0, 6)
        .join(" ");
      alertEls = (
        <Link to="/alert">
          <div className="alert bg-red-800 text-white shadow-lg mb-4 mx-auto max-w-3xl p-2 md:p-4">
            <div className="flex w-full justify-between">
              <div className="flex gap-2 items-center ">
                <Warning />
                <span className="text-sm md:text-lg font-bold">
                  {alertEvent}:
                </span>
                <p className="hidden sm:block">{alertDescription} </p>
                <p>...</p>
              </div>
              <ArrowRight className="w-5 md:w-7" />
            </div>
          </div>
        </Link>
      );
    }
  }
  useEffect(() => {
    isWeatherError && navigate("/error");
  }, []);

  return <div className="px-4">{alertEls}</div>;
};

export default AlertBanner;
