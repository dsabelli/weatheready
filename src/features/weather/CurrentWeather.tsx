import React, { useState, useEffect } from "react";
import { useGetWeatherQuery } from "../weatherApi/weatherApiSlice";
import Loader from "../../components/UI/Loader";
import Error from "../../pages/Error";
import WeatherCard from "../../components/UI/WeatherCard";

interface Coords {
  coords: {
    latitude: number;
    longitude: number;
  };
}

const Weather = () => {
  const [coords, setCoords] = useState({ lat: "0", lon: "0" });

  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isSuccess: isWeatherSuccess,
    isError: isWeatherError,
    error: weatherError,
  } = useGetWeatherQuery({
    lat: coords.lat,
    lon: coords.lon,
  });

  const successCallback = (position: Coords) => {
    const { latitude, longitude } = position.coords;
    setCoords({ lat: latitude.toString(), lon: longitude.toString() });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, console.error, {
      maximumAge: 600_000,
    });
  }, []);

  let weatherEls;

  if (isWeatherLoading) {
    weatherEls = <Loader />;
  } else if (isWeatherSuccess) {
    console.log(weatherData);

    weatherEls = (
      <WeatherCard
        temp={weatherData.main.temp}
        feelsLike={weatherData.main.feels_like}
        humidity={weatherData.main.humidity}
        clouds={weatherData.clouds}
        wind={weatherData.wind}
        sunrise={weatherData.sys.sunrise}
        sunset={weatherData.sys.sunset}
        icon={weatherData.weather[0].icon}
        description={weatherData.weather[0].description}
        name={weatherData.name}
      />
    );
  } else if (isWeatherError) {
    weatherEls = <Error />;
  }

  return <div>{weatherEls}</div>;
};

export default Weather;
