import React, { useState } from "react";
import { Grid, TextField, Button, Box, Alert, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import pic from "../../../images/forgot.svg";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleOnSumbit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };
    if (actualData.password && actualData.confirmPassword) {
      if (actualData.password === actualData.confirmPassword) {
        console.log(actualData);
        setError({
          status: true,
          msg: "Password Change succesfull, Redirecting to Login Page ...  ",
          type: "success",
        });
        e.currentTarget.reset();
        setTimeout(() => navigate("/loginRegister"), 3500); //redirect after some time with
        // success message in alert box
      } else {
        setError({
          status: true,
          msg: "New Password and confirm password Doesn't match",
          type: "warning",
        });
      }
    } else {
      setError({
        status: true,
        msg: "Please provide new password and confirm password",
        type: "error",
      });
    }
  };
  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid item lg={8} sm={7}>
          <Card
            sx={{
              width: "100%",
              height: 700,
              backgroundImage: `url(${pic})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Card>
        </Grid>
        <Grid item lg={4} sm={5}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Box
                  component="form"
                  noValidate
                  sx={{ padding: 5 }}
                  id="reset-form"
                  onSubmit={handleOnSumbit}
                >
                  <h2>Change password form</h2>
                  <TextField
                    type="password"
                    required
                    fullWidth
                    margin="normal"
                    id="password"
                    name="password"
                    label="New Password"
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
                  <Box textAlign="center">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ mt: 3, mb: 2, px: 5 }}
                    >
                      Change Password
                    </Button>
                  </Box>
                  {error.status ? (
                    <Alert severity={error.type}>{error.msg}</Alert>
                  ) : (
                    ""
                  )}
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
