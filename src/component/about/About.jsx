import React from 'react';
import { Typography, Link } from '@mui/material';

const About = () => {
  return (
    <div id='about'>
      <Typography variant="h4" sx={{ mb: 2 }} color="gray">
        ABOUT ME
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }} color="gray">
        Who Am I?
      </Typography>
      <div>
        <Typography variant="body1" color="gray">
          Hi! My name is <b>SACHIN MITTAL</b>. I am a passionate developer having experience in{' '}
          <b>Frontend</b> & <b>Mobile App </b> development complemented by backend expertise and
          I'm currently working at{' '}
          <b>
            <Link href='https://www.springworks.in/' target='_blank'>
              Springworks
            </Link>
          </b>{' '}
          as a <b>Software Developer Engineer.</b> I am much interested in developing new things
          which excite me a lot. :)
        </Typography>
        <Typography variant="body1" color="gray">
          I love exploring new technologies and being a practitioner, I like to stay on top of
          latest trends. I try to leave every line of code I write more readable, accessible, and
          modular. My problem-solving mindset and active GitHub profile showcase my commitment to
          innovative and collaborative coding.
        </Typography>
      </div>
    </div>
  );
};

export default About;
