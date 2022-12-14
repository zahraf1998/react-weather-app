import { useState, useEffect } from "react";
import Form from "./Form";
import Weather from "./Weather";
import Forecast from "./Forecast";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [city, setCity] = useState("Tehran");

  function displayData(response) {
    setData({
      name: response.data.name,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: response.data.dt,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      coordination: response.data.coord,
    });
  }

  useEffect(() => {
    let apiKey = "203fa770242fcd2b9555d832a88ea567";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios
      .get(url)
      .then(displayData)
      .catch(() => alert("Not Found"));
  }, [city]);

  return data ? (
    <div className="App">
      <div className="container">
        <Form changeCity={setCity} />
        <hr />
        <Weather data={data} />
        <hr />
        <Forecast coord={data.coordination} />
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
  ) : (
    <div className="container">Loading...</div>
  );
}
export default App;
