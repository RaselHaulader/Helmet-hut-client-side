import { Button, Icon, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
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
    },

});
const check = () => {
    console.log('clicked')
}

const Product = () => {
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
                    <img width="60%" src='https://i.ibb.co/HhcFLTn/05-Main-Shop-Grid-View-removebg-preview.png' alt="" />

                </Box>
            </Box>
            <Box sx={{ pt: 2, textAlign: 'left' }}>

                <Typography
                    variant='p'
                    sx={{ fontSize: 12 }}>
                    By valentine
                </Typography>

                <Typography variant='h3'
                    sx={{
                        mt: 1,
                        textTransform: 'uppercase',
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>
                    $249
                </Typography>

                <Typography
                    variant='h3'
                    sx={{
                        mt: 1,
                        textTransform: 'uppercase',
                        fontSize: 17,
                        fontWeight: 'bold'
                    }}>
                    crimson thunder
                </Typography>

                <Typography
                    variant='p'
                    sx={{
                        mt: 1,
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'gray'
                    }}>
                   Trendsetting springs for precise functionality ensuring a superior wind and water sealant layer. Unique 3D molded shield designed
                </Typography>
                
                <Box sx={{ display: 'block' }}>
                    <Rating
                        name="half-rating-read"
                        sx={{
                            mt: 1,
                            fontSize: 14,
                        }}
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        mt: 1
                    }}>
                    <Box sx={{ width: '40%', textAlign: 'center' }}>
                        <Link to="/purchase" style={{textDecoration:'none', color:'black'}}>
                            <Box
                                onClick={check}
                                className={classes.btn}
                            >
                                <Typography
                                    variant="caption"
                                >
                                    <i class="fas fa-dollar-sign"></i> Purchase</Typography>
                            </Box>
                        </Link>
                    </Box>


                    <Box
                        className={classes.btn}
                        sx={{
                            width: '10%',
                            textAlign: 'center',
                            ml: "4px"
                        }}>

                        <Typography
                            variant="caption">
                            <i class="fas fa-cart-plus"></i>
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
                            variant="caption">
                            <i class="far fa-heart"></i>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Item >

    );
};

export default Product;