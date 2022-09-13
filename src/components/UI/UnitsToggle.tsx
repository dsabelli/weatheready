import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setUnits } from "../../features/settings/settingsSlice";

const UnitsToggle = () => {
  const dispatch = useDispatch();
  const { metric } = useSelector((state: RootState) => state.settings);

  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-1">
        <p>°C</p>
        <input
          className="toggle"
          type="checkbox"
          onChange={() => dispatch(setUnits(!metric))}
        />
        <p>°F</p>
      </label>
    </div>
  );
};

export default UnitsToggle;
