import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
