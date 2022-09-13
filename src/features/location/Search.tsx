import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/UI/Input";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useGetAutocompleteQuery } from "../autocompleteApi/autocompleteSlice";
import { useDebounce } from "use-debounce";
import Loader from "../../components/UI/Loader";
import { setLocation } from "../location/locationSlice";
import { AutocompleteFeatures } from "../../types";
import { RootState } from "../../app/store";
import { setPreviousLocation } from "./previousLocationSlice";
import Error from "../../pages/Error";

const Search = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { previousLocations } = useSelector(
    (state: RootState) => state.previousLocation
  );
  const storedLocation = useSelector(
    (state: RootState) => state.storedLocation
  );
  const [autocomplete, setAutocomplete] = useState("");
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedAutocomplete] = useDebounce(autocomplete, 200);

  useEffect(() => {
    if (debouncedAutocomplete) setSearch(debouncedAutocomplete);
  }, [debouncedAutocomplete]);

  const {
    data: autocompleteData,
    isLoading: isAutocompleteLoading,
    isSuccess: isAutocompleteSuccess,
    isError: isAutocompleteError,
    error: autocompleteError,
  } = useGetAutocompleteQuery({ input: search }, { skip: !search });

  let autocompleteEls;

  if (isAutocompleteLoading) {
    autocompleteEls = <Loader />;
  } else if (isAutocompleteSuccess) {
    const cities = autocompleteData.features.filter(
      (data) => data.properties.city
    );
    autocompleteEls = cities.map((data: AutocompleteFeatures) => (
      <div
        onClick={() => (
          dispatch(
            setLocation({
              lat: data.properties.lat.toString(),
              lon: data.properties.lon.toString(),
            })
          ),
          dispatch(
            setPreviousLocation({
              city: data.properties.city,
              name: data.properties.name,
              state: data.properties.state,
              country: data.properties.country,
              lat: data.properties.lat.toString(),
              lon: data.properties.lon.toString(),
            })
          ),
          setVisible(false),
          setAutocomplete(
            `${data.properties.city}, ${
              data.properties.state || data.properties.country
            }`
          )
        )}
        key={nanoid()}
        className="flex p-1 gap-2 justify-center mx-auto  max-w-3xl mb-2"
      >
        {`${data.properties.city}, ${
          data.properties.state || data.properties.country
        }`}
      </div>
    ));
  } else if (isAutocompleteError) {
    console.log(autocompleteError);
  }

  let previousLocationEls;
  if (previousLocations) {
    previousLocationEls = previousLocations.map((location) => (
      <div
        className="opacity-60"
        key={nanoid()}
        onClick={() => (
          dispatch(
            setLocation({
              lat: location.lat,
              lon: location.lon,
            })
          ),
          setVisible(false),
          setAutocomplete(
            `${location.city || location.name}, ${
              location.state || location.country
            }`
          )
        )}
      >{`${location.city || location.name}, ${
        location.state || location.country
      }`}</div>
    ));
  }

  let currentLocationEl;
  if (storedLocation.lat && storedLocation.lon) {
    currentLocationEl = (
      <div
        onClick={() => (
          dispatch(
            setLocation({
              lat: storedLocation.lat,
              lon: storedLocation.lon,
            })
          ),
          setVisible(false)
        )}
      >
        Current Location
      </div>
    );
  }

  useEffect(() => {
    isAutocompleteError && navigate("/error");
  }, []);

  return (
    <div className="form-control w-full md:w-3/5 md:max-w-md text-base-content">
      <Input
        value={autocomplete || ""}
        type="text"
        placeholder="Search Location..."
        className="input w-full bg-base-200 focus:outline-none sm:text-accent-content sm:bg-accent-focus placeholder-opacity-50 sm:placeholder-accent-content"
        onChange={(e) =>
          e.target.value !== ""
            ? (setAutocomplete(e.target.value), setVisible(true))
            : (setVisible(false), setAutocomplete(""))
        }
        //on escape or enter keypress, clear everything
        onKeyDown={(e) =>
          e.key === "Escape" || e.key === "Enter"
            ? (((e.target as HTMLInputElement).value = ""),
              setVisible(false),
              (e.target as HTMLInputElement).blur(),
              setAutocomplete(""))
            : null
        }
        onFocus={() => (setVisible(true), setAutocomplete(""))}
        onBlur={(e) =>
          e.target.value === ""
            ? setTimeout(() => setVisible(false), 400)
            : null
        }
      />

      <div
        style={{ zIndex: 9999 }}
        className={` ${
          visible ? "dropdown dropdown-end dropdown-open w-full" : "hidden"
        }`}
      >
        <ul
          tabIndex={0}
          className=" dropdown-content menu p-2 shadow bg-base-200 rounded-box w-full overflow-y-auto max-h-80 md:max-h-96"
        >
          <li className={` dropdown ${visible ? "" : "hidden"}`}>
            {autocomplete && autocompleteEls}
            {!autocomplete && (
              <>
                {currentLocationEl}
                <p className="p-0 text-sm opacity-60">Recent</p>
                {previousLocationEls}
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
