import React, { useState, useEffect, ReactElement } from "react";
import Loader from "./Loader";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  Radar,
  useGetRadarQuery,
} from "../../features/weatherRadarApi/weatherRadarApiSlice";
import Play from "../../assets/icons/static/Play";
import Pause from "../../assets/icons/static/Pause";
import { RangeSlider, Slider } from "@mantine/core";

const Map = () => {
  const [stepCounter, setStepCounter] = useState(-1);
  const [delay, setDelay] = useState(3);
  const [step, setStep] = useState(false);
  const location = useSelector((state: RootState) => state.storedLocation);

  let radarEls: any;
  let radarTime: any;

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
      }, delay * 200);
      return () => clearTimeout(timeoutID);
    }
  }, [stepCounter, step]);
  console.log(step);

  return (
    <div className="max-w-4xl mx-auto">
      <MapContainer
        center={[+location.lat, +location.lon]}
        zoom={8}
        scrollWheelZoom={true}
        className="h-60"
        // style={{ minHeight: 800 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {radarEls[stepCounter]}
      </MapContainer>
      <div className="flex justify-start items-center gap-4">
        <label className="swap" onChange={() => setStep((prevVal) => !prevVal)}>
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
      <div>
        {" "}
        <Slider
          value={delay}
          onChange={setDelay}
          min={1}
          max={6}
          classNames={{ root: "w-56" }}
        />
      </div>
      Rain
      <div
        className="w-36 h-3"
        style={{
          background:
            "linear-gradient(90deg, rgba(162,212,125,1) 0%, rgba(96,162,34,1) 25%, rgba(227,228,37,1) 50%, rgba(249,182,14,1) 75%, rgba(235,63,27,1) 90%, rgba(237,101,76,1) 100%) ",
        }}
      ></div>
      Ice
      <div
        className="w-20 h-3"
        style={{
          background:
            "linear-gradient(90deg, rgba(249,214,218,1) 0%, rgba(246,163,173,1) 50%, rgba(250,135,150,1) 100%)",
        }}
      ></div>
      Snow
      <div
        className="w-20 h-3"
        style={{
          background:
            "linear-gradient(90deg, rgba(168,217,227,1) 0%, rgba(129,198,212,1) 50%, rgba(49,156,174,1) 100%)",
        }}
      ></div>
    </div>
  );
};

export default Map;
