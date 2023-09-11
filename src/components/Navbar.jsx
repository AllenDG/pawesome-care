import React, { useContext } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import { LoginContext } from "../components/pages/Auth/LoginContext";

export default function Navbar() {
  const { isLoggedIn, userEmail, handleLogout } = useContext(LoginContext);
  const location = useLocation(); // Get the current location

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pawesome Care
            </Typography>
            <Button
              component={NavLink}
              to="/"
              sx={{
                color: "white",
                borderBottom: location.pathname === "/" ? "2px solid white" : "none",
              }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/contact"
              sx={{
                color: "white",
                borderBottom: location.pathname === "/contact" ? "2px solid white" : "none",
              }}
            >
              Contact
            </Button>
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                sx={{ color: "white" }}
              >
                {userEmail}
                <br />
                Logout
              </Button>
            ) : (
              <Button
                component={NavLink}
                to="/loginRegister"
                sx={{
                  color: "white",
                  borderBottom: location.pathname === "/loginRegister" ? "2px solid white" : "none",
                }}
              >
                Login / Register
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
