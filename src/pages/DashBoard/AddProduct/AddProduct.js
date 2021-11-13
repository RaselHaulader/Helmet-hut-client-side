import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import Loader from "react-js-loader";

const AddProducts = () => {
    const formRef = useRef()
    const [load, setLoad] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLoad(true)
        data.rating = 4.5
        console.log(data);
        axios.post('https://powerful-mountain-89009.herokuapp.com/addProduct', data)
            .then(res => {
                if (res.data.acknowledged) {
                    setLoad(false)
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
                    <Typography variant="h4" sx={{mt:3,textAlign: 'center', textTransform:'uppercase', fontWeight:'bold' }}>Add A<Box sx={{color:'tomato', display:'inline'}}> Product</Box></Typography>
                       <Box sx={{display:'flex', justifyContent:'center'}}> <Box sx={{width:'40px', height:'2px',bgcolor:'tomato'}}></Box></Box>
                        <Typography variant='h6' sx={{px:5, py:3,textAlign:'center', fontSize:'13px', color:'gray'}}>Fill all the field carefully.Don't skip any field. Your added Product will shows in explore all product page.</Typography>
                    {load && <Loader type="spinner-cub" bgColor={"tomato"} color={'#FFFFFF'} size={50} />}
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

                        <input style={{color:'white', width: '100%', border: 'none', padding: '10px 15px', background: 'tomato', cursor:'pointer' }} type="submit" value="Add Product" />

                    </form>
                </Box>
            </Box>
        </Box >
    );
};
export default AddProducts;