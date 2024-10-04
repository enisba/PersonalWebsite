import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Modal,
  Button,
} from '@mui/material';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import myCV from '../assets/cv.pdf';
import WeatherAppPhoto from '../assets/home.png';
import CvPhoto from '../assets/cv.png';

const CV = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #004d40 0%, #00796b 50%)',
        textAlign: 'center',
        padding: { xs: 2, sm: 4 },
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#ffff' }}>
          My CV and Projects
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardActionArea onClick={handleOpen}>
                <img
                  src={CvPhoto}
                  alt="CV Thumbnail"
                  style={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    filter: 'brightness(0.8)',
                  }}
                />
                <CardContent sx={{ backgroundColor: '#123143' }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffff' }}>
                    CV
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardActionArea
                component="a"
                href="https://github.com/enisba/weather-app"
                target="_blank"
              >
                <img
                  src={WeatherAppPhoto}
                  alt="Weather App Thumbnail"
                  style={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    filter: 'brightness(0.8)',
                  }}
                />
                <CardContent sx={{ backgroundColor: '#123143' }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffff' }}>
                    Weather App
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Modal open={open} onClose={handleClose}>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: { xs: '100%', sm: '100%', md: '60%' },  
      height: { xs: '90%', sm: '80%' }, 
      bgcolor: 'background.paper',
      boxShadow: 24,
      borderRadius: 2,
      p: { xs: 1, sm: 4 },  
      overflow: 'auto',
    }}
  >
    <Typography variant="h6" component="h2" gutterBottom>
      My CV
    </Typography>
    <Worker workerUrl={'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js'}>
      <div style={{ width: '100%', height: 'calc(100vh - 300px)' }}> 
        <Viewer fileUrl={myCV} />
      </div>
    </Worker>
    <Button
      variant="contained"
      sx={{ mt: 2, backgroundColor: '#123143' }}
      onClick={handleClose}
    >
      Close
    </Button>
  </Box>
</Modal>

      </Container>
    </Box>
  );
};

export default CV;
