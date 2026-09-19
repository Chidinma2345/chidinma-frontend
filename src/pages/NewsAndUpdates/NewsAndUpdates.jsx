// import React, { useEffect, useState } from 'react';
// import {
//   Container,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
//   TextField,
//   InputAdornment
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import axios from 'axios';
// import Spinner from '../../components/Spinner';
// import './NewsAndUpdates.css';

// const NewsAndUpdates = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/posts');
//         setPosts(res.data);
//       } catch (err) {
//         console.error('Error fetching campaign news:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   const getYoutubeEmbedUrl = (url) => {
//     if (!url) return '';
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
//     const match = url.match(regExp);
//     return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : '';
//   };

//   const filteredPosts = posts.filter(
//     (post) =>
//       post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.content.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Box className="news-page-root">
//       {/* Header Banner */}
//       <Box className="news-banner">
//         <Container maxWidth="lg">
//           <Typography variant="h3" className="news-banner-title">
//             NEWS & CAMPAIGN UPDATES
//           </Typography>
//           <Typography variant="h6" className="news-banner-subtitle">
//             Stay updated with the latest press releases, grassroots events, and official announcements from Hon. Chidinma Nwamaka Chukwuma.
//           </Typography>
//         </Container>
//       </Box>

//       <Container maxWidth="lg" className="news-container">
//         {/* Search Bar Filter */}
//         <Box className="news-search-box">
//           <TextField
//             fullWidth
//             placeholder="Search news by topic, title, or keywords..."
//             variant="outlined"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon style={{ color: '#0d1b3e' }} />
//                 </InputAdornment>
//               )
//             }}
//           />
//         </Box>

//         {/* Dynamic News Feed Display */}
//         {loading ? (
//           <Spinner />
//         ) : filteredPosts.length === 0 ? (
//           <Box className="no-news-box">
//             <Typography variant="h6" color="textSecondary">
//               No news or updates match your search query.
//             </Typography>
//           </Box>
//         ) : (
//           <Grid container spacing={4}>
//             {filteredPosts.map((post) => (
//               <Grid item xs={12} md={6} key={post._id}>
//                 <Card className="full-news-card">
//                   {post.imageUrl && (
//                     <CardMedia
//                       component="img"
//                       height="300"
//                       image={post.imageUrl}
//                       alt={post.title}
//                       className="full-news-media"
//                     />
//                   )}
//                   {post.youtubeUrl && (
//                     <iframe
//                       width="100%"
//                       height="300"
//                       src={getYoutubeEmbedUrl(post.youtubeUrl)}
//                       title={post.title}
//                       frameBorder="0"
//                       allowFullScreen
//                       className="full-news-iframe"
//                     ></iframe>
//                   )}
//                   <CardContent className="full-news-content">
//                     <Box className="news-meta-date">
//                       <CalendarTodayIcon className="calendar-icon" />
//                       <Typography variant="caption" className="news-date-text">
//                         {new Date(post.createdAt).toLocaleDateString('en-US', {
//                           year: 'numeric',
//                           month: 'long',
//                           day: 'numeric'
//                         })}
//                       </Typography>
//                     </Box>
//                     <Typography variant="h5" className="full-news-title">
//                       {post.title}
//                     </Typography>
//                     <Typography variant="body1" className="full-news-body">
//                       {post.content}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Container>
//     </Box>
//   );
// };

// export default NewsAndUpdates;


import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Chip,
  CircularProgress,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupsIcon from "@mui/icons-material/Groups";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PeopleIcon from "@mui/icons-material/People";

import axios from "axios";

import "./NewsAndUpdates.css";

const communityUpdates = [
  {
    id: "community-support",
    title: "Supporting People in the Community",
    category: "Community Support",
    content:
      "Hon. Chidinma Nwamaka Chukwuma has continued to reach out to people in the community, offering support and assistance to individuals and families in need.",
    icon: <VolunteerActivismIcon />,
  },
  {
    id: "empowerment",
    title: "Empowerment & Opportunity",
    category: "Empowerment",
    content:
      "Through people-focused initiatives and direct community engagement, she has supported empowerment efforts aimed at helping people improve their opportunities and strengthen their livelihoods.",
    icon: <HandshakeIcon />,
  },
  {
    id: "women-outreach",
    title: "Women Community Outreach",
    category: "Women Outreach",
    content:
      "Women have also been brought together through community outreach activities designed to encourage connection, support, care and meaningful engagement.",
    icon: <GroupsIcon />,
  },
  {
    id: "food-care",
    title: "Food & Community Care",
    category: "Community Care",
    content:
      "As part of her community outreach, women have been gathered and provided with food and care, reflecting a focus on practical support and human dignity.",
    icon: <RestaurantIcon />,
  },
  {
    id: "acts-kindness",
    title: "Acts of Kindness",
    category: "People-Focused Service",
    content:
      "Her community engagement has included acts of kindness and personal support for people, with an emphasis on listening to community members and responding to needs where possible.",
    icon: <FavoriteIcon />,
  },
  {
    id: "people-engagement",
    title: "People-Focused Engagement",
    category: "Community Engagement",
    content:
      "These community activities reflect a people-focused approach built around direct engagement, compassion, empowerment and service to the people of Oru West.",
    icon: <PeopleIcon />,
  },
];

const NewsAndUpdates = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/posts"
        );

        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          setPosts([]);
        }

        setApiError(false);
      } catch (error) {
        console.error("Unable to load campaign posts:", error);
        setPosts([]);
        setApiError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  /*
   * If the backend has posts, display them.
   * If the backend is empty or unavailable, display
   * the community updates instead.
   */
  const displayPosts =
    posts.length > 0
      ? posts.map((post) => ({
          ...post,
          isCommunityFallback: false,
        }))
      : communityUpdates.map((update) => ({
          ...update,
          isCommunityFallback: true,
        }));

  const filteredPosts = displayPosts.filter((post) => {
    const title = post.title || "";
    const content = post.content || "";
    const category = post.category || "";

    const searchableText =
      `${title} ${content} ${category}`.toLowerCase();

    return searchableText.includes(searchTerm.toLowerCase());
  });

  const getYoutubeEmbedUrl = (url) => {
    if (!url) return null;

    try {
      const parsedUrl = new URL(url);

      if (parsedUrl.hostname.includes("youtube.com")) {
        if (parsedUrl.pathname === "/watch") {
          const videoId = parsedUrl.searchParams.get("v");

          return videoId
            ? `https://www.youtube.com/embed/${videoId}`
            : null;
        }

        if (parsedUrl.pathname.startsWith("/shorts/")) {
          const videoId = parsedUrl.pathname.split("/shorts/")[1];

          return videoId
            ? `https://www.youtube.com/embed/${videoId}`
            : null;
        }

        if (parsedUrl.pathname.startsWith("/embed/")) {
          return url;
        }
      }

      if (parsedUrl.hostname === "youtu.be") {
        const videoId = parsedUrl.pathname.substring(1);

        return videoId
          ? `https://www.youtube.com/embed/${videoId}`
          : null;
      }

      return null;
    } catch {
      return null;
    }
  };

  const formatDate = (date) => {
    if (!date) return null;

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return null;
    }

    return parsedDate.toLocaleDateString("en-NG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="news-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="news-hero">
        <Container maxWidth="lg">
          <div className="news-hero-content">

            <Typography
              component="h1"
              className="news-hero-title"
            >
              NEWS & CAMPAIGN UPDATES
            </Typography>

            <Typography className="news-hero-subtitle">
              Stay updated with community activities, people-focused
              engagement, official announcements and other updates
              from Hon. Chidinma Nwamaka Chukwuma.
            </Typography>

          </div>
        </Container>
      </section>

      {/* =========================
          CONTENT
      ========================= */}
      <Container
        maxWidth="lg"
        className="news-container"
      >

        {/* INTRO */}
        <Box className="news-introduction">

          <Typography
            component="h2"
            className="news-section-title"
          >
            Community Impact & Outreach
          </Typography>

          <Typography className="news-introduction-text">
            This section highlights community activities and
            people-focused engagement, including support,
            empowerment, women-focused outreach, food assistance
            and other acts of kindness.
          </Typography>

        </Box>

        {/* SEARCH */}
        <Box className="news-search-wrapper">
          <TextField
            fullWidth
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            placeholder="Search news and community updates..."
            variant="outlined"
            className="news-search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* BACKEND NOTICE */}
        {apiError && posts.length === 0 && (
          <Box className="community-notice">

            <Typography className="community-notice-title">
              Community Happenings
            </Typography>

            <Typography className="community-notice-text">
              Community activities and people-focused updates
              are being displayed below.
            </Typography>

          </Box>
        )}

        {/* LOADING */}
        {loading ? (
          <Box className="news-loading">
            <CircularProgress />
          </Box>
        ) : (
          <>
            {/* RESULTS HEADER */}
            <Box className="news-results-heading">

              <Typography className="news-results-title">
                {posts.length > 0
                  ? "Latest News & Updates"
                  : "Community Activities & Updates"}
              </Typography>

              <Typography className="news-results-count">
                {filteredPosts.length}{" "}
                {filteredPosts.length === 1
                  ? "update"
                  : "updates"}
              </Typography>

            </Box>

            {/* CARDS */}
            {filteredPosts.length > 0 ? (
              <Grid container spacing={3}>

                {filteredPosts.map((post, index) => {
                  const youtubeEmbed =
                    getYoutubeEmbedUrl(post.youtubeUrl);

                  const formattedDate =
                    formatDate(
                      post.date || post.createdAt
                    );

                  return (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      key={
                        post.id ||
                        post._id ||
                        index
                      }
                    >

                      <Card className="news-card">

                        {/* IMAGE */}
                        {post.imageUrl &&
                          !youtubeEmbed && (
                            <CardMedia
                              component="img"
                              image={post.imageUrl}
                              alt={
                                post.title ||
                                "Campaign update"
                              }
                              className="news-card-image"
                            />
                          )}

                        {/* YOUTUBE */}
                        {youtubeEmbed && (
                          <Box className="news-video-wrapper">
                            <iframe
                              src={youtubeEmbed}
                              title={
                                post.title ||
                                "Campaign video"
                              }
                              className="news-video"
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          </Box>
                        )}

                        {/* FALLBACK ICON */}
                        {!post.imageUrl &&
                          !youtubeEmbed &&
                          post.isCommunityFallback && (
                            <Box className="community-card-icon">
                              {post.icon}
                            </Box>
                          )}

                        {/* CONTENT */}
                        <CardContent className="news-card-content">

                          <Box className="news-card-meta">

                            {post.category && (
                              <Chip
                                label={post.category}
                                className="news-category"
                              />
                            )}

                            {formattedDate ? (
                              <Box className="news-date">

                                <CalendarTodayIcon />

                                <Typography component="span">
                                  {formattedDate}
                                </Typography>

                              </Box>
                            ) : (
                              post.isCommunityFallback && (
                                <Box className="news-date">

                                  <CalendarTodayIcon />

                                  <Typography component="span">
                                    Community Update
                                  </Typography>

                                </Box>
                              )
                            )}

                          </Box>

                          <Typography
                            component="h3"
                            className="news-card-title"
                          >
                            {post.title}
                          </Typography>

                          <Typography className="news-card-text">
                            {post.content}
                          </Typography>

                        </CardContent>

                      </Card>

                    </Grid>
                  );
                })}

              </Grid>
            ) : (
              <Box className="no-news">

                <SearchIcon className="no-news-icon" />

                <Typography
                  component="h3"
                  className="no-news-title"
                >
                  No updates found
                </Typography>

                <Typography className="no-news-text">
                  No news or community updates match your
                  search. Try another search term.
                </Typography>
{/* Online posts are not currently available, so community activities and people-focused updates are being displayed below. */}
              </Box>
            )}
          </>
        )}

      </Container>
    </div>
  );
};

export default NewsAndUpdates;