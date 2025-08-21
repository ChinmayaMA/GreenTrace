import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CompaniesPage from "./pages/CompaniesPage";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/companies">Companies</Link>
      </nav>
      <Routes>
        <Route path="/companies" element={<CompaniesPage />} />
      </Routes>
    </BrowserRouter>
  );
}