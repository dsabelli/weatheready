import React from "react";
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
    weatherEls = <div>{current.temp}</div>;
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
      <div>
        {location.city}
        {location.state || location.country}
      </div>
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