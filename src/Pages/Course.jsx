import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from "../Components/Button.jsx";
import Card from "../Components/Card.jsx";
import Menu from "../Components/Menu.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import CardGroup from "../Components/CardGroup.jsx";

function Course() {
    return (
        <>
             <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          
            <Grid item xs={3}>
              <Sidebar/>
            </Grid>
            <Grid item xs={9}>
            <CardGroup/>
            </Grid>
            <Grid item xs={6}>
                
            </Grid>
            <Grid item xs={6}>
                {/* <Card/> */}
            </Grid>
        </Grid>
        </Box>
        {/* <CardGroup/> */}
      </>
      
    )
}

export default Course