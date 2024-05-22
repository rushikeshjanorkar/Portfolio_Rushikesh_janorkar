import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar style={{flexDirection:"row-reverse"}}>
        <Typography variant="h6" component="div">
          <Link href="#" underline="none" color="inherit">Home</Link>
        </Typography>
        <Typography variant="h6" component="div" >
          <Link href="#" underline="none" color="inherit">Contact</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;