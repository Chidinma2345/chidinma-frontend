import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Alert
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      fetchPosts();
    }
  }, [token, navigate]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg({ type: '', text: '' });

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('youtubeUrl', youtubeUrl);
    if (image) formData.append('image', image);

    try {
      await axios.post('http://localhost:5000/api/posts', formData, {
        headers: {
          'x-auth-token': token,
          'Content-Type': 'multipart/form-data'
        }
      });
      setStatusMsg({ type: 'success', text: 'Campaign update published successfully!' });
      setTitle('');
      setContent('');
      setYoutubeUrl('');
      setImage(null);
      fetchPosts();
    } catch (err) {
      setStatusMsg({ type: 'error', text: 'Publishing failed. Check authorization or server status.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to remove this post?')) {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`, {
          headers: { 'x-auth-token': token }
        });
        setStatusMsg({ type: 'success', text: 'Post deleted successfully.' });
        fetchPosts();
      } catch (err) {
        setStatusMsg({ type: 'error', text: 'Failed to delete post.' });
      }
    }
  };

  return (
    <Container maxWidth="md" className="admin-page-container">
      {/* Top Header Bar */}
      <Box className="admin-header">
        <Typography variant="h4" className="admin-page-title">
          Developer Content Portal
        </Typography>
        <Button
          variant="outlined"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>

      {statusMsg.text && (
        <Alert severity={statusMsg.type} style={{ marginBottom: '20px' }}>
          {statusMsg.text}
        </Alert>
      )}

      {/* Post Creation Form */}
      <Paper className="admin-form-paper">
        <Typography variant="h6" className="admin-section-heading">
          Publish New Campaign News or Event
        </Typography>
        <form onSubmit={handleCreatePost}>
          <TextField
            fullWidth
            label="Post Title"
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Detailed Information / Event Content"
            margin="normal"
            multiline
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="YouTube Video Link (Optional)"
            placeholder="e.g., https://www.youtube.com/watch?v=..."
            margin="normal"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
          />

          <Box className="image-upload-wrapper">
            <Button
              variant="contained"
              component="label"
              startIcon={<CloudUploadIcon />}
              className="upload-btn"
            >
              Select Image File
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Button>
            {image && (
              <Typography variant="body2" className="file-name-display">
                Selected: {image.name}
              </Typography>
            )}
          </Box>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            className="publish-btn"
          >
            {isSubmitting ? 'Publishing...' : 'Publish Update to Website'}
          </Button>
        </form>
      </Paper>

      {/* Existing Posts Management */}
      <Paper className="admin-list-paper">
        <Typography variant="h6" className="admin-section-heading">
          Manage Active Posts ({posts.length})
        </Typography>
        <Divider style={{ margin: '15px 0' }} />
        {posts.length === 0 ? (
          <Typography variant="body2" color="textSecondary">
            No published posts found.
          </Typography>
        ) : (
          <List>
            {posts.map((post) => (
              <React.Fragment key={post._id}>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" color="error" onClick={() => handleDelete(post._id)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={post.title}
                    secondary={`Published on: ${new Date(post.createdAt).toLocaleDateString()}`}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
};

export default AdminPage;