import Modal from '@mui/material/Modal';
import React from 'react';
import Comparison from './Comparison.jsx';
import '../../../index.css';

function ComparisonModal({open, close, product, currentProduct}) {
  // console.log('PRODUCT ',   product);
  // console.log('CURRENT PRODUCT ',   currentProduct);


  return (
    <Modal open={open} onClose={close}>
        <div aria-hidden='true' className="comparison-modal" >
          <Comparison product={product} currentProduct={currentProduct} />
        </div>
    </Modal>
  );
}

export default ComparisonModal;