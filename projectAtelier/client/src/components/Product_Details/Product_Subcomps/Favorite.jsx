import react from 'react';
import Button from '@mui/material/Button';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const Favorite = () => {
  return (
    <Button
    style={{marginBottom:'8px'}}
    sx={{minWidth: 70, minHeight: 60, color:'gray', borderColor:'gray'}}
    variant="outlined" startIcon={<StarBorderOutlinedIcon />}></Button>
  );
};

export default Favorite;
