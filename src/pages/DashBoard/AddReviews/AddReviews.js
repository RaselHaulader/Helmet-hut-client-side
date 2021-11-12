import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Ratings from './Ratings';
import Loader from "react-js-loader";


const AddReviews = () => {
    const [rating, setValue] = React.useState(0);
    const [load, setLoad] = useState(false)
    const { user } = useAuth()
    const inputEl  = useRef()
    const [ratingWarning, setRatingWarning] = useState('')

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (rating > 0) {
            setLoad(true)
            setRatingWarning('')
            const reviewerImg = {}
            user.photoURL ? reviewerImg.img = user.photoURL : reviewerImg.img = 'https://i.ibb.co/TbH5Zfw/user-circle-icon-152504.png'
            console.log({ ...data, rating, ...reviewerImg })
          
            axios.post('https://powerful-mountain-89009.herokuapp.com/addReview', { ...data, rating, ...reviewerImg })
                .then(res => {
                    reset()
                    setLoad(false)
                    alert('thank for your valuable review')
                    console.log(res)
                    inputEl.current.reset()
                })
        } else if (rating === 0) {
            setRatingWarning('Rating please')
        }
    };

    const inputStyle = {
        width: '100%',
        border: '1px solid rgb(207, 207, 207)',
        padding: '7px 2px',
        margin: '5px 0'
    }
    console.log("example");
    return (
        <Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box style={{ boxShadow: '5px 5px 22px -7px gray', borderRadius: '10px' }} sx={{ p: 2, width: { md: '50%', xs: '100%' } }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <h1>WRITE A REVIEW  </h1>
                        <p>Lorem ipsum dolor sit amet consectetur  dolor sit amet consectetur adipisicing elit. Quis, sint!</p>
                    </Box>
                    {load && <Loader type="spinner-cub" bgColor={"tomato"} size={50} />}
                    <form ref={inputEl} onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="p">Your Name</Typography>
                        <input style={inputStyle} defaultValue={user.displayName} {...register("name")} />

                        <Typography variant="p">Review Details</Typography>
                        <textarea  minLength='50' placeholder='Write your review min 50 character' style={{ ...inputStyle, height: '200px' }} {...register("details", { required: true })} />
                        {errors.details && <span>This field is required</span>}
                        <Box sx={{ display: 'flex' }}> <Typography variant="p">Star Rating : </Typography><Ratings value={rating} setValue={setValue}></Ratings><span>{ratingWarning}</span> </Box>
                        <input type="submit" />
                    </form>
                </Box>
            </Box>
        </Box>
    );
};
export default AddReviews;