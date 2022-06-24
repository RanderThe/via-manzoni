import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./assets/App.css";
import './assets/index.css';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
            path="*"
            element={
              <NotFound/>
            }
          />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
