import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function BackdropCard() {
    return (
        <Card sx={{ minWidth: 550 }}>
            <CardContent>
                <Typography variant='h3' gutterBottom>
                    Time's Up!
                </Typography>
                <Typography variant="body1">
                    Hydrate, stand up, stretch 
                </Typography>
                <Typography variant="body1">
                    Look outside the window at something far away 
                </Typography>
            </CardContent>
            <CardActions>
                <Button>Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default BackdropCard;