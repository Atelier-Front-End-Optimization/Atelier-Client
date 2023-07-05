import { Box } from '@mui/material/';
import Carousel from 'react-multi-carousel';
const responsive = {
  evenBiggerDesktop: {
    breakpoint: { max: 2500, min: 2000 },
    items: 5,
  },
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 2000, min: 1500 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1500, min: 1024 },
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

function ImagesCarousel({photos, imagesClick}) {
  function handleClick() {
    imagesClick()
  }

  return (
    <Box className='images-carousel-box'>
      <div>I was hovered</div>
      <Carousel className='images-carousel' responsive={responsive}>
        {photos.map((photo) => {
          <img src={photo}></img>
        })}
      </Carousel>
    </Box>
  )
}

export default ImagesCarousel;