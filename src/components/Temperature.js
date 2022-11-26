import React, { useState } from "react";

export default function Temperature({ temp }) {
  const [unit, setUnit] = useState("celsius");

  function changeUnit(e) {
    e.preventDefault();
    if (unit === "celsius") setUnit("fahrenheit");
    else setUnit("celsius");
  }

  return (
    <div>
      {unit === "celsius" ? (
        <>
          <span className="current-temp">{Math.round(temp)}</span>{" "}
          <span className="units">
            °C|
            <a href="/" onClick={changeUnit}>
              °F
            </a>
          </span>
        </>
      ) : (
        <>
          <span className="current-temp">{Math.round(temp * 1.8 + 32)}</span>{" "}
          <span className="units">
            <a href="/" onClick={changeUnit}>
              °C
            </a>
            |°F
          </span>
        </>
      )}
    </div>
  );
}
