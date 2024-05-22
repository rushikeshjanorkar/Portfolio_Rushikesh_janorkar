import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 2, backgroundColor: '#3f51b5', color: 'white', textAlign: 'center' }}>
      <Typography variant="body1">
        Footer
      </Typography>
    </Box>
  );
}

export default Footer;
