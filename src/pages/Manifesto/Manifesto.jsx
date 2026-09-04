import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ConstructionIcon from '@mui/icons-material/Construction';
import SecurityIcon from '@mui/icons-material/Security';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircle";
import DownloadIcon from '@mui/icons-material/Download';
import './Manifesto.css';

const Manifesto = () => {
  const agendaItems = [
    {
      icon: <SchoolIcon fontSize="large" />,
      title: '1. Quality Education and Skill Acquisition',
      points: [
        'Establishment of constituency educational support funds and scholarships for underprivileged students.',
        'Provision of modern learning materials and digital literacy labs across primary and secondary schools in Oru West.',
        'Free vocational and technical skill acquisition hubs tailored for youth and women empowerment.'
      ]
    },
    {
      icon: <LocalHospitalIcon fontSize="large" />,
      title: '2. Accessible Healthcare Services',
      points: [
        'Upgrading rural primary health centers with essential drugs, equipment, and steady power supply.',
        'Periodic free medical outreach programs focusing on maternal care, elderly health, and preventive medicine.',
        'Advocating for state health insurance enrollment initiatives for vulnerable families.'
      ]
    },
    {
      icon: <BusinessCenterIcon fontSize="large" />,
      title: '3. Youth and Women Economic Empowerment',
      points: [
        'Interest-free micro-credit grants for market women, small business owners, and local traders.',
        'Agriculture support programs supplying subsidized fertilizers, high-yield seeds, and modern equipment.',
        'Targeted mentorship and incubation schemes for local tech innovators and entrepreneurs.'
      ]
    },
    {
      icon: <ConstructionIcon fontSize="large" />,
      title: '4. Rural Infrastructure & Community Development',
      points: [
        'Legislative pressure to ensure state budget allocation for Oru West road rehabilitation and drainage.',
        'Solar-powered street lighting projects to enhance night commerce and community security.',
        'Installation of clean borehole water systems across rural communities facing water scarcity.'
      ]
    },
    {
      icon: <SecurityIcon fontSize="large" />,
      title: '5. Transparent Governance & Open Representation',
      points: [
        'Quarterly town hall meetings across all wards in Oru West to account for legislative activities.',
        'Constituency feedback offices in Oguta Junction, Mgbidi, to receive public petitions and suggestions directly.',
        'Unwavering advocacy for judicial independence, local security strengthening, and social justice.'
      ]
    }
  ];

  return (
    <Box className="manifesto-root">
      {/* Page Header Banner */}
      <Box className="manifesto-header">
        <Container maxWidth="lg">
          <Typography variant="overline" className="header-tag">
            ACTION DEMOCRATIC PARTY (ADP)
          </Typography>
          <Typography variant="h3" className="header-title">
            THE LEGISLATIVE MANIFESTO
          </Typography>
          <Typography variant="h6" className="header-subtitle">
            A Blueprint for Sustainable Progress in Oru West Constituency
          </Typography>
        </Container>
      </Box>

      {/* Main Content Body */}
      <Container maxWidth="lg" className="manifesto-body">
        {/* Intro Section */}
        <Box className="intro-card">
          <Typography variant="h5" className="intro-heading">
            Our Contract with the People of Oru West
          </Typography>
          <Typography variant="body1" className="intro-text">
            This manifesto outlines the key legislative commitments and development strategy of Hon. Chidinma Nwamaka Chukwuma (Baby). It represents a practical, accountable, and inclusive roadmap designed to transform Oru West through responsive lawmaking and targeted constituency interventions.
          </Typography>
        </Box>

        {/* Core Agenda Cards */}
        <Grid container spacing={4} className="agenda-grid">
          {agendaItems.map((agenda, idx) => (
            <Grid item xs={12} key={idx}>
              <Card className="agenda-card">
                <CardContent className="agenda-card-content">
                  <Box className="agenda-header-flex">
                    <Box className="agenda-icon-wrapper">{agenda.icon}</Box>
                    <Typography variant="h5" className="agenda-title">
                      {agenda.title}
                    </Typography>
                  </Box>
                  <List className="agenda-list">
                    {agenda.points.map((point, pointIdx) => (
                      <ListItem key={pointIdx} className="agenda-list-item">
                        <ListItemIcon className="list-icon-wrapper">
                          <CheckCircleOutlineIcon className="check-icon" />
                        </ListItemIcon>
                        <ListItemText
                          primary={point}
                          primaryTypographyProps={{ className: 'point-text' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Download Call To Action */}
        {/* <Box className="download-box">
          <Typography variant="h5" className="download-title">
            Want to read the complete document offline?
          </Typography>
          <Typography variant="body2" className="download-desc">
            Download the official PDF copy of Hon. Chidinma Nwamaka Chukwuma's Campaign Manifesto.
          </Typography>
          <Button
            variant="contained"
            size="large"
            className="download-btn"
            startIcon={<DownloadIcon />}
            onClick={() => alert('Manifesto PDF download starting soon.')}
          >
            Download Full Manifesto (PDF)
          </Button>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Manifesto;