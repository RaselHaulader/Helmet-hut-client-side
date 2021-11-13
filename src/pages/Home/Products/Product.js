import { Button, Icon, Rating, Typography } from '@mui/material';
import { Box, fontSize } from '@mui/system';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    btn: {
        cursor: 'pointer',
        "&:hover": { background: 'tomato', color: 'white' },
        padding: '5px 10px',
        transition: '0.3s',
        border: '1px solid  rgb(229, 229, 229)',
        color:'gray',
        
    },

});

const Product = (props) => {
    const { name, title, img, price, details, rating, _id } = props.product
    const classes = useStyles();
    function Item(props) {
        const { sx, ...other } = props;
        return (
            <Box
                sx={{
                    p: 2,
                    borderRadius: 1,
                    fontSize: '1rem',
                    fontWeight: '700',
                    ...sx,
                }}
                {...other}
            />
        );
    }
    return (
        <Item>
            <Box>
                <Box sx={{
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'display 3s',
                    textAlign: "center",
                    py: 7,
                    bgcolor: '#f4f4f4'
                }}>
                    <img width="180px" height="180px" src={img} alt="" />
                   
                </Box>
            </Box>
            <Box sx={{ pt: 2, textAlign: 'left' }}>
                <Typography
                    variant='h6'
                    sx={{ fontSize: 12, color:'rgba(168, 168, 168, 0.945)' }}>
                    {title}
                </Typography>
                <Typography
                    variant='h3'
                    sx={{
                        mt: 1,
                        textTransform: 'uppercase',
                        fontSize: 17,
                        fontWeight: 'bold'
                    }}>
                    {name}
                </Typography>

                <Typography variant='h3'
                    sx={{
                        mt: 1,
                        textTransform: 'uppercase',
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>
                     <Box sx={{color:'tomato', display:'inline'}}>$ {price}</Box>
                </Typography>
                <Typography
                    paragraph
                    sx={{
                        mt: 1,
                        fontSize: 12,
                        color: 'gray'
                    }}>
                    {details.slice(0, 80)}
                </Typography>
                <Box sx={{ display: 'block' }}>
                    <Rating size="small" name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        mt: 1
                    }}>
                    <Box sx={{ width: '40%', textAlign: 'center' }}>
                        <Link to={`/purchase/${_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <Box
                                className={classes.btn}
                            >
                                <Typography variant="caption" sx={{fontWeight:'bold'}}>
                                     <i className="fas fa-dollar-sign"></i> Purchase</Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Box
                        className={classes.btn}
                        sx={{
                            width: '10%',
                            textAlign: 'center',
                            ml: "4px",
                           
                        }}>
                        <Typography
                            variant="caption" >
                            <i className="fas fa-cart-plus"></i>
                        </Typography>
                    </Box>

                    <Box
                        className={classes.btn}
                        sx={{
                            width: '10%',
                            textAlign: 'center',
                            ml: "4px"
                        }}>

                        <Typography
                            variant="caption" >
                            <i className="far fa-heart"></i>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Item >

    );
};

export default Product;