import { Company } from "../types";

interface Props {
  companies: Company[];
}

export default function CompanyList({ companies }: Props) {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Country</th>
          <th className="p-2 border">Industry</th>
          <th className="p-2 border">Created At</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((c) => (
          <tr key={c.id}>
            <td className="p-2 border">{c.id}</td>
            <td className="p-2 border">{c.name}</td>
            <td className="p-2 border">{c.country}</td>
            <td className="p-2 border">{c.industry}</td>
            <td className="p-2 border">{new Date(c.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
