// src/pages/ReportsPage.tsx
import { useEffect, useState } from "react";
import api from "../api";
import { Report } from "../types";
import ReportForm from "../components/ReportForm";
import ReportList from "../components/ReportList";

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await api.get<Report[]>("/reports");
      setReports(res.data);
    } catch (err) {
      console.error("Error fetching reports", err);
    }
  };

  const handleReportCreated = (newReport: Report) => {
    setReports((prev) => [newReport, ...prev]); // ✅ add instantly
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <ReportForm onReportCreated={handleReportCreated} />
      <ReportList reports={reports} />
    </div>
  );
}
