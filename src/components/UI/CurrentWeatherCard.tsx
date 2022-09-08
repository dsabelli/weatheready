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
}) => {
  const { metric, units } = useSelector((state: RootState) => state.settings);
  const sunriseHours: number = new Date(sunrise * 1000).getHours();
  const sunriseMinutes: number = new Date(sunrise * 1000).getMinutes();
  const sunsetHours: number = new Date(sunset * 1000).getHours();
  const sunsetMinutes: number = new Date(sunset * 1000).getMinutes();
  const desc: string = description
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");

  const clothing = getClothing(
    feelsLike,
    clouds,
    uvi,
    new Date().getHours(),
    sunset,
    0,
    rain
  );

  return (
    <div className="flex bg-base-100 shadow-xl p-4 mx-auto max-w-4xl">
      <div className="flex flex-col w-full">
        <div className="text-2xl ">
          <h2>Current Weather - </h2>
          <div>{desc}</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-48 ">{getAnimatedIcon(icon)}</div>
          <div>
            <p className="text-4xl">
              {Math.round(temp)}
              {units.temp}
            </p>
            <p className="text-sm">
              Feels like{" "}
              <span className="text-xl">
                {Math.round(feelsLike)}
                {units.temp}
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-between  mb-4">
          <p>{`Sunrise ${sunriseHours}:${
            sunriseMinutes < 10 ? 0 : ""
          }${sunriseMinutes} AM`}</p>
          <p>{`Sunset ${sunsetHours}:${
            sunsetMinutes < 10 ? 0 : ""
          }${sunsetMinutes} PM`}</p>
        </div>
      </div>
      <div className="w-full px-4">
        <ul className="mt-8">
          {rain !== 0 && (
            <li className="flex justify-between border-b-2 mb-4">
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
            <li className="flex justify-between border-b-2 mb-4">
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
          <li className="flex justify-between border-b-2 mb-4 ">
            <p>Cloud Cover</p> <p>{Math.round(clouds)}%</p>
          </li>
          <li className="flex justify-between border-b-2 mb-4">
            <p>Humidity</p> <p>{Math.round(humidity)}%</p>
          </li>
          <li className="flex justify-between border-b-2 mb-4">
            <p>Wind Speed</p>
            <div className="flex gap-1">
              <NavIcon className={`w-5 mb-1.5`} rotate={windDeg} />
              {Math.round(metric ? windSpeed * 3.6 : windSpeed)} {units.wind}
            </div>
          </li>
          <li className="flex justify-between border-b-2 mb-4">
            <p>Wind Gust</p>
            <p>
              {!isNaN(windGust)
                ? Math.round(metric ? windGust * 3.6 : windGust)
                : "N/A"}{" "}
              {!isNaN(windGust) && units.wind}
            </p>
          </li>
          <li className="flex justify-between border-b-2 mb-4">
            <p>UV</p>{" "}
            <p>
              {Math.round(uvi)} {getUvDesc(Math.round(uvi))}
            </p>
          </li>
        </ul>
        <div className="flex justify-center ">{clothing}</div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
