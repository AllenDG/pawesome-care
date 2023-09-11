import React, { useState } from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Registration() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleOnSumbit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
      mobile: data.get("mobile"),
      address: data.get("address"),
      city: data.get("cityName"),
      pincode: data.get("pincode"),
    };
    //console.log(actualData);
    if (
      actualData.email &&
      actualData.password &&
      actualData.firstName &&
      actualData.lastName &&
      actualData.confirmPassword &&
      actualData.city &&
      actualData.mobile &&
      actualData.pincode
    ) {
      if (actualData.password === actualData.confirmPassword) {
        console.log(actualData);
        setError({
          status: true,
          msg: "Registration succesfull ",
          type: "success",
        });
        e.currentTarget.reset();
        setTimeout(() => {
          window.location.href = "/loginRegister";
        }, 3000);
      } else {
        setError({
          status: true,
          msg: "Confirm password does not match with the given Password.",
          type: "warning",
        });
      }
    } else {
      setError({ status: true, msg: "All field are required ", type: "error" });
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ padding: 5 }}
        id="registration-form"
        onSubmit={handleOnSumbit}
      >
        <TextField
          type="text"
          required
          margin="normal"
          id="firstName"
          name="firstName"
          label="First Name"
        />
        <TextField
          type="text"
          required
          margin="normal"
          id="lastName"
          name="lastName"
          label="Last Name"
          sx={{ ml: 3 }}
        />
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
        <TextField
          type="password"
          required
          fullWidth
          margin="normal"
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
        />
        <TextField
          type="text"
          required
          fullWidth
          margin="normal"
          id="mobile"
          name="mobile"
          label="Mobile No"
        />
        <TextField
          type="text"
          required
          fullWidth
          margin="normal"
          id="address"
          name="address"
          label="Address"
        />

        <TextField
          type="text"
          required
          margin="normal"
          id="cityName"
          name="cityName"
          label="City Name"
        />
        <TextField
          type="text"
          required
          margin="normal"
          id="pincode"
          name="pincode"
          label="Pincode"
          sx={{ ml: 3 }}
        />

        {/* <FormControlLabel
          control={<CheckBox value="agree" color="primary" name="tc" id="tc" />}
          label="I agree to term and condition"
        /> */}

        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Registration
          </Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  );
}
