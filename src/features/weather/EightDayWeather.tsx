import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ForecastWeatherCard from "../../components/UI/ForecastWeatherCard";
import Loader from "../../components/UI/Loader";
import { useGetOneCallQuery } from "../weatherApi/weatherApiSlice";
import Error from "../../pages/Error";
const EightDayWeather = () => {
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
  });
  console.log(weatherData);

  let weatherEls;

  if (isWeatherLoading) {
    weatherEls = <Loader />;
  } else if (isWeatherSuccess) {
    console.log(weatherData);

    weatherEls = (
      <ForecastWeatherCard
        temp={22}
        feelsLike={24}
        icon="01d"
        description="sunny"
        name="Leamington"
      />
    );
  } else if (isWeatherError) {
    weatherEls = <Error />;
  }

  return <div>{weatherEls}</div>;
};

export default EightDayWeather;
