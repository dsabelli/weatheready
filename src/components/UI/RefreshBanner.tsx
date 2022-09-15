import React, { useState, useEffect } from "react";
import Refresh from "../../assets/icons/static/Refresh";

const RefreshBanner = () => {
  const [refresh, setRefresh] = useState(false);

  //set to truthy every 30 minutes
  //will reset to falsy on page reload
  useEffect(() => {
    setTimeout(() => {
      setRefresh(true);
    }, 1800000);
  }, []);

  return (
    <>
      {refresh && (
        <div className="px-4">
          <div
            className="alert alert-warning shadow-lg mb-4 mx-auto max-w-3xl p-2 md:p-4 cursor-pointer text-xs md:text-base"
            onClick={() => window.location.reload()}
          >
            <div className="w-full">
              <Refresh />
              <span className="font-semibold">
                New weather data is available, click to refresh!
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RefreshBanner;
