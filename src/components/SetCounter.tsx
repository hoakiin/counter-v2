import { Button } from "./Button";
import { useState, useEffect } from "react";
import "../App.css";

type Props = {
  onSet: () => void;
  error: boolean;
  setError: (error: boolean) => void;
  setIsSetMode: (isSetMode: boolean) => void;
};

export const SetCounter = ({ onSet, setIsSetMode, error, setError }: Props) => {
  let [maxValue, setMaxValue] = useState<number>(
    Number(localStorage.getItem("maxValue")) || 5
  );
  let [minValue, setMinValue] = useState<number>(
    Number(localStorage.getItem("minValue")) || 0
  );

  const minError = minValue < 0 || minValue >= maxValue;
  const maxError = maxValue < 1 || maxValue <= minValue;

  useEffect(() => {
    setError(minError || maxError);
  }, [minError, maxError]);

  const setBtnHandler = () => {
    if (error) return;

    localStorage.setItem("maxValue", JSON.stringify(maxValue));
    localStorage.setItem("minValue", JSON.stringify(minValue));

    setIsSetMode(false);
    onSet();
  };

  const minValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(e.currentTarget.value));
    setIsSetMode(true)
  };

  const maxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.currentTarget.value));
    setIsSetMode(true)
  };

  return (
    <div className="counter">
      <div className="display setCounter">
        <label>
          max value:{" "}
          <input className={maxError ? "error" : ""} type="number" onChange={maxValueHandler} value={maxValue} />
        </label>
        <label>
          min value:{" "}
          <input className={minError ? "error" : ""} type="number" onChange={minValueHandler} value={minValue} />
        </label>
      </div>
      <div className="buttonsWrapper">
        <Button title={"set"} onClick={setBtnHandler} disabled={error} />
      </div>
    </div>
  );
};
