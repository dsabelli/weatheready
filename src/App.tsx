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

interface Coords {
  coords: {
    latitude: number;
    longitude: number;
  };
}
function App() {
  const dispatch = useDispatch();
  const { lat, lon } = useSelector((state: RootState) => state.location);

  const successCallback = (position: Coords) => {
    const { latitude, longitude } = position.coords;
    dispatch(
      setStoredLocation({ lat: latitude.toString(), lon: longitude.toString() })
    );

    if (lat === "0" && lon === "0")
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
    <Routes>
      <Route path="/app" element={<Landing />}>
        <Route path="today" element={<Today />} />
        <Route path="hourly" element={<Hourly />} />
        <Route path="8-day" element={<EightDay />} />
      </Route>
      <Route path="error" element={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
