import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import Ratings from './Ratings';

const AddReviews = () => {
    const [value, setValue] = React.useState(0);
 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data,value);

    const inputStyle = {
        width: '100%',
        border: '1px solid rgb(207, 207, 207)',
        padding: '7px 0',
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="h6">Review Title</Typography>
                        <input style={inputStyle} defaultValue="test" {...register("example")} />
                        <Typography variant="h6">Review Details</Typography>
                        <textarea style={{ ...inputStyle, height: '200px' }} {...register("exampleRequired", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <Box sx={{ display: 'flex' }}> <Typography variant="p">Star Rating : </Typography><Ratings value={value} setValue={setValue}></Ratings> </Box>
                        <input type="submit" />
                    </form>
                </Box>
            </Box>
        </Box>
    );
};
export default AddReviews;