import React from "react";
import { NavIcon } from "../../assets/icons/static/weather/Navigation";
import { getAnimatedIcon } from "../../utils/getIcon";
import { getUvDesc } from "../../utils/getUvDesc";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getClothing } from "../../utils/getClothing";

interface WeatherCardData {
  temp: number;
  feelsLike: number;
  humidity: number;
  clouds: number;
  windSpeed: number;
  windDeg: number;
  windGust: number;
  sunrise: number;
  sunset: number;
  icon: string;
  description: string;
  uvi: number;
  rain: number;
  snow: number;
  date: number;
}

const CurrentWeatherCard: React.FC<WeatherCardData> = ({
  temp,
  feelsLike,
  humidity,
  clouds,
  windSpeed,
  windDeg,
  windGust,
  sunrise,
  sunset,
  icon,
  description,
  uvi,
  rain,
  snow,
  date,
}) => {
  const { preferences } = useSelector((state: RootState) => state.settings);
  const { runsHot, runsCold } = preferences;
  const { metric, units } = useSelector((state: RootState) => state.settings);
  const sunriseHours: number = new Date(sunrise * 1000).getHours();
  const sunriseMinutes: number = new Date(sunrise * 1000).getMinutes();
  const sunsetHours: number = new Date(sunset * 1000).getHours();
  const sunsetMinutes: number = new Date(sunset * 1000).getMinutes();
  const desc: string = description
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");

  const getTemp = (feelsLike: number): number => {
    let temp = feelsLike;
    if (!metric) temp = (temp - 32) * (5 / 9);
    runsHot ? (temp += 1) : runsCold ? (temp -= 1) : temp;
    return temp;
  };

  const clothing = getClothing(
    getTemp(feelsLike),
    clouds,
    uvi,
    date,
    sunset,
    0,
    rain
  );

  return (
    <div className="flex bg-base-100 gap-4 mx-auto max-w-3xl px-2">
      <div className="flex flex-col w-2/5">
        <div className="flex justify-between items-center">
          <div className="text-lg md:text-2xl">
            <h2>Current Weather - </h2>
            <div>{desc}</div>
          </div>
          <div className="justify-center hidden md:flex">{clothing}</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-32 md:w-48 ">{getAnimatedIcon(icon)}</div>
          <div>
            <p className="text-2xl md:text-4xl font-semibold">
              {Math.round(temp)}
              {units.temp}
            </p>
            <p className="text-xs md:text-sm">
              Feels like{" "}
              <span className="text-base md:text-xl">
                {Math.round(feelsLike)}
                {units.temp}
              </span>
            </p>
          </div>
        </div>
        <div className="justify-center md:hidden flex">{clothing}</div>
      </div>
      <div className="w-3/5">
        <ul className="text-xs sm:text-sm md:text-base">
          {rain !== 0 && (
            <li className="flex justify-between border-b-2 mb-3 md:mb-4">
              <p>Rain</p>
              <p>
                {Math.round(
                  metric
                    ? rain * 100
                    : rain / 25.4 < 0.1
                    ? 0.1 * 100
                    : (rain / 25.4) * 100
                ) / 100}{" "}
                {units.rain}
              </p>
            </li>
          )}
          {snow !== 0 && (
            <li className="flex justify-between border-b-2 mb-3 md:mb-4">
              <p>Snow</p>
              <p>
                {Math.round(
                  metric
                    ? snow * 10
                    : snow / 25.4 < 0.1
                    ? 0.1 * 100
                    : (snow / 25.4) * 100
                ) / 100}{" "}
                {units.snow}
              </p>
            </li>
          )}
          <li className="flex justify-between border-b-2 mb-3 md:mb-4 ">
            <p>Cloud Cover</p> <p>{Math.round(clouds)}%</p>
          </li>
          <li className="flex justify-between border-b-2 mb-3 md:mb-4">
            <p>Humidity</p> <p>{Math.round(humidity)}%</p>
          </li>
          <li className="flex justify-between border-b-2 mb-3 md:mb-4">
            <p>Wind Speed</p>
            <div className="flex items-center gap-1">
              <NavIcon className={`w-5 sm:mb-1.5`} rotate={windDeg} />
              {Math.round(metric ? windSpeed * 3.6 : windSpeed)} {units.wind}
            </div>
          </li>
          <li className="flex justify-between border-b-2 mb-3 md:mb-4">
            <p>Wind Gust</p>
            <p>
              {!isNaN(windGust)
                ? Math.round(metric ? windGust * 3.6 : windGust)
                : "N/A"}{" "}
              {!isNaN(windGust) && units.wind}
            </p>
          </li>
          <li className="flex justify-between border-b-2 mb-3 md:mb-4">
            <p>UVI</p>{" "}
            <p>
              {Math.round(uvi)} {getUvDesc(Math.round(uvi))}
            </p>
          </li>
          <li className="flex justify-between border-b-2 mb-3 md:mb-4">
            <p>{`Sunrise ${sunriseHours}:${
              sunriseMinutes < 10 ? 0 : ""
            }${sunriseMinutes} AM`}</p>
            <p>{`Sunset ${sunsetHours - 12}:${
              sunsetMinutes < 10 ? 0 : ""
            }${sunsetMinutes} PM`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
