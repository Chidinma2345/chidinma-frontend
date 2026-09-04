// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import { Link, useLocation } from 'react-router-dom';
// import './NavBar.css';

// const NavBar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const location = useLocation();

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const navLinks = [
//     { title: 'Home', path: '/' },
    
//     { title: 'My Vision', path: '/my-vision' },
//     { title: 'Manifesto', path: '/manifesto' },
//     { title: 'Constituency', path: '/constituency' },
    
//     { title: 'News & Updates', path: '/news-updates' },
//     { title: 'Media', path: '/media' },
//     { title: 'Get Involved', path: '/get-involved' },
//     { title: 'About Me', path: '/about-us' },
//     { title: 'Projects & Achievements', path: '/projects-achievements' },
//     { title: 'Contact Me', path: '/contact-us' }
//   ];

//   const drawerContent = (
//     <Box className="drawer-container" onClick={handleDrawerToggle}>
//       <Box className="drawer-header">
//         <Typography variant="h6" className="drawer-brand">
//           ADP | Hon. Chidinma
//         </Typography>
//         <IconButton color="inherit">
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <List>
//         {navLinks.map((link) => (
//           <ListItem
//             button
//             key={link.title}
//             component={Link}
//             to={link.path}
//             className={location.pathname === link.path ? 'drawer-link-active' : ''}
//           >
//             <ListItemText primary={link.title} />
//           </ListItem>
//         ))}
//         <ListItem button component={Link} to="/admin" className="admin-drawer-link">
//           <ListItemText primary="Admin Login" />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <AppBar position="sticky" className="navbar-root">
//         <Container maxWidth="xl">
//           <Toolbar disableGutters className="toolbar-container">
//             {/* Logo and Branding Header */}
//             <Box component={Link} to="/" className="brand-logo-container">
//               <img src="/adp-logo.png" alt="ADP Party Logo" className="adp-logo-img" />
//               {/* <Box className="brand-text-box">
//                 <Typography variant="h6" className="candidate-name">
//                   HON. CHIDINMA NWAMAKA CHUKWUMA (BABY)
//                 </Typography>
//                 <Typography variant="caption" className="constituency-tag">
//                   ADP • Imo State House of Assembly (Oru West)
//                 </Typography>
//               </Box> */}
//             </Box>

//             {/* Desktop Navigation Links */}
//             <Box className="desktop-links-box">
//               {navLinks.map((link) => (
//                 <Button
//                   key={link.title}
//                   component={Link}
//                   to={link.path}
//                   className={`nav-btn ${location.pathname === link.path ? 'active-nav-btn' : ''}`}
//                 >
//                   {link.title}
//                 </Button>
//               ))}
//             </Box>

//             {/* Mobile Menu Icon */}
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               className="mobile-menu-btn"
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </Container>
//       </AppBar>

//       {/* Drawer for Mobile Devices */}
//       <Drawer
//         anchor="right"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//       >
//         {drawerContent}
//       </Drawer>
//     </>
//   );
// };

// export default NavBar;


import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
import Marquee from './Marquee';
import './NavBar.css';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'My Vision', path: '/my-vision' },
    { title: 'Manifesto', path: '/manifesto' },
    { title: 'Constituency', path: '/constituency' },
    { title: 'News & Updates', path: '/news-updates' },
    { title: 'Media', path: '/media' },
    { title: 'Get Involved', path: '/get-involved' },
    { title: 'About Me', path: '/about-us' },
    { title: 'Projects & Achievements', path: '/projects-achievements' },
    { title: 'Contact Me', path: '/contact-us' }
  ];

  const drawerContent = (
    <Box className="drawer-container" onClick={handleDrawerToggle}>
      <Box className="drawer-header">
        <span className="drawer-brand">ADP | Hon. Chidinma</span>
        <IconButton color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem
            button
            key={link.title}
            component={Link}
            to={link.path}
            className={location.pathname === link.path ? 'drawer-link-active' : ''}
          >
            <ListItemText primary={link.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" className="navbar-root" elevation={0}>
      <Toolbar disableGutters className="toolbar-container">
        {/* Full-width container to stretch elements edge-to-edge */}
        <Box className="navbar-fullwidth">
          {/* Top Row: Logo + Links */}
          <Box className="navbar-top-row">
            <Box component={Link} to="/" className="brand-logo-container">
              <img src="/adp-logo.png" alt="ADP Party Logo" className="adp-logo-img" />
            </Box>

            <Box className="desktop-links-box">
              {navLinks.map((link) => (
                <Button
                  key={link.title}
                  component={Link}
                  to={link.path}
                  className={`nav-btn ${location.pathname === link.path ? 'active-nav-btn' : ''}`}
                >
                  {link.title}
                </Button>
              ))}
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="mobile-menu-btn"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Bottom Row: Running Marquee */}
          <Marquee />
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;