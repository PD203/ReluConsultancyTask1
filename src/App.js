import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Registration';
import Home from './Components/home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
