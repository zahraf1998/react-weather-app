import React from "react";
import Icon from "./Icon";
import "./ForecastCard.css";

export default function ForecastCard({ data }) {
  function date() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = new Date(data.dt * 1000).getDay();
    return days[day];
  }

  return (
    <div className="card text-bg-light mb-3 forecast-container">
      <div className="card-header forecast-date">{date()}</div>
      <div className="card-body p-1 forecast-img">
        <Icon code={data.weather[0].icon} />{" "}
      </div>
      <div className="card-footer p-1 pt-2 pb-2 forecast-temp">
        <span className="forecast-temp-max">
          {" "}
          {Math.round(data.temp.max)}°{" "}
        </span>
        <span className="forecast-temp-min text-muted">
          {" "}
          {Math.round(data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
