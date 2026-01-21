import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  InputAdornment,
  Divider,
  Stack
} from '@mui/material';
import {
  Business as BusinessIcon,
  LocationCity as CityIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Groups as GroupsIcon,
  Save as SaveIcon
} from '@mui/icons-material';

function AddInstitute() {
  // Initial State (Name must match what you use in handlers)
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    coordinator: '',
    contact: '',
    participants: ''
  });

  // Handle Input Changes
  const handleChange = (e) => {
    // Corrected: use setFormData and formData instead of setform/form
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Corrected: logging formData
    console.log("Submitting Data: ", formData);
    
    // Your Post API call would go here
  };

  const handleCancel = () => {
    // Logic for cancel (e.g., navigate back)
    setFormData({ name: '', city: '', coordinator: '', contact: '', participants: '' });
  };

  return (
    <Box sx={{ pt: 12, pb: 6, px: 2, display: 'flex', justifyContent: 'center', bgcolor: '#f8f9fa', minHeight: '100vh' }}>
      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 3, md: 5 }, 
          width: '100%', 
          maxWidth: 700, 
          borderRadius: 4, 
          border: '1px solid #e0e0e0',
          boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <BusinessIcon color="primary" sx={{ fontSize: 30 }} />
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#2c3e50' }}>
            Add New Institute
          </Typography>
        </Stack>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
          Enter the official details to register a new participating institute in the system.
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        {/* The handleSubmit is linked here */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Institute Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Institute Name"
                name="name" // name must match the key in formData
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                placeholder="e.g. Darshan University"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BusinessIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* City */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Rajkot"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CityIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Participants */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Expected Participants"
                name="participants"
                type="number"
                value={formData.participants}
                onChange={handleChange}
                placeholder="0"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GroupsIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Coordinator */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Coordinator Name"
                name="coordinator"
                value={formData.coordinator}
                onChange={handleChange}
                placeholder="e.g. Mr. Patel"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Contact Email */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Official Email"
                name="contact"
                type="email"
                value={formData.contact}
                onChange={handleChange}
                placeholder="info@university.edu"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Buttons */}
            <Grid item xs={12} sx={{ mt: 3 }}>
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button 
                  variant="text" 
                  color="inherit" 
                  onClick={handleCancel}
                  sx={{ textTransform: 'none', fontWeight: 600 }}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  variant="contained" 
                  size="large"
                  startIcon={<SaveIcon />}
                  sx={{ 
                    textTransform: 'none', 
                    borderRadius: 2, 
                    px: 4,
                    fontWeight: 'bold',
                    boxShadow: '0 4px 14px 0 rgba(25, 118, 210, 0.39)'
                  }}
                >
                  Save Institute
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default AddInstitute;