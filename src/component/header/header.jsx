import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Box, Typography, Link } from "@mui/material";
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
      <AppBar position="static" sx={{ background: 'linear-gradient( 15deg, #2F80ED   , #B2FFDA)' }}>
        <Toolbar>
          {/* Menu Icon */}
          <IconButton
            size="large"
            color="inherit"
            onClick={handleDrawerOpen}
            sx={{ mr: 1 }}
          >
           <Avatar alt="Rushikesh" src="/images.jpg" style={{ scale: '70%' }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', fontFamily: 'normal', fontSize: '20px' }}>
            Rushikesh Harikisan Janorkar
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <Link href="/" color="inherit" underline="hover" sx={{ mx: 1 }}>
              <Typography variant="body1" sx={{ cursor: "pointer" }}>
                HOME
              </Typography>
            </Link>
            <Link href="/profile" color="inherit" underline="hover" sx={{ mx: 1 }}>
              <Typography variant="body1" sx={{ cursor: "pointer" }}>
                PROFILE
              </Typography>
            </Link>
            <Link href="/experience" color="inherit" underline="hover" sx={{ mx: 1 }}>
              <Typography variant="body1" sx={{ cursor: "pointer" }}>
                EXPERIENCE
              </Typography>
            </Link>
          </Box>
       
         
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
      <List sx={{ width: "auto", height:"750px" , backgroundColor: 'green' }}>
        <Typography variant="h6" component="div" sx={{ color: 'black', fontFamily: 'normal', fontSize: '15px', display: 'flex', alignItems: 'center', padding: '16px' }}>
          <IconButton sx={{ p: 1 }}>
            <Avatar alt="Rushikesh" src="/images.jpg" />
          </IconButton>
          Rushikesh H Janorkar
        </Typography>
        <Divider />
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
      </List>
    </Drawer>
    </React.Fragment>
  );
}

export default Header;
