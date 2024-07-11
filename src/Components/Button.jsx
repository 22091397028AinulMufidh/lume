import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 2 } }}>
      <div className='mt-5 ml-2'>
        <Button variant="outlined" size="large">
          C
        </Button>
        <Button variant="outlined" size="large">
          D
        </Button>
        <Button variant="outlined" size="large">
          A
        </Button>
        <Button variant="outlined" size="large">
          E
        </Button>
      </div>
    </Box>
  );
}


