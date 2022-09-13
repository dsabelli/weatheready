import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useGetReverseLocationQuery } from "../../features/reverseLocationApi/reverseLocationSlice";
import { useGetOneCallQuery } from "../../features/weatherApi/weatherApiSlice";
import Error from "../../pages/Error";
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
        <p
          className={`${
            window.innerWidth < 576 ? "text-xs" : "text-xl"
          } font-semibold`}
        >
          {Math.round(current.temp)}
          {units.temp}
        </p>
        <div className={`w-10 mb-1 md:w-12`}>
          {getAnimatedIcon(current.weather[0].icon)}
        </div>
      </>
    );
  } else if (isWeatherError) {
    weatherEls = <Error />;
    console.log(weatherError);
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
      <p
        className={`${
          window.innerWidth < 576 ? "text-xs" : "text-xl"
        } font-semibold`}
      >{`${location.city}, ${location.state || location.country}`}</p>
    );
  } else if (isReverseLocationError) {
    reverseLocationEl = <Error />;
    console.log(reverseLocationError);
  }
  return (
    <div className="flex w-full gap-2 justify-end items-center">
      {reverseLocationEl} {weatherEls}
    </div>
  );
};

export default ReverseLocation;
