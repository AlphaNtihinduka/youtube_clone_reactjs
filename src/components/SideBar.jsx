import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utilis/constants';

const selectedCategory = 'New';

const SideBar = () => (
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
        <span>{category.name}</span>
      </button>
    ))}

  </Stack>
);

export default SideBar;
