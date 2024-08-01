import React from 'react';
import { Container, Typography, Button, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logging out
    navigate('/login');
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      sx={{ backgroundColor: '#f0f0f0' }}
    >
      <Paper elevation={10} sx={{ padding: '2rem', maxWidth: '800px', width: '100%' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center' }}>Dashboard</Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>Welcome to your dashboard!</Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          fullWidth 
          sx={{ mt: 2, mb: 2, transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#D2093C' } }} 
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
};

export default Dashboard;
