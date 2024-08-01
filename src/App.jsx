import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import Dashboard from './Screen/Dashboard';

const App = () => {
  return (
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
  );
}

export default App;
