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
  AccountTree as DeptIcon,
  Business as InstituteIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Groups as GroupsIcon,
  Save as SaveIcon,
  RestartAlt as ResetIcon
} from '@mui/icons-material';

// Mock data for the Institute dropdown
const INSTITUTES = [
  "Darshan University",
  "Marwadi University",
  "LD College of Engineering",
  "IIT Gandhinagar"
];

function AddDepartment() {

  const [form, setForm] = useState({
    deptName: '',
    instituteName: '',
    coordinator: '',
    contact: '',
    participants: ''
  });

  const handleChange= (e)=>{
       setForm({...form,[e.target.name]:e.target.value});
    };

    const handleSubmit= (e)=>{
        e.preventDefault();

        // post API here
        console.log(form);

        // navigate('/Institutes');
    };


  // const handleReset = () => {
  //   setform({
  //     deptName: '',
  //     instituteName: '',
  //     coordinator: '',
  //     contact: '',
  //     participants: ''
  //   });
  // };

  return (
    <Box sx={{ pt: 10, pb: 6, px: 2, display: 'flex', justifyContent: 'center', bgcolor: '#f4f7f9', minHeight: '100vh' }}>
      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 3, md: 5 }, 
          width: '100%', 
          maxWidth: 750, 
          borderRadius: 4, 
          border: '1px solid #e0e6ed',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}
      >
        {/* Header Section */}
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
          <Box sx={{ bgcolor: 'primary.main', p: 1, borderRadius: 2, display: 'flex' }}>
            <DeptIcon sx={{ color: 'white' }} />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#1a3353' }}>
            Add Department
          </Typography>
        </Stack>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 4, ml: 6 }}>
          Link a new department to an existing institute and assign a coordinator.
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            
            {/* Department Name */}
            <Grid item xs={12} md={7}>
              <TextField
                fullWidth
                required
                label="Department Name"
                type='name'
                name="deptName"
                value={form.deptName}
                onChange={handleChange}
                placeholder="e.g. Computer Engineering"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DeptIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Institute Name (Dropdown) */}
            <Grid item xs={12} md={5}>
              <TextField
                select
                fullWidth
                required
                label="Select Institute"
                type= ""
                name="instituteName"
                value={form.instituteName}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <InstituteIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              >
                {INSTITUTES.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Coordinator Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Coordinator Name"
                name="coordinator"
                type= ''
                value={form.coordinator}
                onChange={handleChange}
                placeholder="Dr. A.K. Sharma"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Participants Count */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Total Participants"
                name="participants"
                value={form.participants}
                onChange={handleChange}
                placeholder="0"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GroupsIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Contact Email */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                type="email"
                label="Contact Email"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="dept.head@university.edu"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Submit Buttons */}
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
                    textTransform: 'none', 
                    borderRadius: 2, 
                    px: 4,
                    fontWeight: 'bold',
                    bgcolor: '#1a3353',
                    '&:hover': { bgcolor: '#2c4a70' }
                  }}
                  onClick = {handleSubmit}
                >
                  Submit
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default AddDepartment;