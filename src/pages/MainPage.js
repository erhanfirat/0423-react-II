import { formatDistance, eachHourOfInterval } from "date-fns";
import { useState } from "react";

const getNowIso = () =>
  new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/Istanbul" })
  ).toISOString();

const MainPage = () => {
  const [currentTime, setCurrentTime] = useState(() => getNowIso());

  setTimeout(() => {
    setCurrentTime(() => getNowIso());
  }, 500);

  return (
    <div>
      <h1>Ana Sayfa</h1>
      <hr />
      <p>{currentTime}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default MainPage;
