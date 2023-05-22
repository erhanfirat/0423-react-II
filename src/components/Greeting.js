import React from "react";

const Greeting = ({ name }) => {
  return <>
    {name && <h1 className="my-greeting">Merhaba {name}</h1>}
  </>;
};

export default Greeting;
