import RelatedCard from './RelatedCard.jsx';
import Stack from '@mui/material/Stack';


function CardBundle({bundle, currentProduct, handleClick}) {
  return (
    <Stack direction='row'>
      {bundle.map((relatedProduct) => {
        return <RelatedCard key={relatedProduct.id} product={relatedProduct} currentProduct={currentProduct} handleClick={handleClick} />
      })}
    </Stack>
  );
}

export default CardBundle;