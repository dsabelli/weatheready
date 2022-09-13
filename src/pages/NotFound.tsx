import React from "react";
import Hero from "../components/UI/Hero";
import { useNavigate } from "react-router-dom";
import Tornado from "../assets/icons/animated/Tornado";
import Compass from "../assets/icons/animated/Compass";

const NotFound = () => {
  let navigate = useNavigate();

  return (
    <div role="alert" className="h-screen">
      <Hero
        className="w-screen"
        text={
          <div className=" px-20 md:ml-20 md:p-0">
            <h1 className="text-6xl font-bold mb-12 ">404</h1>
            <h2 className="text-4xl  font-bold">Uh oh!</h2>
            <p className="my-6 text-xl ">
              Sorry. The page you are looking for does not exist.
            </p>
            <button onClick={() => navigate(-1)} className="btn btn-wide">
              Go back.
            </button>
          </div>
        }
      >
        <Compass
          className={
            "w-full md:w-1/2 max-w-xs md:max-w-md mt-12 md:mt-0 text-error"
          }
        />
      </Hero>
    </div>
  );
};

export default NotFound;
