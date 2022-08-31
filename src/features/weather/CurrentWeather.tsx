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
  const { metric } = useSelector((state: RootState) => state.settings);

  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isSuccess: isWeatherSuccess,
    isError: isWeatherError,
    error: weatherError,
  } = useGetOneCallQuery({
    lat: lat,
    lon: lon,
    units: metric ? "metric" : "imperial",
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
    const current = weatherData.current;
    weatherEls = (
      <div>
        <CurrentWeatherCard
          temp={current.temp}
          feelsLike={current.feels_like}
          humidity={current.humidity}
          clouds={current.clouds}
          windSpeed={current.wind_speed}
          windDeg={current.wind_deg}
          windGust={current.wind_gust}
          sunrise={current.sunrise}
          sunset={current.sunset}
          uvi={current.uvi}
          icon={current.weather[0].icon}
          description={current.weather[0].description}
          rain={0}
          snow={0}
          // rain={current.rain["1h"] || 0}
          // snow={current.snow["1h"] || 0}
        />
        {weatherData.minutely && (
          <PrecipitationChart data={weatherData.minutely} />
        )}
      </div>
    );
  } else if (isWeatherError) {
    weatherEls = <Error />;
  }

  return <div>{weatherEls}</div>;
};

export default Weather;
