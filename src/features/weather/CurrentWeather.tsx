import React, { useState, useEffect } from "react";
import { useGetOneCallQuery } from "../weatherApi/weatherApiSlice";
import Loader from "../../components/UI/Loader";
import Error from "../../pages/Error";
import CurrentWeatherCard from "../../components/UI/CurrentWeatherCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setLocation } from "../location/locationSlice";
import PrecipitationChart from "../../components/UI/PrecipitationChart";

interface Coords {
  coords: {
    latitude: number;
    longitude: number;
  };
}

const Weather = () => {
  const dispatch = useDispatch();
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

  const successCallback = (position: Coords) => {
    const { latitude, longitude } = position.coords;
    dispatch(
      setLocation({ lat: latitude.toString(), lon: longitude.toString() })
    );
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
      <div>
        <CurrentWeatherCard
          temp={weatherData.current.temp}
          feelsLike={weatherData.current.feels_like}
          humidity={weatherData.current.humidity}
          clouds={weatherData.current.clouds}
          windSpeed={weatherData.current.wind_speed}
          windDeg={weatherData.current.wind_deg}
          windGust={weatherData.current.wind_gust}
          sunrise={weatherData.current.sunrise}
          sunset={weatherData.current.sunset}
          uvi={weatherData.current.uvi}
          icon={weatherData.current.weather[0].icon}
          description={weatherData.current.weather[0].description}
        />
        <PrecipitationChart data={weatherData.minutely} />
      </div>
    );
  } else if (isWeatherError) {
    weatherEls = <Error />;
  }

  return <div>{weatherEls}</div>;
};

export default Weather;
