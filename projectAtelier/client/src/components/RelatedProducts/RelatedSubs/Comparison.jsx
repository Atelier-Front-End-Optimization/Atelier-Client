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
  if (feature === true) {
  return <CheckIcon sx={{color:'green'}}/>
 } else if (!feature) {
  return <CloseIcon sx={{color:'red'}}/>
 } else {
  return <div>{feature}</div>
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

  function getFeatures(selectedProduct, currentProduct) {
    let features = [];
    for (let feature of currentProduct) {
      let featureName = feature.feature;
      let featureValue = feature.value;
      features.push({feature: {name: featureName, value1: featureValue, value2: null}})
    }
    for (let feature of selectedProduct) {
      let featureName = feature.feature;
      let featureValue = feature.value;
      for (let i = 0; i < features.length; i++) {
        if (features[i].feature.name === featureName) {
          features[i].feature.value2 = featureValue;
          break;
        } else if (i === (features.length - 1)) {
          features.push({feature: {name: featureName, value1: null, value2: featureValue}})

        }
      }
    }
    return features;
  }
let features = getFeatures(product.features, currentProduct.features)

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
        {features.map((product, index) => {
          return <TableRow key={index}>
            <TableCell className='table-cell' align='center'>
                <Icon feature={product.feature.value1}/>
            </TableCell>
            <TableCell className='table-cell' align='center'>{product.feature.name}</TableCell>
            <TableCell align='center'>
              <Icon feature={product.feature.value2}/>
            </TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>
  );
}

export default Comparison;