import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';

import introVideo from '../Videos/SIBI-A.mp4';


export default function MediaCover() {
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      <Card component="li" sx={{ minWidth: 300, minHeight: 600, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            controls
          >
            <source
              src={introVideo}
              type="video/mp4"
            />
          </video>
        </CardCover>
        
      </Card>
    </Box>
  );
}
