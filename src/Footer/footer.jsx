// src/Footer.js
import React from 'react';
import { Container, Box, Typography, Link, TextField, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Phone, Email } from '@mui/icons-material';


const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#3f51b5', color: '#d3d3d3', py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <Box sx={{ flex: 1, minWidth: 300, p: 2 }}>
            <Typography variant="h6" component="div" sx={{ color: '#e91e63' }}>
              MyWebsite
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              MyWebsite is a fictional website created for demonstration purposes. It showcases the structure and styling of a typical website footer in React.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone sx={{ mr: 1 }} />
                <Typography variant="body2">(123) 456-7890</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email sx={{ mr: 1 }} />
                <Typography variant="body2">info@mywebsite.com</Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              <Link href="#" color="inherit"><Facebook /></Link>
              <Link href="#" color="inherit"><Twitter /></Link>
              <Link href="#" color="inherit"><Instagram /></Link>
              <Link href="#" color="inherit"><LinkedIn /></Link>
            </Box>
          </Box>

          <Box sx={{ flex: 1, minWidth: 300, p: 2 }}>
            <Typography variant="h6" component="div">
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, mt: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit">Home</Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit">About</Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit">Services</Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="#" color="inherit">Contact</Link>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flex: 1, minWidth: 300, p: 2 }}>
            <Typography variant="h6" component="div">
              Contact Us
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Your email address..."
                variant="outlined"
                sx={{ mb: 2, bgcolor: '#2c2c2e', input: { color: '#d3d3d3' } }}
              />
              <TextField
                fullWidth
                label="Your message..."
                variant="outlined"
                multiline
                rows={4}
                sx={{ mb: 2, bgcolor: '#2c2c2e', textarea: { color: '#d3d3d3' } }}
              />
              <Button variant="contained" color="secondary" startIcon={<Email />}>
                Send
              </Button>
            </Box>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            &copy; mywebsite.com | Designed by MyWebsite
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
