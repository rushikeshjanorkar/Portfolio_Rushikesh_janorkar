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
      title: "Undergraduation at SLIET",
      subtitle: "2017-2021",
      content: "I completed my undergraduation in CSE (Computer Science and Engineering) from SLIET with overall 82.71%."
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
      <Typography variant="h6" align="left">
        MY JOURNEY
      </Typography>

      <Grid container padding={5}>
        <Grid item xs={12}>
          <Grid container alignItems="center">
            <Grid item xs={2} >
              <Button disabled={sectionIndex === 0} onClick={handlePrevious} style={{ color: "white" }}><ArrowBackIosIcon /></Button>
            </Grid>
            <Grid item xs={8} >

              <Grid container ml={-5}>
                {[sectionIndex, sectionIndex + 1].map(index => (
                  <Grid item xs={6} key={index}>
                    <Box  sx={{
                      border: "1px solid #d9d9d9",
                      padding: "20px",
                      borderRadius: "5px",
                      width: "300px",
                      height: "350px"
                    }}>
                      <Typography variant="h5">{sections[index].title}</Typography>
                      <Typography variant="subtitle1">{sections[index].subtitle}</Typography>
                      <Typography variant="body1">{sections[index].content}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Button disabled={sectionIndex === sections.length - 2} onClick={handleNext} style={{ color: "white" }}><ArrowForwardIosIcon /></Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>


    </Container>
  );
};

export default Education;
