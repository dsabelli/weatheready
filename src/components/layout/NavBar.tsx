import React from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "../../features/location/Search";
import ReverseLocation from "../UI/ReverseLocation";
import QuizModal from "../UI/QuizModal";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Logo from "../../assets/icons/static/Logo";

const NavBar = () => {
  const { quizTaken } = useSelector((state: RootState) => state.settings);
  let location = useLocation();
  const path = location.pathname;

  return (
    <nav className="w-full">
      <div className="navbar px-2 md:px-4 bg-accent w-full">
        <div className="w-1/2">
          <Link
            to="/app"
            className="btn btn-ghost hover:bg-opacity-0  normal-case text-xl p-0 relative"
          >
            <Logo />
            <p
              className={`hidden sm:block sm:ml-2 text-2xl text-primary-content`}
            >
              Weather Ready
            </p>
          </Link>
        </div>
        <ReverseLocation />
        {window.innerWidth > 768 && <Search />}
        {!quizTaken && <QuizModal />}
      </div>
      {window.innerWidth <= 768 && <Search />}
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
              <p className="whitespace-nowrap">8-Day</p>
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
