import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  Schedule,
  LocalHospital,
  Send,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: LocationOn,
      title: 'Address',
      content: '123 Healthcare Boulevard, Medical City, Healthcare State 12345',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
    },
    {
      icon: Email,
      title: 'Email',
      content: 'info@medcenterexcellence.com',
    },
    {
      icon: Schedule,
      title: 'Emergency',
      content: '+1 (555) 911-HELP',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - MedCenter Excellence</title>
        <meta name="description" content="Contact MedCenter Excellence for appointments, inquiries, or emergency services. We're here to help with all your healthcare needs." />
      </Helmet>

      <Box sx={{ pt: 12, pb: 8 }}>
        <Container maxWidth="lg">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{ mb: 2 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: '600px', mx: 'auto' }}
              >
                Get in touch with our healthcare team. We're here to assist you
                with appointments, questions, and emergency care.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} lg={4}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
                  Get In Touch
                </Typography>
                
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    sx={{
                      mb: 2,
                      '&:hover': {
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          bgcolor: '#2E7D9A15',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        <info.icon sx={{ color: '#2E7D9A', fontSize: 24 }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5 }}>
                          {info.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {info.content}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ))}

                {/* Emergency Notice */}
                <Paper
                  sx={{
                    bgcolor: '#f44336',
                    color: 'white',
                    p: 3,
                    mt: 3,
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocalHospital sx={{ mr: 1 }} />
                    <Typography variant="h6" fontWeight="bold">
                      Emergency Care
                    </Typography>
                  </Box>
                  <Typography variant="body2">
                    For medical emergencies, call +1 (555) 911-HELP or visit our emergency department immediately.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} lg={8}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
                    Send us a Message
                  </Typography>
                  
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<Send />}
                          sx={{
                            py: 1.5,
                            px: 4,
                            fontSize: '1.1rem',
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box sx={{ mt: 6 }}>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, textAlign: 'center' }}>
                Find Us
              </Typography>
              <Paper
                sx={{
                  height: 400,
                  borderRadius: 3,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'grey.100',
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  Interactive Map Coming Soon
                </Typography>
              </Paper>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
