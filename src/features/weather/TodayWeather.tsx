import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ForecastWeatherCard from "../../components/UI/ForecastWeatherCard";
import Loader from "../../components/UI/Loader";
import { useGetOneCallQuery } from "../../features/weatherApi/weatherApiSlice";
import Error from "../../pages/Error";
import { nanoid } from "nanoid";
const TodayWeather = () => {
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
        key={nanoid()}
        todayTemp={weatherData.daily[0].temp}
        todayFeelsLike={weatherData.daily[0].feels_like}
        icon={weatherData.daily[0].weather[0].icon}
        description={weatherData.daily[0].weather[0].description}
        iconWidth={`w-24`}
        title={`title???`}
        date={weatherData.daily[0].dt}
        rain={weatherData.daily[0].rain}
        snow={weatherData.daily[0].snow}
        pop={weatherData.daily[0].pop}
        windSpeed={weatherData.daily[0].wind_speed}
        windGust={weatherData.daily[0].wind_gust}
        uvi={weatherData.daily[0].uvi}
        humidity={weatherData.daily[0].humidity}
        clouds={weatherData.daily[0].clouds}
        temp={0}
        feelsLike={0}
      />
    );
  } else if (isWeatherError) {
    weatherEls = <Error />;
  }

  return <div>{weatherEls}</div>;
};

export default TodayWeather;
