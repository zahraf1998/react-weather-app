import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Weather from "./Weather";
import Forecast from "./Forecast";
import axios from "axios";

function App() {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState("Tehran");

  function displayData(response) {
    console.log(response);
    setData({
      ready: true,
      name: response.data.name,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: response.data.dt,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  if (!data.ready) {
    let apiKey = "203fa770242fcd2b9555d832a88ea567";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get().then(displayData);
  }

  return (
    <div className="App">
      <div className="container">
        <Form changeCity={setCity} />
        <hr />
        <Weather data={data} />
        <hr />
        <Forecast />
      </div>
      <footer>
        Coded by
        <a
          href="https://github.com/zahraf1998/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Zahra F.
        </a>
        Icons by
        <a href="https://github.com/basmilius" target="_blank" rel="noreferrer">
          Bas Milius
        </a>
      </footer>
    </div>
  );
}

export default App;
