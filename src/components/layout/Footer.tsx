import React from "react";
import ThemeToggle from "../UI/ThemeToggle";
import UnitsToggle from "../UI/UnitsToggle";

const Footer = () => {
  return (
    <footer
      className={`footer footer-center mt-4 p-4 bg-base-300 text-base-content`}
    >
      <div className="flex w-full justify-between">
        <div className="flex gap-4 md:gap-8">
          <UnitsToggle /> <ThemeToggle />
        </div>
        <p>Copyright © {new Date().getFullYear()} weatheready.com</p>
      </div>
    </footer>
  );
};

export default Footer;
