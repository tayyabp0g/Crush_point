import React, { useState, useRef } from "react";
import Layout from "../../../components/Layout/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router-dom";
import { FaDownload, FaPrint } from "react-icons/fa";
import * as XLSX from "xlsx";

export default function ProductLedgerDetail() {
  const location = useLocation();
  const product = location.state?.product || {};
  const tableRef = useRef();
  // Use ledger data passed from Manage Product page
  const allRows = location.state?.ledger || [];

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // Filter rows by date range
  const filteredRows = allRows.filter(row => {
    if (!startDate || !endDate) return true;
    const rowDate = new Date(row.date);
    return rowDate >= startDate && rowDate <= endDate;
  });

  // Download as Excel
  const handleDownload = () => {
    const wsData = [
      ["SR", "Date", "Customer", "Out Qty", "Balance/Amount"],
      ...filteredRows.map((row, idx) => [
        idx + 1,
        row.date,
        row.customer,
        row.outQty,
        row.balance,
      ]),
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Ledger");
    XLSX.writeFile(wb, `${product.name || "Product"}_ledger.xlsx`);
  };

  // Print table
  const handlePrint = () => {
    const printContent = tableRef.current.outerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write(`
      <html>
        <head>
          <title>Product Ledger</title>
          <style>
            @media print {
              body { margin: 0; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ccc; padding: 8px; }
              /* Hide everything except table */
              body * { visibility: hidden; }
              table, table * { visibility: visible; }
              table { position: absolute; left: 0; top: 0; }
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold font-nunito mb-2">Product Ledger</h1>
      <div className="flex justify-between items-center mb-6">
        {/* Left: Date Picker */}
        <div>
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            isClearable={true}
            className="border px-3 py-2 rounded"
            placeholderText="Select date range"
            dateFormat="dd MMM yy"
          />
        </div>
        {/* Right: Download/Print Icons */}
        <div className="flex items-center gap-3">
          <button
            className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200"
            onClick={handleDownload}
            title="Download Excel"
          >
            <FaDownload size={20} />
          </button>
          <button
            className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200"
            onClick={handlePrint}
            title="Print"
          >
            <FaPrint size={20} />
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-4 w-full overflow-x-auto">
        <table ref={tableRef} className="min-w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">SR</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Qty</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-400">No data found for selected date range.</td>
              </tr>
            ) : (
              filteredRows.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-2">{idx + 1}</td>
                  <td className="px-4 py-2">{row.date}</td>
                  <td className="px-4 py-2">{row.customer}</td>
                  <td className="px-4 py-2">{row.outQty}</td>
                  <td className="px-4 py-2">{row.balance}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
} 