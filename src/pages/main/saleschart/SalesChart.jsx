// src/pages/main/saleschart/SalesChart.jsx
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area } from "recharts";

const data = [
  { name: "5k", value: 20 },
  { name: "10k", value: 40 },
  { name: "15k", value: 35 },
  { name: "20k", value: 90 },
  { name: "25k", value: 50 },
  { name: "30k", value: 60 },
  { name: "35k", value: 40 },
  { name: "40k", value: 70 },
  { name: "45k", value: 60 },
  { name: "50k", value: 50 },
  { name: "55k", value: 60 },
  { name: "60k", value: 50 },
];

const months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

export default function SalesChart() {
  const [selectedMonth, setSelectedMonth] = useState("October");

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-8 w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="font-bold text-xl">Sales Details</div>
        <select
          className="border rounded px-2 py-1 text-sm"
          value={selectedMonth}
          onChange={e => setSelectedMonth(e.target.value)}
        >
          {months.map(month => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2196f3" stopOpacity={0.15}/>
              <stop offset="100%" stopColor="#2196f3" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} tickFormatter={tick => `${tick}%`} />
          <Tooltip />
          <Area type="monotone" dataKey="value" fill="url(#colorUv)" stroke={false} />
          <Line type="monotone" dataKey="value" stroke="#2196f3" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
