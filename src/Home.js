import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import TimePicker from './TimePicker.js';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Home() {
    const [tracking, setTracking] = useState(false);

    const handleTrackClick = () => {
        setTracking(!tracking);
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                </Grid>

                <Grid container item xs={8} spacing={1}>
                    <Grid id={'clockGrid'} item xs={12}>
                        <Item>

                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item>
                            <TimePicker/>
                            <Stack spacing={2} direction="row">
                                <Button onClick={handleTrackClick} variant="contained">
                                    {
                                        tracking ? 'Stop' : 'Start'
                                    }
                                </Button>
                            </Stack>
                        </Item>
                        
                        
                        
                    </Grid>
                </Grid>

                <Grid item xs={2}>
                </Grid>
            </Grid> 
        </Box>
    );
}

export default Home;