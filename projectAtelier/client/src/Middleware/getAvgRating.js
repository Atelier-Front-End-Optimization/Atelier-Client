import axiosConfig from './axiosConfig.js';
import axios from 'axios';
import averageRating from './averageRating.js';

function getAvgRating(id) {
  console.log(id)
  let options = axiosConfig;
  options.params = {};
  options.params.product_id = id;
  return new Promise ((resolve, reject) => {
    axios.get(options.url + '/reviews/meta', options).then((response) => {
      let average = averageRating(response.data.ratings);
      resolve(Number(average));
  }).catch((err) => {
    console.log('ERROR IN GETTING AVERAGE REVIEWS ', err);
    reject(err);
  })
});
}


export default getAvgRating;