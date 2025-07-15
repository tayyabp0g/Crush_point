import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area } from "recharts";
import { FaBox, FaChartLine, FaFileAlt, FaMoneyBillWave } from "react-icons/fa";
import Layout from "../../../components/Layout/Layout.jsx";
import SalesChart from "../saleschart/SalesChart.jsx";
import DashboardCard from "./dashboardcard/DashboardCard.jsx";

function Dashboard() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const [selectedMonth, setSelectedMonth] = useState("October");

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

  return (
    <Layout>
      <div className="bg-white min-h-screen w-full">
        <h1 className="text-2xl font-bold mb-4 font-nunito ml-8">Dashboard</h1>
        <div className="max-w-6xl mx-auto px-4 w-full">
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
              <DashboardCard
                title="Daily Sale"
                value="Rs. 89,000"
                icon={<FaChartLine />}
                status="▼ 4.3%"
                statusColor="#ef4444"
                statusText="Down from yesterday"
                iconBgColor="#d9f7e7"
                iconColor="#4ad991"
              />
              <DashboardCard
                title="Sale of Month"
                value="Rs. 89,000"
                icon={<FaChartLine />}
                status="▼ 2.3%"
                statusColor="#ef4444"
                statusText="Down from Last Month"
                iconBgColor="#d9f7e7"
                iconColor="#4ad991"
              />
              <DashboardCard
                title="Cash in Hand"
                value="Rs. 189,000"
                icon={<FaChartLine />}
                linkText="Check Transaction History"
                linkColor="#ef4444"
                 iconBgColor="#fdd6de"
                iconColor="#fa6283"
              />
              <DashboardCard
                title="Daily Expense"
                value="Rs. 89,000"
                icon={<FaBox />}
                status="▼ 0.3%"
                statusColor="#ef4444"
                statusText="Down from yesterday"
                iconBgColor="#fef2d6"
                iconColor="#fec53d"
              />
              <DashboardCard
                title="Expense of Month"
                value="Rs. 89,000"
                icon={<FaBox />}
                status="▼ 4.3%"
                statusColor="#ef4444"
                statusText="Down from yesterday"
                iconBgColor="#fef2d6"
                iconColor="#fec53d"
              />
              <DashboardCard
                title="Download Report"
                value="Daily Report"
                icon={<FaChartLine />}
                linkText="Check Report"
                linkColor="#ef4444"
                iconBgColor="#fdd6de"
                iconColor="#fa6283"
              />
            </div>
            {/* Chart */}
            <SalesChart />
            {/* Neeche 3 Cards (if any) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-8">
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center max-w-xs w-full mx-auto">
                {/* Customers Card */}
                <div className="font-bold text-lg mb-2">Customers</div>
                <div className="flex justify-center items-center w-full">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="30" stroke="#e3ebfc" strokeWidth="8" fill="none" />
                    <circle cx="40" cy="10" r="5" fill="#388bff" />
                    <circle cx="15" cy="50" r="5" fill="#388bff" />
                    <circle cx="65" cy="50" r="5" fill="#388bff" />
                  </svg>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center max-w-xs w-full mx-auto">
                {/* Top Selling Product */}
                <div className="font-bold text-lg mb-2">Top Selling Product</div>
                <div className="flex justify-between items-end w-full mt-6">
                  {/* Left Arrow */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f3f6fb] cursor-pointer">
                    <svg width="20" height="20" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 17l-5-5 5-5"/>
                    </svg>
                  </div>
                  {/* Product info ya image yahan aa sakta hai */}
                  <div className="flex-1 text-center"></div>
                  {/* Right Arrow */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f3f6fb] cursor-pointer">
                    <svg width="20" height="20" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7l5 5-5 5"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center max-w-xs w-full mx-auto">
                {/* Income Analytics */}
                <div className="font-bold text-lg mb-2">Income Analytics</div>
                <div className="w-full h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { name: 'A', uv: 40, pv: 30 },
                        { name: 'B', uv: 60, pv: 50 },
                        { name: 'C', uv: 50, pv: 40 },
                        { name: 'D', uv: 80, pv: 60 },
                        { name: 'E', uv: 100, pv: 90 },
                      ]}
                      margin={{ top: 0, right: 0, left: 16, bottom: 0 }}
                    >
                      <XAxis dataKey="name" hide />
                      <YAxis
                        domain={[0, 110]}
                        ticks={[25, 50, 75, 100]}
                        axisLine={false}
                        tickLine={false}
                        width={32}
                        tickMargin={8}
                        tick={{ fontSize: 14, fill: "#d1d5db", fontFamily: "Nunito Sans" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#388bff"
                        strokeWidth={3}
                        dot={{ r: 3, fill: "#fff", stroke: "#388bff", strokeWidth: 2 }}
                        activeDot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#10b981"
                        strokeWidth={3}
                        dot={{ r: 3, fill: "#fff", stroke: "#10b981", strokeWidth: 2 }}
                        activeDot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
