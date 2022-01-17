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
                    <Box onClick={toggleDrawer('right', false)} sx={{ display: 'inlineBlock', color: 'red', padding: '10px', cursor: 'pointer' }}><CloseIcon /></Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        {
                            items.map(item => <CartItem item={item}></CartItem>)
                        }
                    </Box>
                    <Typography sx={{ textAlign: 'center' }}>
                        Total Item : {items.reduce((prev, curr) => {
                            return  curr.count + prev
                        }, 0)} <br />
                         Total Price : {items.reduce((prev, curr) => {
                            return curr.price * curr.count + prev
                        }, 0)} tk </Typography>
                    <Box>
                    </Box>
                </Drawer>
            </React.Fragment>

        </div>
    );
}