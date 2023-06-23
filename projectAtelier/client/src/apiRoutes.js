import axios from 'axios';

// const axiosGet = (endpoint) => {
//   return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfe2305${endpoint}`);
// };


const axiosGet = async (endpoint) => {

  const config = {
    headers: {
      Authorization: import.meta.env.VITE_API_TOKEN
    }
  }
  try {
	const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${endpoint}`, config);
  return response;
} catch (err) {
  console.error(err);
}
};
//await line 17
export default axiosGet;