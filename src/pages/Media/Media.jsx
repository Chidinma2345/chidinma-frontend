import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Card, CardMedia, CardContent, Tab, Tabs } from '@mui/material';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import './Media.css';

const Media = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching media posts:', err);
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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Filter posts based on active tab
  const imagePosts = posts.filter((post) => post.imageUrl);
  const videoPosts = posts.filter((post) => post.youtubeUrl);

  const staticCampaignImages = [
    { src: '/hon-chidinma1.jpeg', title: 'Hon. Chidinma Nwamaka Chukwuma Official Poster' },
    { src: '/hon-chidinma2.png', title: 'Together We Can Build Campaign Banner' },
    { src: '/adp-logo.png', title: 'Action Democratic Party (ADP) Symbol' },
    { src: '/adp-flag.jpeg', title: 'Action Democratic Party Official Flag' },
    { src: '/hon-chidinma-with-party-flag1.jpeg', title: 'Action Democratic Party Official Flag' },
    { src: '/hon-chidinma-with-party-flag2.jpeg', title: 'Action Democratic Party Official Flag' }
  ];

  return (
    <Box className="media-root">
      {/* Header Banner */}
      <Box className="media-header-banner">
        <Container maxWidth="lg">
          <Typography variant="h3" className="media-page-title">
            Media Gallery & Campaign Coverage
          </Typography>
          <Typography variant="subtitle1" className="media-page-subtitle">
            Explore photos, video highlights, and official event coverage from Hon. Chidinma's campaign trail across Oru West.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" className="media-content-container">
        {/* Navigation Tabs */}
        <Box className="media-tabs-wrapper">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            textColor="primary"
            indicatorColor="primary"
            className="media-tabs"
          >
            <Tab label="All Media" />
            <Tab label="Photo Gallery" />
            <Tab label="Video Highlights" />
          </Tabs>
        </Box>

        {loading ? (
          <Spinner />
        ) : (
          <>
            {/* Tab 0: All Media */}
            {tabValue === 0 && (
              <Grid container spacing={4}>
                {/* Display Official Campaign Posters */}
                {staticCampaignImages.map((img, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={`static-${idx}`}>
                    <Card className="media-card">
                      <CardMedia component="img" height="260" image={img.src} alt={img.title} className="media-img" />
                      <CardContent>
                        <Typography variant="subtitle1" className="media-card-title">{img.title}</Typography>
                        <Typography variant="caption" className="media-type-badge photo-badge">The Credible Alternative</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}

                {/* Display Dynamic Posts */}
                {posts.map((post) => (
                  <Grid item xs={12} sm={6} md={4} key={post._id}>
                    <Card className="media-card">
                      {post.imageUrl && (
                        <CardMedia component="img" height="260" image={post.imageUrl} alt={post.title} className="media-img" />
                      )}
                      {post.youtubeUrl && (
                        <iframe
                          width="100%"
                          height="260"
                          src={getYoutubeEmbedUrl(post.youtubeUrl)}
                          title={post.title}
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>
                      )}
                      <CardContent>
                        <Typography variant="subtitle1" className="media-card-title">{post.title}</Typography>
                        <Typography variant="caption" className={`media-type-badge ${post.youtubeUrl ? 'video-badge' : 'photo-badge'}`}>
                          {post.youtubeUrl ? 'YouTube Video' : 'Cloudinary Image'}
                        </Typography>
                        <Typography variant="body2" className="media-card-date">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}

            {/* Tab 1: Photo Gallery */}
            {tabValue === 1 && (
              <Grid container spacing={4}>
                {staticCampaignImages.map((img, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={`static-photo-${idx}`}>
                    <Card className="media-card">
                      <CardMedia component="img" height="260" image={img.src} alt={img.title} className="media-img" />
                      <CardContent>
                        <Typography variant="subtitle1" className="media-card-title">{img.title}</Typography>
                        <Typography variant="caption" className="media-type-badge photo-badge">The Credible Alternative</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
                {imagePosts.map((post) => (
                  <Grid item xs={12} sm={6} md={4} key={post._id}>
                    <Card className="media-card">
                      <CardMedia component="img" height="260" image={post.imageUrl} alt={post.title} className="media-img" />
                      <CardContent>
                        <Typography variant="subtitle1" className="media-card-title">{post.title}</Typography>
                        <Typography variant="caption" className="media-type-badge photo-badge">Photo Update</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}

            {/* Tab 2: Video Highlights */}
            {tabValue === 2 && (
              <Grid container spacing={4}>
                {videoPosts.length === 0 ? (
                  <Grid item xs={12}>
                    <Typography variant="body1" align="center" style={{ padding: '40px', color: '#666' }}>
                       Check out our official YouTube Channel!     <p>https://www.youtube.com/@chidinmachukwumaofficial</p>
                    </Typography>
                  </Grid>
                ) : (
                  videoPosts.map((post) => (
                    <Grid item xs={12} sm={6} md={6} key={post._id}>
                      <Card className="media-card">
                        <iframe
                          width="100%"
                          height="320"
                          src={getYoutubeEmbedUrl(post.youtubeUrl)}
                          title={post.title}
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>
                        <CardContent>
                          <Typography variant="subtitle1" className="media-card-title">{post.title}</Typography>
                          <Typography variant="caption" className="media-type-badge video-badge">YouTube Coverage</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))
                )}
              </Grid>
            )}
          </>
        )}
      </Container>
    </Box>
  );
};

export default Media;