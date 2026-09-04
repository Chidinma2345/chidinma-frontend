import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import './Spinner.css';

const Spinner = ({ message = "Loading campaign updates..." }) => {
  return (
    <Box className="spinner-wrapper">
      <CircularProgress className="spinner-loader" size={50} thickness={4.5} />
      {message && (
        <Typography variant="body2" className="spinner-text">
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Spinner;