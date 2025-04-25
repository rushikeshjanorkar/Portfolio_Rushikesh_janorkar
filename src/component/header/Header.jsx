import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
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
import { color } from 'framer-motion';

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
      <AppBar position="static" sx={{ background: 'linear-gradient( to right, #12063b   , #09555c)' }}>
        <Toolbar>
          {/* Menu Icon */}
          <IconButton
            size="large"
            color="inherit"
           // onClick={handleDrawerOpen}
            sx={{ mr: 1 }}
          >
           <Avatar alt="Rushikesh" src="/images.jpg" style={{ scale: '70%' }} />
          </IconButton>
          <Typography variant="h6" color="#AFDDE5" sx={{ flexGrow: 1,  fontFamily: 'normal', fontSize: { md: "1.5rem", sm: "0.5rem", xs: "0.6rem" } }}>
            Rushikesh H Janorkar
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 , fontSize: { md: "1rem", sm: "0.5rem", xs: "0.6rem" }}}>
            <Link href="/" color="#AFDDE5" underline="hover" sx={{ mx: 1 }}>
                HOME
              
            </Link>
            <Link href="/profile" color="#AFDDE5" underline="hover" sx={{ mx: 1 }}>
          
                PROFILE
             
            </Link>
            <Link href="/experience" color="#AFDDE5" underline="hover" sx={{ mx: 1 }}>
              
                EXPERIENCE
              
            </Link>
          </Box>
       
         
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
      <List sx={{ width: "auto", height:"750px" , background: 'linear-gradient( to right, #12063b   , #09555c)' }}>
        <Typography variant="h6" component="div" sx={{ color: 'white', fontFamily:"Courier New, monospace", fontSize: '15px', display: 'flex', alignItems: 'center', padding: '16px' }}>
          <IconButton sx={{ p: 1 }}>
            <Avatar alt="Rushikesh" src="/images.jpg" />
          </IconButton>
          Rushikesh H Janorkar
        </Typography>
        <Divider />
        <List sx={{color: "white" }}>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color: "white" }} >
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
