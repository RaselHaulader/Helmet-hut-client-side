import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Loader from "react-js-loader";

const MakeAdmin = () => {
    const [load, setLoad] = useState(false)
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data =>{
        setLoad(true)
        console.log(data)
        axios.post('https://powerful-mountain-89009.herokuapp.com/makeAdmin',data)
        .then(res=>{
            if (res.data.acknowledged) {
                setLoad(false)
                alert(data.email + 'now an admin')
            }
            console.log(res)})
    }

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
                    {load && <Loader type="spinner-cub" bgColor={"tomato"} size={50} />}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="h6">Email</Typography>
                        <input style={inputStyle}  {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>} <br/>
                        <input type="submit" />
                    </form>
                </Box>
            </Box>
        </div>
    );
};

export default MakeAdmin;