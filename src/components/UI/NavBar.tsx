import React from "react";
import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
  let location = useLocation();
  const path = location.pathname;
  return (
    <nav className="">
      <div className="navbar  bg-orange-900">
        <div className="w-full max-w-4xl mx-auto">
          <Link
            to="/app"
            className="btn btn-ghost hover:bg-opacity-0  normal-case text-xl p-0"
          >
            Weather Ready
          </Link>
        </div>
      </div>
      <div className=" mx-auto text-center max-w-4xl">
        <ul className="menu menu-horizontal bg-base-100 rounded-box text-xl gap-8  ">
          <Link to="/app/today/a/a">
            {" "}
            <li className={` ${path.includes("today") ? "bordered" : "pb-1"}`}>
              <a>Today</a>
            </li>{" "}
          </Link>
          <Link to="/app/hourly">
            {" "}
            <li className={` ${path.includes("hourly") ? "bordered" : "pb-1"}`}>
              <a>Hourly</a>
            </li>{" "}
          </Link>
          <Link to="/app/daily">
            {" "}
            <li className={` ${path.includes("daily") ? "bordered" : "pb-1"}`}>
              <a>Daily</a>
            </li>{" "}
          </Link>
          <Link to="/app/5-day">
            {" "}
            <li className={` ${path.includes("5-day") ? "bordered" : "pb-1"}`}>
              <a>5-Day</a>
            </li>{" "}
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
