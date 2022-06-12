import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FBB401" fontWeight="600" fontSize="26px">FitFreak24</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Work, Sweat, Rest <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Some of the most effective exercises personalized just for you <br />to take your fitness to the next level
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FBB401', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FBB401" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercises
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;