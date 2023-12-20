import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PetCheck from './petCheck/petCheck';
import MainPage from './mainPage/mainPage';

const App:  React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/petCheck" element={<PetCheck />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
