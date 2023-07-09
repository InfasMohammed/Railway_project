import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import RegisterPage from './screens/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<RegisterPage/>} />
        {/* Add other routes for different pages/components */}
      </Routes>
    </Router>
  );
};

export default App;
