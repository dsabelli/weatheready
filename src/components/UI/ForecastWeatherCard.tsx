import React from "react";
import { getAnimatedIcon } from "../../utils/getIcon";

interface ForecastCardData {
  temp: number;
  feelsLike: number;
  icon: string;
  description: string;
  name?: string;
}
let units: string = "°C";

const ForecastWeatherCard: React.FC<ForecastCardData> = ({
  temp,
  feelsLike,
  icon,
  description,
}) => {
  return (
    <div className="flex bg-base-100 shadow-xl p-4 mx-auto max-w-2xl">
      <div className="flex flex-col w-full">
        <div className="text-2xl ">
          <h2>Forecast Weather</h2>
        </div>
        <div className="flex w-full">
          <div className="flex justify-center items-center w-full">
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
          <div className="flex justify-center items-center w-full">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastWeatherCard;
