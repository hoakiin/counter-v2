import "./App.css";
import { Counter } from "../components/Counter";
import { SetCounter } from "../components/SetCounter";

function App() {
  return (
    <div className="container">
      <SetCounter/>
      <Counter />
    </div>
  );
}

export default App;
