import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const QuantitySelect = () => {

  return (

    <FormControl sx={{ m: 1, minWidth: 150, minHeight: 250 }} >
        <InputLabel id="demo-simple-select-helper-label">1</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          // value={'SELECT SIZE'}
          // label="SELECT SIZE"
          // onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>

  )
}

export default QuantitySelect;