import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setUnits } from "../../features/settings/settingsSlice";

const SettingsToggle = () => {
  const dispatch = useDispatch();
  const { metric } = useSelector((state: RootState) => state.settings);

  return (
    <div>
      <label className="swap">
        <input type="checkbox" onChange={() => dispatch(setUnits(!metric))} />
        <div className="swap-on">{metric ? "°C" : "°F"}</div>
        <div className="swap-off">{metric ? "°C" : "°F"}</div>
      </label>
    </div>
  );
};

export default SettingsToggle;
