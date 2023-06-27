// eslint-disable-next-line no-unused-vars
import {useState, useEffect} from 'react';
import Box from '@mui/material/Grid'

const ProductStyles = ({styles, photos}) => {

  return (
<Box>
  <ul>
    {photos.map((photo) => {
      return (
        <button key={Math.random()} type="button">
            <img
              src={photo.url}
              alt="Product Image"
              style={{ borderRadius: '100%', width: '75px', height: '75px', borderColor:'white'}}
            />
          </button>

    )}
  )}
  </ul>
  </Box>
  )
  }


export default ProductStyles;