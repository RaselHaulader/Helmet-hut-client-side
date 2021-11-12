import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useRef } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const formRef = useRef()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.rating = 4.5
        console.log(data);
        axios.post('https://powerful-mountain-89009.herokuapp.com/addProduct', data)
            .then(res => {
                if (res.data.acknowledged) {
                    alert('Product added')
                    formRef.current.reset()

                }
                console.log(res)
            })
    }

    const inputStyle = {
        width: '100%',
        padding: '7px 0',
        margin: '5px 0'
    }
    console.log("example");
    return (
        <Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box style={{ boxShadow: '5px 5px 22px -7px gray', borderRadius: '10px' }} sx={{ p: 2, width: { md: '50%', xs: '100%' } }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <h1>Add A Product </h1>
                        <p>Lorem ipsum dolor sit amet consectetur  dolor sit amet consectetur adipisicing elit. Quis, sint!</p>
                    </Box>
                    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>

                        <TextField style={inputStyle} id="standard-basic" label="Product Name" variant="standard"  {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}

                        <TextField style={inputStyle} id="standard-basic" label="Title" variant="standard"  {...register("title", { required: true })} />
                        {errors.title && <span>This field is required</span>}

                        <TextField id="standard-basic" inputProps={{ inputMode: 'numeric' }} variant="standard" label="Price" style={inputStyle}  {...register("price", { required: true })} />
                        {errors.price && <span>This field is required</span>}

                        <TextField style={inputStyle} id="standard-basic" label="Details" variant="standard"  {...register("details", { required: true })} />
                        {errors.details && <span>This field is required</span>}

                        <TextField style={inputStyle} id="standard-basic" label="Img URL" variant="standard"  {...register("img", { required: true })} />
                        {errors.img && <span>This field is required</span>}

                        <input type="submit" />

                    </form>
                </Box>
            </Box>
        </Box >
    );
};
export default AddProducts;