import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setSettings } from "../../features/settings/settingsSlice";

const SettingsToggle = () => {
  const dispatch = useDispatch();
  const { metric } = useSelector((state: RootState) => state.settings);

  return (
    <div>
      <label className="swap">
        <input
          type="checkbox"
          onChange={() => dispatch(setSettings(!metric))}
        />
        <div className="swap-on">°F</div>
        <div className="swap-off">°C</div>
      </label>
    </div>
  );
};

export default SettingsToggle;
