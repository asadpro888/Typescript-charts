'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

const pieParams = { height: 200, margin: { right: 5 } };
const palette = ['black', 'purpale', 'green'];

export default function PieColor() {
  return (
    <div className='flex flex-wrap bg-emerald-400 rounded-md w-[70%] ml-30 h-[200px]'>
<Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
        <Typography>Default</Typography>
        <PieChart
          series={[{ data: [{ value: 80 }, { value: 10 }, { value: 10 }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>Palette</Typography>
        <PieChart
          colors={palette}
          series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>Item</Typography>
        <PieChart
          series={[
            { data: [{ value: 10, color: 'orange' }, { value: 19 }, { value: 40 }] },
          ]}
          {...pieParams}
        />
      </Box>
    </Stack>
    </div>
    
  );
}