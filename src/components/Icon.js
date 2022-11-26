import React from "react";

export default function Icon({ code }) {
  const iconMapping = {
    "01d": "clear-day",
    "01n": "clear-night",
    "02d": "partly-cloudy-day",
    "02n": "partly-cloudy-night",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "overcast",
    "04n": "overcast",
    "09d": "rain",
    "09n": "rain",
    "10d": "partly-cloudy-day-rain",
    "10n": "partly-cloudy-night-rain",
    "11d": "thunderstorms-day",
    "11n": "thunderstorms-night",
    "13d": "snow",
    "13n": "snow",
    "50d": "mist",
    "50n": "mist",
  };
  const iconUrl = `https://basmilius.github.io/weather-icons/production/fill/all/${iconMapping[code]}.svg`;

  return (
    <div>
      <img src={iconUrl} alt="today weather" />
    </div>
  );
}
