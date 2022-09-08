import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { setQuiz, setPreferences } from "../../features/settings/settingsSlice";
import { Radio } from "@mantine/core";

const QuizModal = () => {
  const dispatch = useDispatch();
  const { preferences } = useSelector((state: RootState) => state.settings);
  const [radioOne, setRadioOne] = useState("");
  const [radioTwo, setRadioTwo] = useState("");
  console.log(preferences);

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
      <label htmlFor="my-modal" className="btn modal-button">
        hot or cold
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
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
              >
                <Radio value="cold" label="Sweater in Summer" />
                <Radio value="hot" label="Shorts in Winter" />
                <Radio value="na" label="Neither" />
              </Radio.Group>
            </div>
            <div className="">
              <label htmlFor="Description"></label>
            </div>
          </div>

          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn"
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
