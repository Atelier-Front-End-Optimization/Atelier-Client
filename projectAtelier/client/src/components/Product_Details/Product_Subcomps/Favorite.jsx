import react from 'react';
import Button from '@mui/material/Button';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const Favorite = () => {
  return (
    <Button variant="outlined" startIcon={<StarBorderOutlinedIcon />}></Button>
  );
};

export default Favorite;
