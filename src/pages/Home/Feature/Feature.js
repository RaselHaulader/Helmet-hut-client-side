import { Container, Typography } from '@mui/material';
import { Box, typography } from '@mui/system';
import React from 'react';
import featureImg from '../../../images/feature.jpg'

function Item(props) {
    const { sx, ...other } = props;
    console.log('feature');
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
const Feature = () => {
    return (
        <Box sx={{bgcolor:'#f7f6f4', py:5,mt:10}}>
            <Container>
                <Typography variant="h4" sx={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }}>helmet <Box sx={{ color: 'tomato', display: 'inline' }}> features</Box></Typography>
                <Box sx={{ textAlign: 'center', color: 'orange' }}><span>Quality</span></Box>
                <Box
                    sx={{
                        display: 'grid',
                        pt: 10,
                        columnGap: 3,
                        rowGap: 1,
                        gridTemplateColumns: { md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)', xs: 'repeat(1, 1fr)' },
                    }}
                >
                    <Item sx={{ pt: 10 }}>
                        <Box
                            sx={{
                                display: 'grid',
                                columnGap: 3,
                                rowGap: 1,
                                gridTemplateColumns: { md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)', xs: 'repeat(1, 1fr)' },
                            }}
                        >
                            <Item>
                                <Box sx={{ display: 'flex' }}>
                                    <Box sx={{ color: 'tomato', mr: 2 }}><i className="fas fa-check"></i></Box>
                                    <Box >
                                        <Typography variant="h6" >Ultra durability</Typography>
                                        <Typography variant="caption" sx={{ color: 'gray' }}>Front anti-fog, anti-scratch and broad visual field clear visor
                                            Heavily cushioned and very comfortable interior
                                            Aerodynamic design for exceptional stability</Typography>
                                    </Box>
                                </Box>
                            </Item>
                            <Item>
                                <Box sx={{ display: 'flex' }}>
                                    <Box sx={{ color: 'tomato', mr: 2 }}><i className="fas fa-check"></i></Box>
                                    <Box >
                                        <Typography variant="h6" >Water Resistance</Typography>
                                        <Typography variant="caption" sx={{ color: 'gray' }}>Construction is lightweight without reducing durability
                                            ISI approved helmet
                                            Normally helmet will feel little tight at first,</Typography>
                                    </Box>
                                </Box>
                            </Item>
                            <Item>
                                <Box sx={{ display: 'flex' }}>
                                    <Box sx={{ color: 'tomato', mr: 2 }}><i className="fas fa-check"></i></Box>
                                    <Box >
                                        <Typography variant="h6" >Scratch Proof </Typography>
                                        <Typography variant="caption" sx={{ color: 'gray' }}>Normally helmet will feel little tight at first, this meets safety requirements. The inner foam takes about 7-10 days to shape according to rider's head size</Typography>
                                    </Box>
                                </Box>
                            </Item>
                            <Item>
                                <Box sx={{ display: 'flex' }}>
                                    <Box sx={{ color: 'tomato', mr: 2 }}><i className="fas fa-check"></i></Box>
                                    <Box >
                                        <Typography variant="h6" >Reliability</Typography>
                                        <Typography variant="caption" sx={{ color: 'gray' }}>An ideal fit for riders who look for the classic MLG signature style and ease of an open face helmet with a face long visor.</Typography>
                                    </Box>
                                </Box>
                            </Item>
                        </Box>
                    </Item>
                    <Item   sx={{display:'flex', alignItems:'center'}}>
                        <img data-aos="zoom-in"  data-aos-anchor-placement="top-center" style={{borderRadius:'20px'}} width="100%" src={featureImg} alt="" />
                    </Item>
                </Box>
            </Container>
        </Box>
    );
};

export default Feature;