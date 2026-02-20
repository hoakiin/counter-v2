import "../app/App.css";

type DisplayPropsType = {
  count: number;
  maxValue: number;
};

export const Display = ({ count, maxValue }: DisplayPropsType) => {
  return (
    <div className={count === maxValue ? "display red" : "display"}>
      {count}
    </div>
  );
};
