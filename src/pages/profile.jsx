import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Profile = () => {
  return (
    <Container 
      component="main" 
      sx={{ flex: 1, backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '20px' }}
    >
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="h5" component="div">
            Main Content
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" component="div" sx={{ marginTop: '20px' }}>
            Profile
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" component="div" sx={{ marginTop: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" component="div" sx={{ marginTop: '20px' }}>
            Experience
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" component="div" sx={{ marginTop: '10px' }}>
            <ul style={{ padding: 0, listStyle: 'none' }}>
              <li>
                <Typography variant="body1" component="div">
                  <strong>Company Name 1</strong>
                </Typography>
                <Typography variant="body1" component="div" sx={{ marginTop: '5px' }}>
                  Position 1
                </Typography>
                <Typography variant="body1" component="div" sx={{ marginTop: '5px' }}>
                  Dates
                </Typography>
                <Typography variant="body1" component="div" sx={{ marginTop: '5px' }}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </Typography>
              </li>
              <li style={{ marginTop: '20px' }}>
                <Typography variant="body1" component="div">
                  <strong>Company Name 2</strong>
                </Typography>
                <Typography variant="body1" component="div" sx={{ marginTop: '5px' }}>
                  Position 2
                </Typography>
                <Typography variant="body1" component="div" sx={{ marginTop: '5px' }}>
                  Dates
                </Typography>
                <Typography variant="body1" component="div" sx={{ marginTop: '5px' }}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </Typography>
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" component="div" sx={{ marginTop: '20px' }}>
            Skills
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" component="div" sx={{ marginTop: '10px' }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
