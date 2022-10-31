import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setTheme } from "../../features/settings/settingsSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.settings);
  const [checked, setChecked] = useState(theme === "light" ? false : true);

  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-1">
        <p>Light</p>
        <input
          checked={checked}
          className="toggle theme-toggle"
          type="checkbox"
          onChange={() => (
            dispatch(setTheme(theme === "light" ? "dark" : "light")),
            setChecked((prev) => !prev)
          )}
        />
        <p>Dark</p>
      </label>
    </div>
  );
};

export default ThemeToggle;
