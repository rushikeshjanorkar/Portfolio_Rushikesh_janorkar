import React, { useState } from 'react';
import { Typography, Container, Grid, Box, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Project = () => {
  const [sectionIndex, setSectionIndex] = useState(0);

  const sections = [
    {
      title: "Website Development",
      subtitle: "Aerowing Design And Robotics Companys website",
      content: "The Aerowing Design And Robotics Company Website serves as a powerful digital platform for the company to showcase its expertise, portfolio, and achievements in the field of robotics and design. By leveraging advanced technologies and implementing a user-centric design approach, the website effectively engages visitors, enhances brand visibility, and reinforces the company's reputation as a leader in the industry.",
      url: "https://aerowing.in/"
    },
    {
      title: "Restaurant POS",
      subtitle: "UBS BILL POS",
      content: "Our restaurant POS system offers seamless order management with an intuitive interface and customizable menus, empowering staff to handle peak service efficiently. Tableside ordering and payments reduce wait times, enhancing customer satisfaction. Real-time inventory tracking minimizes waste, while seamless integration with other tools ensures smooth operations. Detailed reporting and analytics provide valuable insights for informed decision-making and continuous improvement.",
      url: "https://pos-version2.netlify.app/login"
    },
    {
      title: "Node js CURD",
      subtitle: "CURD Application",
      content: "Create: Add new data with a POST request. Server inserts it into the database."+
      'Read: Fetch data with a GET request. Server sends requested data back to the client.'+
      'Update: Modify existing data with PUT/PATCH request. Server updates the database accordingly.'+
      'Delete: Remove data with a DELETE request. Server deletes specified data from the database.'+
      "To implement these operations in Node.js, use Express.js for HTTP handling and libraries like Mongoose (MongoDB) or Sequelize (SQL) for database interaction.",
      url: ""
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
        MY PROJECT
      </Typography>

      <Grid container padding={5} >
        <Grid item xs={12} sm={12}>
          <Grid container alignItems="center" >
            <Grid item xs={0.5} sm={0.2} md={1}>
              <Button disabled={sectionIndex === 0} onClick={handlePrevious} style={{ color: "white" }}><ArrowBackIosIcon /></Button>
            </Grid>
            <Grid item xs={11} sm={11} md={10} >

              <Grid container>
                {[sectionIndex, sectionIndex + 1].map(index => (
                  <Grid item xs={5} md={6} sm={6} key={index}>
                    <Box ml={5} sx={{
                      border: "1px solid #09555c",
                      padding: "20px",
                      borderRadius: "5px",
                      width: { md: "20rem", sm: "10rem", xs: "9rem" },
                      height: { md: "25rem", sm: "22rem", xs: "22rem" },
                      boxShadow: "0px 0px 55px #09555c",
                    }}>
                      <Typography variant="h3" fontWeight="bold" color="#AFDDE5" sx={{ fontSize: { md: "2rem", sm: "1.2rem", xs: "1.2rem" } }} fontFamily={"Georgia, sans-serif"}>{sections[index].title}</Typography>
                      <Typography variant="subtitle1" sx={{ fontSize: { md: "1.3rem", sm: "0.7rem", xs: "0.7rem" } }} fontWeight="bold" fontFamily="monospace">{sections[index].subtitle}</Typography>
                      <Typography  color="white" sx={{ fontSize: { md: "0.8rem", sm: "0.5rem", xs: "0.5rem" } }} gutterBottom fontFamily="Courier New, monospace">{sections[index].content}</Typography>

                      <Typography mt={"15px"} sx={{ display: "flex", justifyContent: "center" }}> {/* Added styles */}
                        <Button
                          sx={{ borderRadius: "5px", color: "black", backgroundColor: "#AFDDE5" ,  }}
                          variant="contained"
                          onClick={() => { window.location.href = `${sections[index].url}`; }} // Replace "https://www.example.com" with the desired path
                        >
                          Redirect
                        </Button>
                      </Typography>
                    </Box>

                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={0.1} sm={0.5} md={1}>
              <Button disabled={sectionIndex === sections.length - 2} onClick={handleNext} style={{ color: "#AFDDE5" }}>
                <ArrowForwardIosIcon /></Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>


    </Container>
  );
};

export default Project;
