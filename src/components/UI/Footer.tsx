import React from "react";

const Footer = () => {
  return (
    <footer
      className={`footer footer-center mt-4 p-4 bg-base-300 text-base-content`}
    >
      <div>
        <p>Copyright © {new Date().getFullYear()} weatheready.com</p>
      </div>
    </footer>
  );
};

export default Footer;
