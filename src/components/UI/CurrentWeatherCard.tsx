import React from "react";
import Navigation from "../../assets/icons/Navigation";
import { getIcon } from "../../utils/getIcon";

interface WeatherCardData {
  temp: number;
  feelsLike: number;
  humidity: number;
  clouds: {
    all: number;
  };
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
  sunrise: number;
  sunset: number;
  icon: string;
  description: string;
  name?: string;
}
let units: string = "°C";

const CurrentWeatherCard: React.FC<WeatherCardData> = ({
  temp,
  feelsLike,
  humidity,
  clouds,
  wind,
  sunrise,
  sunset,
  icon,
  description,
}) => {
  const sunriseHours = new Date(sunrise * 1000).getHours();
  const sunriseMinutes = new Date(sunrise * 1000).getMinutes();
  const sunsetHours = new Date(sunset * 1000).getHours();
  const sunsetMinutes = new Date(sunset * 1000).getMinutes();
  return (
    <div className="flex bg-base-100 shadow-xl p-4 mx-auto">
      <div className="flex flex-col w-full">
        <div className="text-2xl ">
          <h2>Current Weather</h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-48 ">{getIcon(icon)}</div>
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
        <div>{description}</div>
      </div>
      <div className="w-full px-4">
        <ul className="mt-8">
          <li className="flex justify-between border-b-2 mb-4 ">
            <p>Cloud Cover</p> <p>{clouds.all}%</p>
          </li>
          <li className="flex justify-between border-b-2 mb-4">
            <p>Humidity</p> <p>{humidity}%</p>
          </li>
          <li className="flex justify-between border-b-2 mb-4">
            <p>Wind Speed</p>
            <div className="flex gap-1">
              <Navigation className={`w-5 mb-1.5`} rotate={wind.deg} />
              {Math.round(wind.speed * 10)} km/h
            </div>
          </li>
          <li className="flex justify-between border-b-2 mb-4">
            <p>Wind Gust</p>
            <p>{Math.round(wind.gust * 10)} km/h</p>
          </li>
          <li className="flex justify-between border-b-2 mb-4">
            <p>{`Sunrise ${sunriseHours}:${sunriseMinutes} AM`}</p>
            <p>{`Sunset ${sunsetHours}:${sunsetMinutes} PM`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
