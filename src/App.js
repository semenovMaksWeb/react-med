import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { MainPage } from "./pages/mainPage"
import { DoctorsPage } from "./pages/doctorsPage"
import { RecordPage } from './pages/recordPage';
import { DoctorPage } from './pages/doctorPage';
export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <Link className="link" to="/">Главная</Link>
          <Link className="link" to="/doctors">Врачи</Link>
          <Link className="link" to="/record">Запись</Link>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/doctor/:id" element={<DoctorPage />} />
        </Routes>
      </div>
    </Router>
  );
}