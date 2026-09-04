import React from 'react';
import { Box, Container, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { WhatsApp, Facebook, Instagram, Twitter, YouTube, Phone, Email, LocationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <Box className="footer-root" component="footer">
      <Container maxWidth="xl">
        <Box className="footer-grid-container">
          
          {/* Column 1: Candidate Info & ADP Motto */}
          <Box className="footer-col col-brand">
            <Box className="footer-brand-box">
              <img src="/adp-logo.png" alt="ADP Logo" className="footer-logo" />
              <Typography variant="h6" className="footer-candidate-name">
                HON. CHIDINMA NWAMAKA CHUKWUMA
              </Typography>
            </Box>
            <Typography variant="body2" className="footer-motto">
              Action Democratic Party (ADP) &ldquo;&bull; The Credible Alternative &bull;&rdquo;
            </Typography>
            <Typography variant="body2" className="footer-desc">
              Dedicated to transparency, inclusive legislative service, and sustained grassroots growth for Oru West Constituency, Imo State.
            </Typography>
          </Box>

          {/* Column 2: Quick Navigation Links */}
          <Box className="footer-col col-links">
            <Typography variant="h6" className="footer-heading">
              Quick Navigation
            </Typography>
            <Box className="footer-links-list">
              <MuiLink component={Link} to="/" className="footer-link">Home</MuiLink>
              <MuiLink component={Link} to="/about-us" className="footer-link">About Us</MuiLink>
              <MuiLink component={Link} to="/my-vision" className="footer-link">My Vision</MuiLink>
              <MuiLink component={Link} to="/manifesto" className="footer-link">Manifesto</MuiLink>
              <MuiLink component={Link} to="/constituency" className="footer-link">Constituency</MuiLink>
              <MuiLink component={Link} to="/projects-achievements" className="footer-link">Projects &amp; Achievements</MuiLink>
              <MuiLink component={Link} to="/news-updates" className="footer-link">News &amp; Updates</MuiLink>
              <MuiLink component={Link} to="/media" className="footer-link">Media</MuiLink>
              <MuiLink component={Link} to="/get-involved" className="footer-link">Get Involved</MuiLink>
              <MuiLink component={Link} to="/contact-us" className="footer-link">Contact Us</MuiLink>
            </Box>
          </Box>

          {/* Column 3: Contact Details */}
          <Box className="footer-col col-contact">
            <Typography variant="h6" className="footer-heading">
              Campaign Office
            </Typography>
            <Box className="contact-item">
              <LocationOn className="contact-icon" />
              <Typography variant="body2">
                186 B Onitsha Owerri Road by Ihitte Junction, Mgbidi, Oru West L.G.A., Imo State.
              </Typography>
            </Box>
            <Box className="contact-item">
              <Phone className="contact-icon" />
              <Typography variant="body2">
                0916 040 0453
              </Typography>
            </Box>
            <Box className="contact-item">
              <Email className="contact-icon" />
              <Typography variant="body2" style={{ wordBreak: 'break-word' }}>
                chidinmachukwumaofficial@gmail.com
              </Typography>
            </Box>
          </Box>

          {/* Column 4: Official Social Media Platforms */}
          <Box className="footer-col col-social">
            <Typography variant="h6" className="footer-heading">
              Connect With Us
            </Typography>
            <Typography variant="body2" className="social-intro-text">
              Follow our official campaign channels to stay updated with live activities and community updates.
            </Typography>
            <Box className="social-links-grid">
              {/* WhatsApp Group */}
              <IconButton component="a" href="https://chat.whatsapp.com/I4MTxJBbNzb13ccZY58WgO?s=cl&p=a&mlu=4" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Group" className="social-btn wa">
                <WhatsApp />
              </IconButton>
              {/* WhatsApp Channel */}
              <IconButton component="a" href="https://whatsapp.com/channel/0029VbE5tNkIt5rvdcWNhw1X" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Channel" className="social-btn wa-channel">
                <WhatsApp />
              </IconButton>
              {/* Facebook Profile */}
              <IconButton component="a" href="https://www.facebook.com/profile.php?id=61593575716436" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile" className="social-btn fb">
                <Facebook />
              </IconButton>
              {/* Facebook Page */}
              <IconButton component="a" href="https://facebook.com/chidinmachukwumaofficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page" className="social-btn fb-page">
                <Facebook />
              </IconButton>
              {/* Instagram */}
              <IconButton component="a" href="https://www.instagram.com/chidinmachukwumaofficial?igsi=MW5xbDJ6dnhodHJ6cQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn ig">
                <Instagram />
              </IconButton>
              {/* Twitter/X */}
              <IconButton component="a" href="https://x.com/VoteChidinma" target="_blank" rel="noopener noreferrer" aria-label="Twitter X" className="social-btn tw">
                <Twitter />
              </IconButton>
              {/* TikTok */}
              <IconButton component="a" href="https://tiktok.com/@honchidinmachukuma" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-btn tt">
                <Typography variant="caption" style={{ fontWeight: 800 }}>TT</Typography>
              </IconButton>
              {/* YouTube */}
              <IconButton component="a" href="https://www.youtube.com/@chidinmachukwumaofficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-btn yt">
                <YouTube />
              </IconButton>
            </Box>
          </Box>

        </Box>

        {/* Bottom Copyright & Admin Route Link */}
        <Box className="footer-bottom">
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} Hon. Chidinma Nwamaka Chukwuma Campaign Organization. All Rights Reserved.
          </Typography>
          <MuiLink component={Link} to="/admin" className="admin-login-footer-link">
            {/* Developer Access Portal */}
          </MuiLink>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;