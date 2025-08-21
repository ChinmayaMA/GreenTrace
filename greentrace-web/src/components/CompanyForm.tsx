import { useState } from "react";
import api from "../api";
import { Company } from "../types";

interface Props {
  onCreated: (company: Company) => void;
}

export default function CompanyForm({ onCreated }: Props) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [industry, setIndustry] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post<Company>("/companies", {
        name,
        country,
        industry,
      });
      onCreated(res.data);
      setName("");
      setCountry("");
      setIndustry("");
    } catch (err) {
      console.error("Error creating company", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Company Name"
        className="border p-2 rounded w-full"
        required
      />
      <input
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country"
        className="border p-2 rounded w-full"
      />
      <input
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        placeholder="Industry"
        className="border p-2 rounded w-full"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Company
      </button>
    </form>
  );
}
