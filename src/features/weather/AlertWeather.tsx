import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetOneCallQuery } from "../weatherApi/weatherApiSlice";
import Loader from "../../components/UI/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import AlertWeatherCard from "../../components/layout/AlertWeatherCard";
import { nanoid } from "nanoid";

const AlertWeather = () => {
  let navigate = useNavigate();
  const { lat, lon } = useSelector((state: RootState) => state.location);
  const { metric } = useSelector((state: RootState) => state.settings);

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
      units: metric ? "metric" : "imperial",
    },
    { skip: !lat }
  );

  let weatherEls;

  if (isWeatherLoading) {
    weatherEls = <Loader />;
  } else if (isWeatherSuccess) {
    if (weatherData.alerts)
      weatherEls = weatherData.alerts.map((alert) => (
        <AlertWeatherCard
          key={nanoid()}
          sender_name={alert.sender_name}
          event={alert.event
            .split(" ")
            .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
            .join(" ")}
          start={alert.start}
          end={alert.end}
          description={alert.description}
        />
      ));
    else weatherEls = "No weather alerts";
  } else if (isWeatherError) {
    console.log(weatherError);
  }

  useEffect(() => {
    isWeatherError && navigate("/error");
  }, []);

  return <div className="px-4">{weatherEls}</div>;
};

export default AlertWeather;
