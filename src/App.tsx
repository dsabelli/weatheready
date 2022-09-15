import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { setStoredLocation } from "./features/location/storedLocationSlice";
import { setLocation } from "./features/location/locationSlice";
import Error from "./pages/Error";
import EightDay from "./pages/EightDay";
import Hourly from "./pages/Hourly";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Today from "./pages/Today";
import { RootState } from "./app/store";
import Alert from "./pages/Alert";
import Radar from "./pages/Radar";
import { Theme } from "react-daisyui";

interface Coords {
  coords: {
    latitude: number;
    longitude: number;
  };
}

function App() {
  const dispatch = useDispatch();
  const { lat, lon } = useSelector((state: RootState) => state.location);
  const { theme } = useSelector((state: RootState) => state.settings);

  //callback when user permits use of current position
  //takes the current position coordinates and sets the storedlocation to those coords
  //if there is no current location, also sets location to the coordinates
  const successCallback = (position: Coords) => {
    const { latitude, longitude } = position.coords;
    dispatch(
      setStoredLocation({ lat: latitude.toString(), lon: longitude.toString() })
    );

    if (lat === "" && lon === "")
      dispatch(
        setLocation({ lat: latitude.toString(), lon: longitude.toString() })
      );
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, console.error, {
      maximumAge: 600_000,
    });
  }, []);

  return (
    <Theme dataTheme={theme}>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="app/today" element={<Today />} />
          <Route path="app/hourly" element={<Hourly />} />
          <Route path="app/8-day" element={<EightDay />} />
          <Route path="app/radar" element={<Radar />} />
        </Route>
        <Route path="alert" element={<Alert />} />
        <Route path="error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Theme>
  );
}

export default App;
