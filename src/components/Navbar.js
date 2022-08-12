import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import logo from '../assets/images/logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '12px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="0px">
    <Link to="/">
      <img src={logo} alt="logo" style={{ width: '65px', height: '42px', margin: '0px 10px' }} />
    </Link>
    <Stack
      direction="row"
      gap="30px"
      fontFamily="Alegreya"
      fontSize="32px"
      fontWeight="bold"
      alignItems="center"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#310066' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#310066' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;