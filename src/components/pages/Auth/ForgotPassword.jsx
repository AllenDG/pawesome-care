import React, { useState } from "react";
import { Grid, TextField, Button, Box, Alert, Card } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import pic from "../../../images/forgot.svg";

export default function ForgotPassword() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleOnSumbit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    };
    if (actualData.email) {
      console.log(actualData);
      setError({
        status: true,
        msg: "Password reset Email send succesfull ",
        type: "success",
      });
      e.currentTarget.reset();
    } else {
      setError({
        status: true,
        msg: "Please provide valid Email ",
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
                  id="login-form"
                  onSubmit={handleOnSumbit}
                >
                  <h3>Send reset password link</h3>
                  <TextField
                    type="email"
                    required
                    fullWidth
                    margin="normal"
                    id="email"
                    name="email"
                    label="Email Address"
                  />
                  <Box textAlign="center">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ mt: 3, mb: 2, px: 5 }}
                    >
                      Send Email
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
