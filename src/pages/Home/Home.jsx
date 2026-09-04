import React, { useEffect, useState } from 'react';
import { Container, Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data.slice(0, 3));
      } catch (err) {
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const getYoutubeEmbedUrl = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : '';
  };

  return (
    <Box className="home-root">
      {/* Hero Banner Section */}
      <Box className="hero-section">
        <Container maxWidth="xl" className="hero-container">
          <Box className="hero-flex-layout">
            
            {/* Left Content Column */}
            <Box className="hero-text-container">
              <Box className="party-badge">
                <img src="/official-picture.png" alt="Candidate Badge" className="hero-adp-badge-img" />
                <Typography variant="subtitle2" className="party-badge-text">
                  TOGETHER WE CAN BUILD
                </Typography>
              </Box>

              <Typography variant="h1" className="hero-title">
                TOGETHER WE CAN BUILD
              </Typography>

              <Typography variant="h2" className="hero-subtitle">
                HON. CHIDINMA NWAMAKA CHUKWUMA (BABY)
              </Typography>

              <Typography variant="h3" className="hero-office">
                FOR MEMBER, IMO STATE HOUSE OF ASSEMBLY, ORU WEST CONSTITUENCY
              </Typography>

              <Typography variant="body1" className="hero-description">
                Building a stronger community through people-focused representation, transparent leadership, and sustainable development for all citizens of Oru West Constituency.
              </Typography>

              <Box className="hero-cta-buttons">
                <Button
                  variant="contained"
                  component={Link}
                  to="/get-involved"
                  className="cta-btn-primary"
                  startIcon={<HowToVoteIcon />}
                >
                  JOIN THE CAMPAIGN
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/manifesto"
                  className="cta-btn-secondary"
                  endIcon={<ArrowForwardIcon />}
                >
                  READ MANIFESTO
                </Button>
              </Box>
            </Box>

            {/* Right Candidate Image Column */}
            <Box className="hero-image-container">
              <Box className="hero-img-frame">
                <img
                  src="/official-picture.png"
                  alt="Hon. Chidinma Nwamaka Chukwuma"
                  className="hero-candidate-img"
                />
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>

      {/* Core Campaign Pillars Section */}
      <Box className="pillars-section">
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" className="section-title">
            Our Core Pillars
          </Typography>
          <Typography variant="subtitle1" align="center" className="section-subtitle">
            The Credible Alternative for Effective Governance
          </Typography>
          <Box className="pillars-grid" style={{ marginTop: '30px' }}>
            {[
              { title: 'People Focused', desc: 'Putting the welfare of Oru West citizens first in every legislative decision.' },
              { title: 'Transparency & Accountability', desc: 'Open door governance and full integrity in community fund utilization.' },
              { title: 'Development for All', desc: 'Inclusive economic initiatives and infrastructure expansion for all wards.' },
              { title: 'Integrity & Service', desc: 'Selfless representation driven by honesty, action, and genuine dedication.' }
            ].map((pillar, index) => (
              <Card className="pillar-card" key={index}>
                <CardContent>
                  <Typography variant="h6" className="pillar-title">{pillar.title}</Typography>
                  <Typography variant="body2" className="pillar-desc">{pillar.desc}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Meet the Candidate Banner */}
      <Box className="candidate-banner-section">
        <Container maxWidth="lg">
          <Box className="banner-flex-layout">
            <Box className="banner-img-box">
              <img src="/hon-chidinma2.png" alt="Candidate Poster" className="banner-img" />
            </Box>
            <Box className="banner-text-box">
              <Typography variant="h4" className="banner-title">
                Stronger People, Greater Opportunities, Brighter Tomorrow
              </Typography>
              <Typography variant="body1" className="banner-text">
                Hon. Chidinma Nwamaka Chukwuma (Baby) is committed to turning our collective aspirations into practical legislative achievements. From youth empowerment to healthcare improvements and educational access, we are building a constituency that works for everyone.
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="/about-us"
                className="banner-btn"
                endIcon={<ArrowForwardIcon />}
              >
                Learn More About Hon. Chidinma
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Latest Campaign News & Updates */}
      <Container maxWidth="lg" className="news-feed-section">
        <Box className="news-header">
          <Typography variant="h4" className="section-title">
            Latest News & Updates
          </Typography>
          <Button component={Link} to="/news-updates" endIcon={<ArrowForwardIcon />} style={{ color: '#0d1b3e' }}>
            View All News
          </Button>
        </Box>

        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <Typography variant="body1" align="center" style={{ margin: '40px 0', color: '#666' }}>
            No campaign updates published yet. Check back soon!
          </Typography>
        ) : (
          <Box className="news-cards-grid">
            {posts.map((post) => (
              <Card className="news-card" key={post._id}>
                {post.imageUrl && (
                  <CardMedia component="img" height="220" image={post.imageUrl} alt={post.title} />
                )}
                {post.youtubeUrl && (
                  <iframe
                    width="100%"
                    height="220"
                    src={getYoutubeEmbedUrl(post.youtubeUrl)}
                    title={post.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                )}
                <CardContent>
                  <Typography variant="caption" className="news-date">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </Typography>
                  <Typography variant="h6" className="news-card-title">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" className="news-card-body">
                    {post.content.length > 120 ? `${post.content.substring(0, 120)}...` : post.content}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Home;