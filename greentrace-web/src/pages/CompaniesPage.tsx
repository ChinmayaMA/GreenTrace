// src/pages/CompaniesPage.tsx
import { useEffect, useState } from "react";
import api from "../api";
import { Company } from "../types";
import CompanyForm from "../components/CompanyForm";
import CompanyList from "../components/CompanyList";

export default function CompaniesPage() {
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

  const handleCreated = (company: Company) => {
    setCompanies((prev) => [...prev, company]);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Companies</h1>
      <CompanyForm onCreated={handleCreated} />
      <CompanyList companies={companies} />
    </div>
  );
}
