import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { setQuiz, setPreferences } from "../../features/settings/settingsSlice";
import { Radio } from "@mantine/core";
import Barometer from "../../assets/icons/static/Barometer";

const QuizModal = () => {
  const dispatch = useDispatch();
  const { preferences } = useSelector((state: RootState) => state.settings);
  const [radioOne, setRadioOne] = useState("");

  useEffect(() => {
    if (radioOne === "cold")
      dispatch(
        setPreferences({ ...preferences, runsCold: true, runsHot: false })
      );
    if (radioOne === "hot")
      dispatch(
        setPreferences({ ...preferences, runsHot: true, runsCold: false })
      );
    if (radioOne === "neither")
      dispatch(
        setPreferences({ ...preferences, runsHot: false, runsCold: false })
      );
  }, [radioOne]);

  return (
    <div>
      <label htmlFor="my-modal" className="cursor-pointer modal-button">
        <Barometer />
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg">
            Please answer the following question to help us determine your
            temperature preferences.
          </h3>

          <div className="rounded-lg mt-2 p-2">
            <div>
              <Radio.Group
                value={radioOne}
                onChange={setRadioOne}
                orientation="vertical"
                label="Sweater in Summer or shorts in Winter?"
                withAsterisk
                classNames={{ label: "text-current text-base mb-2" }}
              >
                <Radio
                  value="cold"
                  label="Sweater in Summer"
                  classNames={{ label: "text-current" }}
                />
                <Radio
                  value="hot"
                  label="Shorts in Winter"
                  classNames={{ label: "text-current" }}
                />
                <Radio
                  value="na"
                  label="Neither"
                  classNames={{ label: "text-current" }}
                />
              </Radio.Group>
            </div>
            <div className="">
              <label htmlFor="Description"></label>
            </div>
          </div>

          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className={`btn ${radioOne ? "" : "btn-disabled"}`}
              onClick={() => dispatch(setQuiz(true))}
            >
              Submit!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
