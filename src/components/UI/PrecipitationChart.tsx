import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  ResponsiveContainer,
} from "recharts";

interface PrecipitationData {
  data: MinuteData[];
}

interface MinuteData {
  dt: number;
  precipitation: number;
}

const PrecipitationChart: React.FC<PrecipitationData> = ({ data }) => {
  const precipData = data.map((d) => {
    const hours = new Date(d.dt * 1000).getHours();
    const minutes = new Date(d.dt * 1000).getMinutes();
    return {
      ...d,
      dt: `${hours}:${minutes < 10 ? 0 : ""}${minutes}`,
      precipitation: Math.round(d.precipitation * 100) / 100,
    };
  });

  const hidePrecipData = precipData.every((d) => d.precipitation === 0);
  return (
    <div
      className={`bg-base-100 shadow-xl p-4 mx-auto max-w-3xl ${
        hidePrecipData ? "hidden" : ""
      }`}
    >
      {!hidePrecipData && (
        <ResponsiveContainer aspect={window.innerWidth > 768 ? 6 : 3}>
          <AreaChart
            data={precipData}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="dt" />
            <YAxis dataKey="precipitation" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="precipitation"
              stroke="#2995d2"
              fill="#0072bb"
              yAxisId={0}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PrecipitationChart;
