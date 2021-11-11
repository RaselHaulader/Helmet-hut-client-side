import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const inputStyle = {
        width: '100%',
        border: '1px solid rgb(207, 207, 207)',
        padding: '7px 0',
        margin: '5px 0'
    }
    return (
        <div>
           
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box style={{ boxShadow: '5px 5px 22px -7px gray', borderRadius: '10px' }} sx={{ p: 2, width: { md: '50%', xs: '100%' } }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <h1>ADD AN ADMIN </h1>
                        <p>Lorem ipsum dolor sit amet consectetur  dolor sit amet consectetur adipisicing elit. Quis, sint!</p>
                    </Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="h6">Email</Typography>
                        <input style={inputStyle} defaultValue="test" {...register("example")} />
                       <input type="submit" />
                    </form>
                </Box>
            </Box>
        </div>
    );
};

export default MakeAdmin;