import React from "react";

export default function Time({ date }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const time = new Date(date * 1000);
  const weekDay = days[time.getDay()];
  let timeHour = time.getHours();
  if (timeHour < 10) timeHour = "0" + timeHour;
  let timeMinute = time.getMinutes();
  if (timeMinute < 10) timeMinute = "0" + timeMinute;

  return (
    <div className="time">
      Last uptated: {weekDay} {timeHour}:{timeMinute}
    </div>
  );
}
