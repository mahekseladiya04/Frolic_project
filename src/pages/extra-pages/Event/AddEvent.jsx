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
  Stack,
  MenuItem
} from '@mui/material';
import {
  Event as EventIcon,
  Business as InstituteIcon,
  AccountTree as DeptIcon,
  Category as TypeIcon,
  CalendarMonth as DateIcon,
  Person as PersonIcon,
  Groups as GroupsIcon,
  Save as SaveIcon,
  DeleteSweep as ClearIcon
} from '@mui/icons-material';

// Mock options
const INSTITUTES = ["Darshan University", "Marwadi University", "LD College"];
const DEPARTMENTS = ["Computer Engineering", "Mechanical Engineering", "Civil Engineering"];
const EVENT_TYPES = ["Technical", "Cultural", "Sports", "Workshop"];

function AddEvent() {
  const [form, setform] = useState({
    eventName: '',
    department: '',
    institute: '',
    type: '',
    date: '',
    coordinator: '',
    participants: ''
  });

  const handleChange= (e)=>{
       setform({...form,[e.target.name]:e.target.value});
    };

    const handleSubmit= (e)=>{
        e.preventDefault();

        // post API here
        console.log(form);

        // navigate('/Institutes');
    };


  return (
    <Box sx={{ pt: 10, pb: 6, px: 2, display: 'flex', justifyContent: 'center', bgcolor: '#f0f2f5', minHeight: '100vh' }}>
      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 3, md: 5 }, 
          width: '100%', 
          maxWidth: 850, 
          borderRadius: 4, 
          border: '1px solid #cfd8dc',
          boxShadow: '0 8px 24px rgba(149, 157, 165, 0.1)'
        }}
      >
        {/* Header */}
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <EventIcon color="primary" sx={{ fontSize: 35 }} />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#263238' }}>
              Create New Event
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Schedule and assign technical or cultural activities
            </Typography>
          </Box>
        </Stack>
        
        <Divider sx={{ mb: 4 }} />

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            
            {/* Event Name */}
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                required
                label="Event Name"
                name="eventName"
                type='name'
                value={form.eventName}
                onChange={handleChange}
                placeholder="e.g. Code Marathon 2026"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EventIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Event Type */}
            <Grid item xs={12} md={4}>
              <TextField
                select
                fullWidth
                required
                label="Event Type"
                name="type"
                type=''
                value={form.type}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TypeIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              >
                {EVENT_TYPES.map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Institute Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                required
                label="Institute"
                name="institute"
                type='name'
                value={form.institute}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <InstituteIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              >
                {INSTITUTES.map((inst) => (
                  <MenuItem key={inst} value={inst}>{inst}</MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Department Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                required
                label="Department"
                name="department"
                type="name"
                value={form.department}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DeptIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              >
                {DEPARTMENTS.map((dept) => (
                  <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Date */}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                required
                type="date"
                label="Event Date"
                name="date"
                value={form.date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Coordinator */}
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                label="Event Coordinator"
                name="coordinator"
                type=''
                value={form.coordinator}
                onChange={handleChange}
                placeholder="Name of Lead"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Participants */}
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                type="number"
                label="Max Participants"
                name="participants"
                value={form.participants}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GroupsIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Form Actions */}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                 <Button 
                  variant="outlined" 
                  color="error" 
                  // startIcon={<ResetIcon />}
                  // onClick={handleReset}
                  sx={{ textTransform: 'none', borderRadius: 2 }}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  variant="contained" 
                  startIcon={<SaveIcon />}
                  sx={{ 
                    borderRadius: 2, 
                    px: 5, 
                    textTransform: 'none', 
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)'
                  }}
                  onClick = {handleSubmit}
                >
                  Confirm Event
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default AddEvent;