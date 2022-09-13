import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetOneCallQuery } from "../weatherApi/weatherApiSlice";
import Loader from "../../components/UI/Loader";
import Error from "../../pages/Error";
import CurrentWeatherCard from "../../components/layout/CurrentWeatherCard";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import PrecipitationChart from "../../components/UI/PrecipitationChart";

const Weather = () => {
  let navigate = useNavigate();
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
    const current = weatherData.current;
    const offset =
      weatherData.timezone_offset + new Date().getTimezoneOffset() * 60;

    weatherEls = (
      <div className="w-full">
        <CurrentWeatherCard
          temp={current.temp}
          feelsLike={current.feels_like}
          humidity={current.humidity}
          clouds={current.clouds}
          windSpeed={current.wind_speed}
          windDeg={current.wind_deg}
          windGust={current.wind_gust}
          sunrise={current.sunrise + offset}
          sunset={current.sunset + offset}
          uvi={current.uvi}
          icon={current.weather[0].icon}
          description={current.weather[0].description}
          rain={current.rain ? current.rain["1h"] : 0}
          snow={current.snow ? current.snow["1h"] : 0}
          date={current.dt + offset}
        />
        {weatherData.minutely && (
          <PrecipitationChart
            data={weatherData.minutely}
            rain={current.rain ? current.rain["1h"] : 0}
            snow={current.snow ? current.snow["1h"] : 0}
          />
        )}
      </div>
    );
  } else if (isWeatherError) {
    console.log(weatherError);
  }
  useEffect(() => {
    isWeatherError && navigate("/error");
  }, []);
  return <div className="w-full">{weatherEls}</div>;
};

export default Weather;
