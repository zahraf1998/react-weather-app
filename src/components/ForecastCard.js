import React from "react";
import "./ForecastCard.css";
import icon from "./01d.svg";

export default function ForecastCard() {
  return (
    <div className="col-3 col-sm-2 p-1">
      <div className="card text-bg-light mb-3 forecast-container">
        <div className="card-header forecast-date">Tue</div>
        <div className="card-body p-1 forecast-img">
          <img src={icon} className="forecast-img" alt="weather icon"></img>
        </div>
        <div className="card-footer p-1 pt-2 pb-2 forecast-temp">
          <span className="forecast-temp-max"> 18° </span>
          <span className="forecast-temp-min text-muted"> 10°</span>
        </div>
      </div>
    </div>
  );
}
