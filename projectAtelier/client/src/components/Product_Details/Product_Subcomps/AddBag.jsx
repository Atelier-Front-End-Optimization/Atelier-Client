/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const AddBag = () => {
  return (
    <Button
    sx={{ m: 1, minWidth: 300, minHeight: 60, color:'gray', borderColor:'gray'}} variant="outlined" endIcon={<AddIcon />}>
      ADD TO BAG
    </Button>
  );
};

export default AddBag;
