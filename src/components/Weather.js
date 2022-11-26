import React from "react";
import "./Weather.css";
import Icon from "./Icon";
import Time from "./Time";
import Temperature from "./Temperature";

export default function Weather({ data }) {
  return (
    <div className="Weather">
      <div className="row align-items-center current-day">
        <div className="col">
          <h1>{data.name}</h1>
          <Time date={data.date} />
          <div className="description">{data.description}</div>
        </div>
        <div className="col text-center">
          <Icon code={data.icon} />
        </div>
        <div className="col">
          <Temperature temp={data.temp} />
          <ul>
            <li>Humidity: {data.humidity} %</li>
            <li>Wind: {data.wind} Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
