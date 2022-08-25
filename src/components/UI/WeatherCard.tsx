import React from "react";
import { Card } from "flowbite-react";
import { WeatherData } from "../../types";

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
    <div className="max-w-sm">
      <Card
        horizontal={true}
        imgSrc={`http://openweathermap.org/img/wn/${icon}.png`}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {temp}
          {feelsLike}
          {humidity}
          {clouds.all}
          {wind.deg} {wind.speed} {wind.gust}
          {sunrise}
          {sunset}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
};

export default WeatherCard;
