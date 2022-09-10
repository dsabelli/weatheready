import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  Radar,
  useGetRadarQuery,
} from "../../features/weatherRadarApi/weatherRadarApiSlice";
import Play from "../../assets/icons/static/Play";
import Pause from "../../assets/icons/static/Pause";
import { Slider } from "@mantine/core";
import { LatLngExpression } from "leaflet";

const UpdateMapCenter = ({ mapCenter }: { mapCenter: LatLngExpression }) => {
  const map = useMap();
  map.panTo(mapCenter);
  return null;
};

const Map = () => {
  const [stepCounter, setStepCounter] = useState(0);
  const [delay, setDelay] = useState(4);
  const [step, setStep] = useState(false);
  const location = useSelector((state: RootState) => state.storedLocation);

  let radarEls: any;
  let radarTime;

  const {
    data: radarData,
    isLoading: isRadarLoading,
    isSuccess: isRadarSuccess,
    isError: isRadarError,
    error: radarError,
  } = useGetRadarQuery({});

  if (isRadarLoading) {
    radarEls = <Loader />;
  } else if (isRadarSuccess) {
    const radarImage = radarData.radar.past.concat(radarData.radar.nowcast);

    radarEls = radarImage.map((image: Radar) => (
      <TileLayer
        key={image.time}
        url={`${radarData.host}${image.path}/256/{z}/{x}/{y}/4/1_1.png`}
      />
    ));
    radarTime = radarImage.map(
      (time: Radar) =>
        `${new Date(time.time * 1000).getHours()}:${
          new Date(time.time * 1000).getMinutes() < 10
            ? "00"
            : new Date(time.time * 1000).getMinutes()
        }`
    );
  }

  useEffect(() => {
    if (step) {
      let timeoutID = setTimeout(() => {
        stepCounter >= 16
          ? setStepCounter(0)
          : setStepCounter((prevVal) => prevVal + 1);
      }, 1200 / delay);
      return () => clearTimeout(timeoutID);
    }
  }, [stepCounter, step]);

  return (
    <div className="max-w-4xl mx-auto">
      <MapContainer
        center={[+location.lat, +location.lon]}
        zoom={8}
        scrollWheelZoom={true}
        className="h-80"
      >
        <UpdateMapCenter mapCenter={[+location.lat, +location.lon]} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {radarEls[stepCounter]}
      </MapContainer>
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-4">
          <label
            className="swap"
            onChange={() => setStep((prevVal) => !prevVal)}
          >
            <input type="checkbox" />
            <div className="swap-off">
              <Play />
            </div>
            <div className="swap-on">
              <Pause />
            </div>
          </label>

          <Slider
            value={stepCounter}
            onChange={setStepCounter}
            max={15}
            classNames={{ root: "w-56" }}
          />
          {radarTime && radarTime[stepCounter]}
        </div>
        <div className="flex items-center gap-3">
          <p>Slow</p>
          <Slider
            value={delay}
            onChange={setDelay}
            min={1}
            max={6}
            classNames={{ root: "w-56" }}
          />
          <p>Fast</p>
        </div>
      </div>
      <div className="flex items-center">
        <p>Rain</p>
        <div
          className="w-36 h-3 mr-4 ml-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(162,212,125,1) 0%, rgba(96,162,34,1) 25%, rgba(227,228,37,1) 50%, rgba(249,182,14,1) 75%, rgba(235,63,27,1) 90%, rgba(237,101,76,1) 100%) ",
          }}
        ></div>
        <p>Ice</p>
        <div
          className="w-20 h-3 mr-4 ml-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(249,214,218,1) 0%, rgba(246,163,173,1) 50%, rgba(250,135,150,1) 100%)",
          }}
        ></div>
        <p>Snow</p>
        <div
          className="w-20 h-3 ml-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(168,217,227,1) 0%, rgba(129,198,212,1) 50%, rgba(49,156,174,1) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Map;
