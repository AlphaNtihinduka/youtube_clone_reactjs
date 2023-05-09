import {
  Box, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utilis/constants';

const ChannelCard = ({ channelDetail }) => {
  console.log('channelDetail', channelDetail);
  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',

    }}
    >

      <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: '2px',
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography
            variant="h6"
            sx={{
              textDecoration: 'none',
            }}
          >
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: 12, color: 'gray', ml: '14px',
              }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount}
          <Typography>
            {parseInt(channelDetail?.statistics?.subscriberCount, 10).toLocaleString()}
            {' '}
            Subscribers
          </Typography>
        </CardContent>
      </Link>

    </Box>
  );
};

ChannelCard.propTypes = {
  channelDetail: PropTypes.shape({
    snippet: PropTypes.shape({
      thumbnails: PropTypes.shape({
        high: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
      channelId: PropTypes.string.isRequired,
    }).isRequired,
    statistics: PropTypes.shape({
      subscriberCount: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ChannelCard;
