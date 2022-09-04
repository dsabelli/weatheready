import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ForecastWeatherCard from "../../components/UI/ForecastWeatherCard";
import Loader from "../../components/UI/Loader";
import { useGetOneCallQuery } from "../../features/weatherApi/weatherApiSlice";
import Error from "../../pages/Error";
import { nanoid } from "nanoid";
import EightDayChart from "../../components/EightDayChart";
const EightDayWeather = () => {
  const { metric } = useSelector((state: RootState) => state.settings);
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
    units: metric ? "metric" : "imperial",
  });

  let weatherEls;

  if (isWeatherLoading) {
    weatherEls = <Loader />;
  } else if (isWeatherSuccess) {
    weatherEls = weatherData.daily.map((day) => (
      <ForecastWeatherCard
        key={nanoid()}
        temp={day.temp.max}
        feelsLike={day.temp.min}
        icon={day.weather[0].icon}
        description={day.weather[0].description}
        iconWidth={`w-24`}
        date={day.dt}
        rain={day.rain || 0}
        snow={day.snow || 0}
        pop={day.pop}
        windSpeed={day.wind_speed}
        windGust={day.wind_gust}
        windDeg={day.wind_deg}
        uvi={day.uvi}
        humidity={day.humidity}
        clouds={day.clouds}
      />
    ));
  } else if (isWeatherError) {
    weatherEls = <Error />;
  }

  return (
    <div>
      <div className=" mx-auto mb-4 max-w-2xl">
        {" "}
        {weatherData && <EightDayChart data={weatherData.daily} />}
      </div>
      {weatherEls}
    </div>
  );
};

export default EightDayWeather;
