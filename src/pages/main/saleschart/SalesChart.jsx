// SalesChart.jsx
import React, { useState } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from "recharts";

// Month-wise dummy data
const monthlyData = {
  January: [
    { name: "5k", value: 20 },
    { name: "10k", value: 40 },
    { name: "15k", value: 55 },
    { name: "20k", value: 70 },
    { name: "25k", value: 50 },
  ],
  February: [
    { name: "5k", value: 25 },
    { name: "10k", value: 38 },
    { name: "15k", value: 52 },
    { name: "20k", value: 30 },
    { name: "25k", value: 60 },
  ],
  March: [
    { name: "5k", value: 10 },
    { name: "10k", value: 35 },
    { name: "15k", value: 60 },
    { name: "20k", value: 80 },
    { name: "25k", value: 55 },
  ],
};

function SalesChart() {
  const [selectedMonth, setSelectedMonth] = useState("January");

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const data = monthlyData[selectedMonth];

  return (
    <div style={{
      width: "95%",
      height: "auto",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px"
      }}>
        <h2 className="font-nunito font-bold text-[24px]">Sales Details</h2>
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        >
          {Object.keys(monthlyData).map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            fill="url(#colorBlue)"
            dot={{ r: 3 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
