import React from 'react';
import { Container, Grid, Typography, Box, Card, CardContent, Divider } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EscatorIcon from '@mui/icons-material/TrendingUp';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import './MyVision.css';

const MyVision = () => {
  const visionPillars = [
    {
      icon: <SchoolIcon className="pillar-icon" />,
      title: 'Youth Empowerment & Education',
      description: 'Facilitating skill acquisition hubs, vocational training programs, and educational scholarships to equip Oru West youth for global opportunities.'
    },
    {
      icon: <LocalHospitalIcon className="pillar-icon" />,
      title: 'Accessible Primary Healthcare',
      description: 'Pushing for legislative funding to equip local primary health centers and organize periodic community medical outreach programs.'
    },
    {
      icon: <EscatorIcon className="pillar-icon" />,
      title: 'Economic Growth & Small Businesses',
      description: 'Supporting market women, local farmers, and small business owners with access to micro-grants and structured financial literacy.'
    },
    {
      icon: <GavelIcon className="pillar-icon" />,
      title: 'Accountable Legislative Representation',
      description: 'Ensuring transparent, open-door governance with bi-annual constituency town hall meetings to give every ward a voice.'
    }
  ];

  return (
    <Box className="vision-root">
      {/* Header Banner */}
      <Box className="vision-banner">
        <Container maxWidth="lg">
          <Typography variant="h3" className="vision-banner-title">
            MY VISION FOR ORU WEST
          </Typography>
          <Typography variant="h6" className="vision-banner-subtitle">
            A Blueprint for Sustainable Progress and Equitable Representation
          </Typography>
        </Container>
      </Box>

      {/* Main Vision Statement */}
      <Container maxWidth="lg" className="vision-content-container">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box className="vision-image-wrapper">
              <img
                src="/hon-chidinma1.jpeg"
                alt="Hon. Chidinma Nwamaka Chukwuma Vision"
                className="vision-main-img"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box className="vision-statement-card">
              <Box className="vision-header-badge">
                <VisibilityIcon style={{ color: '#d32f2f' }} />
                <Typography variant="subtitle2" style={{ color: '#0d1b3e', fontWeight: 700 }}>
                  THE VISION
                </Typography>
              </Box>
              <Typography variant="h4" className="vision-quote-title">
                "To build a constituency where equal opportunities, modern infrastructure, and human dignity are accessible to every household."
              </Typography>
              <Divider style={{ margin: '15px 0' }} />
              <Typography variant="body1" className="vision-body-text">
                Hon. Chidinma Nwamaka Chukwuma (Baby) envisions an Oru West LGA where governance is brought close to the grassroots. Through active lawmaking, targeted advocacy, and community-driven initiatives, our goal is to transform Oru West into a model of legislative excellence in Imo State.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Vision Strategic Pillars */}
        <Box style={{ marginTop: '60px' }}>
          <Typography variant="h4" align="center" className="pillars-header-title">
            Strategic Focus Areas
          </Typography>
          <Typography variant="subtitle1" align="center" className="pillars-header-subtitle">
            How We Will Turn Vision into Action in the Imo State House of Assembly
          </Typography>

          <Grid container spacing={3} style={{ marginTop: '20px' }}>
            {visionPillars.map((pillar, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className="vision-pillar-card">
                  <CardContent align="center">
                    {pillar.icon}
                    <Typography variant="h6" className="vision-card-title">
                      {pillar.title}
                    </Typography>
                    <Typography variant="body2" className="vision-card-desc">
                      {pillar.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MyVision;