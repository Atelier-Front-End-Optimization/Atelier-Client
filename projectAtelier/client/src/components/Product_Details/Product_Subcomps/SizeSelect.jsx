import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SizeSelect = ({productSku}) => {

  let producSkuSet = new Set();

  for (const key in productSku) {
    producSkuSet.add(productSku[key].size);
  }

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
         {Array.from(producSkuSet).map((size, index) => (
  <MenuItem key={index} value={size}>
    {size}
  </MenuItem>
  ))}
      </Select>
    </FormControl>
  );
};

export default SizeSelect;
