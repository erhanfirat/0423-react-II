import { useParams } from "react-router-dom";
import Counter from "../components/Counter";

const CounterPage = ({ counterProps }) => {
  const { initialValue } = useParams();

  return (
    <div>
      <h1>Counter Sayfası</h1>
      <hr />
      <h3>initial value: {initialValue}</h3>

      <Counter {...counterProps}>
        <a href="https://duckduckgo.com"> Ara! </a>
        ya da arama!
      </Counter>
    </div>
  );
};

export default CounterPage;
