// src/components/ReportForm.tsx
import { useState } from "react";
import api from "../api";
import { Report } from "../types";

interface ReportFormProps {
  onReportCreated: (report: Report) => void;
}

export default function ReportForm({ onReportCreated }: ReportFormProps) {
  const [companyId, setCompanyId] = useState("");
  const [reportType, setReportType] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post<Report>("/reports", {
        companyId: Number(companyId),
        reportType,
        data,
      });
      onReportCreated(res.data); // ✅ notify parent
      setCompanyId("");
      setReportType("");
      setData("");
    } catch (err) {
      console.error("Error creating report", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="number"
        placeholder="Company ID"
        value={companyId}
        onChange={(e) => setCompanyId(e.target.value)}
        className="border p-1 rounded w-full"
      />
      <input
        type="text"
        placeholder="Report Type"
        value={reportType}
        onChange={(e) => setReportType(e.target.value)}
        className="border p-1 rounded w-full"
      />
      <textarea
        placeholder="Data"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="border p-1 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Create Report
      </button>
    </form>
  );
}
