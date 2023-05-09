import React from 'react';
import { Stack } from '@mui/material';
import { PropTypes } from 'prop-types';
import { categories } from '../utilis/constants';

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direct="row"
    sx={{
      overflowY: 'auto',
      height: {
        sx: 'auto', md: '95%',
      },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
      <button
        key={category.name}
        className="category-btn"
        onClick={() => { setSelectedCategory(category.name); }}
        type="button"
        style={{
          background: category.name === selectedCategory && '#fc1503', color: '#000',
        }}
      >
        <span style={{
          color: category.name === selectedCategory ? 'black' : 'red',
          marginRight: '15px',
        }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? '1' : '0.8',
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

SideBar.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func.isRequired,
};

SideBar.defaultProps = {
  selectedCategory: 'New',
};

export default SideBar;
