import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import logo from '../assets/images/logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#727b83">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={logo} alt="logo" style={{ width: '60px', height: '60px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px" color="white">FitFreak24 by KiingJayNiic</Typography>
  </Box>
);

export default Footer;