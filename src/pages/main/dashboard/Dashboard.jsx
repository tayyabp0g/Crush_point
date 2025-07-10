import { useState } from "react";
import { FaBox, FaChartLine, FaFileAlt, FaMoneyBillWave } from "react-icons/fa";
import Sidebar from "../../../components/Sidebar/Sidebar.jsx";
import Topbar from "../../../components/Topbar/Topbar.jsx";
import SalesChart from "../saleschart/SalesChart.jsx";
import DashboardCard from "./dashboardcard/DashboardCard.jsx";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const user = {
  name: "Usman",
  role: "Admin",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

function Dashboard() {
  const [language, setLanguage] = useState("en");

  const data = [
    { name: 'A', uv: 40, pv: 30 },
    { name: 'B', uv: 60, pv: 50 },
    { name: 'C', uv: 50, pv: 40 },
    { name: 'D', uv: 80, pv: 60 },
    { name: 'E', uv: 100, pv: 90 },
  ];

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <Topbar user={user} language={language} onLanguageChange={setLanguage} />
      <div className="ml-60 pt-20 bg-white min-h-screen w-full">
        <main className="p-0 w-full">
          <h1 className="text-2xl font-bold mb-2 font-nunito ml-4">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2 w-full">
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
              linkColor="rgb(239, 68, 68)"
              iconBgColor="#fdd6de"
              iconColor="#f93c65"
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
              iconColor="#f93c65"
            />
          </div>
          <SalesChart />
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow p-4 w-full max-w-xs mx-auto">
              <div className="font-bold text-lg mb-2">Customers</div>
              {/* Yahan apna chart ya content daal do */}
              <div className="flex justify-center items-center">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  {/* Light blue circle */}
                  <circle cx="40" cy="40" r="30" stroke="#e3ebfc" strokeWidth="8" fill="none" />
                  {/* Blue dots */}
                  <circle cx="40" cy="10" r="5" fill="#388bff" />
                  <circle cx="15" cy="50" r="5" fill="#388bff" />
                  <circle cx="65" cy="50" r="5" fill="#388bff" />
                </svg>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow p-4 w-full max-w-xs mx-auto">
              <div className="font-bold text-lg mb-2">Top Selling Product</div>
              {/* Yahan apna chart ya content daal do */}
              <div className="flex justify-between items-end mt-8">
                {/* Left Arrow */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f3f6fb] cursor-pointer">
                  <svg width="20" height="20" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 17l-5-5 5-5"/>
                  </svg>
                </div>
                {/* Right Arrow */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f3f6fb] cursor-pointer">
                  <svg width="20" height="20" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7l5 5-5 5"/>
                  </svg>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow p-4 w-full max-w-xs mx-auto">
              <div className="font-bold text-lg mb-2">Income Analytics</div>
              {/* Yahan apna chart ya content daal do */}
              <div className="w-full h-24">
                <ResponsiveContainer width="100%" height={120}>
                  <LineChart data={data}>
                    <CartesianGrid stroke="#E0E0E0" strokeDasharray="3 3" />
                    <XAxis dataKey="name" hide />
                    <YAxis
                      ticks={[25, 50, 75, 100]}
                      domain={[25, 100]}
                      tick={{ fontSize: 12, fill: "#B0B0B0" }}
                      axisLine={false}
                      tickLine={false}
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
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
