import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Service } from '../../types';
import * as MuiIcons from '@mui/icons-material';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const theme = useTheme();
  
  // Get the icon component dynamically
  const IconComponent = (MuiIcons as any)[service.icon] || MuiIcons.MedicalServices;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <Card
        sx={{
          height: '100%',
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
            '& .service-icon': {
              transform: 'scale(1.1)',
              color: theme.palette.secondary.main,
            },
          },
        }}
      >
        <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Box
              className="service-icon"
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                bgcolor: `${theme.palette.primary.main}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <IconComponent
                sx={{
                  fontSize: 32,
                  color: theme.palette.primary.main,
                  transition: 'all 0.3s ease-in-out',
                }}
              />
            </Box>
            <Typography
              variant="h5"
              component="h3"
              fontWeight="bold"
              color="primary"
            >
              {service.title}
            </Typography>
          </Box>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, flexGrow: 1 }}
          >
            {service.description}
          </Typography>

          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mb: 2, color: theme.palette.text.primary }}
            >
              Key Features:
            </Typography>
            <List dense sx={{ p: 0 }}>
              {service.features.map((feature, idx) => (
                <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircle
                      sx={{
                        fontSize: 20,
                        color: theme.palette.secondary.main,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={feature}
                    primaryTypographyProps={{
                      variant: 'body2',
                      color: 'text.secondary',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
