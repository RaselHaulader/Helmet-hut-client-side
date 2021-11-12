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

export default function NavigationDrawer() {


  const { user, logOut } = useAuth()
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
      <List>
        <NavLink to='/home' style={{ textDecoration: 'none', color: 'black' }} activeStyle={{ color: 'tomato' }}>
          <ListItem button >
            <ListItemText primary={'Home'} />
          </ListItem>
        </NavLink>
        <NavLink to='/explore' style={{ textDecoration: 'none', color: 'black' }} activeStyle={{ color: 'tomato' }}>
          <ListItem button >
            <ListItemText primary={'Explore More'} />
          </ListItem>
        </NavLink>

        {user?.displayName ? <>
          <NavLink to='/dashboard' style={{ textDecoration: 'none', color: 'black' }} activeStyle={{ color: 'tomato' }}>
            <ListItem button >
              <ListItemText primary={'Dashboard'} />
            </ListItem>
          </NavLink><Button color="inherit">{user?.displayName}</Button> <br />
          <Button color="inherit" onClick={logOut}>LogOut</Button></> :
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