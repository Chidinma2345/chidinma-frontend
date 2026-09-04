import React from 'react';
import { Container, Grid, Typography, Box, Paper, Avatar } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupsIcon from '@mui/icons-material/Groups';
import GavelIcon from '@mui/icons-material/Gavel';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <Box className="about-root">
      {/* Header Banner */}
      <Box className="about-header-banner">
        <Container maxWidth="lg">
          <Typography variant="h3" className="about-header-title">
            About Hon. Chidinma Nwamaka Chukwuma
          </Typography>
          <Typography variant="h6" className="about-header-subtitle">
            A Leader Dedicated to the Growth, Unity, and Empowerment of Oru West Constituency
          </Typography>
        </Container>
      </Box>

      {/* Main Biography Section */}
      <Container maxWidth="lg" className="about-body-container">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box className="about-image-wrapper">
              <img
                src="/hon-chidinma1.jpeg"
                alt="Hon. Chidinma Nwamaka Chukwuma (Baby)"
                className="about-candidate-image"
              />
              <Box className="about-image-badge">
                <Typography variant="subtitle2" className="badge-text">
                  Action Democratic Party (ADP)
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h4" className="about-section-heading">
              Dedicated Service, Proven Integrity
            </Typography>
            <Typography variant="body1" className="about-text-paragraph">
              <strong>Hon. Chidinma Nwamaka Chukwuma (popularly known as Baby)</strong> is a vision-driven 
              leader and grassroots advocate committed to transforming the legislative representation of 
              <strong> Oru West Constituency</strong> in the Imo State House of Assembly.
            </Typography>
            <Typography variant="body1" className="about-text-paragraph">
              Born and raised with a strong passion for community development, Hon. Chidinma has consistently 
              championed initiatives centered around youth empowerment, women advancement, quality public infrastructure, 
              and accountable governance.
            </Typography>
            <Typography variant="body1" className="about-text-paragraph">
              Running on the platform of the <strong>Action Democratic Party (ADP)</strong>,"The Credible Alternative". she 
              brings a fresh, practical approach to lawmaking, ensuring that every community within Oru West 
              receives fair, active, and impactful representation.
            </Typography>
          </Grid>
        </Grid>

        {/* Vision, Mission & Core Values Grid */}
        <Box className="values-section">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper className="value-card">
                <Avatar className="value-icon-avatar">
                  <WorkspacePremiumIcon fontSize="large" />
                </Avatar>
                <Typography variant="h6" className="value-card-title">
                  Our Mission
                </Typography>
                <Typography variant="body2" className="value-card-text">
                  To provide transparent, legislative advocacy that drives socioeconomic development, improves basic infrastructure, and empowers families across all wards of Oru West.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper className="value-card">
                <Avatar className="value-icon-avatar">
                  <GroupsIcon fontSize="large" />
                </Avatar>
                <Typography variant="h6" className="value-card-title">
                  Our Vision
                </Typography>
                <Typography variant="body2" className="value-card-text">
                  A united, prosperous, and self-sustaining Oru West Constituency where every citizen has access to equal opportunities, quality healthcare, and educational empowerment.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper className="value-card">
                <Avatar className="value-icon-avatar">
                  <GavelIcon fontSize="large" />
                </Avatar>
                <Typography variant="h6" className="value-card-title">
                  Legislative Focus
                </Typography>
                <Typography variant="body2" className="value-card-text">
                  Sponsoring human-centered bills, performing oversight duties to ensure government accountability, and bringing state resources directly to the grassroots level.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;