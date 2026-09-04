import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  IconButton
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end handling for contact messages
    alert('Thank you for reaching out! Your message has been sent to the campaign office.');
    setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <Box className="contact-root">
      {/* Header Banner */}
      <Box className="contact-header">
        <Container maxWidth="lg">
          <Typography variant="h3" className="contact-header-title">
            Contact Our Campaign Office
          </Typography>
          <Typography variant="h6" className="contact-header-subtitle">
            Hon. Chidinma Nwamaka Chukwuma (Baby) for Oru West Constituency
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" className="contact-content-container">
        <Grid container spacing={4}>
          {/* Left Column: Office Details & Social Channels */}
          <Grid item xs={12} md={5}>
            <Paper elevation={0} className="contact-info-paper">
              <Typography variant="h5" className="info-section-title">
                Get in Touch Directly
              </Typography>
              <Typography variant="body2" className="info-description">
                Have questions, suggestions, or want to register support for Oru West? Reach out directly to our headquarters.
              </Typography>

              <Box className="contact-detail-item">
                <LocationOnIcon className="contact-icon" />
                <Box>
                  <Typography variant="subtitle2" className="detail-label">Campaign Headquarters</Typography>
                  <Typography variant="body2" className="detail-value">
                    186 B Onitsha Owerri Road by Ihitte Junction, Mgbidi, Oru West L.G.A., Imo State.
                  </Typography>
                </Box>
              </Box>

              <Box className="contact-detail-item">
                <PhoneIcon className="contact-icon" />
                <Box>
                  <Typography variant="subtitle2" className="detail-label">Phone Line</Typography>
                  <Typography variant="body2" className="detail-value">0916 040 0453</Typography>
                </Box>
              </Box>

              <Box className="contact-detail-item">
                <EmailIcon className="contact-icon" />
                <Box>
                  <Typography variant="subtitle2" className="detail-label">Official Email</Typography>
                  <Typography variant="body2" className="detail-value">
                    chidinmachukwumaofficial@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Typography variant="subtitle1" className="social-section-title">
                Connect Across Digital Platforms
              </Typography>
              <Box className="social-links-box">
                <IconButton
                  component="a"
                  href="https://chat.whatsapp.com/I4MTxJBbNzb13ccZY58WgO?s=cl&p=a&mlu=4"
                  target="_blank"
                  className="social-btn whatsapp"
                >
                  <WhatsAppIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.facebook.com/profile.php?id=61593575716436"
                  target="_blank"
                  className="social-btn facebook"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/honchidinmanwamakachukwuma?igsi=MW5xbDJ6dnhodHJ6cQ=="
                  target="_blank"
                  className="social-btn instagram"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://x.com/HonChidinmaNC"
                  target="_blank"
                  className="social-btn twitter"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.youtube.com/@HonchidinmanwamakaChukwumaTV"
                  target="_blank"
                  className="social-btn youtube"
                >
                  <YouTubeIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>

          {/* Right Column: Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper elevation={0} className="contact-form-paper">
              <Typography variant="h5" className="form-section-title">
                Send Us a Direct Message
              </Typography>
              <form onSubmit={handleSubmit} className="contact-form">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      className="submit-message-btn"
                      endIcon={<SendIcon />}
                    >
                      Send Message
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

export default ContactUs;