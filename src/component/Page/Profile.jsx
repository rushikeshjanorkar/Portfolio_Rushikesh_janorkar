import React from "react";
import {
    Typography,
    IconButton,
    Avatar,
    Container,
    Grid,
    Box,
    Rating,
    Paper
} from "@mui/material";
import { motion } from "framer-motion";

const Profile = () => {
    return (
        <Container>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid item md={6} sm={12} xs={12}>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                       
                            <Typography variant="h4" color="primary" gutterBottom>
                                RUSHIKESH HARIKISAN JANORKAR
                            </Typography>
                            <Typography variant="h6" color="white" gutterBottom>
                                FullStack Developer
                            </Typography>
                            <Typography variant="body1" color="white" gutterBottom>
                                <strong>Location:</strong> Pune, India
                            </Typography>
                            <Typography variant="body1" color="white" gutterBottom>
                                <strong>Email:</strong> rushikeshjanorkar867@gmail.com
                            </Typography>
                            <Typography variant="body1" color="white" gutterBottom>
                                <strong>Phone:</strong> +91-8551867867
                            </Typography>
                        
                      
                    </motion.div>
                </Grid>
                <Grid item md={6} sm={12} xs={12} display="flex" justifyContent="center" alignItems="center">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <IconButton sx={{ p: 2 }}>
                            <Avatar
                                alt="Rushikesh"
                                src="/images.jpg"
                                sx={{ width: { md: "12rem", sm: "10rem", xs: "8rem" }, height: { md: "12rem", sm: "10rem", xs: "8rem" } }}
                            />
                        </IconButton>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
