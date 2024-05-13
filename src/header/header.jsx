import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <AppBar position="static" style={{ backgroundColor: "#EEEEEE" }}>
        <Toolbar>
          {/* Menu Icon */}
          <IconButton
            size="large"
            color="black"
            onClick={handleDrawerOpen}
            sx={{ mr:1 }}

          >
            <MenuIcon />
          </IconButton>
          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontFamily: "normal" , fontSize:"20px" }}>
            <IconButton sx={{ p:2 }}>
              <Avatar alt="Rushikesh" src="/IMG_20220101_201115.jpg" style={{scale:"70%"}} />
            </IconButton>
            Rushikesh Harikisan janorkar
          </Typography>


          {/* User Profile Icon */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="account of current user"
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Drawer */}
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
        <List>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontFamily: "normal" , fontSize:"15px" }}>
            <IconButton sx={{ p:2 }}>
              <Avatar alt="Rushikesh" src="/IMG_20220101_201115.jpg" />
            </IconButton>
            Rushikesh H janorkar   .
          </Typography>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Option 2" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Option 3" />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default Header;
