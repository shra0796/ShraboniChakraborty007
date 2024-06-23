import {cart_base_url} from '../Services/Constants';
import client, {cartTOken, clientTOken} from './client';

const Login = data => {
  return client.post('/user-login', data);
};

const MeetingList= data => {
  return client.post('/get-meeting', data);
}
const authService = {
  Login, 
  MeetingList
};

export default authService;
