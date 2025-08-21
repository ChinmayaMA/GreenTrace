import { useState } from "react";
import api from "../api";
import { Report } from "../types";

interface Props {
  companyId: number;
  onCreated: (report: Report) => void;
}

export default function ReportForm({ companyId, onCreated }: Props) {
  const [reportType, setReportType] = useState("Production");
  const [data, setData] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post<Report>("/reports", {
        companyId,
        reportType,
        data,
      });
      onCreated(res.data);
      setReportType("Production");
      setData("");
    } catch (err) {
      console.error("Error creating report", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mt-4">
      <select
        value={reportType}
        onChange={(e) => setReportType(e.target.value)}
        className="border p-2 rounded w-full"
        required
      >
        <option value="Production">Production</option>
        <option value="Export">Export</option>
      </select>
      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder='Report Data (JSON string)'
        className="border p-2 rounded w-full h-24"
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Add Report
      </button>
    </form>
  );
}
