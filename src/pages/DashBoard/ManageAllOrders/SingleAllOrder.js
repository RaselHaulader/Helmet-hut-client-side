import { Box } from '@mui/system';
import React from 'react';
import { Button, Rating, Typography } from '@mui/material';
import Loader from "react-js-loader";



const SingleAllOrder = (props) => {
    const { img, title, name, _id, email, description, address, phone, price, status, user } = props.order
    const handleUpdateOrder = props.handleUpdateOrder
    const load2 = props.load2
    function Item(props) {
        const { sx, ...other } = props;
        return (
            <Box
                sx={{
                    p: 1,
                    borderRadius: 1,
                    textAlign: 'left',
                    fontSize: '1rem',
                    fontWeight: '700',
                    ...sx,
                }}
                {...other}
            />
        );
    }
    return (
        <Box
            sx={{
                display: 'grid',
               
                rowGap: 1,
                gridTemplateColumns: { md: '2fr 3fr 5fr 2fr 2fr 2fr 2fr', sm: 'repeat(1fr, 1fr)' },
                borderBottom: "1px solid lightGray"
            }}
        >
            <Item sx={{alignItems: 'center', display: 'flex',}}>
                <Box sx={{ bgcolor: '#f4f4f4', p: 1 }}> <img width="100%" src={img} alt="" /></Box>
            </Item>
            <Item sx={{alignItems: 'center', display: 'flex',}}>
                <Box >  
                    <Typography sx={{fontSize:'14px', fontWeight:'bolder',color:'gray' }} variant="h6">{name}</Typography>
                    <Typography sx={{fontSize:'10px', color:'gray' }} variant="caption">{title}</Typography> <br />
                    <Rating size="small" name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </Box>
            </Item>
            <Item>
                <Box >
                    <Typography sx={{fontSize:'14px', fontWeight:'bolder', color:'gray' }} variant="h6">{user}</Typography>
                    <Typography  sx={{fontSize:'12px', color:'gray' }} variant='p'>{email}</Typography> <br />
                    <Typography sx={{fontSize:'12px', color:'gray' }} variant='p'>{phone}</Typography> <br />
                    <Typography sx={{fontSize:'12px', color:'gray' }} variant='p'>{address}</Typography> <br />
                    <Typography sx={{fontSize:'12px', color:'gray' }} variant="caption">{description}</Typography> <br />
                </Box>
            </Item>
            <Item sx={{ alignItems: 'center', display: 'flex', textAlign: { md: 'center' } }}>
            <Typography sx={{fontSize:'16px', color:'salmon' }} variant='p'>${price}</Typography>  
            </Item>
            <Item sx={{ alignItems: 'center', display: 'flex', textAlign: { md: 'center' } }}>
              <Box sx={{color:'dodgerblue'}}>  {load2.load && load2.id===_id ? <Loader type="spinner-cub" bgColor={"tomato"}  size={20} />: status}</Box>
            </Item>
            <Item sx={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', display: 'flex', textAlign: { md: 'center' } }}>
                {status === 'pending' ? <Button  size="small" sx={{ width: '100%', bgcolor:'#3b68fd4f' }} onClick={() => handleUpdateOrder(_id, 'Shipped')}>Shipped</Button> : <Button color="success" variant="contained" size="small"  disabled={status === 'Shipped' ? false : true} sx={{ width: '100%', bgcolor:'MediumAquaMarine' }} onClick={() => handleUpdateOrder(_id, 'Delivered')}>Delivered</Button>
                }
            </Item>
            <Item sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', textAlign: { md: 'center' } }}>
                <Button  size="small" color='error' sx={{ width: '100%', bgcolor:'#fd3b3b4f' }} onClick={() => handleUpdateOrder(_id, 'delete')}>Delete</Button>
            </Item>
        </Box>

    );
};

export default SingleAllOrder;