// src/pages/main/saleschart/SalesChart.jsx
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';

const data = [
  { name: '5k', value: 40 },
  { name: '10k', value: 65 },
  { name: '15k', value: 70 },
  { name: '20k', value: 100 },
  { name: '25k', value: 60 },
  { name: '30k', value: 75 },
  { name: '35k', value: 90 },
  { name: '40k', value: 50 },
  { name: '45k', value: 80 },
  { name: '50k', value: 90 },
  { name: '55k', value: 60 },
  { name: '60k', value: 70 },
];

const months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

export default function SalesChart() {
  const allData = {
    January: [...data], // January ka data
    February: [...data], // February ka data
    // ...baqi months
    October: [...data], // October ka data
  };

  const [selectedMonth, setSelectedMonth] = useState("October");

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-8 w-full lg:max-w-4xl">
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
      <ResponsiveContainer width="110%" height={200}>
        <LineChart data={allData[selectedMonth]}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity={0.18}/>
              <stop offset="100%" stopColor="#2563eb" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#E0E0E0" strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 14, fill: "#A0AEC0" }} />
          <YAxis domain={[40, 100]} tickFormatter={tick => `${tick}%`} tick={{ fontSize: 14, fill: "#A0AEC0" }} />
          <Tooltip
            contentStyle={{
              background: "#2563eb",
              color: "#fff",
              borderRadius: 8,
              fontSize: 16,
              border: "none",
              boxShadow: "0 2px 8px rgba(37,99,235,0.1)"
            }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Area type="monotone" dataKey="value" fill="url(#colorUv)" stroke={false} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ r: 5, stroke: "#2563eb", strokeWidth: 2, fill: "#fff" }}
            activeDot={{ r: 8, fill: "#2563eb", stroke: "#fff", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
