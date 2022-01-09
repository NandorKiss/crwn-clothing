import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route exact path ='/' element={<HomePage />} />
        <Route path ='/hats' element={<HatsPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
