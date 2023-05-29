import { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

const CounterContextApi = ({}) => {
  const { counter, setCounter, show, setShow } = useContext(CounterContext);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h2 data-testid="count-display">{counter}</h2>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"} Controls
      </button>
      {show && (
        <>
          <button onClick={increase}>Increment</button>
          <button onClick={decrease}>Decrement</button>
        </>
      )}
    </div>
  );
};
export default CounterContextApi;
