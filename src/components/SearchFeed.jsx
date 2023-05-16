import React, { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import fetchFromAPI from '../utilis/fetchFromAPI';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
      setVideos(data?.items || []);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: 'white',
        }}
      >
        Search Results for:
        {}
        <span
          style={{
            color: '#f31503',
            marginLeft: '10px',
          }}
        >
          {searchTerm}
        </span>
        {' '}
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>

  );
};

export default SearchFeed;
