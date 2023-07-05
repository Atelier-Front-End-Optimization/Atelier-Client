import { Box } from '@mui/material/';
import Carousel from 'react-multi-carousel';
const responsive = {

  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 0 },
    items: 3,
  },
};

function ImagesCarousel({photos, imagesClick}) {
  function handleClick(event) {
    imagesClick(event.target.src);
  }

  return (
    <Box
    className='images-carousel-box'>
      <Carousel
      className='images-carousel' responsive={responsive} draggable={false} infinite={true} centerMode={false} >
        {photos.map((photo, index) => {
          return (
          <img className='tiny-image' onClick={handleClick} key={index} height="50px" width='50px' src={photo}></img>
          )
        })}
      </Carousel>
    </Box>
  )
}

export default ImagesCarousel;