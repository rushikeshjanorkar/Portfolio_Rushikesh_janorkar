import React from 'react';
import { Box, Typography, List, ListItem, Link, TextField, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {

  const redirectToGmail = () => {
    window.location.href = 'mailto:rushikeshjanorkar867@gmail.com';
};

const redirectToLink = () => {
    window.location.href = 'https://www.linkedin.com/in/rushikeshjanorkar';
};

const redirectToGit = () => {
    window.location.href = 'https://github.com/rushikeshjanorkar';
};

  return (
    <Box component="footer" sx={{ background: 'linear-gradient( to right, #12063b   , #09555c)' }}>
      {/* <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Box width='550px' sx={{ flex: 1, ml: 2 }}>
          <Typography variant="h6" color="primary" fontFamily="Courier New, monospace" fontSize="30px" sx={{ mb: 2 }}>Contact Us</Typography>
          <form>
            <TextField
              variant="filled"
              label="Your Email"
              type="email"
              name="email"
              sx={{ mb: 2, bgcolor: '#12063b', borderRadius: 1 }}
            />
            <TextField
              variant="filled"
              label="Your Message"
              name="message"
              multiline
              rows={4}
              sx={{ mb: 2, bgcolor: '#12063b', borderRadius: 1 }}
            />
            <Button type="submit" variant="contained" sx={{ bgcolor: '#30BE96', '&:hover': { bgcolor: '#259d78' } }}>Send</Button>
          </form>
        </Box>
      </Box> */}


      {/* Footer Bottom Section */}
      <Box sx={{ textAlign: 'center', pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.3)', color: "white" }}>
      <Typography sx={{ marginTop: "25px" }}>
                          
                            <GitHubIcon onClick={redirectToGit} mt={50} sx={{ borderRadius: "5px", fontSize: "40px",  marginLeft: "5px"}} />
                            <LinkedInIcon onClick={redirectToLink} mt={5} sx={{borderRadius: "5px", fontSize: "40px",  marginLeft: "5px"}} />
                            <EmailIcon onClick={redirectToGmail} mt={5} sx={{borderRadius: "5px", fontSize: "40px",  marginLeft: "5px" }} />
                        </Typography>
        <Typography variant="body2">&copy; {new Date().getFullYear()} . All rights reserved.</Typography>
        <Typography variant="body2">Designed with by Rushikesh H Janorkar</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
