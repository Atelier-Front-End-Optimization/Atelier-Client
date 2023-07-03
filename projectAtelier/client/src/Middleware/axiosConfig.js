
// const axiosGet = (endpoint) => {
//   return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfe2305${endpoint}`);
// };



  const axiosConfig = {
    headers: {
      Authorization: import.meta.env.VITE_API_TOKEN,
    },
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe',
  }

//await line 17
export default axiosConfig;