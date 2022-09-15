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
  //get the day of the week (ex; Monday, Tuesday, etc...)
  const startDay: string = getDayOfWeek(new Date(start * 1000).getDay());
  //get month and day, return as string MM/dd
  const startDayAndMonth: string = `${
    new Date(start * 1000).getMonth() + 1
  }/${new Date(start * 1000).getDate()}`;
  //get start time of alert event
  const startTime: number = new Date(start * 1000).getHours();
  const endDay: string = getDayOfWeek(new Date(end * 1000).getDay());
  const endDayAndMonth: string = `${
    new Date(end * 1000).getMonth() + 1
  }/${new Date(end * 1000).getDate()}`;
  //get end time of alert event
  const endTime: number = new Date(end * 1000).getHours();

  //some event titles only appear as "weather", change to something more substantial
  event === "weather" ? (event = "Special Weather Event") : event;

  return (
    <div className="flex flex-col max-w-4xl mx-auto mb-6 shadow-xl p-8 bg-base-100">
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
        {/* description given as a string with newline escapes  */}
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
