import React, { useState, useEffect } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import fetchFromAPI from '../utilis/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
      setVideos(data?.items || []);
    };
    fetchData();
  }, [selectedCategory]);

  return (
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
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
          {selectedCategory}
          <span
            style={{
              color: '#f31503',
              marginLeft: '10px',
            }}
          >
            Videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>

    </Stack>
  );
};

export default Feed;
