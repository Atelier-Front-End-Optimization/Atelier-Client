/* eslint-disable no-unused-vars */
import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const QuantitySelect = ({}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 150, minHeight: 250 }}>
      <InputLabel id="quantitySelect">1</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="quantitySelect"
      >
        {}
        <MenuItem></MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>

      </Select>
    </FormControl>
  );
};

export default QuantitySelect;
