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
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut, admin } = useAuth()
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    const style = {
        color: 'black',
        textDecoration: 'none',
        fontWeight:'bold'
    }
    return (
        <Box sx={{ bgcolor: 'white' }}>
            <Container>
                <Box sx={{ flexGrow: 1, }}>
                    <AppBar position="static" sx={{ boxShadow: 0, bgcolor: 'transparent', color: 'black' }}>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:'bold' }}>
                                HELMET <Box sx={{color:'tomato', display:'inline'}}> HUT</Box>
                            </Typography>
                            <Box sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}>
                                <NavLink style={style} activeStyle={activeStyle} to='/home'><Button  sx={{fontWeight:'bold'}}  color="inherit">Home</Button></NavLink>
                                <NavLink style={style} activeStyle={activeStyle} to='/explore'><Button  sx={{fontWeight:'bold'}}  color="inherit" >Explore More</Button></NavLink>


                                {user?.displayName ? <>
                                    <NavLink style={style} activeStyle={activeStyle} to='/dashboard'>
                                        <Button  sx={{fontWeight:'bold'}} color="inherit" >DashBoard</Button>
                                    </NavLink>
                                    <Button sx={{fontWeight:'bold'}}  color="inherit">{user?.displayName}</Button>
                                    <Button  sx={{fontWeight:'bold'}} color="inherit" onClick={logOut}>LogOut</Button></> :
                                    <NavLink style={style} activeStyle={activeStyle} to='/login'>
                                        <Button  sx={{fontWeight:'bold'}} color="inherit" >login</Button>
                                    </NavLink>}

                            </Box>
                            <Box sx={{ display: { md: 'none', sm: 'block' } }}>  <NavigationDrawer></NavigationDrawer></Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Container>
        </Box>
    );
};

export default Navigation;