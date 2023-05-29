import { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import CounterPage from "./pages/CounterPage";
import MainPage from "./pages/MainPage";
import { useInput } from "./hooks/useInput";

import "./App.css";
import UserFormPage from "./pages/UserFormPage";
import { useAxios } from "./hooks/useAxios";
import Greeting from "./components/Greeting";
import CounterSimple from "./components/CounterSimple";
import StudentList from "./components/StudentList";
import CounterContextApi from "./components/CounterContextApi";
import { useContext } from "react";
import { CounterContext } from "./context/CounterProvider";
import { ThemeContext } from "./context/ThemeProvider";

function App() {
  const [name, setName] = useState("");
  // const [inputName, setInputName] = useState("");
  const [inputName, inputNameHandler] = useInput("");
  const [inputSurname, inputSurnameHandler] = useInput("");
  const [inputEmail, inputEmailHandler] = useInput("");
  const [counter, setCounter] = useState(0);
  const [products, getProducts, productsLoading, productsError] = useAxios(
    "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products",
    "get"
  );
  const [
    createProductData,
    createProduct,
    createProductLoading,
    createProductError,
  ] = useAxios(
    "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products",
    "post"
  );
  const counterContext = useContext(CounterContext);
  const themeContext = useContext(ThemeContext);

  const arttirici = () => {
    setCounter(counter + 1);
    console.log("counter:", counter);
  };

  const counterGuncelle = (val) => setCounter(val);

  // PROPS DRILLING
  const counterProps = {
    counter: counter,
    arttirici,
    counterGuncelle,
    paragraph: (
      <p>
        App componentten <strong>selam</strong> getirdim!
      </p>
    ),
  };

  useEffect(() => {
    const userName = localStorage.getItem("srp:user-name");
    if (userName) {
      setName(userName);
    }

    getProducts();
  }, []);

  // axios
  //   .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
  //   .then((res) => {
  //     //console.log("producst: > ", res.data);
  //     setProducts(res.data);
  //   });

  return (
    <div className={"App " + themeContext.theme}>
      <Greeting name="Ali" />
      <h3>Context API Sayaç: {counterContext.counter}</h3>
      <button
        onClick={() => {
          counterContext.setShow(!counterContext.show);
        }}
      >
        {counterContext.show ? "Hide" : "Show"} Controls
      </button>
      {productsLoading && (
        <div
          style={{
            fontSize: 34,
          }}
        >
          Product Datası Yükleniyor ...
        </div>
      )}
      {products && (
        <div
          style={{
            fontSize: 34,
          }}
        >
          [{products.length}] Product datası yüklendi
        </div>
      )}

      {productsError && <div>{productsError.message}</div>}
      <div>
        <h1>Merhaba {name ? name : "Anonim"}</h1>
        {name && (
          <>
            <button
              onClick={() => {
                setName("");
                localStorage.removeItem("srp:user-name");
              }}
            >
              Beni Unut!
            </button>
          </>
        )}
        {!name && (
          <>
            <label>Lütfen isim giriniz: </label>
            <input type="text" value={inputName} onChange={inputNameHandler} />
            <input
              type="text"
              value={inputSurname}
              onChange={inputSurnameHandler}
            />
            <input
              type="email"
              value={inputEmail}
              onChange={inputEmailHandler}
            />
            <button
              onClick={() => {
                setName(inputName);
                localStorage.setItem("srp:user-name", inputName);
              }}
            >
              Kaydet
            </button>
          </>
        )}
        <nav className="nav-menu">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/counter/50">Counter 50</Link>
          <Link to="/user">Create User</Link>
          <Link to="/counter-simple">Counter SIMPLE</Link>
          <Link to="/counter-context">Counter Context API</Link>
          <Link to="/students">Students</Link>
        </nav>

        <Switch>
          <Route path="/students">
            <StudentList />
          </Route>
          <Route path="/counter-simple">
            <CounterSimple />
          </Route>
          <Route path="/counter-context">
            <CounterContextApi />
          </Route>
          <Route path="/counter/:initialValue">
            <CounterPage counterProps={counterProps} />
          </Route>
          <Route path="/counter">
            <div>
              Route parametresi olmayan çağırım
              <CounterPage counterProps={counterProps} />
            </div>
          </Route>
          <Route path="/user">
            <UserFormPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
