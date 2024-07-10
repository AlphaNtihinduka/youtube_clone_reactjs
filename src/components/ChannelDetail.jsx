import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import fetchFromAPI from '../utilis/fetchFromAPI';
import Videos from './Videos';

const ChannelDetail = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => data);
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 52%, rgba(9,9,121,1) 91%)',
          zIndex: 10,
          height: '300px',
        }}
        />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};
export default ChannelDetail;
