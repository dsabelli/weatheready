import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useGetReverseLocationQuery } from "../../features/reverseLocationApi/reverseLocationSlice";
import { useGetOneCallQuery } from "../../features/weatherApi/weatherApiSlice";
import { getAnimatedIcon } from "../../utils/getIcon";

const ReverseLocation = () => {
  const location = useSelector((state: RootState) => state.location);
  const { metric, units } = useSelector((state: RootState) => state.settings);

  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isSuccess: isWeatherSuccess,
    isError: isWeatherError,
    error: weatherError,
  } = useGetOneCallQuery(
    {
      lat: location.lat,
      lon: location.lon,
      units: metric ? "metric" : "imperial",
    },
    { skip: !location.lat }
  );

  let weatherEls;

  if (isWeatherSuccess) {
    const current = weatherData.current;

    weatherEls = (
      <>
        <p>
          {Math.round(current.temp)}
          {units.temp}
        </p>
        <div className={`w-10 md:w-12`}>
          {getAnimatedIcon(current.weather[0].icon)}
        </div>
      </>
    );
  }
  const {
    data: reverseLocationData,
    isLoading: isReverseLocationLoading,
    isSuccess: isReverseLocationSuccess,
    isError: isReverseLocationError,
    error: reverseLocationError,
  } = useGetReverseLocationQuery(
    {
      latitude: location.lat,
      longitude: location.lon,
    },
    { skip: !location.lat }
  );

  let reverseLocationEl;

  if (isReverseLocationSuccess) {
    const location = reverseLocationData.features[0].properties;

    reverseLocationEl = (
      <p>{`${location.city}, ${location.state || location.country}`}</p>
    );
  }
  return (
    <div className="flex w-full gap-2 justify-end items-center">
      {reverseLocationEl} {weatherEls}
    </div>
  );
};

export default ReverseLocation;
