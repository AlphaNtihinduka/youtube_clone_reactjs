import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { CheckCircle } from '@mui/icons-material';
import {
  demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl,
} from '../utilis/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{
    width: { md: '320px', xs: '100%' },
    boxShadow: 'none',
    borderRadius: 0,
  }}
  >
    <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{
          height: 180, width: 358,
        }}
      />
    </Link>
    <CardContent
      sx={{
        backgroundColor: '#1e1e1e',
        height: '106px',
      }}
    >
      <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#fff">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle
            sx={{
              fontSize: 12, color: 'gray', ml: '5px',
            }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

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
      channelTitle: PropTypes.string.isRequired,
      channelId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default VideoCard;
