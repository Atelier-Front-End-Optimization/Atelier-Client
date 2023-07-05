import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useState} from 'react';

const NewReview = () => {


////////////////////////////////////////////////////////
  return (
    <div>
      <Button
        style={{
          marginLeft: '30px',
          marginRight: '30px',
          marginBottom: '50px'
        }}
        variant='contained'
        size='small'
        // onClick={}
        endIcon={<AddIcon/>}
      >
        New Review
      </Button>
    </div>
  );
};

export default NewReview;