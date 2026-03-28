import { Display } from "./Display";
import { Button } from "./Button";
import { increaseCountAC, resetCountAC, selectCount, selectMaxValue } from "../model/counter-slice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

export const Counter = () => {
  const count = useAppSelector(selectCount);
  const maxValue = useAppSelector(selectMaxValue)
  const dispatch = useAppDispatch();

  const increaseBtnHandler = () => {
    dispatch(increaseCountAC());
  };

  const resetBtnHandler = () => {
    dispatch(resetCountAC());
  };

  return (
    <div className="counter">
      <Display count={count} maxValue={maxValue} />
      <div className="buttonsWrapper">
        <Button
          title={"+"}
          onClick={increaseBtnHandler}
          disabled={count === maxValue}
        />
        <Button
          title={"reset"}
          onClick={resetBtnHandler}
          disabled={count === 0}
        />
      </div>
    </div>
  );
};
