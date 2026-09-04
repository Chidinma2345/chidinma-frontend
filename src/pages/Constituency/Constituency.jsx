import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircle";
import GroupsIcon from '@mui/icons-material/Groups';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';
import './Constituency.css';

const Constituency = () => {
  const wards = [
    'Mgbidi I Ward',
    'Mgbidi II Ward',
    'Aji   Ward',
    '​Amaofuo  Ward',
    '​Ibiasoegbe  Ward',
    '​Nempi / Elem  Ward',
    '​Ohakpu Ward',
    '​Otulu  Ward',
    '​Ozara',
    'Ubulu Ward',
  ];

  const needsAndFocus = [
    {
      title: 'Infrastructure & Road Accessibility',
      icon: <EngineeringIcon className="focus-icon" />,
      desc: 'Facilitating legislative motions for the reconstruction of critical rural access roads connecting farm produce markets directly to urban centers.'
    },
    {
      title: 'Healthcare Revitalization',
      icon: <LocalHospitalIcon className="focus-icon" />,
      desc: 'Equipping primary health care facilities in all 11 wards with essential medicine, modern maternity kits, and emergency response tools.'
    },
    {
      title: 'Educational Advancement & Grants',
      icon: <SchoolIcon className="focus-icon" />,
      desc: 'Sponsoring bursaries and learning materials for primary and secondary school pupils in underserved communities across Oru West.'
    },
    {
      title: 'Economic Empowerment & Agriculture',
      icon: <GroupsIcon className="focus-icon" />,
      desc: 'Providing low-interest micro-grants and mechanized farming support to local market women, artisans, and youth farmers.'
    }
  ];

  return (
    <Box className="constituency-root">
      {/* Header Banner */}
      <Box className="constituency-header">
        <Container maxWidth="lg">
          <Typography variant="h3" className="constituency-title">
            Oru West Constituency
          </Typography>
          <Typography variant="h6" className="constituency-subtitle">
            Representing the People, Culture, and Growth of Imo State House of Assembly Sector
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" className="constituency-body">
        <Grid container spacing={4}>
          {/* Overview Section */}
          <Grid item xs={12} md={7}>
            <Box className="section-card">
              <Typography variant="h4" className="block-title">
                Overview of Oru West LGA
              </Typography>
              <Typography variant="body1" className="block-text">
                Oru West is a vibrant Local Government Area situated within Imo State, Nigeria, headquartered in Mgbidi. Rich in agriculture, trade, and cultural heritage, the constituency stands as a critical economic gateway along the Onitsha-Owerri transit corridor.
              </Typography>
              <Typography variant="body1" className="block-text">
                Hon. Chidinma Nwamaka Chukwuma (Baby) seeks to bring energetic, grassroots-oriented representation to the Imo State House of Assembly to ensure that every ward receives its fair share of developmental projects, state allocations, and economic intervention programs.
              </Typography>

              <Divider style={{ margin: '30px 0' }} />

              <Typography variant="h5" className="block-sub-title">
                Key Constituency Legislative Focus
              </Typography>
              <Grid container spacing={2} style={{ marginTop: '10px' }}>
                {needsAndFocus.map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card className="focus-card">
                      <CardContent>
                        <Box className="focus-header">
                          {item.icon}
                          <Typography variant="h6" className="focus-title">
                            {item.title}
                          </Typography>
                        </Box>
                        <Typography variant="body2" className="focus-desc">
                          {item.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Ward Distribution Sidebar */}
          <Grid item xs={12} md={5}>
            <Card className="ward-sidebar-card">
              <CardContent>
                <Box className="ward-header">
                  <LocationOnIcon style={{ color: '#d32f2f', fontSize: '2rem' }} />
                  <Typography variant="h5" className="ward-sidebar-title">
                    Constituency Wards
                  </Typography>
                </Box>
                <Typography variant="body2" className="ward-subtitle">
                  Key administrative sectors targeted for balanced community representation:
                </Typography>
                <List>
                  {wards.map((ward, index) => (
                    <ListItem key={index} className="ward-list-item">
                      <ListItemIcon style={{ minWidth: '35px' }}>
                        <CheckCircleOutlineIcon style={{ color: '#0d1b3e' }} />
                      </ListItemIcon>
                      <ListItemText primary={ward} primaryTypographyProps={{ style: { fontWeight: 600 } }} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Constituency;