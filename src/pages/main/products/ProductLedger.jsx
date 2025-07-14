import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaDownload, FaPrint } from "react-icons/fa";

export default function ProductLedger() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // Dummy data for table
  const rows = Array(10).fill({});

  return (
    <Layout>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold font-nunito">Product Ledger</h1>
        <div className="flex gap-3">
          <button className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200">
            <FaDownload size={20} />
          </button>
          <button className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200">
            <FaPrint size={20} />
          </button>
        </div>
      </div>
      <div className="mb-4">
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => setDateRange(update)}
          isClearable={true}
          className="border px-3 py-2 rounded"
        />
      </div>
      <div className="bg-white rounded-xl shadow p-4 w-full overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">SR</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Out Qty</th>
              <th className="px-4 py-2">Balance/ Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-b">
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
} 