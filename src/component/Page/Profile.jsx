
import {
    Typography,
    IconButton,
    Avatar,
    Container,
    Grid,
    Box,
    Rating,
    Button
} from "@mui/material";

import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const Profile = () => {

    const [showContent, setShowContent] = useState(false);
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);

    useEffect(() => {
        const delay = 500; // Adjust the delay between each Typography component
        const timeoutFirst = setTimeout(() => setShowFirst(true), delay);
        const timeoutSecond = setTimeout(() => setShowSecond(true), delay * 2);
        const timeoutThird = setTimeout(() => setShowThird(true), delay * 3);

        // Cleanup function to clear timeouts
        return () => {
            clearTimeout(timeoutFirst);
            clearTimeout(timeoutSecond);
            clearTimeout(timeoutThird);
        };
    }, []);

    useEffect(() => {
        setShowContent(true);
    }, []);

    const styles = {
        container: {
            opacity: showContent ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
        },
        container1: {
            opacity: 0,
            transition: 'opacity 0.5s ease-in-out',
        },
        container2: {
            opacity: showContent ? 1 : 0,
            transition: 'opacity 4.5s ease-in-out',
        },
    };

    const handleDownload = () => {
        // Replace 'resume.pdf' with the path to your resume file
        const resumeUrl = './Rushikesh-Harikisan-Janorkar.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'RushikeshJanorkar_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
        <Container>
            <Grid container mt={5} spacing={4} justifyContent="center" alignItems="center">
                <Grid item md={6} sm={12} xs={12}>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >

                        <Typography variant="h4" color="#0FA4AF" gutterBottom fontFamily={"serif"} sx={styles.container}>
                            Hi, I'm
                        </Typography>
                        <Typography variant="h3" color="#AFDDE5" gutterBottom fontFamily="Georgia, sans-serif" sx={{ ...styles.container, opacity: showFirst ? 1 : 0 }}>
                            Rushikesh H Janorkar
                        </Typography>
                        <Typography variant="h4" color="white" gutterBottom fontFamily="Courier New, monospace" sx={{ ...styles.container, opacity: showSecond ? 1 : 0 }}>
                            FullStack Developer
                        </Typography>
                        <Typography fontSize={15} color="white" gutterBottom fontFamily="Courier New, monospace" sx={{ ...styles.container, opacity: showThird ? 1 : 0 }}>
                            I'm a software developer passionate about creating user-friendly solutions for complex problems.
                            My portfolio features a variety of projects, from responsive web apps to efficient mobile solutions,
                            showcasing my diverse skills in turning ideas into high-quality software products.
                            Explore my work to see how I blend creativity, precision, and technical expertise to deliver impactful results.
                        </Typography>
                        <Typography sx={{ marginTop: "25px" }}>
                            <Button height="55px" sx={{ borderRadius: "5px", color: "black", backgroundColor: "white" }}
                                variant="contained" onClick={handleDownload}> Resume  </Button>
                            <GitHubIcon onClick={redirectToGit} mt={50} sx={{ borderRadius: "5px", fontSize: "40px", marginBottom: "-15px", marginLeft: "20px" }} />
                            <LinkedInIcon onClick={redirectToLink} mt={5} sx={{ borderRadius: "5px", fontSize: "40px", marginBottom: "-15px", marginLeft: "20px" }} />
                            <EmailIcon onClick={redirectToGmail} mt={5} sx={{ borderRadius: "5px", fontSize: "40px", marginBottom: "-15px", marginLeft: "20px" }} />
                        </Typography>
                    </motion.div>
                </Grid>
                <Grid item md={6} sm={12} xs={12} display="flex" justifyContent="center" alignItems="center">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <IconButton sx={{ p: 2 }} >
                            <Avatar
                                alt="Rushikesh"
                                src="/images.jpg"

                                sx={{ boxShadow: "0px 0px 55px #5ACBF0", width: { md: "18rem", sm: "10rem", xs: "8rem" }, height: { md: "18rem", sm: "10rem", xs: "8rem" } }}
                            />
                        </IconButton>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
