import React from "react";
import ClothingCard from "../components/UI/ClothingCard";
import TodayWeather from "../features/weather/TodayWeather";

const Today = () => {
  return (
    <div className="flex mx-auto justify-center max-w-4xl">
      <TodayWeather />
      <ClothingCard />
    </div>
  );
};

export default Today;
