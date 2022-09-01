import React from "react";
import { getAnimatedIcon } from "../../utils/getIcon";
import { getDayOfWeek } from "../../utils/getDayOfWeek";
import { getUvDesc } from "../../utils/getUvDesc";
import { useLocation } from "react-router-dom";
import { getTimeOfDay } from "../../utils/getTimeOfDay";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Umbrella from "../../assets/icons/static/Umbrella";
import Snowflake from "../../assets/icons/static/Snowflake";
import Clouds from "../../assets/icons/static/Clouds";
import Humidity from "../../assets/icons/static/Humidity";
import Navigation from "../../assets/icons/static/Navigation";
import WindGust from "../../assets/icons/static/WindGust";
import UVI from "../../assets/icons/static/UVI";
import Raindrops from "../../assets/icons/static/Raindrops";

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
  windDeg: number;
  uvi: number;
  humidity: number;
  clouds: number;
}
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
  windDeg,
  uvi,
  humidity,
  clouds,
  date,
}) => {
  let location = useLocation();
  const pathname = location.pathname;

  const { metric, units } = useSelector((state: RootState) => state.settings);

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
              <div
                className={`${pathname.includes("8-day") ? "flex gap-2" : ""}`}
              >
                {pathname.includes("8-day") && (
                  <>
                    {" "}
                    <p className="text-4xl">
                      {Math.round(temp)}
                      {units.temp}
                    </p>{" "}
                    <p className="text-lg opacity-70 self-end">
                      /{Math.round(feelsLike)}
                      {units.temp}{" "}
                    </p>
                  </>
                )}
                {!pathname.includes("8-day") && (
                  <>
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
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <p>{desc}</p>
              {pop !== 0 && (
                <div className="z-50">
                  {" "}
                  <Umbrella />
                  <p>{Math.round(pop * 100)}%</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="collapse-content ">
        <ul className="flex gap-4 justify-around">
          {rain !== 0 && (
            <li>
              <div className="flex flex-col gap-2 items-center">
                <Raindrops />
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
              </div>
            </li>
          )}
          {snow !== 0 && (
            <li>
              <div className="flex flex-col gap-2 items-center">
                <Snowflake />
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
              </div>
            </li>
          )}
          <li>
            <div className="flex flex-col gap-2 items-center">
              <Clouds /> <p>{Math.round(clouds)}%</p>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2 items-center">
              <Humidity /> <p>{Math.round(humidity)}%</p>
            </div>{" "}
          </li>
          <li>
            <div className="flex flex-col gap-2 items-center">
              <Navigation rotate={windDeg} />
              <p>
                {Math.round(metric ? windSpeed * 3.6 : windSpeed)} {units.wind}
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2 items-center">
              <WindGust />
              {!isNaN(windGust) ? (
                <p>
                  {Math.round(metric ? windGust * 3.6 : windGust)} {units.wind}
                </p>
              ) : (
                <p>N/A</p>
              )}
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2 items-center">
              <UVI />
              <p>
                {Math.round(uvi)} {getUvDesc(Math.round(uvi))}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ForecastWeatherCard;
