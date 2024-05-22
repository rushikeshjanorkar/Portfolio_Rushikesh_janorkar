import React from "react";
import {Grid} from "@mui/material";
import Summary from "./Summary";
import Profile from "./Profile";
import Education from "./../Education/Education";
import { ScrollAnimation } from "react-animate-on-scroll";

const Main = () => {
    return (
        <>
            <Grid
                container
                spacing={2}
                alignItems="center"
                sx={{
                    color: "white",
                    fontFamily: "normal",
                    fontSize: "20px",
                }}
            >
                <Grid container>
                    <Grid item sm={12} sx={{ background: 'linear-gradient( to right, #12063b   , #09555c)' }}>
                        <Profile />
                        <Summary />
                        <Education />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Main;
