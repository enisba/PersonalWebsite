import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import PhoneIcon from '@mui/icons-material/Phone';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Enes Ismet Bal 
        </Typography>
        
        <Button color="inherit" component={Link} to="/" startIcon={<HomeIcon />}>
          Home
        </Button>
        
        <Button color="inherit" component={Link} to="/about" startIcon={<InfoIcon/>}>
          About
        </Button>
        
        <Button color="inherit" component={Link} to="/CV" startIcon={<AutoAwesomeMotionIcon/>}>
          CV and Projects
        </Button>
        
        <Button color="inherit" component={Link} to="/contact" startIcon={<PhoneIcon/>}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
