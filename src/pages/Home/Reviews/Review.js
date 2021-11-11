import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    shadow: {
        boxShadow:'5px 5px 32px -15px gray'
    },

});

function Item(props) {
   
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          my:2,
          mx:{md:2},
          borderRadius: 1,
          textAlign: 'center',
          fontSize: '1rem',
          fontWeight: '700',
          boxShadow:1,
          ...sx,
        }}
        {...other}
      />
    );
  }
const Review = (props) => {
    const {img,name,rating,details} = props.review
    const classes = useStyles();
    return (
        <Item className={classes.shadow}>
            <Box>
                <Box >
                    <img style={{borderRadius:'50%'}} width="30%" height="30%" src={img} alt="" />
                </Box>
                <Box>
                    <h3>{name}</h3>
                    <p>{details}</p>
                    <Rating size="small" name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                </Box>
            </Box>
        </Item>

    );
};

export default Review;