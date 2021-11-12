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
        textDecoration: 'none'
    }
    return (
        <Box sx={{ bgcolor: 'white' }}>
            <Container>
                <Box sx={{ flexGrow: 1, }}>
                    <AppBar position="static" sx={{ boxShadow: 0, bgcolor: 'transparent', color: 'black' }}>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                              HELMET HUT
                            </Typography>
                            <Box sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}>
                                <NavLink style={style} activeStyle={activeStyle} to='/home'><Button color="inherit">Home</Button></NavLink>
                                <NavLink style={style} activeStyle={activeStyle} to='/explore'><Button color="inherit" >Explore More</Button></NavLink>


                                {user?.displayName ? <>
                                    {user?.displayName && admin ? <NavLink style={style} activeStyle={activeStyle} to='/dashboard/AllOrder'>
                                        <Button color="inherit" >DashBoard</Button>
                                    </NavLink> : <NavLink style={style} activeStyle={activeStyle} to='/dashboard'>
                                        <Button color="inherit" >DashBoard</Button>
                                    </NavLink>}

                                    <Button color="inherit">{user?.displayName}</Button>
                                    <Button color="inherit" onClick={logOut}>LogOut</Button></> :
                                    <NavLink style={style} activeStyle={activeStyle} to='/login'>
                                        <Button color="inherit" >login</Button>
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