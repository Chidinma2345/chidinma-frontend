import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  Alert
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import GroupsIcon from '@mui/icons-material/Groups';
import './GetInvolved.css';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    ward: '',
    pollingUnit: '',
    roles: {
      wardCoordinator: false,
      pollingUnitAgent: false,
      canvasser: false,
      mediaVolunteer: false,
      logisticsSupport: false
    },
    preferredContact: 'WhatsApp',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      roles: { ...prev.roles, [name]: checked }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end form submission handling logic
    console.log('Volunteer Application Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <Box className="get-involved-root">
      {/* Header Banner */}
      <Box className="get-involved-header">
        <Container maxWidth="lg">
          <Typography variant="h3" className="page-title">
            Get Involved
          </Typography>

          <Typography variant="h6" className="page-subtitle">
            Join the Movement to Build a Better Oru West Constituency
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" className="main-container">
        <Grid container spacing={4}>
          {/* Volunteer Information Side Panel */}
          <Grid item xs={12} md={5}>
            <Box className="info-panel">
              <Typography variant="h5" className="panel-title">
                Why Stand With Hon. Chidinma?
              </Typography>
              <Typography variant="body1" className="panel-text">
                Real transformation in Oru West starts with dedicated citizens. By offering your time, skills, or network, you directly drive grassroots progress and honest governance.
              </Typography>

              <Box className="ways-to-help-list">
                <Paper className="help-card" elevation={0}>
                  <VolunteerActivismIcon className="help-icon" />
                  <Box>
                    <Typography variant="h6" className="help-card-title">
                      Grassroots Canvassing
                    </Typography>
                    <Typography variant="body2" className="help-card-text">
                      Engage neighbors, households, and local forums across your ward to spread our agenda.
                    </Typography>
                  </Box>
                </Paper>

                <Paper className="help-card" elevation={0}>
                  <HowToVoteIcon className="help-icon" />
                  <Box>
                    <Typography variant="h6" className="help-card-title">
                      Polling Unit Mobilization
                    </Typography>
                    <Typography variant="body2" className="help-card-text">
                      Help organize voter turnout and ensure election integrity on election day.
                    </Typography>
                  </Box>
                </Paper>

                <Paper className="help-card" elevation={0}>
                  <GroupsIcon className="help-icon" />
                  <Box>
                    <Typography variant="h6" className="help-card-title">
                      Digital & Media Support
                    </Typography>
                    <Typography variant="body2" className="help-card-text">
                      Amplify campaign updates, videos, and key statements across social media platforms.
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Grid>

          {/* Volunteer Registration Form */}
          <Grid item xs={12} md={7}>
            <Paper className="form-paper" elevation={2}>
              <Typography variant="h4" className="form-title">
                Volunteer Registration Form
              </Typography>
              <Typography variant="body2" className="form-instruction">
                Fill out the details below to join the ADP campaign team in Oru West LGA.
              </Typography>

              {submitted && (
                <Alert severity="success" style={{ marginBottom: '20px' }}>
                  Thank you for registering! The campaign team will contact you shortly via your preferred channel.
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleTextChange}
                      required
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone / WhatsApp Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleTextChange}
                      required
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleTextChange}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Ward (Oru West)"
                      name="ward"
                      value={formData.ward}
                      onChange={handleTextChange}
                      required
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Polling Unit Name/Code"
                      name="pollingUnit"
                      value={formData.pollingUnit}
                      onChange={handleTextChange}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl component="fieldset" margin="dense">
                      <FormLabel component="legend" className="form-label-custom">
                        How Would You Like to Support? (Select all that apply)
                      </FormLabel>
                      <FormGroup>
                        <Grid container>
                          <Grid item xs={12} sm={6}>
                            <FormControlLabel
                              control={<Checkbox checked={formData.roles.wardCoordinator} onChange={handleCheckboxChange} name="wardCoordinator" style={{ color: '#0d1b3e' }} />}
                              label="Financial Support"
                            />
                             </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormControlLabel
                              control={<Checkbox checked={formData.roles.canvasser} onChange={handleCheckboxChange} name="canvasser" style={{ color: '#0d1b3e' }} />}
                              label="Ward Mobilizer"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormControlLabel
                              control={<Checkbox checked={formData.roles.pollingUnitAgent} onChange={handleCheckboxChange} name="pollingUnitAgent" style={{ color: '#0d1b3e' }} />}
                              label="Polling Unit Agent"
                            />
                           
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormControlLabel
                              control={<Checkbox checked={formData.roles.canvasser} onChange={handleCheckboxChange} name="canvasser" style={{ color: '#0d1b3e' }} />}
                              label="Door-to-Door Canvasser"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormControlLabel
                              control={<Checkbox checked={formData.roles.mediaVolunteer} onChange={handleCheckboxChange} name="mediaVolunteer" style={{ color: '#0d1b3e' }} />}
                              label="Social Media Volunteer"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={<Checkbox checked={formData.roles.logisticsSupport} onChange={handleCheckboxChange} name="logisticsSupport" style={{ color: '#0d1b3e' }} />}
                              label="Event & Logistics Support"
                            />
                          </Grid>
                        </Grid>
                      </FormGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl component="fieldset" margin="dense">
                      <FormLabel component="legend" className="form-label-custom">
                        Preferred Contact Method
                      </FormLabel>
                      <RadioGroup
                        row
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleTextChange}
                      >
                        <FormControlLabel value="WhatsApp" control={<Radio style={{ color: '#0d1b3e' }} />} label="WhatsApp" />
                        <FormControlLabel value="Phone Call" control={<Radio style={{ color: '#0d1b3e' }} />} label="Phone Call" />
                        <FormControlLabel value="SMS" control={<Radio style={{ color: '#0d1b3e' }} />} label="SMS" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      label="Additional Notes / Skills You Wish to Offer"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleTextChange}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      className="submit-volunteer-btn"
                      startIcon={<SendIcon />}
                    >
                      Submit Volunteer Registration
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GetInvolved;