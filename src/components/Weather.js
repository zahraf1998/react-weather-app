import React from "react";
import "./Weather.css";
import icon from "./01d.svg";

export default function Weather({ data }) {
  return (
    <div className="Weather">
      <div className="row align-items-center current-day">
        <div className="col">
          <h1 id="city">{data.name}</h1>
          <div className="time">
            Last uptated: <span>Monday 12:05</span>
          </div>
          <div className="description">{data.description}</div>
        </div>
        <div className="col text-center">
          <img src={icon} alt="today weather" />
        </div>
        <div className="col">
          <span className="current-temp">{Math.round(data.temp)}</span>
          <span className="units">
            <a href="/" className="active">
              °C
            </a>
            |<a href="/">°F</a>
            <ul>
              <li>
                Humidity: <span id="humidity">{data.humidity}</span> %
              </li>
              <li>
                Wind: <span id="wind">{data.wind}</span> Km/h
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
