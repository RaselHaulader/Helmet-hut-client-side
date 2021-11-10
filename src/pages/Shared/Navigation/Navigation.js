import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import NavigationDrawer from './NavigationDrawer';

const Navigation = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, }}>
                <AppBar position="static" sx={{ boxShadow: 0, bgcolor: 'transparent', color: 'black' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            HELMET HUT
                        </Typography>
                        <Box sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}> <Button color="inherit">Home</Button>
                            <Button color="inherit">Explore</Button>
                            <Button color="inherit">Reviews</Button>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">DahBoard</Button>
                            <Button color="inherit">My name</Button>
                            <Button color="inherit">LogOut</Button>
                        </Box>
                        <Box sx={{ display: { md: 'none', sm: 'block' } }}>  <NavigationDrawer></NavigationDrawer></Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </Container>
    );
};

export default Navigation;