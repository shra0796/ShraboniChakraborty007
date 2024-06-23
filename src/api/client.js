import axios from 'axios';
import {TOKEN} from '../utils/Keyword';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const client = axios.create({
  baseURL: 'https://api.hidromas.nl',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'hidromas-we-app-01~c^Dt0Oc32' 
  },
});


// export const getToken = async () => {
//   try {
//     const token = await AsyncStorage.getItem(TOKEN);
//     console.log('Token from AsyncStorage:', token); // Log the actual value
//     console.log('Parsed token:', JSON.parse(token));
//     return token;
//   } catch (error) {
//     console.error('Error while getting token from AsyncStorage', error);
//     return null;
//   }
// };

// export const clientTOken = axios.create({
//   baseURL: 'https://market2.store/wp-json/custom-api/v1/',
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
// });

export default client;
// clientTOken.interceptors.request.use(async function (config) {
//   const token = await AsyncStorage.getItem(TOKEN);
//   console.log('token', token);
//   config.headers.Authorization = token ? token : '';
//   return config;
// });

