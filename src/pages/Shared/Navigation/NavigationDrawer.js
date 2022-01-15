import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2'
import TemporaryDrawer from './Cartdrawer';

export default function NavigationDrawer() {


  const { user, logOut, admin } = useAuth()
  const activeStyle = {
    fontWeight: "bold",
    color: "red"
  }
  const style = {
    color: 'black',
    textDecoration: 'none'
  }
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ textAlign: 'center' }}>
        <NavLink style={style} activeStyle={activeStyle} to='/home'><Button color="inherit">Home</Button></NavLink> <br />
        <NavLink style={style} activeStyle={activeStyle} to='/explore'><Button color="inherit" >Explore More</Button></NavLink><br />

        {user?.displayName ? <>
          <NavLink style={style} activeStyle={activeStyle} to='/dashboard'>
            <Button color="inherit">{user?.displayName}</Button> <br />
          </NavLink> <br />
          <Button color="inherit" onClick={handleLogOut}>LogOut</Button></> :
          <NavLink style={style} activeStyle={activeStyle} to='/login'>
            <Button color="inherit" >login</Button>
          </NavLink>}
      </List>
    </Box>
  );
  return (
    <div>
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)}>  <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton></Button>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}