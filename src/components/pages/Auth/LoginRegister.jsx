import React, { useState } from "react";
import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import pic from "../../../images/pet.jpg";
import Login from "./Login";
import Registration from "./Registration";

const TabPannel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpaneel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default function LoginRegister() {
  const [value, setValue] = useState(0);
  const handleValue = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${pic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid item lg={5} sm={7}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs textColor="primary" value={value} onChange={handleValue}>
                  <Tab
                    label="Login"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                  <Tab
                    label="Sign Up"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPannel value={value} index={0}>
                <Login />
              </TabPannel>
              <TabPannel value={value} index={1}>
                <Registration />
              </TabPannel>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
