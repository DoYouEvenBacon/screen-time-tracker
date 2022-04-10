import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Backdrop from '@mui/material/Backdrop';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import CircleProgress from './CircleProgress.js';
import BackdropCard from './BackdropCard.js';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Home() {
    const [tracking, setTracking] = useState(false);
    const [trackingTimer, setTrackingTimer] = useState(0); //stored as seconds
    const [duration, setDuration] = useState('60'); //minutes
    const [currentTime, setCurrentTime] = useState('00:00:00 AM');
    const [endTime, setEndTime] = useState('00:00:00 AM');
    const [backdropOpen, setBackdropOpen] = useState(false);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('info');
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        setTrackingTimer(parseInt(duration) * 60);
        let end = new Date();
        end.setMinutes(end.getMinutes() + parseInt(duration));
        setEndTime(end.toLocaleTimeString());

        const timer1 = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
            if(tracking === false){
                let end = new Date();
                end.setMinutes(end.getMinutes() + parseInt(duration));
                setEndTime(end.toLocaleTimeString());
            }
        }, 1000);

        return () => {
            clearInterval(timer1);
            
        };
    }, [tracking, endTime]);

    useEffect(() => {
        if(tracking){
            if(trackingTimer > 0){
                setTrackingTimer(t => t - 1);
            }
            else{ //countdown finished
                setTracking(false);
                setBackdropOpen(true);
            }
        }
    }, [currentTime, duration]);

    const handleTrackClick = () => {
        if(parseInt(duration) > 0){
            setTrackingTimer(parseInt(duration) * 60); //duration is in minutes, trackingTimer is in seconds
            setTracking(!tracking);

            if(parseInt(duration) === 69 && !tracking){
                setAlertSeverity('info');
                setAlertTitle('nice');
                setAlertMessage('');
                setSnackbarOpen(true);
            }
        }
        else{
            setAlertSeverity('error');
            setAlertTitle('Invalid Duration');
            setAlertMessage('Duration must be in minutes greater than 0.');
            setSnackbarOpen(true);
        }
    };
    const handleDurationChange = (e) => {
        if(!isNaN(parseInt(e.target.value))){
            setDuration(e.target.value); 
            setTrackingTimer(parseInt(e.target.value) * 60);
        }
    };

    const handleBackdropClose = () => {
        setBackdropOpen(false);
    };
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                </Grid>

                <Grid container item xs={8} spacing={1}>
                    <Grid id={'clockGrid'} item xs={12}>
                        <Item>
                            <CircleProgress currentTime={currentTime} endTime={endTime} duration={duration} trackingTimer={trackingTimer}/>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item>
                            <TextField 
                                type='number' 
                                label='Duration (minutes)' 
                                value={duration} 
                                InputProps={{ inputProps: { min: 0, /*step: 1*/ } }}
                                onChange={handleDurationChange} 
                                disabled={tracking}/>
                            <Stack spacing={2} justifyContent="center" alignItems="center" direction="row">
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

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={backdropOpen}
                onClick={handleBackdropClose}
            >
                <BackdropCard/>
            </Backdrop>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity={alertSeverity} onClose={() => {setSnackbarOpen(false)}}>
                    <AlertTitle>{alertTitle}</AlertTitle>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default Home;