import React from "react";
import { getAnimatedIcon } from "../../utils/getIcon";
import { getDayOfWeek } from "../../utils/getDayOfWeek";
import { getUvDesc } from "../../utils/getUvDesc";
import { useLocation } from "react-router-dom";
import { getTimeOfDay } from "../../utils/getTimeOfDay";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Umbrella from "../../assets/icons/static/weather/Umbrella";
import Snowflake from "../../assets/icons/static/weather/Snowflake";
import Clouds from "../../assets/icons/static/weather/Clouds";
import Humidity from "../../assets/icons/static/weather/Humidity";
import Navigation from "../../assets/icons/static/weather/Navigation";
import WindGust from "../../assets/icons/static/weather/WindGust";
import UVI from "../../assets/icons/static/weather/UVI";
import Raindrops from "../../assets/icons/static/weather/Raindrops";
import { getClothing } from "../../utils/getClothing";
import { nanoid } from "nanoid";

interface ForecastCardData {
  temp: number;
  feelsLike: number;
  icon: string;
  description: string;
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
  sunset: number;
}
const ForecastWeatherCard: React.FC<ForecastCardData> = ({
  temp,
  feelsLike,
  icon,
  description,
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
  sunset,
}) => {
  let location = useLocation();
  const pathname: string = location.pathname;
  const { preferences } = useSelector((state: RootState) => state.settings);
  const { runsHot, runsCold } = preferences;
  const { metric, units } = useSelector((state: RootState) => state.settings);

  const desc = description
    .split(" ")
    .map((word) => (
      <p key={nanoid()}>{word.slice(0, 1).toUpperCase() + word.slice(1)}</p>
    ));

  const dayOfWeek: string = getDayOfWeek(new Date(date * 1000).getDay());
  const dayAndMonth: string = `${
    new Date(date * 1000).getMonth() + 1
  }/${new Date(date * 1000).getDate()}`;
  const hours: number = new Date(date * 1000).getHours();
  const timeOfDay: string = getTimeOfDay(new Date(date * 1000).getHours());

  const getTemp = (feelsLike: number): number => {
    let temp = feelsLike;
    if (!metric) temp = (temp - 32) * (5 / 9);
    runsHot ? (temp += 1) : runsCold ? (temp -= 1) : temp;
    return temp;
  };

  const clothing: JSX.Element = getClothing(
    getTemp(feelsLike),
    clouds,
    uvi,
    date,
    sunset,
    pop,
    0
  );

  return (
    <div className="collapse collapse-arrow bg-base-100 shadow-xl py-4 mx-auto max-w-3xl mb-4 ">
      <input type="checkbox" className="z-20 p-0" />
      <div className="collapse-title text-base md:text-xl font-semibold py-3 pr-8">
        <div className="flex flex-col w-full ">
          <div className="flex justify-between items-center">
            {pathname.includes("today") && (
              <p className="text-base md:text-2xl">{timeOfDay}</p>
            )}
            {pathname.includes("hourly") && (
              <p className="text-base md:text-2xl">{`${hours}:00`}</p>
            )}
            {pathname.includes("8-day") && (
              <>
                <p className="text-base md:text-2xl">{dayOfWeek}</p>
                <p className="text-sm md:text-base">{dayAndMonth}</p>
              </>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex justify-center items-center">
              <div className={`w-14 md:w-24`}>{getAnimatedIcon(icon)}</div>
              <div>
                {pathname.includes("8-day") && (
                  <>
                    <p className="text-xl md:text-4xl">
                      {Math.round(temp)}
                      {units.temp}
                    </p>
                    <p className="text-xs md:text-lg opacity-70 pb-1 ">
                      /{Math.round(feelsLike)}
                      {units.temp}
                    </p>
                  </>
                )}
                {!pathname.includes("8-day") && (
                  <>
                    <p className="text-xl md:text-4xl">
                      {Math.round(temp)}
                      {units.temp}
                    </p>
                    <div className="flex gap-1">
                      <div className="text-2xs md:text-xs leading-tight">
                        <p>Feels</p>
                        <p>like</p>
                      </div>
                      <div className="self-end">
                        <span className="text-base md:text-2xl">
                          {Math.round(feelsLike)}
                          {units.temp}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex w-full justify-between items-center gap-1">
              <div className="text-sm md:text-2xl w-1/2 md:flex gap-1 justify-center">
                {" "}
                {desc}
              </div>
              {window.innerWidth > 576 && pop !== 0 && (
                <div className="flex flex-col items-center gap-1 z-40">
                  <Umbrella />
                  <p className="text-xs md:text-base">
                    {Math.round(pop * 100)}%
                  </p>
                </div>
              )}
              {clothing}
            </div>
          </div>
        </div>
      </div>
      <div className="collapse-content ">
        <ul className="flex  gap-2 text-xs md:text-sm font-bold justify-around w-full">
          {window.innerWidth <= 576 && pop !== 0 && (
            <li>
              {" "}
              <div className="flex flex-col gap-2 items-center">
                <Umbrella />
                <p className="text-xs md:text-base">{Math.round(pop * 100)}%</p>
              </div>
            </li>
          )}
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
          {window.innerWidth > 768 && (
            <li>
              <div className="flex flex-col gap-2 items-center">
                <WindGust />
                {!isNaN(windGust) ? (
                  <p>
                    {Math.round(metric ? windGust * 3.6 : windGust)}{" "}
                    {units.wind}
                  </p>
                ) : (
                  <p>N/A</p>
                )}
              </div>
            </li>
          )}
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
