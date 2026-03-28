import { useState } from "react";
import "../app/App.css";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import {
  selectMaxValue,
  selectMinValue,
  setValuesAC,
} from "../model/counter-slice";
import { Button } from "./Button";

export const SetCounter = () => {
  const minValue = useAppSelector(selectMinValue);
  const maxValue = useAppSelector(selectMaxValue);
  const dispatch = useAppDispatch();

  const [localMin, setLocalMin] = useState(minValue);
  const [localMax, setLocalMax] = useState(maxValue);

  const minError = localMin < 0 || localMin >= localMax;
  const maxError = localMax < 1 || localMax <= localMin;

  const setBtnHandler = () => {
    if (localMin < 0 || localMin >= localMax) return;

    localStorage.setItem("maxValue", JSON.stringify(localMax));
    localStorage.setItem("minValue", JSON.stringify(localMin));

    dispatch(setValuesAC({ min: localMin, max: localMax }));
  };

  const minValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalMin(Number(e.currentTarget.value));
  };

  const maxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalMax(Number(e.currentTarget.value));
  };

  return (
    <div className="counter">
      <div className="display setCounter">
        <label>
          max value:{" "}
          <input
            className={maxError ? "error" : ""}
            type="number"
            onChange={maxValueHandler}
            value={localMax}
          />
        </label>
        <label>
          min value:{" "}
          <input
            className={minError ? "error" : ""}
            type="number"
            onChange={minValueHandler}
            value={localMin}
          />
        </label>
      </div>
      <div className="buttonsWrapper">
        <Button
          title={"set"}
          onClick={setBtnHandler}
          disabled={minError || maxError}
        />
      </div>
    </div>
  );
};
