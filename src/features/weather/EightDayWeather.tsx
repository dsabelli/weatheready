import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ForecastWeatherCard from "../../components/layout/ForecastWeatherCard";
import Loader from "../../components/UI/Loader";
import { useGetOneCallQuery } from "../../features/weatherApi/weatherApiSlice";
import Error from "../../pages/Error";
import { nanoid } from "nanoid";
import EightDayChart from "../../components/UI/EightDayChart";
const EightDayWeather = () => {
  let navigate = useNavigate();
  const { metric } = useSelector((state: RootState) => state.settings);
  const { lat, lon } = useSelector((state: RootState) => state.location);
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
    const offset =
      weatherData.timezone_offset + new Date().getTimezoneOffset() * 60;
    weatherEls = weatherData.daily.map((day) => (
      <ForecastWeatherCard
        key={nanoid()}
        temp={day.temp.max}
        feelsLike={day.temp.min}
        icon={day.weather[0].icon}
        description={day.weather[0].description}
        date={day.dt + offset}
        rain={day.rain || 0}
        snow={day.snow || 0}
        pop={day.pop}
        windSpeed={day.wind_speed}
        windGust={day.wind_gust}
        windDeg={day.wind_deg}
        uvi={day.uvi}
        humidity={day.humidity}
        clouds={day.clouds}
        sunset={day.sunset + offset}
      />
    ));
  } else if (isWeatherError) {
    console.log(weatherError);
  }
  useEffect(() => {
    isWeatherError && navigate("/error");
  }, []);
  return (
    <div>
      <div className=" mx-auto mb-4 max-w-3xl">
        {weatherData && <EightDayChart data={weatherData.daily} />}
      </div>
      {weatherEls}
    </div>
  );
};

export default EightDayWeather;
