import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import NavigationDrawer from './NavigationDrawer';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2'

import LogoutIcon from '@mui/icons-material/Logout';

import TemporaryDrawer from './Cartdrawer';

const Navigation = () => {
    const { user, logOut, admin } = useAuth()
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    const style = {
        color: 'black',
        textDecoration: 'none',
        fontWeight: 'bold'
    }

    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to access this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Sign Out!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                Swal.fire(
                    'Sign Out!',
                    'Successfully SignOut.',
                    'success'
                )
            }
        })

    }
    return (
        <Box sx={{ bgcolor: 'white' }}>
            <Container>
                <Box sx={{ flexGrow: 1, }}>
                    <AppBar position="static" sx={{ boxShadow: 0, bgcolor: 'transparent', color: 'black' }}>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                                HELMET <Box sx={{ color: 'tomato', display: 'inline' }}> HUT</Box>
                            </Typography>
                            <Box sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}>
                                <NavLink style={style} activeStyle={activeStyle} to='/home'><Button sx={{ fontWeight: 'bold' }} color="inherit">Home</Button></NavLink>
                                <NavLink style={style} activeStyle={activeStyle} to='/explore'><Button sx={{ fontWeight: 'bold' }} color="inherit" >Explore More</Button></NavLink>

                                {user?.displayName ? <>
                                    <NavLink style={style} activeStyle={activeStyle} to='/dashboard'>
                                        <Button sx={{ fontWeight: 'bold' }} color="inherit">{user?.displayName}</Button>
                                    </NavLink>
                                    <Button sx={{ fontWeight: 'bold', padding: '0' }} color="inherit">
                                        <TemporaryDrawer></TemporaryDrawer>
                                    </Button>
                                    <Button sx={{ fontWeight: 'bold', color: 'red' }} onClick={handleLogOut}><LogoutIcon></LogoutIcon></Button></> :
                                    <NavLink style={style} activeStyle={activeStyle} to='/login'>
                                        <Button sx={{ fontWeight: 'bold' }} color="inherit" >login</Button>
                                    </NavLink>}
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { md: 'none', sm: 'block' } }}>
                                <Box sx={{display:'flex', justifyContent:'end'}}>
                                    <Button sx={{ fontWeight: 'bold', padding: '0' }} color="inherit">
                                        <TemporaryDrawer></TemporaryDrawer>
                                    </Button>
                                    <NavigationDrawer></NavigationDrawer>
                                </Box>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Container>
        </Box>
    );
};

export default Navigation;