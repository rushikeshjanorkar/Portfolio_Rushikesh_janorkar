import React, { useState } from "react";
import {
    Typography,
    Grid,
    Box,
    Rating
} from "@mui/material";
import { AiOutlineCode } from "react-icons/ai"; // Import the icon you want to use
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
const Summary = () => {
    const [showBackendSection, setShowBackendSection] = useState(false);
    const [showFrontendSection, setShowFrontendSection] = useState(true);
    const [showToolSection, setShowToolSection] = useState(false);
    const [showSkillSection, setShowSkillSection] = useState(false);

    const handleSectionClick = (section) => {
        // Reset visibility of all sections
        setShowBackendSection(false);
        setShowFrontendSection(false);
        setShowToolSection(false);
        setShowSkillSection(false);

        // Toggle visibility of clicked section
        switch (section) {
            case "frontend":
                setShowFrontendSection(true);
                break;
            case "backend":
                setShowBackendSection(true);
                break;
            case "tools":
                setShowToolSection(true);
                break;
            case "skills":
                setShowSkillSection(true);
                break;
            default:
                break;
        }
    };

    return (
        <Grid container direction="row" spacing={8} padding={"20px"}>
            {/* First section */}
            <Grid item xs={6}>
                <Typography fontSize="20px" color="white" ml={15}>
                    Technical Proficiency
                </Typography>
                <Grid container padding={5} spacing={5}>

                    <Grid item xs={6} onClick={() => handleSectionClick("frontend")} >
                    <Box
                            sx={{
                                border: "1px solid #d9d9d9",
                                padding: "10px",
                                borderRadius: "5px",
                                transition: "background-color 0.3s",
                                '&:hover': {
                                    backgroundColor: "#f0f0f0",
                                    cursor: "pointer"
                                }
                            }}
                        >
                            {/* <Box sx={{
                                position: "absolute",
                                top: 100,
                                left: 10,
                                transform: "translate(-50%, -50%)"
                            }}>
                                <CodeIcon size={80} />
                            </Box> */}
                            <Typography >
                                Frontend
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} onClick={() => handleSectionClick("backend")}>
                    <Box
                            sx={{
                                border: "1px solid #d9d9d9",
                                padding: "10px",
                                borderRadius: "5px",
                                transition: "background-color 0.3s",
                                '&:hover': {
                                    backgroundColor: "#f0f0f0",
                                    cursor: "pointer"
                                }
                            }}
                        >
                            {/* <Box sx={{
                                position: "absolute",
                                top: 0,
                                left: 5,
                                transform: "translate(-50%, -50%)",

                            }}>
                                <TerminalIcon size={40} />
                            </Box> */}
                            <Typography>
                                Backend
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} onClick={() => handleSectionClick("tools")}>
                         <Box
                            sx={{
                                border: "1px solid #d9d9d9",
                                padding: "10px",
                                borderRadius: "5px",
                                transition: "background-color 0.3s",
                                '&:hover': {
                                    backgroundColor: "#f0f0f0",
                                    cursor: "pointer"
                                }
                            }}
                        >
                            <Typography>
                                Tools
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} onClick={() => handleSectionClick("skills")}>
                        <Box
                            sx={{
                                border: "1px solid #d9d9d9",
                                padding: "10px",
                                borderRadius: "5px",
                                transition: "background-color 0.3s",
                                '&:hover': {
                                    backgroundColor: "#f0f0f0",
                                    cursor: "pointer"
                                }
                            }}
                        >
                            <Typography>
                                Soft Skill
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            {/* Second section */}
            {showFrontendSection && (
                <Grid item xs={6} >

<Box mt={5} ml={2} mr={2} sx={{
    border: "1px solid black",
    padding: "20px", // Optional: Add padding to make the text look nicer within the border
    borderRadius: "5px", // Optional: Add border radius for rounded corners
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" // Add a box shadow with appropriate values
}}>
                        <Typography
                            ml={2}
                            fontSize="20px"
                            color="gray"
                            sx={{ textDecoration: "underline" }}
                        >
                            Frontend
                        </Typography>

                        <Typography component="legend">html</Typography>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography component="legend">css</Typography>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography component="legend">react</Typography>
                        <Rating name="disabled" value={2} disabled />
                    </Box>
                </Grid>
            )}
            {showBackendSection && (
                <Grid item xs={6}>

                    <Box ml={2} mr={2} sx={{
                        border: "1px solid #d9d9d9",
                        padding: "20px", // Optional: Add padding to make the text look nicer within the border
                        borderRadius: "5px", // Optional: Add border radius for rounded corners
                    }}>
                        <Typography ml={2} fontSize="20px" color="gray"> Backend</Typography>
                        <Typography component="legend">java</Typography>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography component="legend">javascript</Typography>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography component="legend">python</Typography>
                        <Rating name="disabled" value={2} disabled />
                    </Box>
                </Grid>
            )}
            {showToolSection && (
                <Grid item xs={6}>

                    <Box ml={2} mr={2} sx={{
                        border: "1px solid #d9d9d9",
                        padding: "20px", // Optional: Add padding to make the text look nicer within the border
                        borderRadius: "5px", // Optional: Add border radius for rounded corners
                    }}>
                        <Typography ml={2} fontSize="20px" color="gray"> Tool</Typography>
                        <Typography component="legend">git</Typography>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography component="legend">jira </Typography>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography component="legend">Disabled</Typography>
                        <Rating name="disabled" value={2} disabled />
                    </Box>
                </Grid>
            )}
            {showSkillSection && (
                <Grid item xs={6}>

                    <Box ml={2} mr={2} sx={{
                        border: "1px solid #d9d9d9",
                        padding: "20px", // Optional: Add padding to make the text look nicer within the border
                        borderRadius: "5px", // Optional: Add border radius for rounded corners
                    }}>
                        <Typography ml={2} fontSize="20px" color="gray"> Skill</Typography>
                        <Typography component="legend">Controlled</Typography>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography component="legend">Read only</Typography>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography component="legend">Disabled</Typography>
                        <Rating name="disabled" value={2} disabled />
                        <Typography component="legend">No rating given</Typography>
                        <Rating name="no-value" value={3} />
                    </Box>
                </Grid>
            )}
        </Grid>
    );
};

export default Summary;
