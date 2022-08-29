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
      <div className="mx-auto max-w-4xl">
        <ul className="menu menu-horizontal bg-base-100 rounded-box text-xl gap-8  ">
          <Link to="/app/today/a/a">
            <li className={` ${path.includes("today") ? "bordered" : "pb-1"}`}>
              <p>Today</p>
            </li>
          </Link>
          <Link to="/app/hourly">
            <li className={` ${path.includes("hourly") ? "bordered" : "pb-1"}`}>
              <p>Hourly</p>
            </li>
          </Link>
          <Link to="/app/5-day">
            <li className={` ${path.includes("8-day") ? "bordered" : "pb-1"}`}>
              <p>8-Day</p>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
