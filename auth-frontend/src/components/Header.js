// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Show the Dashboard button only if authenticated */}
        {isAuthenticated ? (
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
        ) : (
          <Button color="inherit" disabled>
            Dashboard
          </Button>
        )}

        {/* Toggle between Login and Logout based on authentication */}
        {isAuthenticated ? (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
