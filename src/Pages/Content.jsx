import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCover from '../Components/MediaCover';
import Navigation from '../Components/Navigation.jsx';
import Button from '../Components/Button.jsx';
import Card from '../Components/Card.jsx';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <MediaCover/>
            </Grid>
            <Grid item xs={4}>
              <div>

                <h3 className='font-bold text-xl'>Learning Rules</h3>
                <br />
                  <ol className='font-normal text-start ml-8'>
                    <li> 1. Play the video and understand it well.</li>
                    <li> 2. Repeat the video at least 10 times in order to understand the content well.</li>
                    <li> 3. Implement the movements without watching the video</li>
                </ol>
              </div>

              <div className='mt-12'>
              <h1 className='font-semibold'>Letter Sign Language</h1>
                    <Button/>
                </div>
            </Grid>
            <Grid item xs={6}>
                
            </Grid>
            <Grid item xs={6}>
                {/* <Card/> */}
            </Grid>
        </Grid>
        </Box>
    </>
  );
}
