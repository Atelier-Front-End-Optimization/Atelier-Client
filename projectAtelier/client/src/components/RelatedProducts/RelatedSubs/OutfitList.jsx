import OutfitCard from './OutfitCard.jsx';
import { Box } from '@mui/material/';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import AddOutfit from './AddOutfit.jsx';
import '../../../index.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function OutfitList({ currentProduct }) {
  const [outfit, setOutfit] = useState([null]);
  // console.log(outfit)
  return (
    <div>
      <div>Outfit List</div>
      <Box className="carousel-box">
        <Carousel itemClass="carousel-item" responsive={responsive}>
          {outfit.map((product) => {
            if (!product) {
              return <AddOutfit />;
            } else {
              return <OutfitCard key={product.id} handleClick={handleClick} />;
            }
          })}
        </Carousel>
      </Box>
    </div>
  );
}

export default OutfitList;
