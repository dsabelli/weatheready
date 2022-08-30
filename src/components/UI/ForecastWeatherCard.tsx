import React from "react";
import { getAnimatedIcon } from "../../utils/getIcon";
import { getDayOfWeek } from "../../utils/getDayOfWeek";
import { getUvDesc } from "../../utils/getUvDesc";
import { useLocation } from "react-router-dom";
import { getTimeOfDay } from "../../utils/getTimeofDay";
interface ForecastCardData {
  temp: number;
  feelsLike: number;
  icon: string;
  description: string;
  iconWidth: string;
  date: number;
  rain: number;
  snow: number;
  pop: number;
  windSpeed: number;
  windGust: number;
  uvi: number;
  humidity: number;
  clouds: number;
}
let units: string = "°C";

const ForecastWeatherCard: React.FC<ForecastCardData> = ({
  temp,
  feelsLike,
  icon,
  description,
  iconWidth,
  rain,
  snow,
  pop,
  windSpeed,
  windGust,
  uvi,
  humidity,
  clouds,
  date,
}) => {
  let location = useLocation();
  const pathname = location.pathname;
  const desc: string = description
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
  const dayOfWeek: string = getDayOfWeek(new Date(date * 1000).getDay());
  const dayAndMonth = `${new Date(date * 1000).getMonth() + 1}/${new Date(
    date * 1000
  ).getDate()}`;
  const hours = new Date(date * 1000).getHours();
  const timeOfDay: string = getTimeOfDay(new Date(date * 1000).getHours());
  return (
    <div className="collapse collapse-arrow bg-base-100 shadow-xl p-4 mx-auto max-w-2xl mb-4">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium ">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            {pathname.includes("today") && (
              <p className="text-2xl">{timeOfDay}</p>
            )}
            {pathname.includes("hourly") && (
              <p className="text-2xl">{`${hours}:00`}</p>
            )}
            {pathname.includes("8-day") && (
              <>
                <p className="text-2xl">{dayOfWeek}</p>
                <p className="text-md">{dayAndMonth}</p>
              </>
            )}
          </div>
          <div className="flex w-full">
            <div className="flex justify-center items-center w-full">
              <div className={` ${iconWidth}`}>{getAnimatedIcon(icon)}</div>
              <div className="flex gap-2">
                <p className="text-4xl">
                  {Math.round(temp)}
                  {units}
                </p>{" "}
                <p className="text-lg opacity-70 self-end">
                  /{Math.round(feelsLike)}
                  {units}{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <p>{desc}</p>
              <p className={`${pop === 0 ? "hidden" : ""}`}>{pop * 100}%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse-content ">
        <ul className="flex gap-4 justify-around">
          <li>Rain {rain}</li>
          <li>Snow {snow}</li>
          <li>Clouds {clouds}</li>
          <li>Humidity {humidity}</li>
          <li>Wind {Math.round(windSpeed * 3.6)}</li>
          <li>Wind Gust {Math.round(windGust * 3.6)}</li>
          <li>
            UV {Math.round(uvi)} {getUvDesc(uvi)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ForecastWeatherCard;
