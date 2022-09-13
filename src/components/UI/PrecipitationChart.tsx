import React from "react";
import { useSelector } from "react-redux";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  ResponsiveContainer,
  Label,
} from "recharts";
import { RootState } from "../../app/store";

interface PrecipitationData {
  data: MinuteData[];
  rain: number;
  snow: number;
}

interface MinuteData {
  dt: number;
  precipitation: number;
}

const PrecipitationChart: React.FC<PrecipitationData> = ({
  data,
  rain,
  snow,
}) => {
  const { units } = useSelector((state: RootState) => state.settings);
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
    <div className={`mx-auto max-w-3xl p-2 ${hidePrecipData ? "hidden" : ""}`}>
      {!hidePrecipData && (
        <ResponsiveContainer aspect={window.innerWidth > 768 ? 6 : 3}>
          <AreaChart
            data={precipData}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="dt" stroke="currentColor" />
            <YAxis dataKey="precipitation" stroke="currentColor">
              <Label
                value={snow ? units.snow : units.rain}
                dx={-25}
                angle={270}
                style={{
                  fill: "currentcolor",
                }}
              />
            </YAxis>
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
