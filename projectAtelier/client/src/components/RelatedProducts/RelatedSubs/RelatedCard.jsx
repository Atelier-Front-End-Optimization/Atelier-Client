import {useEffect, useState} from 'react';
import axios from 'axios';
import axiosConfig from '../../../axiosConfig.js';
//import Card from './Card.jsx';

function RelatedCard({product}) {

  return (
    <div>
      <div>Related Card ID: {product.id}</div>
      <div></div>
    </div>
  )
}

export default RelatedCard;