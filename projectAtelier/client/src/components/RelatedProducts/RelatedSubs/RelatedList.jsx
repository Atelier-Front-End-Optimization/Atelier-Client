/* eslint-disable react/prop-types */

import { Box } from '@mui/material/';
import Carousel from 'react-multi-carousel';
import RelatedCard from './RelatedCard.jsx';
import 'react-multi-carousel/lib/styles.css';
import AddOutfit from './AddOutfit.jsx';
import Stack from '@mui/material/Stack';
import '../../../index.css';


const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 9000, min: 1500 },
  //   items: 4,
  // },
  desktop: {
    breakpoint: { max: 9000, min: 1024 },
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
const outfitResponsive = {

  // desktop: {
  //   breakpoint: { max: 2500, min: 1500 },
  //   items: 3,
  // },
  tablet: {
    breakpoint: { max: 2500, min: 1024 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
  },
};

function RelatedList({
  currentProduct,
  setProduct,
  products,
  list,
  relatedClick
}) {

  //set the current product when a related card is clicked
  function handleClick(id) {
    relatedClick(id);
  }

  function addOutfit(product) {
    let ids = [];
    for (let obj of products) {
      if (obj) {
        ids.push(Object.values(obj)[0]);
      }
    }
    if (ids.length === 0 || !ids.includes(product.id)) {
      setProduct((products) => [...products, product]);
    }
    console.log(products)
  }

  if (list === 'related') {
    return (
      <Box sx={{maxWidth: '1360px', margin: '0 auto' }}>
      <div className="related-outfit-header" style={{fontSize:'20px'}}>Related Products</div><br></br>
        <Box className="carousel-box">
          <Carousel
            itemClass="carousel-item"
            responsive={responsive}
            draggable={false}
          >
            {products.map((product) => {
              return (
                <RelatedCard
                  key={product.id}
                  product={product}
                  currentProduct={currentProduct}
                  handleClick={handleClick}
                  list={list}
                  setProduct={setProduct}
                  products={products}
                />
              );
            })}
          </Carousel>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box sx={{maxWidth: '1360px', margin: '0 auto' }}>
        <br></br><div style={{fontSize:'20px'}}className="related-outfit-header">Your Outfit</div> <br></br>
        <Stack className="outfit-stack" direction="row" spacing={8}>
          <AddOutfit handleClick={addOutfit} currentProduct={currentProduct} />
          <Box className="carousel-outfit">
            <Carousel
              className="carousel"
              itemClass="carousel-item-outfit"
              responsive={outfitResponsive}
              draggable={false}
              partialVisible={false}
            >
              {products.map((product) => {
                console.log(product)
                return (
                  <RelatedCard
                    key={product.id}
                    product={product}
                    currentProduct={currentProduct}
                    handleClick={handleClick}
                    list={list}
                    setProduct={setProduct}
                    products={products}
                  />
                );
              })}
            </Carousel>
          </Box>
        </Stack>
        </Box>
    );
  }
}

export default RelatedList;
