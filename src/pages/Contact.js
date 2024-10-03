import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
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
          width: '97.8vw', 
          height: '90vh',
          background: 'linear-gradient(135deg, #004d40 0%, #00796b 50%)',
          color: '#fff',
          textAlign: 'center',
          padding: 2,
        }}
      >     
              <Avatar
        alt="Profile Picture"
        src={profileImage}
        sx={{
          width: 200,
          height: 200,
          marginBottom: 2,
          border: '5px solid #fff',
          boxShadow: '0px 0px 15px 5px rgba(0, 0, 0, 0.4)',
        }}
      />
          
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'left' }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Contact Information
              </Typography>
              
              <Typography variant="body1" component="p" sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <EmailIcon sx={{ mr: 1 }} />
                <strong>Email:</strong> balenesismet@gmail.com
              </Typography>
              
              <Typography variant="body1" component="p" sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <strong>Phone: </strong> +(90) 552 272 0185
              </Typography>
              
              <Typography variant="body1" component="p" sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <LocationOnIcon sx={{ mr: 1 }} />
                <strong>Address: </strong> Ankara, Çankaya
              </Typography>
              
              <Typography variant="body1" component="p" sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <LinkedInIcon sx={{ mr: 1 }} />
                <strong>LinkedIn: </strong>{' '}
                <a href="https://www.linkedin.com/in/enesismetbal" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/enesismetbal
                </a>
              </Typography>
              
              <Typography variant="body1" component="p" sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <GitHubIcon sx={{ mr: 1 }} />
                <strong>GitHub:</strong>{' '}
                <a href="https://github.com/enisba" target="_blank" rel="noopener noreferrer">
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
