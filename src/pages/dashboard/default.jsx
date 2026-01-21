


import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  Divider 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CampaignIcon from '@mui/icons-material/Campaign';
import { useNavigate } from 'react-router';

function Dashboard() {
  const navigate = useNavigate()
  return (
    
    <Box sx={{ pt: 12, px: 3, pb: 6, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      
      {/* Page Title */}
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Frolic Event Dashboard
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} lg={2.4}><StatCard title="Total Events" value="25" /></Grid>
        <Grid item xs={12} sm={6} lg={2.4}><StatCard title="Participants" value="1800+" /></Grid>
        <Grid item xs={12} sm={6} lg={2.4}><StatCard title="Institutes" value="45" /></Grid>
        <Grid item xs={12} sm={6} lg={2.4}><StatCard title="Upcoming Events" value="10" /></Grid>
        <Grid item xs={12} sm={6} lg={2.4}><StatCard title="Completed Events" value="15" /></Grid>
      </Grid>

      {/* Quick Actions */}
      <Paper elevation={1} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#555' }}>
          Quick Actions
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Button variant="contained" startIcon={<AddIcon />} onClick={()=>navigate('add')} disableElevation>
            Add New Event
          </Button>
          <Button variant="outlined" startIcon={<VisibilityIcon />}>
            View Registrations
          </Button>
          <Button variant="outlined" startIcon={<EmojiEventsIcon />}>
            Declare Results
          </Button>
          <Button variant="outlined" startIcon={<CampaignIcon />}>
            Send Announcement
          </Button>
        </Box>
      </Paper>

      {/* Event Status Lists */}
      <Grid container spacing={3}>
        
        {/* Upcoming Events */}
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#555' }}>
              Upcoming Events
            </Typography>
            <List dense>
              {['Code Marathon', 'Robo Race', 'Poster Presentation'].map((event) => (
                <ListItem key={event} disableGutters>
                  <ListItemText primary={`• ${event}`} sx={{ color: '#666' }} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Recent Registrations */}
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#555' }}>
              Recent Registrations
            </Typography>
            <List dense>
              {[
                { name: 'Rahul', event: 'Code Marathon' },
                { name: 'Priya', event: 'Tech Quiz' },
                { name: 'Aman', event: 'Cultural Dance' }
              ].map((reg, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemText 
                    primary={`• ${reg.name} — ${reg.event}`} 
                    sx={{ color: '#666' }} 
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}

/* Reusable Stat Card Component */
function StatCard({ title, value }) {
  return (
    <Paper elevation={1} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        {value}
      </Typography>
    </Paper>
  );
}

export default Dashboard;