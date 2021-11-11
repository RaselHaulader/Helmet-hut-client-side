import { Container, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import { useParams } from 'react-router';
import axios from 'axios'


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


    useEffect(() => {

        axios.get(`http://localhost:5000/selectedItem/${id}`)
            .then(res => setProduct(res.data))
        window.scroll(0, 0)
    }, [])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const inputStyle = {
        width: '100%',
        border: '1px solid rgb(207, 207, 207)',
        padding: '7px 0',
        margin: '5px 0'
    }
    return (
        <Box>
            <Box sx={{ mb: { md: 30, xs: 5 }, background: 'linear-gradient(108deg, rgba(191,191,191,1) 0%, rgba(240,240,240,1) 49%, rgba(228,227,227,1) 100%)' }}>
                <Navigation></Navigation>
                <Container>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { sm: 'repeat(1, 1fr)', md: "5fr 5fr" } }}>
                        <Item sx={{ pt: 5, textAlign: 'center', pb: { md: 15 } }}>
                            <img width="70%" src={product?.img} alt="" />
                        </Item>
                        <Item sx={{ pr: { md: 18 }, py: 0 }}>
                            <Box sx={{ bgcolor: 'white', height: '100%', width: { md: '85%' } }}>
                                <form style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onSubmit={handleSubmit(onSubmit)}>
                                    <Box sx={{ px: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                                            <Typography variant='h6' sx={{ pt: 2, textTransform: 'uppercase', fontWeight: 'bold' }}>{product?.name}</Typography>
                                            <Typography variant='h6' sx={{ pt: 2, textTransform: 'uppercase', fontWeight: 'bold' }}>${product?.price}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="caption" sx={{ display: 'block' }}>
                                                {product?.title}
                                            </Typography>
                                            <Typography variant="caption" sx={{ display: 'block' }}>
                                                {product?.details}
                                            </Typography>

                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        </Box>
                                        <Typography variant='p'>Address</Typography>
                                        <input style={inputStyle} {...register("exampleRequired", { required: true })} /> <br />
                                        <Typography variant='p'>Address</Typography>
                                        <input style={inputStyle} {...register("exampleRequired", { required: true })} /> <br />
                                        <Typography variant='p'>Address</Typography>
                                        <input style={inputStyle} {...register("exampleRequired", { required: true })} /> <br />
                                        <Typography variant='p'>Address</Typography>
                                        <input style={inputStyle} {...register("exampleRequired", { required: true })} /> <br />
                                        {errors.exampleRequired && <span>This field is required</span>}
                                    </Box>
                                    <input style={{ width: '100%', border: 'none', padding: '10px 15px', background: 'tomato' }} type="submit" />
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