import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  ResponsiveContainer,
} from "recharts";
import { DailyWeather } from "../../types";
import { getDayOfWeek } from "../../utils/getDayOfWeek";

interface PrecipitationData {
  data: DailyWeather[];
}

const EightDayChart: React.FC<PrecipitationData> = ({ data }) => {
  const weatherData = data.map((d) => {
    const day = getDayOfWeek(new Date(d.dt * 1000).getDay());
    const dayAndMonth = `${new Date(d.dt * 1000).getMonth() + 1}/${new Date(
      d.dt * 1000
    ).getDate()}`;
    return {
      ...d,
      day,
      dayAndMonth,
      High: Math.round(d.temp.max),
      Low: Math.round(d.temp.min),
      Average: Math.round((d.temp.max + d.temp.min) / 2),
    };
  });

  return (
    <div className={` bg-base-100 shadow-xl p-4 mx-auto `}>
      <h2 className="text-2xl py-4 font-bold">8 Day Temperature Trend</h2>
      <ResponsiveContainer aspect={4}>
        <LineChart
          width={600}
          height={100}
          data={weatherData}
          margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
        >
          {/* <XAxis dataKey="day" /> */}
          <XAxis dataKey="dayAndMonth" />
          <YAxis />

          <CartesianGrid horizontal={false} strokeDasharray={"4 3"} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="High"
            stroke="#f2644e"
            fill="#f2644e"
            activeDot={{ r: 4 }}
            yAxisId={0}
          />
          <Line
            type="monotone"
            dataKey="Low"
            stroke="#2995d2"
            fill="#2995d2"
            activeDot={{ r: 4 }}
            yAxisId={0}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EightDayChart;
