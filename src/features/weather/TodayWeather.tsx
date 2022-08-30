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
  console.log(weatherData);

  let weatherEls;

  if (isWeatherLoading) {
    weatherEls = <Loader />;
  } else if (isWeatherSuccess) {
    console.log(weatherData);

    weatherEls = weatherData.hourly
      //filter for 8am/2pm/8pm today and 2am tomorrow
      .filter((day) => {
        const hours = new Date(day.dt * 1000).getHours();
        const currentDay = new Date(day.dt * 1000).getDate();
        const today = new Date().getDate();
        return (
          (hours === 2 && currentDay === today + 1) ||
          (hours === 8 && currentDay === today) ||
          (hours === 14 && currentDay === today) ||
          (hours === 20 && currentDay === today)
        );
      })
      .map((hour) => (
        <ForecastWeatherCard
          key={nanoid()}
          temp={hour.temp}
          feelsLike={hour.feels_like}
          icon={hour.weather[0].icon}
          description={hour.weather[0].description}
          iconWidth={`w-24`}
          date={hour.dt}
          rain={hour.rain["1h"] || 0}
          snow={hour.snow["1h"] || 0}
          pop={hour.pop || 0}
          windSpeed={hour.wind_speed}
          windGust={hour.wind_gust}
          uvi={hour.uvi}
          humidity={hour.humidity}
          clouds={hour.clouds}
        />
      ));
  } else if (isWeatherError) {
    weatherEls = <Error />;
  }

  return <div>{weatherEls}</div>;
};

export default TodayWeather;
