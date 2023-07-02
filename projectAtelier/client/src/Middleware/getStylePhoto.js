import axios from 'axios';

const getStylePhoto = (productId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/styles`,
        {
          headers: {
            Authorization: import.meta.env.VITE_API_TOKEN2,
          },
        }
      )
      .then((response) => {
        console.log(response.data.results[0].photos[0]);
        resolve(response.data.results[0].photos[0].url);
      })
      .catch((error) => {
        console.log('ERROR IN MIDDLEWARE GET STYLE PHOTO');
        reject(error);
      });
  });
};
export default getStylePhoto;
