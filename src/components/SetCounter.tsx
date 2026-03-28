import { useState } from "react";
import "../app/App.css";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import {
  selectMaxValue,
  selectMinValue,
  setErrorAC,
  setIsSetModeAC,
  setValuesAC,
} from "../model/counter-slice";
import { Button } from "./Button";

export const SetCounter = () => {
  const minValue = useAppSelector(selectMinValue);
  const maxValue = useAppSelector(selectMaxValue);
  const dispatch = useAppDispatch();

  const [localMin, setLocalMin] = useState(minValue);
  const [localMax, setLocalMax] = useState(maxValue);

  const calculateError = (min: number, max: number) =>
    min < 0 || max < 1 || min >= max;
  const hasError = calculateError(localMin, localMax);

  const setBtnHandler = () => {
    if (localMin < 0 || localMin >= localMax) return;

    localStorage.setItem("maxValue", JSON.stringify(localMax));
    localStorage.setItem("minValue", JSON.stringify(localMin));

    dispatch(setValuesAC({ min: localMin, max: localMax }));
    dispatch(setIsSetModeAC(false));
  };

  const minValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    setLocalMin(value);

    dispatch(setIsSetModeAC(true));

    dispatch(setErrorAC(calculateError(value, localMax)));
  };

  const maxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    setLocalMax(value);

    dispatch(setIsSetModeAC(true));

    dispatch(setErrorAC(calculateError(localMin, value)));
  };

  return (
    <div className="counter">
      <div className="display setCounter">
        <label>
          max value:{" "}
          <input
            className={hasError ? "error" : ""}
            type="number"
            onChange={maxValueHandler}
            value={localMax}
          />
        </label>
        <label>
          min value:{" "}
          <input
            className={hasError ? "error" : ""}
            type="number"
            onChange={minValueHandler}
            value={localMin}
          />
        </label>
      </div>
      <div className="buttonsWrapper">
        <Button title={"set"} onClick={setBtnHandler} disabled={hasError} />
      </div>
    </div>
  );
};
