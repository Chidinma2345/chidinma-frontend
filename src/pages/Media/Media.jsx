import React, { useEffect, useState } from 'react';

import {

  Container,

  Grid,

  Typography,

  Box,

  Card,

  CardMedia,

  CardContent,

  Tab,

  Tabs

} from '@mui/material';



import axios from 'axios';

import Spinner from '../../components/Spinner';



import './Media.css';



const Media = () => {

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [tabValue, setTabValue] = useState(0);



  // Featured campaign video from the official YouTube upload.

  const campaignVideoId = 'G4E1p_2poO0';

  const campaignVideoUrl =

    `https://www.youtube.com/embed/${campaignVideoId}`;



  useEffect(() => {

    const fetchPosts = async () => {

      try {

        const res = await axios.get('http://localhost:5000/api/posts');



        setPosts(Array.isArray(res.data) ? res.data : []);

      } catch (err) {

        console.error('Error fetching media posts:', err);

        setPosts([]);

      } finally {

        setLoading(false);

      }

    };



    fetchPosts();

  }, []);



  // Supports YouTube watch links, youtu.be links, Shorts, and embed links.

  const getYoutubeEmbedUrl = (url) => {

    if (!url) return '';



    try {

      const parsedUrl = new URL(url);

      const hostname = parsedUrl.hostname.replace(/^www\./, '');

      let videoId = '';



      if (hostname === 'youtu.be') {

        videoId = parsedUrl.pathname.split('/').filter(Boolean)[0] || '';

      } else if (

        hostname === 'youtube.com' ||

        hostname === 'm.youtube.com' ||

        hostname === 'youtube-nocookie.com'

      ) {

        if (parsedUrl.pathname === '/watch') {

          videoId = parsedUrl.searchParams.get('v') || '';

        } else {

          const parts = parsedUrl.pathname.split('/').filter(Boolean);



          if (

            ['embed', 'shorts', 'live', 'v'].includes(parts[0])

          ) {

            videoId = parts[1] || '';

          }

        }

      }



      return /^[a-zA-Z0-9_-]{11}$/.test(videoId)

        ? `https://www.youtube.com/embed/${videoId}`

        : '';

    } catch (error) {

      // Also accept a plain 11-character YouTube video ID.

      return /^[a-zA-Z0-9_-]{11}$/.test(url)

        ? `https://www.youtube.com/embed/${url}`

        : '';

    }

  };



  const handleTabChange = (event, newValue) => {

    setTabValue(newValue);

  };



  // Filter posts by media type.

  const imagePosts = posts.filter((post) => post.imageUrl);

  const videoPosts = posts.filter(

    (post) => post.youtubeUrl && getYoutubeEmbedUrl(post.youtubeUrl)

  );



  // Existing official campaign images.

  const staticCampaignImages = [

    {

      src: '/hon-chidinma1.jpeg',

      title: 'Hon. Chidinma Nwamaka Chukwuma Official Poster'

    },

    {

      src: '/hon-chidinma2.png',

      title: 'Together We Can Build Campaign Banner'

    },

    {

      src: '/adp-logo.png',

      title: 'Action Democratic Party (ADP) Symbol'

    },

    {

      src: '/adp-flag.jpeg',

      title: 'Action Democratic Party Official Flag'

    },

    {

      src: '/hon-chidinma-with-party-flag1.jpeg',

      title: 'Hon. Chidinma with the Party Flag'

    },

    {

      src: '/hon-chidinma-with-party-flag2.jpeg',

      title: 'Hon. Chidinma with the Party Flag'

    }

  ];



  // Shared featured campaign video card.

  const renderFeaturedCampaignVideo = (keyPrefix) => (

    <Grid item xs={12} sm={12} md={6} key={`${keyPrefix}-campaign-video`}>

      <Card className="media-card media-featured-video-card">

        <Box className="media-video-frame media-featured-video-frame">

          <iframe

            src={campaignVideoUrl}

            title="Hon. Chidinma Nwamaka Chukwuma Campaign Video"

            loading="lazy"

            frameBorder="0"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

            referrerPolicy="strict-origin-when-cross-origin"

            allowFullScreen

          />

        </Box>



        <CardContent>

          <Typography

            variant="subtitle1"

            className="media-card-title"

          >

            The People Have Decided

          </Typography>



          <Typography

            variant="caption"

            className="media-type-badge video-badge"

          >

            Featured Campaign Video

          </Typography>

        </CardContent>

      </Card>

    </Grid>

  );



  // Shared card for video posts retrieved from the API.

  const renderVideoPost = (post, keyPrefix = 'video') => {

    const embedUrl = getYoutubeEmbedUrl(post.youtubeUrl);



    if (!embedUrl) return null;



    return (

      <Grid

        item

        xs={12}

        sm={12}

        md={6}

        key={`${keyPrefix}-${post._id || post.title}`}

      >

        <Card className="media-card">

          <Box className="media-video-frame">

            <iframe

              src={embedUrl}

              title={post.title || 'Campaign video'}

              loading="lazy"

              frameBorder="0"

              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

              referrerPolicy="strict-origin-when-cross-origin"

              allowFullScreen

            />

          </Box>



          <CardContent>

            <Typography

              variant="subtitle1"

              className="media-card-title"

            >

              {post.title || 'Campaign Video'}

            </Typography>



            <Typography

              variant="caption"

              className="media-type-badge video-badge"

            >

              YouTube Coverage

            </Typography>



            {post.createdAt && (

              <Typography

                variant="body2"

                className="media-card-date"

              >

                {new Date(post.createdAt).toLocaleDateString()}

              </Typography>

            )}

          </CardContent>

        </Card>

      </Grid>

    );

  };



  // Shared card for photos retrieved from the API.

  const renderImagePost = (post, keyPrefix = 'photo') => (

    <Grid

      item

      xs={12}

      sm={6}

      md={4}

      key={`${keyPrefix}-${post._id || post.title}`}

    >

      <Card className="media-card">

        <CardMedia

          component="img"

          height="260"

          image={post.imageUrl}

          alt={post.title || 'Campaign photo'}

          className="media-img"

        />



        <CardContent>

          <Typography

            variant="subtitle1"

            className="media-card-title"

          >

            {post.title || 'Campaign Photo'}

          </Typography>



          <Typography

            variant="caption"

            className="media-type-badge photo-badge"

          >

            Photo Update

          </Typography>



          {post.createdAt && (

            <Typography

              variant="body2"

              className="media-card-date"

            >

              {new Date(post.createdAt).toLocaleDateString()}

            </Typography>

          )}

        </CardContent>

      </Card>

    </Grid>

  );



  return (

    <Box className="media-root">

      {/* Header Banner */}

      <Box className="media-header-banner">

        <Container maxWidth="lg">

          <Typography

            variant="h3"

            className="media-page-title"

          >

            Media Gallery & Campaign Coverage

          </Typography>



          <Typography

            variant="subtitle1"

            className="media-page-subtitle"

          >

            Explore photos, video highlights, and official event coverage

            from Hon. Chidinma's campaign trail across Oru West.

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

            {/* =====================================================

                TAB 0: ALL MEDIA

                Photos appear first, followed by videos.

            ====================================================== */}

            {tabValue === 0 && (

              <Grid container spacing={4}>

                {/* Existing official campaign posters and photos */}

                {staticCampaignImages.map((img, idx) => (

                  <Grid

                    item

                    xs={12}

                    sm={6}

                    md={4}

                    key={`static-all-${idx}`}

                  >

                    <Card className="media-card">

                      <CardMedia

                        component="img"

                        height="260"

                        image={img.src}

                        alt={img.title}

                        className="media-img"

                      />



                      <CardContent>

                        <Typography

                          variant="subtitle1"

                          className="media-card-title"

                        >

                          {img.title}

                        </Typography>



                        <Typography

                          variant="caption"

                          className="media-type-badge photo-badge"

                        >

                          The Credible Alternative

                        </Typography>

                      </CardContent>

                    </Card>

                  </Grid>

                ))}



                {/* API photos */}

                {imagePosts.map((post) =>

                  renderImagePost(post, 'all-photo')

                )}



                {/* API videos, displayed after the photos */}

                {videoPosts.map((post) =>

                  renderVideoPost(post, 'all-video')

                )}



                {/* Featured campaign video, displayed after the photos/videos */}

                {renderFeaturedCampaignVideo('all')}

              </Grid>

            )}



            {/* =====================================================

                TAB 1: PHOTO GALLERY

            ====================================================== */}

            {tabValue === 1 && (

              <Grid container spacing={4}>

                {/* Existing official campaign photos */}

                {staticCampaignImages.map((img, idx) => (

                  <Grid

                    item

                    xs={12}

                    sm={6}

                    md={4}

                    key={`static-photo-${idx}`}

                  >

                    <Card className="media-card">

                      <CardMedia

                        component="img"

                        height="260"

                        image={img.src}

                        alt={img.title}

                        className="media-img"

                      />



                      <CardContent>

                        <Typography

                          variant="subtitle1"

                          className="media-card-title"

                        >

                          {img.title}

                        </Typography>



                        <Typography

                          variant="caption"

                          className="media-type-badge photo-badge"

                        >

                          The Credible Alternative

                        </Typography>

                      </CardContent>

                    </Card>

                  </Grid>

                ))}



                {/* API photo updates */}

                {imagePosts.map((post) =>

                  renderImagePost(post, 'gallery-photo')

                )}



                {staticCampaignImages.length === 0 &&

                  imagePosts.length === 0 && (

                    <Grid item xs={12}>

                      <Typography

                        variant="body1"

                        align="center"

                        sx={{ py: 5, color: '#666' }}

                      >

                        No photos are available yet.

                      </Typography>

                    </Grid>

                  )}

              </Grid>

            )}



            {/* =====================================================

                TAB 2: VIDEO HIGHLIGHTS

                Featured campaign video plus existing API videos.

            ====================================================== */}

            {tabValue === 2 && (

              <Grid container spacing={4}>

                {/* Featured video is always shown in this tab */}

                {renderFeaturedCampaignVideo('highlights')}



                {/* Existing videos retrieved from the API */}

                {videoPosts.map((post) =>

                  renderVideoPost(post, 'highlights-video')

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