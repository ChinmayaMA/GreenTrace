// src/components/ReportList.tsx
import { useEffect, useState } from "react";
import api from "../api";
import { Report, Company } from "../types";

export default function ReportList() {
  const [reports, setReports] = useState<Report[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    fetchReports();
    fetchCompanies();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await api.get<Report[]>("/reports");
      setReports(res.data);
    } catch (err) {
      console.error("Error fetching reports", err);
    }
  };

  const fetchCompanies = async () => {
    try {
      const res = await api.get<Company[]>("/companies");
      setCompanies(res.data);
    } catch (err) {
      console.error("Error fetching companies", err);
    }
  };

  const getCompanyName = (id: number) => {
    const company = companies.find((c) => c.id === id);
    return company ? company.name : `Company #${id}`;
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Reports</h2>
      <ul className="space-y-2">
        {reports.map((r) => (
          <li key={r.id} className="border p-2 rounded">
            <p><strong>Company:</strong> {getCompanyName(r.companyId)}</p>
            <p><strong>Type:</strong> {r.reportType}</p>
            <p><strong>Data:</strong> {r.data}</p>
            <p><strong>Date:</strong> {new Date(r.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
