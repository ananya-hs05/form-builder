import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateFormPage from './pages/CreateFormPage';
import PreviewPage from './pages/PreviewPage';
import MyFormsPage from './pages/MyFormsPage';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <nav>
        <Link to="/create" style={{ marginRight: 10 }}>Create</Link>
        <Link to="/preview" style={{ marginRight: 10 }}>Preview</Link>
        <Link to="/myforms">My Forms</Link>
      </nav>
      <Routes>
        <Route path="/create" element={<CreateFormPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/myforms" element={<MyFormsPage />} />
        <Route path="*" element={<CreateFormPage />} />
      </Routes>
    </div>
  );
}
