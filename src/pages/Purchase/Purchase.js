import { Container, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../images/helmet1.png'
import { useForm } from "react-hook-form";
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';


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
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { sm: 'repeat(1, 1fr)', md: "5fr 5fr" }
                    }}>
                        <Item sx={{
                            pt: 5,
                            textAlign: 'center',
                            pb: { md: 15 }
                        }}>
                            <img width="70%" src={img} alt="" />
                        </Item>
                        <Item sx={{ pr: { md: 18 }, py: 0 }}>
                            <Box sx={{
                                bgcolor: 'white',
                                height: '100%',

                                width: { md: '85%' }
                            }}>

                                <form style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onSubmit={handleSubmit(onSubmit)}>
                                    <Box sx={{ px: 2 }}>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}>
                                            <Typography variant='h6' sx={{ pt: 2, textTransform: 'uppercase', fontWeight: 'bold' }}>crimson thunder</Typography>
                                            <Typography variant='h6' sx={{ pt: 2, textTransform: 'uppercase', fontWeight: 'bold' }}>$249</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="caption" sx={{ display: 'block' }}>
                                                Be valentine
                                            </Typography>
                                            <Typography variant="caption" sx={{ display: 'block' }}>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quidem alias maxime officia enim quos.
                                            </Typography>

                                            <Rating
                                                name="half-rating-read"
                                                sx={{
                                                    mt: 1,
                                                    fontSize: 14,
                                                }}
                                                defaultValue={4.5}
                                                precision={0.5}
                                                readOnly />
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