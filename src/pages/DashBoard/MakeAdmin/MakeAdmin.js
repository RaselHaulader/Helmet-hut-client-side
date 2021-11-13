import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Loader from "react-js-loader";
import Swal from 'sweetalert2'

const MakeAdmin = () => {
    const [load, setLoad] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLoad(true)
        axios.post('https://powerful-mountain-89009.herokuapp.com/makeAdmin', data)
            .then(res => {
                if (res.data.acknowledged) {
                    setLoad(false)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'A new admin has been added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
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
                <Box
                    style={{
                        boxShadow: '5px 5px 22px -7px gray',
                        borderRadius: '10px'
                    }}
                    sx={{
                        p: 2,
                        width: { md: '50%', xs: '100%' }
                    }}>
                    <Typography
                        variant="h4"
                        sx={{
                            mt: 3,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontWeight: 'bold'
                        }}>
                        Make An<Box sx={{ color: 'tomato', display: 'inline' }}> Admin</Box></Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}><Box sx={{ width: '40px', height: '2px', bgcolor: 'tomato' }}></Box></Box>
                    <Typography
                        variant='h6'
                        sx={{
                            px: 5,
                            py: 3,
                            fontSize: '13px',
                            color: 'gray',
                            textAlign: 'center'
                        }}>
                        For add an admin give email and then submit. provided email users will be the admin.</Typography>
                    {load && 
                    <Loader 
                    type="spinner-cub" 
                    bgColor={"tomato"} 
                    size={50} />}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="h6">Email</Typography>
                        <input 
                        placeholder="Email" 
                        style={inputStyle}  
                        {...register("email", { required: true })} />
                        {errors.email && 
                        <span>This field is required</span>} <br />
                        <input 
                        style={{ 
                            color: 'white', 
                            fontSize: '16px', 
                            width: '100%', 
                            border: 'none', 
                            padding: '10px 15px', 
                            background: 'tomato', 
                            cursor: 'pointer' }} 
                            type="submit" 
                            value="Make Admin" />
                    </form>
                </Box>
            </Box>
        </div>
    );
};

export default MakeAdmin;