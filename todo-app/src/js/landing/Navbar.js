import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MuiAppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import Toolbar from '../common/Toolbar';
import logo_black from './images/todo_logo_black.png';
import logo_red from './images/todo_logo_red.png';

const rightLink = (theme) => ({
  fontSize: 16,
  color: 'primary.contrastText',
  ml: 0,
  height: '100%',
  alignItems: 'center',
  display: 'flex',
  padding: '10px',
  '&:hover': {
    color: '#fff',
    backgroundColor: 'secondary.main',
  },
});

function Navbar() {
  const theme = useTheme();
  return (
    <div className="navbar-section">
      <MuiAppBar
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Link variant="h6" underline="none" color="inherit" href="/" sx={{ fontSize: 24 }}>
            <img src={theme.palette.mode === 'dark' ? logo_red : logo_black} alt="TODO" />
          </Link>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/features/"
              sx={rightLink(theme)}
            >
              Features
            </Link>
            <Link color="inherit" variant="h6" underline="none" href="/templates/" sx={rightLink}>
              Templates
            </Link>
            <Link color="inherit" variant="h6" underline="none" href="/tutorial/" sx={rightLink}>
              Getting started
            </Link>
            <Link color="inherit" variant="h6" underline="none" href="/log-in/" sx={rightLink}>
              Log In
            </Link>
            <Link color="inherit" variant="h6" underline="none" href="/sign-up/" sx={rightLink}>
              Start planning
            </Link>
          </Box>
        </Toolbar>
      </MuiAppBar>
      <Toolbar />
    </div>
  );
}

export default Navbar;
