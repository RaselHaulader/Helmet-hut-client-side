import { Container, Typography } from '@mui/material';
import { Box, typography } from '@mui/system';
import React from 'react';
import featureImg from '../../../images/feature.jpg'

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
const Feature = () => {
    return (
        <Box>
            <Container>
                <Typography variant='h4' sx={{ my: 12, textAlign: "center" }}>Helmet Features</Typography>
                <Box
                    sx={{
                        display: 'grid',
                        columnGap: 3,
                        rowGap: 1,
                        gridTemplateColumns: {md:'repeat(2, 1fr)', sm:'repeat(1, 1fr)',xs:'repeat(1, 1fr)'},
                    }}
                >
                    <Item sx={{pt:10}}>
                        <Box
                            sx={{
                                display: 'grid',
                                columnGap: 3,
                                rowGap: 1,
                                gridTemplateColumns: 'repeat(2, 1fr)',
                            }}
                        >
                            <Item>
                                <Box sx={{display:'flex'}}>
                                    <Box sx={{color:'tomato', mr:2}}><i class="fas fa-check"></i></Box>
                                    <Box >
                                        <Typography variant="h6">Ultra durability</Typography>
                                        <Typography variant="caption">lorem jfvf everv evervf evev everv erv erfv erfvefr vefr v erv  gth revg 4etvrbvre tbetb eb tbrtbgr</Typography>
                                    </Box>
                                </Box>
                            </Item>
                            <Item>
                                <Box sx={{display:'flex'}}>
                                    <Box sx={{color:'tomato', mr:2}}><i class="fas fa-check"></i></Box>
                                    <Box >
                                        <Typography variant="h6">Ultra durability</Typography>
                                        <Typography variant="caption">lorem jfvf everv evervf evev everv erv erfv erfvefr vefr v erv  gth revg 4etvrbvre tbetb eb tbrtbgr</Typography>
                                    </Box>
                                </Box>
                            </Item>
                            <Item>
                                <Box sx={{display:'flex'}}>
                                    <Box sx={{color:'tomato', mr:2}}><i class="fas fa-check"></i></Box>
                                    <Box >
                                        <Typography variant="h6">Ultra durability</Typography>
                                        <Typography variant="caption">lorem jfvf everv evervf evev everv erv erfv erfvefr vefr v erv  gth revg 4etvrbvre tbetb eb tbrtbgr</Typography>
                                    </Box>
                                </Box>
                            </Item>
                            <Item>
                                <Box sx={{display:'flex'}}>
                                    <Box sx={{color:'tomato', mr:2}}><i class="fas fa-check"></i></Box>
                                    <Box >
                                        <Typography variant="h6">Ultra durability</Typography>
                                        <Typography variant="caption">lorem jfvf everv evervf evev everv erv erfv erfvefr vefr v erv  gth revg 4etvrbvre tbetb eb tbrtbgr</Typography>
                                    </Box>
                                </Box>
                            </Item>
                           
                        </Box>
                    </Item>
                    <Item>
                        <img width="100%" src={featureImg} alt="" />
                    </Item>
                </Box>
            </Container>
        </Box>
    );
};

export default Feature;