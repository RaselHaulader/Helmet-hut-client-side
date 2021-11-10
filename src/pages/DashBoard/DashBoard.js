import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import UserOrder from '../UsersOrder/UserOrder';
import Payment from '../Payment/Payment';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddReviews from '../AddReviews/AddReviews';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Purchase from '../Purchase/Purchase';

const drawerWidth = 240;

function DashBoard(props) {
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const Navlink = ({ pathname, linkName }) => {
        return <NavLink to={pathname} style={{ textDecoration: 'none', color:'black' }} activeStyle={{ color: 'tomato' }}>
            <ListItem button >
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={linkName} />
            </ListItem>
        </NavLink>
    }
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Navlink pathname={`/`} linkName="Home" />
                <Navlink pathname={`${url}/userOrder`} linkName="My Order" />
                <Navlink pathname={`${url}/payment`} linkName="Payment" />
                <Navlink pathname={`${url}/Review`} linkName="Review" />
                <Navlink pathname={`${url}/AllOrder`} linkName="Manage All Order" />
                <Navlink pathname={`${url}/AddProduct`} linkName="Add Product" />
                <Navlink pathname={`${url}/ManageProduct`} linkName="Manage Product" />
                <Navlink pathname={`${url}/MakeAdmin`} linkName="Make Admin" />
                <Navlink pathname={`${url}/signOut`} linkName="Sign Out" />
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }, bgcolor: 'tomato  '
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
                    <Typography variant="h6" noWrap component="div">
                        Helmet Hut
                    </Typography>
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
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <UserOrder></UserOrder>
                    </Route>
                    <Route  path={`${path}/userOrder`}>
                        <UserOrder></UserOrder>
                    </Route>
                    <Route exact path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route exact path={`${path}/AllOrder`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route exact path={`${path}/Review`}>
                        <AddReviews></AddReviews>
                    </Route>
                    <Route exact path={`${path}/AddProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route exact path={`${path}/ManageProduct`}>
                        <UserOrder></UserOrder>
                    </Route>
                    <Route exact path={`${path}/MakeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route exact path={`${path}/signOut`}>
                        <Purchase></Purchase>
                    </Route>
                    {/* <Route path={`${path}/:topicId`}>
                        <h3>Please select a topic.</h3>
                    </Route> */}
                </Switch>
            </Box>
        </Box>
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