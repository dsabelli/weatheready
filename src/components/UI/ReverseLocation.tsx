import React from "react";
import { Loader } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useGetReverseLocationQuery } from "../../features/reverseLocationApi/reverseLocationSlice";

const ReverseLocation = () => {
  const location = useSelector((state: RootState) => state.location);
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

  if (isReverseLocationLoading) {
    reverseLocationEl = <Loader />;
  } else if (isReverseLocationSuccess) {
    reverseLocationEl = (
      <div>{reverseLocationData.features[0].properties.city}</div>
    );
  }
  return <div>{reverseLocationEl}</div>;
};

export default ReverseLocation;
