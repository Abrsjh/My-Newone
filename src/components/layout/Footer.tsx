import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
  LocalHospital,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Doctors', href: '/doctors' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  const services = [
    'Emergency Care',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Oncology',
    'Orthopedics',
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2E7D9A',
        color: 'white',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Hospital Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocalHospital sx={{ fontSize: 32, mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  MedCenter Excellence
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                Caring Beyond Medicine
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
                Providing exceptional healthcare services since 1985
              </Typography>
              
              {/* Social Media */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Quick Links
              </Typography>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  sx={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    mb: 1,
                    '&:hover': {
                      color: 'white',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Our Services
              </Typography>
              {services.map((service) => (
                <Typography
                  key={service}
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    mb: 1,
                    cursor: 'pointer',
                    '&:hover': { color: 'white' },
                  }}
                >
                  {service}
                </Typography>
              ))}
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Contact Info
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  123 Healthcare Boulevard<br />
                  Medical City, Healthcare State 12345
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  info@medcenterexcellence.com
                </Typography>
              </Box>
              
              <Box
                sx={{
                  bgcolor: '#f44336',
                  p: 2,
                  borderRadius: 1,
                  mt: 2,
                }}
              >
                <Typography variant="body2" fontWeight="bold">
                  Emergency: +1 (555) 911-HELP
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.2)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} MedCenter Excellence. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: { xs: 2, sm: 0 } }}>
            <Link
              href="/privacy"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: 'white' },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: 'white' },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
