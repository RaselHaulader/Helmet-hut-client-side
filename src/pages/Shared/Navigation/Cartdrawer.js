import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import './style.css';
import useCart from '../../../hooks/useCart';
import CartItem from './CartItem';
import {Link } from 'react-router-dom';

export default function TemporaryDrawer() {
    const { items } = useCart()
    const [state, setState] = React.useState({ right: false });
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ [anchor]: open });
    };
    return (
        <div>
            <React.Fragment>
                <IconButton onClick={toggleDrawer('right', true)} aria-label="cart">
                    <StyledBadge badgeContent={items.reduce((prev, curr) => { return curr.count + prev }, 0)} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: 'red',
                            padding: '10px',
                            cursor: 'pointer',
                        }}>
                        <CloseIcon onClick={toggleDrawer('right', false)} />
                        <span>
                            Total Item : {items.reduce((prev, curr) => {
                                return curr.count + prev
                            }, 0)}
                        </span>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}>
                        {
                            items.map(item => <CartItem item={item}></CartItem>)
                        }
                    </Box>
                    
                    <Link to='/dashboard/payment'> <button disabled={items.length == 0} className='checkOut-btn'>Check Out</button></Link>
                    <Box>
                    </Box>
                </Drawer>
            </React.Fragment>

        </div>
    );
}