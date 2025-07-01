import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnotherPage from './pages/AnotherPage';

export default function App() {
  const handleNext = () => {
    console.log('채점 페이지로 이동');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onNext={handleNext} />} />
        <Route path="/another" element={<AnotherPage />} />
      </Routes>
    </Router>
  );
}
