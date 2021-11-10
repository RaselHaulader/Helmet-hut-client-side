import { Button, Icon, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import helmet from '../../../images/helmet1.png'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    btn: {
        cursor: 'pointer',
        "&:hover": { background: 'tomato', color: 'white' },
        padding: '5px 10px',
        transition: '0.3s',
        border: '1px solid  rgb(229, 229, 229)',
    },

});
const check = ()=>{
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
                    <img width="60%" src={helmet} alt="" />

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, sed.
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
                    <Box
                        onClick={check}
                        className={classes.btn}
                        sx={{ width: '40%' }}>

                        <Typography
                            variant="caption"
                         >
                            <i class="fas fa-dollar-sign"></i> Purchase Now
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