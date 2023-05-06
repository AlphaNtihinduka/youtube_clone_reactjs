import React from 'react';
import { Box, Stack } from '@mui/material';
// import { PropTypes } from 'prop-types'

const Videos = ({videos}) => {
  console.log(videos)
   return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => {
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <VideoCard video={item}/>}
        </Box>
      })}
    </Stack>
   )
}
 
  // <div>Videos</div>

// Videos.propType = {
//   videos: PropTypes.string
// }

export default Videos;
