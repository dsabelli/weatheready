import React from "react";
import Map from "../features/weatherRadarApi/Map";

const Radar = () => {
  return (
    <div className="pr-6 md:pr-0">
      <Map height={"70vh"} />
    </div>
  );
};

export default Radar;
