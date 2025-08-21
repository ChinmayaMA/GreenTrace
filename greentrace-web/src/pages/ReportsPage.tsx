// src/components/ReportForm.tsx
import { useState, useEffect } from "react";
import api from "../api";
import { Report, Company } from "../types";

interface ReportFormProps {
  onCreated: (report: Report) => void;
}

export default function ReportForm({ onCreated }: ReportFormProps) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [companyId, setCompanyId] = useState<number>(0);
  const [reportType, setReportType] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const res = await api.get<Company[]>("/companies");
      setCompanies(res.data);
    } catch (err) {
      console.error("Error fetching companies", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyId) {
      alert("Please select a company");
      return;
    }

    try {
      const res = await api.post<Report>("/reports", {
        companyId,
        reportType,
        data,
      });
      onCreated(res.data);
      setReportType("");
      setData("");
      setCompanyId(0);
    } catch (err) {
      console.error("Error creating report", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <select
        value={companyId}
        onChange={(e) => setCompanyId(Number(e.target.value))}
        className="border px-2 py-1 rounded w-full"
      >
        <option value={0}>-- Select Company --</option>
        {companies.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Report Type (e.g. Production)"
        value={reportType}
        onChange={(e) => setReportType(e.target.value)}
        className="border px-2 py-1 rounded w-full"
        required
      />

      <textarea
        placeholder="Report Data (JSON or text)"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="border px-2 py-1 rounded w-full"
        required
      />

      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Add Report
      </button>
    </form>
  );
}
