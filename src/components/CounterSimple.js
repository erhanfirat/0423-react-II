import { useState, useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return state + 1;

    case "decreament":
      return state - 1;

    default:
      return state;
  }
};

const countInitial = 0;

const CounterSimple = ({ start = 0 }) => {
  //const [count, setCount] = useState(start);
  const [count, dispatchCount] = useReducer(countReducer, countInitial);

  const increase = () => {
    dispatchCount({ type: "increament", payload: null });
  };

  const decrease = () => {
    dispatchCount({ type: "decreament", payload: null });
  };

  return (
    <div>
      <h2 data-testid="count-display">{count}</h2>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </div>
  );
};
export default CounterSimple;
