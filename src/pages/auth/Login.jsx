


import React from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Container 
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';

function Login() {
  return (
    // Centering the container vertically and horizontally
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        bgcolor: '#f5f5f5' 
      }}
    >
      <Container maxWidth="xs">
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            borderRadius: 4 
          }}
        >
          {/* Optional Icon/Avatar */}
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
            Login
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              variant="outlined"
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              variant="outlined"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              variant="outlined"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ 
                mt: 3, 
                mb: 2, 
                py: 1.5, 
                borderRadius: 2,
                fontWeight: 'bold',
                textTransform: 'none' // Keeps the text from being all-caps
              }}
            >
              Login
            </Button>
            
            <Typography variant="body2" color="textSecondary" align="center">
              Frolic Event Management System
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;