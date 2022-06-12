import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import logo from '../assets/images/logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={logo} alt="logo" style={{ width: '40px', height: '40px', margin: '0px 2px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#fff' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;