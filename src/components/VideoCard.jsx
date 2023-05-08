import { Card, CardMedia } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { demoVideoUrl } from '../utilis/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  console.log(videoId, snippet);
  return (
    <Card>
      <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            height: 180, width: 358,
          }}
        />
      </Link>
    </Card>

  );
};

VideoCard.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string.isRequired,
    }).isRequired,
    snippet: PropTypes.shape({
      thumbnails: PropTypes.shape({
        high: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default VideoCard;
