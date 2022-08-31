import React, { useState } from "react";
import Input from "../../components/UI/Input";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useGetAutocompleteQuery } from "../autocompleteApi/autocompleteSlice";

import { useDebounce } from "use-debounce";
import Loader from "../../components/UI/Loader";

import { setLocation } from "../location/locationSlice";
const Search = () => {
  const dispatch = useDispatch();

  const [autocomplete, setAutocomplete] = useState("");
  const [visible, setVisible] = useState(false);
  const [debouncedAutocomplete] = useDebounce(autocomplete, 300);

  const {
    data: autocompleteData,
    isLoading: isAutocompleteLoading,
    isSuccess: isAutocompleteSuccess,
    isError: isAutocompleteError,
    error: autocompleteError,
  } = useGetAutocompleteQuery({ input: debouncedAutocomplete });
  console.log(autocompleteData);

  let autocompleteEls;

  if (isAutocompleteLoading) {
    autocompleteEls = <Loader />;
  } else if (isAutocompleteSuccess) {
    autocompleteEls = autocompleteData.features.map((data: any) => (
      <div
        onClick={() =>
          dispatch(
            setLocation({
              lat: data.bbox[1].toString(),
              lon: data.bbox[0].toString(),
            })
          )
        }
        key={nanoid()}
        className="flex p-1 gap-2 justify-center mx-auto  max-w-3xl opacity-60 mb-2"
      >
        {`${data.properties.city}, ${data.properties.state}`}
      </div>
    ));
  }
  return (
    <div className="form-control w-full sm:w-64 ">
      <Input
        value={autocomplete || ""}
        type="text"
        placeholder="Search Location..."
        className="input w-full bg-base-200 focus:outline-none md:text-accent-content md:bg-accent-focus placeholder-opacity-50 placeholder-accent-content"
        // if not an empty string, get didits with title of value,
        // otherwise clear everything and focus input for next search
        onChange={(e) =>
          e.target.value !== ""
            ? (setAutocomplete(e.target.value), setVisible(true))
            : (setVisible(false), setAutocomplete(""), e.target.focus())
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
      />

      <div
        className={` ${
          visible ? "dropdown dropdown-end dropdown-open w-48" : "hidden"
        }`}
      >
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-full overflow-y-auto max-h-80 md:max-h-96"
        >
          <li className={`dropdown ${visible ? "" : "hidden"}`}>
            {autocompleteEls}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
