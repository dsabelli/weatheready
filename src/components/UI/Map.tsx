import { Loader } from "@mantine/core";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useGetRadarQuery } from "../../features/weatherRadarApi/weatherRadarApiSlice";

const Map = () => {
  const location = useSelector((state: RootState) => state.storedLocation);
  let radarEl;

  const {
    data: radarData,
    isLoading: isRadarLoading,
    isSuccess: isRadarSuccess,
    isError: isRadarError,
    error: radarError,
  } = useGetRadarQuery({
    lat: "42",
    lon: "82",
    layer: "clouds_new",
  });

  if (isRadarLoading) {
    radarEl = <Loader />;
  } else if (isRadarSuccess) {
    console.log(radarData);
  }
  return (
    <div className="max-w-4xl mx-auto">
      <MapContainer
        center={[+location.lat, +location.lon]}
        zoom={8}
        scrollWheelZoom={false}
        className="h-96"
        // style={{ minHeight: 800 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map;
