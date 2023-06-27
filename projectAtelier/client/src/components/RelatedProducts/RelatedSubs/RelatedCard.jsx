//import Card from './Card.jsx';
import Box from '@mui/material/Box';
import Container from '@mui/system/Container';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';

function RelatedCard({product, handleClick}) {
  function relatedClick() {
    handleClick(product.id);
  }

  return (

      <Card onClick={relatedClick} sx={{width:250, height:150, p:2, m:2, flexBasis:'auto', flexShrink: 0}}>
          <div>Name: {product.name}</div>
          <div>Category: {product.category}</div>
          <div>Price: {product.default_price}</div>
          <Rating readOnly value={product.average} precision={0.25}></Rating>
      </Card>


  )
}

export default RelatedCard;