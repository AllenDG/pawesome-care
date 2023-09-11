import React, { useState, useContext } from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import { NavLink } from "react-router-dom";
import Navbar from "../../Navbar";
import { LoginContext } from "./LoginContext";
export default function Login() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const { handleLogin } = useContext(LoginContext);
  const handleOnSumbit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    //console.log(actualData);
    if (actualData.email && actualData.password) {
      console.log(actualData);
      handleLogin(actualData.email);
      setError({ status: true, msg: "Login succesfull ", type: "success" });
      e.currentTarget.reset();
    } else {
      setError({ status: true, msg: "All field are required ", type: "error" });
    }
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ padding: 5 }}
        id="login-form"
        onSubmit={handleOnSumbit}
      >
        <TextField
          type="email"
          required
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email Address"
        />
        <TextField
          type="password"
          required
          fullWidth
          margin="normal"
          id="password"
          name="password"
          label="Password"
        />

        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Log In
          </Button>
        </Box>
        <NavLink to="/forgotPassword">Forgot Password ? </NavLink>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  );
}
