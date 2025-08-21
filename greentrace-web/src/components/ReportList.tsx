// src/components/ReportList.tsx
import { Report, Company } from "../types";
import { useEffect, useState } from "react";
import api from "../api";

interface ReportListProps {
  reports: Report[];
}

export default function ReportList({ reports }: ReportListProps) {
  const [companies, setCompanies] = useState<Company[]>([]);

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

  const getCompanyName = (id: number) => {
    const company = companies.find((c) => c.id === id);
    return company ? company.name : `Company #${id}`;
  };

  return (
    <ul className="space-y-2 mt-4">
      {reports.map((r) => (
        <li key={r.id} className="border p-2 rounded">
          <p><strong>Company:</strong> {getCompanyName(r.companyId)}</p>
          <p><strong>Type:</strong> {r.reportType}</p>
          <p><strong>Data:</strong> {r.data}</p>
          <p><strong>Date:</strong> {new Date(r.createdAt).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  );
}
