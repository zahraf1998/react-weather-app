import React, { useState, useEffect } from "react";
import ForecastCard from "./ForecastCard";
import axios from "axios";
import "./Forecast.css";

export default function Forecast({ coord }) {
  const [data, setData] = useState("");

  useEffect(() => {
    const lat = coord.lat;
    const lon = coord.lon;
    const apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
    const units = "metric";
    const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;
    axios.get(forecastUrl).then((response) => {
      console.log("response");
      setData(response.data);
    });
  }, [coord]);

  return data ? (
    <div className="Forecast">
      <div className="row text-center justify-content-center" id="forecast">
        {data.daily.slice(1, 7).map((day, index) => {
          return (
            <div className="col-3 col-sm-2 p-1" key={index}>
              <ForecastCard data={day} />
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
}
