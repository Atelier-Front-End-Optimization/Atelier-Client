import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SizeSelect = () => {
  return (
      <FormControl sx={{ m: 1, minWidth: 250, minHeight: 250 }}>
      <InputLabel id="demo-simple-select-helper-label">SELECT SIZE</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        // value={'SELECT SIZE'}
        // label="SELECT SIZE"
        // onChange={handleChange}
      >
        <MenuItem></MenuItem>
        <MenuItem value={'small'}>Small</MenuItem>
        <MenuItem value={'medium'}>Medium</MenuItem>
        <MenuItem value={'large'}>Large</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SizeSelect;
