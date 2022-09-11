import React from "react";
import { useGetOneCallQuery } from "../weatherApi/weatherApiSlice";
import Loader from "../../components/UI/Loader";
import Error from "../../pages/Error";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import AlertWeatherCard from "../../components/layout/AlertWeatherCard";
import { nanoid } from "nanoid";

const AlertWeather = () => {
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
    weatherEls = <Error />;
  }

  return <div>{weatherEls}</div>;
};

export default AlertWeather;
