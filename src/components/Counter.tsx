import { Display } from "./Display";
import { Button } from "./Button";
import { selectCounter } from "../model/counter-selectors";
import { increaseCountAC, resetCountAC } from "../model/counter-reducer";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

export const Counter = () => {
  const MAX_VALUE = 5;

  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCounter);

  const increaseBtnHandler = () => {
    dispatch(increaseCountAC());
  };

  const resetBtnHandler = () => {
    dispatch(resetCountAC());
  };

  return (
    <div className="counter">
      <Display count={count} maxValue={MAX_VALUE} />
      <div className="buttonsWrapper">
        <Button
          title={"+"}
          onClick={increaseBtnHandler}
          disabled={count === MAX_VALUE}
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
