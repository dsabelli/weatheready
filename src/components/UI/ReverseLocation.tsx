import React from "react";
import { Loader } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useGetReverseLocationQuery } from "../../features/reverseLocationApi/reverseLocationSlice";
import { useGetOneCallQuery } from "../../features/weatherApi/weatherApiSlice";

const ReverseLocation = () => {
  const location = useSelector((state: RootState) => state.location);
  const { metric } = useSelector((state: RootState) => state.settings);

  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isSuccess: isWeatherSuccess,
    isError: isWeatherError,
    error: weatherError,
  } = useGetOneCallQuery({
    lat: location.lat,
    lon: location.lon,
    units: metric ? "metric" : "imperial",
  });

  let weatherEls;

  if (isWeatherSuccess) {
    const current = weatherData.current;
    weatherEls = <div>{current.temp}</div>;
  }
  const {
    data: reverseLocationData,
    isLoading: isReverseLocationLoading,
    isSuccess: isReverseLocationSuccess,
    isError: isReverseLocationError,
    error: reverseLocationError,
  } = useGetReverseLocationQuery({
    latitude: location.lat,
    longitude: location.lon,
  });

  let reverseLocationEl;

  if (isReverseLocationSuccess) {
    reverseLocationEl = (
      <div>{reverseLocationData.features[0].properties.city}</div>
    );
  }
  return (
    <div>
      {reverseLocationEl}
      {weatherEls}
    </div>
  );
};

export default ReverseLocation;
