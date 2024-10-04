import React from 'react';
import { Typography, Box, Avatar, IconButton, Divider, Button } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import profileImage from '../assets/profilePhoto.png';
import leetcodeLogo from '../assets/leetcode.png';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import PhoneIcon from '@mui/icons-material/Phone';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'normal',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #004d40 0%, #00796b 50%)',
        color: '#fff',
        textAlign: 'center',
        padding: 3,
      }}
    >
      <Avatar
        alt="Profile Picture"
        src={profileImage}
        sx={{
          width: 250,
          height: 250,
          border: '5px solid #fff',
          boxShadow: '0px 0px 15px 5px rgba(0, 0, 0, 0.4)',
          marginBottom: 4,
        }}
      />

      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Hi, I'm Enes Ismet Bal
      </Typography>
      
      <Divider sx={{ width: '100%', margin: '20px 0', borderColor: 'rgba(255, 255, 255, 0.3)' }} />

      <Typography variant="h6" component="p" sx={{ fontStyle: 'oblique 80deg', fontSize: '1.4rem' }}>
        Computer Science Student at Hacettepe University
      </Typography>

      <Divider sx={{ width: '100%', margin: '20px 0', borderColor: 'rgba(255, 255, 255, 0.3)' }} />

      {/* Navbar-like Section */}
      <Typography variant="body1" component="p" sx={{ fontStyle: 'oblique 80deg', fontSize: '1.8rem', marginBottom: 1 }}>
        If you want to get more information about me, you can take a look at the pages below.
      </Typography>
      <Box sx={{ display: 'flex', gap: 10, marginY: 4 }}>
        <Button href="/about" startIcon={<InfoIcon />} sx={{ color: '#fff', textTransform: 'none' }}>About</Button>
        <Button href="/CV" startIcon={<AutoAwesomeMotionIcon />} sx={{ color: '#fff', textTransform: 'none' }}>CV and Projects</Button>
        <Button href="/contact" startIcon={<PhoneIcon />} sx={{ color: '#fff', textTransform: 'none' }}>Contact</Button>
      </Box>

      <Typography variant="body1" component="p" sx={{ fontStyle: 'oblique 80deg', fontSize: '1.8rem', marginBottom: 3 }}>
        Check these out
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        {/* GitHub Button */}
        <IconButton
          component="a"
          href="https://github.com/enisba"
          target="_blank"
          sx={{
            margin: 1,
            color: '#fff',
            backgroundColor: '#333',
            '&:hover': {
              backgroundColor: '#555',
            },
            width: 60,
            height: 60,
          }}
        >
          <GitHub sx={{ fontSize: 40 }} />
        </IconButton>

        {/* LeetCode Button */}
        <IconButton
          component="a"
          href="https://leetcode.com/enesismetbal"
          target="_blank"
          sx={{
            margin: 1,
            color: '#fff',
            backgroundColor: '#ffa116',
            '&:hover': {
              backgroundColor: '#ffbd45',
            },
            width: 60,
            height: 60,
          }}
        >
          <img src={leetcodeLogo} alt="LeetCode" style={{ width: 40, height: 40 }} />
        </IconButton>

        {/* LinkedIn Button */}
        <IconButton
          component="a"
          href="https://linkedin.com/in/enesismetbal"
          target="_blank"
          sx={{
            margin: 1,
            color: '#fff',
            backgroundColor: '#0077b5',
            '&:hover': {
              backgroundColor: '#005582',
            },
            width: 60,
            height: 60,
          }}
        >
          <LinkedIn sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;
