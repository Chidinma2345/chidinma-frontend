import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  TextField,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import './NewsAndUpdates.css';

const NewsAndUpdates = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching campaign news:', err);
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

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box className="news-page-root">
      {/* Header Banner */}
      <Box className="news-banner">
        <Container maxWidth="lg">
          <Typography variant="h3" className="news-banner-title">
            NEWS & CAMPAIGN UPDATES
          </Typography>
          <Typography variant="h6" className="news-banner-subtitle">
            Stay updated with the latest press releases, grassroots events, and official announcements from Hon. Chidinma Nwamaka Chukwuma.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" className="news-container">
        {/* Search Bar Filter */}
        <Box className="news-search-box">
          <TextField
            fullWidth
            placeholder="Search news by topic, title, or keywords..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: '#0d1b3e' }} />
                </InputAdornment>
              )
            }}
          />
        </Box>

        {/* Dynamic News Feed Display */}
        {loading ? (
          <Spinner />
        ) : filteredPosts.length === 0 ? (
          <Box className="no-news-box">
            <Typography variant="h6" color="textSecondary">
              No news or updates match your search query.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {filteredPosts.map((post) => (
              <Grid item xs={12} md={6} key={post._id}>
                <Card className="full-news-card">
                  {post.imageUrl && (
                    <CardMedia
                      component="img"
                      height="300"
                      image={post.imageUrl}
                      alt={post.title}
                      className="full-news-media"
                    />
                  )}
                  {post.youtubeUrl && (
                    <iframe
                      width="100%"
                      height="300"
                      src={getYoutubeEmbedUrl(post.youtubeUrl)}
                      title={post.title}
                      frameBorder="0"
                      allowFullScreen
                      className="full-news-iframe"
                    ></iframe>
                  )}
                  <CardContent className="full-news-content">
                    <Box className="news-meta-date">
                      <CalendarTodayIcon className="calendar-icon" />
                      <Typography variant="caption" className="news-date-text">
                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </Typography>
                    </Box>
                    <Typography variant="h5" className="full-news-title">
                      {post.title}
                    </Typography>
                    <Typography variant="body1" className="full-news-body">
                      {post.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default NewsAndUpdates;