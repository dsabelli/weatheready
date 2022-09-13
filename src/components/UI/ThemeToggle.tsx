import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setTheme } from "../../features/settings/settingsSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.settings);

  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-1">
        <p>Light</p>
        <input
          className="toggle"
          type="checkbox"
          onChange={() =>
            dispatch(setTheme(theme === "light" ? "dark" : "light"))
          }
        />
        <p>Dark</p>
      </label>
    </div>
  );
};

export default ThemeToggle;
