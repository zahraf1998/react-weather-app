import React, { useState, useEffect } from "react";
import ForecastCard from "./ForecastCard";
import axios from "axios";

export default function Forecast({ coord }) {
  const [data, setData] = useState("");

  useEffect(() => {
    const lat = coord.lat;
    const lon = coord.lon;
    const apiKey = "2718952144ed077c12e7c160fb6fc351";
    const units = "metric";
    const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;

    axios.get(forecastUrl).then((response) => {
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
  ) : (
    ""
  );
}
