import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, Paper, Alert, InputAdornment, IconButton } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/admin');
    } catch (err) {
      setError(err.response?.data?.msg || 'Authentication failed. Unauthorized email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="login-page-wrapper">
      <Container maxWidth="xs">
        <Paper elevation={4} className="login-paper-card">
          <Box className="login-header-box">
            <Box className="login-icon-avatar">
              <LockOutlinedIcon className="lock-icon" />
            </Box>
            <Typography variant="h5" className="login-title">
              Developer Portal
            </Typography>
            <Typography variant="caption" className="login-subtitle">
              Authorized access to manage campaign content
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" className="login-error-alert">
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <TextField
              fullWidth
              label="Developer Email"
              type="email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon style={{ color: '#0d1b3e' }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Access Password"
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={loading}
              className="login-submit-btn"
            >
              {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;