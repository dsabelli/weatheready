import React from "react";
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
}

const WeatherCard: React.FunctionComponent<WeatherCardData> = ({
  temp,
  feelsLike,
  humidity,
  clouds,
  wind,
  sunrise,
  sunset,
  icon,
}) => {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {getIcon(icon)}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {" "}
          {temp}
          {feelsLike}
          {humidity}
          {clouds.all}
          {wind.deg} {wind.speed} {wind.gust}
          {sunrise}
          {sunset}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </a>
  );
};

export default WeatherCard;
