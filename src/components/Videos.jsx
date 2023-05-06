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
      {videos.map((item, id) => {
        <Box key={idx}>

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
