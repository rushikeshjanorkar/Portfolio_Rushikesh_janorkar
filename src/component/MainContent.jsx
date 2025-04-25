import React from 'react';
import { Container, Typography } from '@mui/material';

const MainContent = () => {
  return (
    <Container component="main" sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h4" component="div">
        Main Content
      </Typography>
    </Container>
  );
}

export default MainContent;
