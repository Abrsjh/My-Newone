import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { School, Work, Verified } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Doctor } from '../../types';

interface DoctorCardProps {
  doctor: Doctor;
  index: number;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Card
        sx={{
          height: '100%',
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 16px 50px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        <CardMedia
          component="img"
          height="280"
          image={doctor.image}
          alt={doctor.name}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
              {doctor.name}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {doctor.specialty}
            </Typography>
            <Chip
              label={doctor.experience}
              color="secondary"
              size="small"
              sx={{ mb: 2 }}
            />
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3, lineHeight: 1.6 }}
          >
            {doctor.description}
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Education */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <School sx={{ mr: 1, fontSize: 20, color: 'primary.main' }} />
              <Typography variant="subtitle2" fontWeight="bold">
                Education
              </Typography>
            </Box>
            <List dense sx={{ pl: 2 }}>
              {doctor.education.map((edu, idx) => (
                <ListItem key={idx} sx={{ py: 0, px: 0 }}>
                  <ListItemText
                    primary={edu}
                    primaryTypographyProps={{
                      variant: 'body2',
                      color: 'text.secondary',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Certifications */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Verified sx={{ mr: 1, fontSize: 20, color: 'secondary.main' }} />
              <Typography variant="subtitle2" fontWeight="bold">
                Certifications
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, pl: 2 }}>
              {doctor.certifications.map((cert, idx) => (
                <Chip
                  key={idx}
                  label={cert}
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: '0.75rem' }}
                />
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DoctorCard;
