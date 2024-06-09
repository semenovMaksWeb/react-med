import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { MainPage } from "./pages/mainPage"
import { DoctorsPage } from "./pages/doctorsPage"
import { RecordPage } from './pages/recordPage';
import { DoctorPage } from './pages/doctorPage';
import { HistoryPage } from './pages/historyPage';
import { AddHistoryPage } from './pages/addHistoryPage';
import { RecordUserIdPage } from './pages/recordUserIdPage';


export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <Link className="link" to="/">Главная</Link>
          <Link className="link" to="/doctors">Врачи</Link>
          <Link className="link" to="/record">Запись</Link>
          <Link className="link" to="/history">История болезни</Link>
          <Link className="link" to="/history/add">Добавить запись</Link>
          <Link className="link" to="/record/get">Просмотр приемов</Link>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/doctor/:id" element={<DoctorPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/history/add" element={<AddHistoryPage />} />
          <Route path="/record/get" element={<RecordUserIdPage />} />
        </Routes>
      </div>
    </Router>
  );
}