import React from "react";
import SettingsToggle from "./SettingsToggle";

const Footer = () => {
  return (
    <footer
      className={`footer footer-center mt-4 p-4 bg-base-300 text-base-content`}
    >
      <div className="flex w-full justify-between">
        <SettingsToggle />
        <p>Copyright © {new Date().getFullYear()} weatheready.com</p>
      </div>
    </footer>
  );
};

export default Footer;
