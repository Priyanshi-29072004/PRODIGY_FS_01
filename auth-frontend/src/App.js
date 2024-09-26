import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard"; // Import Dashboard
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute"; // Ensure PrivateRoute is used
import ForgotPassword from "./components/ForgotPassword"; // Import ForgotPassword

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
        {/* New Route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        {/* Add a default route or a 404 page if needed */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
