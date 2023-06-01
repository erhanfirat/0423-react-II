import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";
import { ThemeContext } from "../context/ThemeProvider";
import { useEffect } from "react";

const Greeting = ({ name }) => {
  const counterContext = useContext(CounterContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      {name && <h1 className="my-greeting">Sayfama hoşgeldin {name}!</h1>}
      <h3>Artış Mikarı: {counterContext.artisMiktari}</h3>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </button>
    </>
  );
};

export default Greeting;
