import React, { useState } from 'react';
import { Typography, Container, Grid, Box, Button, colors } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Education = () => {
  const [sectionIndex, setSectionIndex] = useState(0);

  const sections = [
    {
      title: "Experience",
      subtitle: "April(2023)-Present",
      content: "I am currently working as a Software Developer Engineer at Springworks (previously Springrole and Springworks is a HR technology startup that is building tools and products to simplify recruiting and help organizations engage and retain their employees) and boosting my professional skills."
    },
    {
      title: "Undergraduation at Pune University",
      subtitle: "2019-2022",
      content: "I completed my undergraduation in Bachelor Of Engineering (Mechanical Engineering) from Savitribai Phule Pune University with overall  8.96 CGPA."
    },
    {
      title: " Diploma In Engineering",
      subtitle: "2014-2016",
      content: "I have completed my  Diploma In Engineering from Siddhant College Of Engineering with 66.59%."
    },
    {
      title: "Higher Education",
      subtitle: "2014-2016",
      content: "I have completed my higher education from HKIS with major subjects as Physics, Chemistry & Maths with 85% merit in CBSE board."
    },
    {
      title: "Internship",
      content: "Completed one month Internship in React Js with Internity Foundation"
    }
  ];

  const handleNext = () => {
    if (sectionIndex < sections.length - 2) {
      setSectionIndex(sectionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (sectionIndex > 0) {
      setSectionIndex(sectionIndex - 1);
    }
  };

  return (
    <Container>
      <Typography fontFamily="Courier New, monospace" fontSize="30px" color="#AFDDE5" ml={0} >
        MY JOURNEY
      </Typography>

      <Grid container padding={5}>
        <Grid item xs={12} md={12} sm={12}>
          <Grid container alignItems="center">
            <Grid item xs={0.1} md={1} sm={0.1}>
              <Button disabled={sectionIndex === 0} onClick={handlePrevious} style={{ color: "white" }}><ArrowBackIosIcon /></Button>
            </Grid>
            <Grid item xs={11.5} md={10} sm={11} >

              <Grid container>
                {[sectionIndex, sectionIndex + 1].map(index => (
                  <Grid item xs={6} md={6} sm={6}key={index}>
                    <Box ml={5} sx={{
                      border: "1px solid #09555c",
                      padding: "20px",
                      borderRadius: "5px",
                      width: { md: "20rem", sm: "10rem", xs: "5rem" },
                      height: { md: "20rem", sm: "15rem", xs: "15rem" },
                      boxShadow: "0px 0px 55px #09555c",
                    }}>
                      <Typography variant="h4" fontWeight="bold" color="#AFDDE5" sx={{  fontSize: { md: "2rem", sm: "1rem", xs: "0.7rem" }}} fontFamily={"Georgia, sans-serif"}>{sections[index].title}</Typography>
                      <Typography variant="subtitle1" sx={{fontSize: { md: "1.2rem", sm: "1rem", xs: "0.5rem" }}} fontFamily="Courier New, monospace">{sections[index].subtitle}</Typography>
                      <Typography fontSize={15} color="white" sx={{fontSize: { md: "0.8rem", sm: "0.5rem", xs: "0.4rem" }}} gutterBottom fontFamily="Courier New, monospace">{sections[index].content}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={0.1} md={1} sm={0.3}>
              <Button disabled={sectionIndex === sections.length - 2} onClick={handleNext} style={{ color: "#AFDDE5" }}>
                <ArrowForwardIosIcon /></Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>


    </Container>
  );
};

export default Education;
