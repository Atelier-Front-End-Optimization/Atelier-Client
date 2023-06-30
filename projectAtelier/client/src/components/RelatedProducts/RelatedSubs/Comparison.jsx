import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import convertPrice from '../../../Middleware/convertPrice.js';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import '../../../index.css';


function Icon ({feature}) {
  if (feature) {
  return <CheckIcon sx={{color:'green'}}/>
 } else {
  return <CloseIcon sx={{color:'red'}}/>
 }

}
function Comparison ({product, currentProduct}) {

  function matchFeature(features, target) {
    let result = '';
    for (let feature of features) {
      if (feature.feature === target) {
        result = feature.value;
      }
      return result;
    }
  }


  return (
    <Table className='table'>
      <TableHead className='table-head'>
        <TableRow>
          <TableCell className='table-cell' align='center' id='name'>{currentProduct.name}</TableCell>
          <TableCell className='table-cell' align='center'><code>&#8212;</code></TableCell>
          <TableCell align='center' id='name'>{product.name}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell className='table-cell' align='center'>{convertPrice(currentProduct.default_price)}</TableCell>
          <TableCell className='table-cell' align='center'>Price</TableCell>
          <TableCell align='center'>{convertPrice(product.default_price)}</TableCell>
        </TableRow>
        {product.features.map((feature) => {
          let currentProductFeature = matchFeature(currentProduct.features, feature.feature);
          return <TableRow key={feature.feature}>
            <TableCell className='table-cell' align='center'>
                <Icon feature={currentProductFeature}/>
                <div>{currentProductFeature}</div>
            </TableCell>
            <TableCell className='table-cell' align='center'>{feature.feature}</TableCell>
            <TableCell align='center'>
              <Icon feature={feature.value}/>
              <div>{feature.value}</div>
            </TableCell>
          </TableRow>
        })}
        {currentProduct.features.map((feature) => {
          let selectedProductFeature = matchFeature(product.features, feature.feature);
          return <TableRow key={feature.feature}>
            <TableCell className='table-cell' align='center'>
              <Icon feature={feature.value}/>
              <div>{feature.value}</div>
            </TableCell>
            <TableCell className='table-cell' align='center'>{feature.feature}</TableCell>
            <TableCell align='center'>
              <Icon feature={selectedProductFeature}/>
              <div>{selectedProductFeature}</div>
            </TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>
  );
}

export default Comparison;