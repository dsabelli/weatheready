import React, { useState, useEffect } from "react";
import { useGetWeatherQuery } from "../weatherApi/weatherApiSlice";
import { useGetGeoQuery } from "../geoApi/geoApiSlice";
import { Location } from "../../types";

const Weather = ({ city, state, country }: Location) => {
  //types??
  const [location, setLocation] = useState({ lat: "0", lon: "0" });
  const [weather, setWeather] = useState({});
  console.log(location);
  console.log(weather);

  const {
    data: geoData,
    isLoading: isGeoLoading,
    isSuccess: isGeoSuccess,
    isError: isGeoError,
    error: geoError,
  } = useGetGeoQuery({
    city,
    state,
    country,
  });
  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isSuccess: isWeatherSuccess,
    isError: isWeatherError,
    error: weatherError,
  } = useGetWeatherQuery({
    lat: location.lat,
    lon: location.lon,
  });
  useEffect(() => {
    isGeoSuccess && setLocation(geoData[0]);
  }, [isGeoSuccess]);

  useEffect(() => {
    isWeatherSuccess && setWeather(weatherData);
  }, [isWeatherSuccess]);

  let weatherEls;
  if (isWeatherLoading) {
    weatherEls = <p>Loading...</p>;
  } else if (isWeatherSuccess) {
    weatherEls = JSON.stringify(weather);
  }

  return <div>{weatherEls}</div>;
};

export default Weather;
