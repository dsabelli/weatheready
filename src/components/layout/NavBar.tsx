import React from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "../../features/location/Search";
import ReverseLocation from "../UI/ReverseLocation";
import SettingsToggle from "../UI/SettingsToggle";
import QuizModal from "../UI/QuizModal";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const NavBar = () => {
  const { quizTaken } = useSelector((state: RootState) => state.settings);
  let location = useLocation();
  const path = location.pathname;

  return (
    <nav className="w-full">
      <div className="navbar px-8 bg-accent w-full">
        <div className="w-full max-w-4xl mx-auto">
          <Link
            to="/app"
            className="btn btn-ghost hover:bg-opacity-0  normal-case text-xl p-0"
          >
            Weather Ready
          </Link>
        </div>
        {!quizTaken && <QuizModal />}
        <ReverseLocation />
        <Search />
        <SettingsToggle />
      </div>
      <div className="mx-auto max-w-xl  my-2 w-full">
        <ul className="menu menu-horizontal bg-base-100 rounded-box justify-center text-base font-semibold md:text-xl gap-2 md:gap-8 w-full px-4">
          <Link to="/app/today">
            <li className={` ${path.includes("today") ? "bordered" : "pb-1"}`}>
              <p>Today</p>
            </li>
          </Link>
          <Link to="/app/hourly">
            <li className={` ${path.includes("hourly") ? "bordered" : "pb-1"}`}>
              <p>Hourly</p>
            </li>
          </Link>
          <Link to="/app/8-day">
            <li className={` ${path.includes("8-day") ? "bordered" : "pb-1"}`}>
              <p>8-Day</p>
            </li>
          </Link>
          <Link to="/app/radar">
            <li className={` ${path.includes("radar") ? "bordered" : "pb-1"}`}>
              <p>Radar</p>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
