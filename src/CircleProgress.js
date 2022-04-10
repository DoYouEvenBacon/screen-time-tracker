import React , { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function CircleProgress(props) {
    const [progress, setProgress] = useState(100);
    const [remainingTime, setRemainingTime] = useState('0:00:00');

    React.useEffect(() => {
        let progressPercentage = props.trackingTimer / (parseInt(props.duration) * 60) * 100;
        let remainingHours = parseInt(props.trackingTimer / 3600);
        let remainingMinutes = (parseInt(props.trackingTimer / 60)) % 60;
        let remainingSeconds = props.trackingTimer % 60;
        
        setProgress(progressPercentage);
        setRemainingTime(`${remainingHours}:${remainingMinutes < 10 ? '0' : ''}${remainingMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`);
        //{`${props.trackingTimer}`}
    });
    return(
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant='determinate' value={progress} size={'25em'} />
            <Box
                sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}
            >
                <Stack spacing={0} justifyContent='center' alignItems='center' direction='column'>
                    <Typography
                        variant='h5'
                        component='div'
                        color='text.primary'>
                            {props.currentTime}
                    </Typography>
                    <Typography
                        variant='h6'
                        component='div'
                        color='text.secondary'>
                            {remainingTime}
                    </Typography>
                    <Typography
                        variant='h6'
                        component='div'
                        color='text.secondary'>
                            {props.endTime}
                    </Typography>
                </Stack>
                
            </Box>
        </Box>
    );
}

export default CircleProgress;