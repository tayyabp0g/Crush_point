import { useState } from "react";
import { FaBox, FaChartLine, FaFileAlt, FaMoneyBillWave } from "react-icons/fa";
import Sidebar from "../../../components/Sidebar/Sidebar.jsx";
import Topbar from "../../../components/Topbar/Topbar.jsx";
import SalesChart from "../saleschart/SalesChart.jsx";
import DashboardCard from "./dashboardcard/DashboardCard.jsx";

const user = {
  name: "Usman",
  role: "Admin",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

function Dashboard() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Topbar user={user} language={language} onLanguageChange={setLanguage} />
      <div className="ml-60 pt-20 bg-gray-100 min-h-screen w-full">
        <main className="p-0 w-full">
          <h1 className="text-2xl font-bold mb-4 font-nunito">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 w-full">
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
              icon={<FaMoneyBillWave />}
              linkText="Check Transaction History"
              linkColor="#ef4444"
            />
            <DashboardCard
              title="Daily Expense"
              value="Rs. 89,000"
              icon={<FaBox />}
              status="▼ 0.3%"
              statusColor="#ef4444"
              statusText="Down from yesterday"
            />
            <DashboardCard
              title="Expense of Month"
              value="Rs. 89,000"
              icon={<FaBox />}
              status="▼ 4.3%"
              statusColor="#ef4444"
              statusText="Down from yesterday"
            />
            <DashboardCard
              title="Download Report"
              value="Daily Report"
              icon={<FaFileAlt />}
              linkText="Check Report"
              linkColor="#ef4444"
            />
          </div>
          <SalesChart />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
