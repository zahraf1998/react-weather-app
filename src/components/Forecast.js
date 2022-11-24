import React from "react";
import "./Forecast.css";
import ForecastCard from "./ForecastCard";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row text-center justify-content-center" id="forecast">
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </div>
    </div>
  );
}
