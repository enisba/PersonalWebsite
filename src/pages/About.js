import React from 'react';
import { Container, Typography, Box, Paper, Avatar, Divider } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f6d365 0%, #fda085 50%)',
        color: '#fff',
        textAlign: 'center',
        padding: 4,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: 10,
            boxShadow: '10px 10px 10px rgba(1, 0, 0, 0.5)',
          }}
        >
          <Typography variant="h5" component="p" gutterBottom>
            Heyy, I am Enes Ismet Bal, a computer engineering student at Hacettepe. Here is some information about me.
          </Typography>

          <Divider sx={{ marginY: 2 }} />

          <Typography variant="h4" component="h1" gutterBottom>
            My Skills
          </Typography>

          <Divider sx={{ marginY: 2 }} />

          <Typography variant="h5" component="h1" gutterBottom>
            Coding
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            I have enough experience with various programming languages.
            These are mainly Python, Java, Typescript, Javascript, Kotlin, C++.
            I still continue to learn these programming languages. In addition to these, I enjoy solving algorithm questions and participating in competitions.
            This summer, I attended inzva's summer camp and continued my development on algorithms and data structures.
            In July and August of 2024, I did a 30 working day volunteer internship at Hitatek Yazılım,
            where I had the opportunity to improve myself in frontend parts such as React and Material UI.
            Now I want to improve myself a little more in the field of artificial intelligence, and the area I am currently learning is machine learning.
          </Typography>

          <Divider sx={{ marginY: 3 }} />

          <Typography variant="h5" component="h1" gutterBottom>
            Sport
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
          I have two main focuses in the field of sports. One of them is to 
          improve myself as much as possible in swimming, which is also my favorite sport 
          to get away from workload. Another is to maintain a healthy life by going to the gym. 
          I'm also good at table tennis, so if you'd like to compete, feel free to reach out to me.
          </Typography>

          <EmojiEmotionsIcon sx={{ fontSize: 40, marginTop: 3 }} />
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
