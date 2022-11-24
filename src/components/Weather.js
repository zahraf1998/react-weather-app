import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row align-items-center current-day">
        <div className="col">
          <h1 id="city">Tehran</h1>
          <div className="time">
            Last uptated: <span id="time">Monday 12:05</span>
          </div>
          <div className="description" id="description">
            Clear
          </div>
        </div>
        <div className="col text-center">
          <img src="" id="today-icon" />
        </div>
        <div className="col">
          <span className="current-temp">12</span>
          <span className="units">
            <a href="#" id="celsius" className="active">
              °C
            </a>
            |
            <a href="#" id="fahrenheit">
              °F
            </a>
            <ul>
              <li>
                Humidity: <span id="humidity">80</span> %
              </li>
              <li>
                Wind: <span id="wind">1.2</span> Km/h
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
