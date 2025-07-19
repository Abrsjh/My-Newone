import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  useTheme,
} from '@mui/material';
import { ArrowForward, PlayArrow } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <>
          </>
  );
};

export default Home;

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{hospitalInfo.name} - {hospitalInfo.tagline}</title>
        <meta name="description" content={hospitalInfo.description} />
        <meta property="og:title" content={`${hospitalInfo.name} - ${hospitalInfo.tagline}`} />
        <meta property="og:description" content={hospitalInfo.description} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          background: `linear-gradient(135deg, #2E7D9A20 0%, #4CAF5020 100%)`,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          pt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 700,
                    mb: 2,
                    color: '#2C3E50',
                  }}
                >
                  MedCenter Excellence
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.75rem' },
                    fontWeight: 500,
                    mb: 3,
                    color: '#2E7D9A',
                  }}
                >
                  Caring Beyond Medicine
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    mb: 4,
                    color: '#546E7A',
                    lineHeight: 1.6,
                  }}
                >
                  A leading healthcare institution committed to providing exceptional medical care with state-of-the-art facilities and compassionate service.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    component={Link}
                    to="/contact"
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontSize: '1.1rem',
                      bgcolor: '#2E7D9A',
                      '&:hover': {
                        bgcolor: '#1F5A6B',
                      },
                    }}
                  >
                    Book Appointment
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrow />}
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontSize: '1.1rem',
                      color: '#2E7D9A',
                      borderColor: '#2E7D9A',
                      '&:hover': {
                        borderColor: '#1F5A6B',
                        color: '#1F5A6B',
                      },
                    }}
                  >
                    Virtual Tour
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '400px',
                      bgcolor: '#f0f0f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#666',
                    }}
                  >
                    Hospital Hero Image
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Quick Stats */}
      <Box sx={{ py: 6, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { number: '50+', label: 'Expert Doctors' },
              { number: '10,000+', label: 'Happy Patients' },
              { number: '25+', label: 'Medical Services' },
              { number: '24/7', label: 'Emergency Care' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h3"
                      fontWeight="bold"
                      color="primary.main"
                      sx={{ mb: 1 }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          background: `linear-gradient(135deg, #2E7D9A, #4CAF50)`,
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Ready to Experience Excellence in Healthcare?
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              sx={{ mb: 4, opacity: 0.9 }}
            >
              Contact us today to schedule your appointment or learn more about our services.
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/contact"
                sx={{
                  bgcolor: 'white',
                  color: '#2E7D9A',
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
                endIcon={<ArrowForward />}
              >
                Get Started Today
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default Home;