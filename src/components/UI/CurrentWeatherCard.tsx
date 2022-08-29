import React from "react";
import Navigation from "../../assets/icons/static/Navigation";
import { getAnimatedIcon } from "../../utils/getIcon";
import { getUvDesc } from "../../utils/getUvDesc";

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
}
let units: string = "°C";

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
}) => {
  const sunriseHours: number = new Date(sunrise * 1000).getHours();
  const sunriseMinutes: number = new Date(sunrise * 1000).getMinutes();
  const sunsetHours: number = new Date(sunset * 1000).getHours();
  const sunsetMinutes: number = new Date(sunset * 1000).getMinutes();
  const uv: number = Math.round(uvi);
  const desc: string = description
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="flex bg-base-100 shadow-xl p-4 mx-auto">
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
              {units}
            </p>
            <p className="text-sm">
              Feels like{" "}
              <span className="text-xl">
                {Math.round(feelsLike)}
                {units}
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
          <li className="flex justify-between border-b-2 mb-4 ">
            <p>Cloud Cover</p> <p>{clouds}%</p>
          </li>
          <li className="flex justify-between border-b-2 mb-4">
            <p>Humidity</p> <p>{humidity}%</p>
          </li>
          <li className="flex justify-between border-b-2 mb-4">
            <p>Wind Speed</p>
            <div className="flex gap-1">
              <Navigation className={`w-5 mb-1.5`} rotate={windDeg} />
              {Math.round(windSpeed * 3.6)} km/h
            </div>
          </li>
          <li className="flex justify-between border-b-2 mb-4">
            <p>Wind Gust</p>
            <p>{Math.round(windGust * 3.6)} km/h</p>
          </li>
          <li className="flex justify-between border-b-2 mb-4">
            <p>UV</p>{" "}
            <p>
              {uv} {getUvDesc(uv)}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
