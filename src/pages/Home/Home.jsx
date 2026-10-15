import React, { useEffect, useState } from 'react';
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GroupsIcon from '@mui/icons-material/Groups';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HandshakeIcon from '@mui/icons-material/Handshake';

import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../components/Spinner';

import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Campaign video. This is an embedded player, not a link to YouTube.
  const campaignVideoUrl =
    'https://www.youtube.com/embed/G4E1p_2poO0?rel=0&playsinline=1';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');

        // Keep the latest 3 published posts for the Home page.
        setPosts(
          Array.isArray(res.data)
            ? res.data.slice(0, 3)
            : []
        );
      } catch (err) {
        console.error('Error fetching posts:', err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getYoutubeEmbedUrl = (url) => {
    if (!url) return '';

    try {
      const parsedUrl = new URL(url);
      let videoId = '';

      if (
        parsedUrl.hostname === 'youtu.be' ||
        parsedUrl.hostname.endsWith('.youtu.be')
      ) {
        videoId = parsedUrl.pathname.split('/').filter(Boolean)[0] || '';
      } else if (
        parsedUrl.hostname.includes('youtube.com') ||
        parsedUrl.hostname.includes('youtube-nocookie.com')
      ) {
        videoId =
          parsedUrl.searchParams.get('v') ||
          parsedUrl.pathname.match(/\/(?:embed|shorts|live)\/([^/?]+)/)?.[1] ||
          '';
      }

      return /^[a-zA-Z0-9_-]{11}$/.test(videoId)
        ? `https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1`
        : '';
    } catch (error) {
      return '';
    }
  };

  /*
   * COMMUNITY IMPACT / FALLBACK UPDATES
   *
   * These are displayed when there are no posts in the backend.
   */
  const communityImpactUpdates = [
    {
      id: 'community-support',
      icon: <VolunteerActivismIcon />,
      title: 'Supporting People in the Community',
      description:
        'Hon. Chidinma Nwamaka Chukwuma has continued to reach out to people in the community, offering support and assistance to individuals and families in need.',
      label: 'COMMUNITY SUPPORT'
    },
    {
      id: 'empowerment',
      icon: <HandshakeIcon />,
      title: 'Empowerment & Opportunity',
      description:
        'Through people-focused initiatives and direct community engagement, she has supported empowerment efforts aimed at helping people improve their opportunities and strengthen their livelihoods.',
      label: 'EMPOWERMENT'
    },
    {
      id: 'women-outreach',
      icon: <GroupsIcon />,
      title: 'Women Community Outreach',
      description:
        'Women have also been brought together through community outreach activities designed to encourage connection, support, care and meaningful engagement.',
      label: 'WOMEN OUTREACH'
    },
    {
      id: 'food-support',
      icon: <RestaurantIcon />,
      title: 'Food & Community Care',
      description:
        'As part of her community outreach, women have been gathered and provided with food and care, reflecting a commitment to practical support and human dignity.',
      label: 'COMMUNITY CARE'
    },
    {
      id: 'kindness',
      icon: <FavoriteIcon />,
      title: 'Acts of Kindness',
      description:
        'Her community engagement has included acts of kindness and personal support for people, with an emphasis on listening to community members and responding to needs where possible.',
      label: 'KINDNESS & SERVICE'
    },
    {
      id: 'people-first',
      icon: <GroupsIcon />,
      title: 'People-Focused Engagement',
      description:
        'These community activities reflect a people-focused approach built around direct engagement, compassion, empowerment and service to the people of Oru West.',
      label: 'PEOPLE FIRST'
    }
  ];

  return (
    <Box className="home-root">

      {/* =========================================================
          HERO BANNER SECTION
      ========================================================== */}
      <Box className="hero-section">
        <Container maxWidth="xl" className="hero-container">

          <Box className="hero-flex-layout">

            {/* LEFT SIDE — CANDIDATE IMAGE */}
            <Box className="hero-image-container">
              <Box className="hero-img-frame">
                <img
                  src="/official-picture.png"
                  alt="Hon. Chidinma Nwamaka Chukwuma"
                  className="hero-candidate-img"
                />
              </Box>
            </Box>

            {/* RIGHT SIDE — HERO WRITE-UPS */}
            <Box className="hero-text-container">

              <Box className="party-badge">
                <img
                  src="/official-picture.png"
                  alt="Candidate Badge"
                  className="hero-adp-badge-img"
                />

                <Typography
                  variant="subtitle2"
                  className="party-badge-text"
                >
                  TOGETHER WE CAN BUILD
                </Typography>
              </Box>

              <Typography
                variant="h1"
                className="hero-title"
              >
                TOGETHER WE CAN BUILD
              </Typography>

              <Typography
                variant="h2"
                className="hero-subtitle"
              >
                HON. CHIDINMA NWAMAKA CHUKWUMA (BABY)
              </Typography>

              <Typography
                variant="h3"
                className="hero-office"
              >
                FOR MEMBER, IMO STATE HOUSE OF ASSEMBLY, ORU WEST CONSTITUENCY
              </Typography>

              <Typography
                variant="body1"
                className="hero-description"
              >
                Building a stronger community through people-focused
                representation, transparent leadership, and sustainable
                development for all citizens of Oru West Constituency.
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

          </Box>
        </Container>
      </Box>

      {/* =========================================================
          CORE CAMPAIGN PILLARS SECTION
      ========================================================== */}
      <Box className="pillars-section">
        <Container maxWidth="lg">

          <Typography
            variant="h4"
            align="center"
            className="section-title"
          >
            Our Core Pillars
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            className="section-subtitle"
          >
            The Credible Alternative for Effective Governance
          </Typography>

          <Box
            className="pillars-grid"
            style={{ marginTop: '30px' }}
          >
            {[
              {
                title: 'People Focused',
                desc:
                  'Putting the welfare of Oru West citizens first in every legislative decision.'
              },
              {
                title: 'Transparency & Accountability',
                desc:
                  'Open door governance and full integrity in community fund utilization.'
              },
              {
                title: 'Development for All',
                desc:
                  'Inclusive economic initiatives and infrastructure expansion for all wards.'
              },
              {
                title: 'Integrity & Service',
                desc:
                  'Selfless representation driven by honesty, action, and genuine dedication.'
              }
            ].map((pillar, index) => (
              <Card
                className="pillar-card"
                key={index}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    className="pillar-title"
                  >
                    {pillar.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    className="pillar-desc"
                  >
                    {pillar.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

        </Container>
      </Box>

      {/* =========================================================
          CAMPAIGN VIDEO SECTION
          POSITION: IMMEDIATELY AFTER CORE PILLARS
          AND BEFORE "SERVICE THAT REACHES PEOPLE"
      ========================================================== */}
      <Box className="campaign-video-section">
        <Container maxWidth="lg">

          <Box className="campaign-video-heading">
            <Typography
              variant="h3"
              className="campaign-video-title"
            >
              The People Have Decided
            </Typography>

            <Typography
              variant="h5"
              className="campaign-video-subtitle"
            >
              WATCH THE VIDEO
            </Typography>
          </Box>

          <Box className="campaign-video-frame">
            <iframe
              src={campaignVideoUrl}
              title="Hon. Chidinma Nwamaka Chukwuma Campaign Video"
              className="campaign-video-iframe"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Box>

        </Container>
      </Box>

      {/* =========================================================
          COMMUNITY IMPACT INTRODUCTION
      ========================================================== */}
      <Box className="impact-intro-section">
        <Container maxWidth="lg">

          <Box className="impact-intro-content">

            <Typography
              variant="overline"
              className="impact-overline"
            >
              PEOPLE • SERVICE • COMMUNITY
            </Typography>

            <Typography
              variant="h3"
              className="impact-main-title"
            >
              Service That Reaches People
            </Typography>

            <Typography
              variant="body1"
              className="impact-main-description"
            >
              Beyond words and campaign promises, Hon. Chidinma Nwamaka
              Chukwuma has engaged directly with people in the community
              through support, empowerment, women-focused outreach, food
              assistance and other acts of kindness.
            </Typography>

            <Typography
              variant="body1"
              className="impact-main-description secondary"
            >
              This section highlights community activities and people-focused
              engagement so that visitors can see the human side of the
              journey and the importance placed on serving people.
            </Typography>

          </Box>

        </Container>
      </Box>

      {/* =========================================================
          COMMUNITY IMPACT CARDS
      ========================================================== */}
      <Box className="community-impact-section">
        <Container maxWidth="lg">

          <Box className="community-impact-header">

            <Box>
              <Typography
                variant="h4"
                className="section-title"
              >
                Community Impact & Outreach
              </Typography>

              <Typography
                variant="subtitle1"
                className="section-subtitle impact-subtitle"
              >
                People-focused service and community engagement
              </Typography>
            </Box>

            <Button
              component={Link}
              to="/news-updates"
              endIcon={<ArrowForwardIcon />}
              className="impact-view-btn"
            >
              View Updates
            </Button>

          </Box>

          <Box className="community-impact-grid">

            {communityImpactUpdates.map((item) => (
              <Card
                className="community-impact-card"
                key={item.id}
              >

                <Box className="impact-card-icon">
                  {item.icon}
                </Box>

                <Typography
                  variant="caption"
                  className="impact-card-label"
                >
                  {item.label}
                </Typography>

                <Typography
                  variant="h6"
                  className="impact-card-title"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  className="impact-card-description"
                >
                  {item.description}
                </Typography>

              </Card>
            ))}

          </Box>

        </Container>
      </Box>

      {/* =========================================================
          MEET THE CANDIDATE BANNER
      ========================================================== */}
      <Box className="candidate-banner-section">
        <Container maxWidth="lg">

          <Box className="banner-flex-layout">

            <Box className="banner-img-box">
              <img
                src="/hon-chidinma2.png"
                alt="Candidate Poster"
                className="banner-img"
              />
            </Box>

            <Box className="banner-text-box">

              <Typography
                variant="h4"
                className="banner-title"
              >
                Stronger People, Greater Opportunities, Brighter Tomorrow
              </Typography>

              <Typography
                variant="body1"
                className="banner-text"
              >
                Hon. Chidinma Nwamaka Chukwuma (Baby) is committed to
                turning our collective aspirations into practical
                legislative achievements. From youth empowerment to
                healthcare improvements and educational access, we are
                building a constituency that works for everyone.
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

      {/* =========================================================
          LATEST CAMPAIGN NEWS & UPDATES
      ========================================================== */}
      <Container
        maxWidth="lg"
        className="news-feed-section"
      >

        <Box className="news-header">

          <Box>
            <Typography
              variant="h4"
              className="section-title"
            >
              Latest News & Updates
            </Typography>

            <Typography
              variant="body2"
              className="news-header-description"
            >
              Follow the latest activities, community engagements,
              announcements and updates.
            </Typography>
          </Box>

          <Button
            component={Link}
            to="/news-updates"
            endIcon={<ArrowForwardIcon />}
            className="view-all-news-btn"
          >
            View All News
          </Button>

        </Box>

        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (

          <Box className="news-fallback-box">

            <Box className="news-fallback-icon">
              <VolunteerActivismIcon />
            </Box>

            <Typography
              variant="h5"
              className="news-fallback-title"
            >
              Community Work & People-Focused Service
            </Typography>

            <Typography
              variant="body1"
              className="news-fallback-text"
            >
              Hon. Chidinma Nwamaka Chukwuma's community engagement
              includes support for people, empowerment activities,
              women-focused outreach, food assistance and other acts
              of kindness.
            </Typography>

            <Button
              component={Link}
              to="/news-updates"
              variant="contained"
              className="news-fallback-btn"
              endIcon={<ArrowForwardIcon />}
            >
              Explore News & Updates
            </Button>

          </Box>

        ) : (

          <Box className="news-cards-grid">

            {posts.map((post) => {
              const embeddedVideo = post.youtubeUrl
                ? getYoutubeEmbedUrl(post.youtubeUrl)
                : '';

              return (
                <Card
                  className="news-card"
                  key={post._id}
                >

                  {post.imageUrl && (
                    <CardMedia
                      component="img"
                      height="220"
                      image={post.imageUrl}
                      alt={post.title}
                    />
                  )}

                  {embeddedVideo && (
                    <Box className="news-video-frame">
                      <iframe
                        src={embeddedVideo}
                        title={post.title || 'Campaign video'}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </Box>
                  )}

                  <CardContent>

                    <Typography
                      variant="caption"
                      className="news-date"
                    >
                      {post.createdAt
                        ? new Date(post.createdAt).toLocaleDateString(
                            'en-US',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            }
                          )
                        : ''}
                    </Typography>

                    <Typography
                      variant="h6"
                      className="news-card-title"
                    >
                      {post.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      className="news-card-body"
                    >
                      {(post.content || '').length > 120
                        ? `${post.content.substring(0, 120)}...`
                        : post.content || ''}
                    </Typography>

                  </CardContent>

                </Card>
              );
            })}

          </Box>

        )}

      </Container>

    </Box>
  );
};

export default Home;