// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CompaniesPage from "./pages/CompaniesPage";
import ReportsPage from "./pages/ReportsPage";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        {/* Navigation */}
        <nav className="mb-4 space-x-4">
          <Link to="/companies" className="text-blue-500">Companies</Link>
          <Link to="/reports" className="text-blue-500">Reports</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="*" element={<CompaniesPage />} />
        </Routes>
      </div>
    </Router>
  );
}
