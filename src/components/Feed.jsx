// import React, { useState, useEffect } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import { Videos } from './Videos';

const Feed = () => (
  <Stack
    sx={{
      flexDirection: { sx: 'column', md: 'row' },
    }}
  >

    <Box
      sx={{
        height: { sx: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2 },
      }}
    >
      <SideBar />
      <Typography
        variant="body2"
        className="copyright"
        sx={{
          mt: 1.5,
          color: '#fff',
        }}
      >
        Copyright. This is designed by Alpha
      </Typography>
    </Box>

    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: 'white',
        }}
      >
        {' '}
        New
        <span
          style={{
            color: '#f31503',
          }}
        >
          Videos
        </span>
      </Typography>
      <Videos videos={[]}/>
    </Box>

  </Stack>
);

export default Feed;
