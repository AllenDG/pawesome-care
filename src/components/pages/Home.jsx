import React from "react";
import { Container, Typography, Grid, Paper, Button } from "@mui/material";
import { Pets, Bathtub, LocalHospital } from "@mui/icons-material";
import { styled } from "@mui/system";
import "../../styles/home.css"

const useStyles = styled((theme) => ({
  section: {
    padding: theme.spacing(4),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      {/* Hero Section */}
      <Paper className="hero">
        <Container maxWidth="md">
          <Typography variant="h2" component="h1">
            Welcome to Pawesome Care
          </Typography>
          <Typography variant="subtitle1">
            Your Trusted Partner in Pet Healthcare
          </Typography>
        </Container>
      </Paper>

      {/* Services Section */}
      <section className={`${classes.section} section`}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={3}>
  <Grid item xs={12} sm={6} md={4}>
    <Paper className="service-card">
      <Pets fontSize="large" color="primary" />
      <Typography variant="h6">Veterinary Care</Typography>
      <Typography variant="body2">
        We provide comprehensive veterinary services for your pets.
      </Typography>
    </Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Paper className="service-card">
      <Bathtub fontSize="large" color="primary" />
      <Typography variant="h6">Pet Grooming</Typography>
      <Typography variant="body2">
        Pamper your pets with our grooming services.
      </Typography>
    </Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Paper className="service-card">
      <LocalHospital fontSize="large" color="primary" />
      <Typography variant="h6">Pet Boarding</Typography>
      <Typography variant="body2">
        Safe and comfortable boarding options for your pets.
      </Typography>
    </Paper>
  </Grid>
</Grid>
        </Container>
      </section>

      {/* About Us Section */}
      <section className={`${classes.section} section`}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1">
            At Pawesome Care, we are passionate about providing the best care
            for your pets. With a team of experienced veterinarians and
            dedicated staff, we ensure the health and happiness of your furry
            friends.
          </Typography>
          <Button variant="contained" color="primary" className="about-button">
            Learn More
          </Button>
        </Container>
      </section>
    </div>
  );
}
