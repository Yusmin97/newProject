import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PetCheck from './petCheck/petCheck';
import MainPage from './mainPage/mainPage';

const App = () => {
  const [route, setRoute] = useState('');

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(window.location.hash.substr(1));
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} component={MainPage} />
        <Route path="/petInfo" component={PetCheck} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
