import "../app/App.css";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectCount, selectError, selectIsSetMode, selectMaxValue } from "../model/counter-slice";

export const Display = () => {
  const error = useAppSelector(selectError);
  const count = useAppSelector(selectCount);
  const maxValue = useAppSelector(selectMaxValue);
  const isSetMode = useAppSelector(selectIsSetMode)

  if (error) {
    return <div className="display error">Incorrect value!</div>;
  }

  if (isSetMode) {
    return <div className="display setMode">set values and press "set"</div>;
  }

  return (
    <div className={count === maxValue ? "display red" : "display"}>
      {count}
    </div>
  );
};
