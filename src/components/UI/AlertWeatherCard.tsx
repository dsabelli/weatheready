import React from "react";
import { Alerts } from "../../types";
import { nanoid } from "nanoid";
import { getDayOfWeek } from "../../utils/getDayOfWeek";

const AlertWeatherCard: React.FC<Alerts> = ({
  sender_name,
  event,
  start,
  end,
  description,
}) => {
  const startDay = getDayOfWeek(new Date(start * 1000).getDay());
  const startDayAndMonth = `${new Date(start * 1000).getMonth() + 1}/${new Date(
    start * 1000
  ).getDate()}`;
  const startTime = new Date(start * 1000).getHours();
  const endDay = getDayOfWeek(new Date(end * 1000).getDay());
  const endDayAndMonth = `${new Date(end * 1000).getMonth() + 1}/${new Date(
    end * 1000
  ).getDate()}`;
  const endTime = new Date(end * 1000).getHours();

  event === "weather" ? (event = "Special Weather Event") : event;

  return (
    <div className="flex flex-col max-w-4xl mx-auto mb-6 shadow-xl p-4 bg-base-200">
      <div className="border-b">
        <h1 className="text-3xl my-2">{event}</h1>
        <p>
          Start: {startDay}, {startDayAndMonth}, {startTime}:00
        </p>
        <p>
          End: {endDay}, {endDayAndMonth}, {endTime}:00
        </p>
        <p className="text-sm opacity-70 my-2">Source: {sender_name}</p>
      </div>
      <div>
        {description.split("\n").map((paragraph) => (
          <p key={nanoid()} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AlertWeatherCard;
