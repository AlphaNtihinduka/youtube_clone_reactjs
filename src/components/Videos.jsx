import React from 'react';
import { Box, Stack } from '@mui/material';
import { PropTypes } from 'prop-types';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos, direction }) => {
  if (!videos) return 'Loading';
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item) => (
        <Box key={item.id}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.snippet.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

Videos.propTypes = {
  videos: PropTypes.string,
  direction: PropTypes.string,
};

Videos.defaultProps = {
  videos: [],
  direction: '',
};

export default Videos;
