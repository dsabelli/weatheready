import React from "react";
import Hero from "../components/UI/Hero";
import { useNavigate } from "react-router-dom";
import Tornado from "../assets/icons/static/Tornado";

const Error = () => {
  let navigate = useNavigate();

  return (
    <div role="alert" className="h-screen">
      <Hero
        className="w-screen"
        text={
          <div className=" px-20 md:ml-20 md:p-0">
            <h1 className="text-5xl font-bold">Uh oh!</h1>
            <p className="mt-6 text-xl">Something went wrong.</p>
            <p className="mb-10 text-xl">
              Please refresh the page or try again later.
            </p>
            <button onClick={() => navigate(-1)} className="btn btn-wide">
              Go back.
            </button>
          </div>
        }
      >
        <Tornado
          className={
            "w-full md:w-1/2 max-w-xs md:max-w-md mt-12 md:mt-0 text-error"
          }
        />
      </Hero>
    </div>
  );
};

export default Error;
