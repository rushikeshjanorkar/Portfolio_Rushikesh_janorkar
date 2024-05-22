import React from 'react';
import { Box, Typography, List, ListItem, Link, TextField, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';


const Footer = () => {
  return (
    <Box component="footer" 
    sx={{ background: 'linear-gradient( 85deg, #2F80ED   , #B2FFDA)' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        {/* Quick Links Section */}
        <Box sx={{ flex: 1, mr: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Quick Links</Typography>
          <List>
            <ListItem>
              <Link href="https://gradienthunt.com/" color="inherit" underline="hover"><InstagramIcon/>Instagram</Link>
            </ListItem>
            <ListItem>
              <Link href="/about" color="inherit" underline="hover"><FacebookIcon/>FACEBOOK</Link>
            </ListItem>
            <ListItem>
              <Link href="/contact" color="inherit" underline="hover"><GitHubIcon/>GIT</Link>
            </ListItem>
            <ListItem>
              <Link href="/login" color="inherit" underline="hover"><LanguageIcon/>WEBSITE</Link>
            </ListItem>
          </List>
        </Box>
        
        {/* Contact Form Section */}
        <Box sx={{ flex: 1, ml: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Contact Us</Typography>
          <form>
            <TextField
              fullWidth
              variant="filled"
              label="Your Email"
              type="email"
              name="email"
              sx={{ mb: 2, bgcolor: 'white', borderRadius: 1 }}
            />
            <TextField
              fullWidth
              variant="filled"
              label="Your Message"
              name="message"
              multiline
              rows={4}
              sx={{ mb: 2, bgcolor: 'white', borderRadius: 1 }}
            />
            <Button type="submit" variant="contained" sx={{ bgcolor: '#30BE96', '&:hover': { bgcolor: '#259d78' } }}>Send</Button>
          </form>
        </Box>
      </Box>
      
      {/* Footer Bottom Section */}
      <Box sx={{ textAlign: 'center', pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.3)' }}>
        <Typography variant="body2">&copy; {new Date().getFullYear()} Website Name. All rights reserved.</Typography>
        <Typography variant="body2">Designed with ❤️ by Rushikesh H Janorkar</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
