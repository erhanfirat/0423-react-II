import { createContext, useState } from "react";

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counterState, setCounterState] = useState(111);
  const [show, setShow] = useState(true);
  const [artisMiktari, setArtisMiktari] = useState(5);
  

  const contextState = {
    counter: counterState,
    setCounter: setCounterState,
    show,
    setShow,
    artisMiktari,
    setArtisMiktari,
  };

  return (
    <CounterContext.Provider value={contextState}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
