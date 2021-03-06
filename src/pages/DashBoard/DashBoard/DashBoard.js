import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import UserOrder from '../../DashBoard/UsersOrder/UserOrder';
import Payment from '../../DashBoard/Payment/Payment';
import ManageAllOrders from '../../DashBoard/ManageAllOrders/ManageAllOrders';
import AddReviews from '../AddReviews/AddReviews';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../../DashBoard/MakeAdmin/MakeAdmin';
import Login from '../../Login/Login';
import ManageProducts from '../MangeProducts/ManageProducts';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../../privateRoute/AdminRoute';
import Swal from 'sweetalert2'
import Navigation from '../../Shared/Navigation/Navigation';

const drawerWidth = 240;

function DashBoard(props) {
    const { logOut, admin, user } = useAuth()
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

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
    const Navlink = ({ pathname, linkName }) => {
        return <NavLink to={pathname} style={{ textDecoration: 'none', color: 'black' }} activeStyle={pathname != '/' && { color: 'tomato' }}>
            <ListItem button >
                <ListItemIcon>
                    <ArrowForwardIcon />
                </ListItemIcon>
                <ListItemText primary={linkName} />
            </ListItem>
        </NavLink>
    }
    const drawer = (
        <div>
            <Toolbar sx={{ bgcolor: 'white', color: 'tomato' }}><Typography variant="h5">Helmet Hut</Typography></Toolbar>
            <Divider />
            <List>
                {!admin && <>
                    <Navlink pathname={`/`} linkName="Home" />
                    <Navlink pathname={`${url}/userOrder`} linkName="My Orders" />
                    <Navlink pathname={`${url}/payment`} linkName="Payment" />
                    <Navlink pathname={`${url}/Review`} linkName="Add A Review" />
                </>}
                {admin && <><Navlink pathname={`${url}/AllOrder`} linkName="Manage All Orders" />
                    <Navlink pathname={`${url}/AddProduct`} linkName="Add Product" />
                    <Navlink pathname={`${url}/ManageProduct`} linkName="Manage Products" />
                    <Navlink pathname={`${url}/MakeAdmin`} linkName="Make Admin" /></>}
                <ListItem button onClick={handleLogOut}>
                    <ListItemIcon>
                        <ArrowForwardIcon />
                    </ListItemIcon>
                    <ListItemText primary={'SignOut'} />
                </ListItem>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }, bgcolor: 'white'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link style={{ textDecoration: 'none', color: 'tomato' }} to="/"><Typography variant="h6" noWrap component="div">
                    {user.displayName} {admin && "(Admin)"}
                    </Typography></Link>
                </Toolbar>
            </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{mt:7, flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    
                    <Switch>
                        <Route exact path={path}>
                            {!admin ? <UserOrder></UserOrder> : <ManageAllOrders></ManageAllOrders>}
                        </Route>
                        <Route exact path={`${path}/userOrder`}>
                            {!admin ? <UserOrder></UserOrder> : <ManageAllOrders></ManageAllOrders>}
                        </Route>
                        <Route exact path={`${path}/payment`}>
                            {!admin ? <Payment></Payment> : <ManageAllOrders></ManageAllOrders>}
                        </Route>
                        <Route exact path={`${path}/Review`}>
                            {!admin ? <AddReviews></AddReviews> : <ManageAllOrders></ManageAllOrders>}

                        </Route>
                        <AdminRoute exact path={`${path}/AllOrder`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/AddProduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/ManageProduct`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/MakeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <Route exact path={`${path}/signOut`}>
                            <Login></Login>
                        </Route>
                    </Switch>
                </Box>
            </Box>
        </>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;