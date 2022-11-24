import "./App.css";
import Form from "./Form";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <hr />
        <Weather />
        <hr />
        <Forecast />
      </div>
      <footer>
        Coded by
        <a
          href="https://github.com/zahraf1998/react-weather-app"
          target="_blank"
        >
          Zahra F.
        </a>
        Icons by
        <a href="https://github.com/basmilius" target="_blank">
          Bas Milius
        </a>
      </footer>
    </div>
  );
}

export default App;
