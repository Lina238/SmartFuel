import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();
const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const history = useNavigate();
  
  useEffect(() => {
    if (isLoggedIn) {
      history('/Home');
    }
  }, [isLoggedIn, history]);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const handleLogin = async (e) => {
    e.preventDefault();
  
    const username = e.target.username.value;
    const password = e.target.password.value;
  
    if (!username || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
  
    const credentials = {
      username: username,
      password: password,
    };
  
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/authenticate',
        credentials,
        config
      );
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('role',response.data.role);
      console.log(response
      // setIsLoggedIn(true);
    } catch (error) {
      setError("Nom d'utilisateur ou mot de passe incorrect.");
    }
  };
  
 

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#FFA500' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          {error && (
            <Typography color="error" variant="body1" align="center" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: '#1565C0',
                '&:hover': {
                  bgcolor: '#0056AC',
                },
              }}
            >
              Se connecter
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;