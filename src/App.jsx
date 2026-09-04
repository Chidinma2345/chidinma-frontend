import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import MyVision from './pages/MyVision/MyVision';
import Manifesto from './pages/Manifesto/Manifesto';
import Constituency from './pages/Constituency/Constituency';
// import ProjectsAndAchievements from './pages/ProjectsAndAchievements/ProjectsAndAchievements';
import NewsAndUpdates from './pages/NewsAndUpdates/NewsAndUpdates';
import Media from './pages/Media/Media';
import GetInvolved from './pages/GetInvolved/GetInvolved';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import AdminPage from './pages/AdminPage/AdminPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-vision" element={<MyVision />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/constituency" element={<Constituency />} />
        {/* <Route path="/projects-achievements" element={<ProjectsAndAchievements />} /> */}
        <Route path="/news-updates" element={<NewsAndUpdates />} />
        <Route path="/media" element={<Media />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;