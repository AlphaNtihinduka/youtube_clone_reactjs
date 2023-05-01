import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utilis/constants';

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
      <button key={category.name} className="category-btn" type="button">
        <span>{category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}

  </Stack>
);

export default SideBar;
