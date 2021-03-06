import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Ratings from './Ratings';
import Loader from "react-js-loader";
import Swal from 'sweetalert2'


const AddReviews = () => {
    const [rating, setValue] = React.useState(0);
    const [load, setLoad] = useState(false)
    const { user } = useAuth()
    const inputEl = useRef()
    const [ratingWarning, setRatingWarning] = useState('')

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (rating > 0) {
            setLoad(true)
            setRatingWarning('')
            const reviewerImg = {}
            user.photoURL ? reviewerImg.img = user.photoURL : reviewerImg.img = 'https://i.ibb.co/TbH5Zfw/user-circle-icon-152504.png'
            axios.post('https://powerful-mountain-89009.herokuapp.com/addReview', { ...data, rating, ...reviewerImg })
                .then(res => {
                    reset()
                    setLoad(false)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Thanks For Your Valuable Review',
                        showConfirmButton: false,
                        timer: 1500
                    })
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
    return (
        <Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                    style={{ boxShadow: '5px 5px 22px -7px gray', borderRadius: '10px' }}
                    sx={{ p: 2, width: { md: '50%', xs: '100%' } }}>
                    <Typography
                        variant="h4"
                        sx={{
                            mt: 3,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontWeight: 'bold'
                        }}>
                        Write A
                        <Box
                            sx={{
                                color: 'tomato',
                                display: 'inline'
                            }}>
                            Review
                        </Box>
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                        <Box
                            sx={{
                                width: '40px',
                                height: '2px',
                                bgcolor: 'tomato'
                            }}>
                        </Box>
                    </Box>

                    <Typography
                        variant='h6'
                        sx={{
                            px: 5,
                            py: 3,
                            textAlign: 'center',
                            fontSize: '13px',
                            color: 'gray'
                        }}>
                        Feel free to share your opinion with everyone by give an review.Your review will display in homepage review section.</Typography>
                    {load && <Loader type="spinner-cub" bgColor={"tomato"} size={50} />}
                    <form ref={inputEl} onSubmit={handleSubmit(onSubmit)}>
                        <Typography
                            variant="p">Your Name</Typography>
                        <input
                            style={inputStyle}
                            defaultValue={user.displayName}
                            {...register("name")} />

                        <Typography
                            variant="p">Review Details</Typography>
                        <textarea
                            minLength='50'
                            placeholder='Write your review min 50 character'
                            style={{ ...inputStyle, height: '200px' }}
                            {...register("details", { required: true })} />
                        {errors.details && <span>This field is required</span>}
                        <Box
                            sx={{
                                display: 'flex'
                            }}>
                            <Typography
                                variant="p">
                                Star Rating :
                            </Typography>
                            <Ratings
                                value={rating}
                                setValue={setValue}>
                            </Ratings>
                            <span>{ratingWarning}</span>
                        </Box>
                        <input
                            style={{
                                color: 'white',
                                margin: "10px 0",
                                width: '100%',
                                border: 'none',
                                padding: '10px 15px',
                                background: 'tomato',
                                cursor: 'pointer'
                            }}
                            type="submit"
                            value="Add Review" />
                    </form>
                </Box>
            </Box>
        </Box>
    );
};
export default AddReviews;