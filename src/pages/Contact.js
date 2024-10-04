import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import profileImage from '../assets/profilePhoto.png';

const Contact = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #004d40 0%, #00796b 50%)',
        color: '#fff',
        textAlign: 'center',
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Avatar
        alt="Profile Picture"
        src={profileImage}
        sx={{
          width: 180,
          height: 180,
          marginBottom: 2,
          border: '5px solid #fff',
          boxShadow: '0px 0px 15px 5px rgba(0, 0, 0, 0.4)',
        }}
      />

      <Grid container justifyContent="center">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 3 },
            maxWidth: 400,
            textAlign: 'left',
            width: '100%',
            boxSizing: 'border-box',
            backgroundColor: '#FFFFFF', // Paper background set to white
            color: '#000', // Set text color inside Paper to black for better contrast
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Information
          </Typography>

          <Typography variant="body1" component="p" sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <EmailIcon sx={{ mr: 1 }} />
            <strong>Email: </strong> balenesismet@gmail.com
          </Typography>

          <Typography variant="body1" component="p" sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <strong>Address: </strong> Ankara, Çankaya
          </Typography>

          <Typography variant="body1" component="p" sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <LinkedInIcon sx={{ mr: 1 }} />
            <strong>LinkedIn: </strong>{' '}
            <a
              href="https://www.linkedin.com/in/enesismetbal"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#4CAF50' }}
            >
              linkedin.com/in/enesismetbal
            </a>
          </Typography>

          <Typography variant="body1" component="p" sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <GitHubIcon sx={{ mr: 1 }} />
            <strong>GitHub: </strong>{' '}
            <a
              href="https://github.com/enisba"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#4CAF50' }}
            >
              github.com/enisba
            </a>
          </Typography>

          <Button
            variant="contained"
            color="primary"
            startIcon={<EmailIcon />}
            sx={{ mt: 4 }}
            href="mailto:balenesismet@gmail.com"
          >
            Contact With Me
          </Button>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Contact;
