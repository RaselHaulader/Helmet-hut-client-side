import { Container, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import { useParams } from 'react-router';
import axios from 'axios'
import useAuth from '../../hooks/useAuth';
import Loader from "react-js-loader";
import Swal from 'sweetalert2'


function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                borderRadius: 1,
                fontSize: '1rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

const Purchase = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams();
    const { user } = useAuth()
    const formReset = useRef()
    const [load, setLoad] = useState(false)
    const [load2, setLoad2] = useState(false)

    useEffect(() => {
        setLoad(true)
        axios.get(`https://powerful-mountain-89009.herokuapp.com/selectedItem/${id}`)
            .then(res => {
                setProduct(res.data)
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                setLoad(false)
            })
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        setLoad2(true)
        const productWithoutId = { ...product }
        delete productWithoutId._id
        axios.post('https://powerful-mountain-89009.herokuapp.com/placeOrder', { ...data, ...productWithoutId })
            .then(res => {
               
                if (res.data.acknowledged) {
                    setLoad2(false)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'order Placed Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    formReset.current.reset()
                }
            })
    }

    const inputStyle = {
        width: '100%',
        margin: '5px 0'
    }
    return (
        <Box>
            <Box sx={{ mb: { md: 30, xs: 5 }, background: 'linear-gradient(108deg, rgba(191,191,191,1) 0%, rgba(240,240,240,1) 49%, rgba(228,227,227,1) 100%)' }}>
                <Navigation></Navigation>
                <Container>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { sm: 'repeat(1, 1fr)', md: "5fr 5fr" } }}>
                        <Item sx={{ pt: 5, textAlign: 'center', pb: { md: 15 } }}>
                            {load && <Loader type="spinner-cub" bgColor={"tomato"} size={50} />}
                            <img width="70%" src={product?.img} alt="" />
                        </Item>
                        <Item sx={{ pr: { md: 18 }, py: 0 }}>
                            <Box sx={{ bgcolor: 'white', height: '100%', width: { md: '85%' } }}>

                                <form
                                    ref={formReset}
                                    style={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}
                                    onSubmit={handleSubmit(onSubmit)}>

                                    <Box sx={{ px: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                                            <Typography
                                                variant='h6'
                                                sx={{
                                                    pt: 2,
                                                    textTransform: 'uppercase',
                                                    fontWeight: 'bold'
                                                }}>{product?.name}</Typography>
                                            <Typography
                                                variant='h6'
                                                sx={{
                                                    pt: 2,
                                                    color: 'coral',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 'bold'
                                                }}>${product?.price}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="caption"
                                                sx={{ display: 'block', color: 'lightSkyBlue' }}>
                                                {product?.title}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                sx={{ color: 'gray', display: 'block' }}>
                                                {product?.details}
                                            </Typography>

                                            <Box sx={{ display: 'flex', my: 1 }}><Typography variant='h6' sx={{ fontSize: '16px', color: 'gray' }}>Rating:</Typography> <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /></Box>
                                        </Box>
                                        {load2 && <Loader type="spinner-cub" bgColor={"tomato"} size={50} />}

                                        <TextField
                                            style={inputStyle}
                                            defaultValue={user.displayName}
                                            id="standard-basic"
                                            label="Name"
                                            variant="outlined"
                                            {...register("user", { required: true })} />
                                        {errors.user && <span>This field is required</span>}

                                        <TextField
                                            style={inputStyle}
                                            defaultValue={user.email}
                                            id="standard-basic"
                                            label="Email"
                                            variant="outlined"
                                            {...register("email", { required: true })} />
                                        {errors.email && <span>This field is required</span>}

                                        <TextField
                                            type='tel'
                                            style={inputStyle}
                                            id="standard-basic"
                                            variant="outlined"
                                            label="Phone Number"
                                            {...register("phone", { required: true })} />
                                        {errors.phone && <span>This field is required</span>}

                                        <TextField
                                            id="standard-basic"
                                            variant="outlined"
                                            label="Address"
                                            style={inputStyle}
                                            {...register("address", { required: true })} />
                                        {errors.address && <span>This field is required</span>}


                                        <TextField
                                            multiline
                                            label="Description"
                                            style={inputStyle}
                                            id="standard-basic"
                                            variant="outlined"
                                            {...register("description", { required: true })} />
                                        {errors.description && <span>This field is required</span>}
                                    </Box>
                                    <input style={{ color: 'white', width: '100%', border: 'none', padding: '10px 15px', background: 'tomato', cursor: 'pointer' }} type="submit" value="Place Order" />
                                </form>
                            </Box>
                        </Item>
                    </Box>
                </Container>
            </Box>
            <Footer></Footer>
        </Box>
    );
};

export default Purchase;