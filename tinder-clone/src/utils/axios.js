import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tinder-clone-backend20.herokuapp.com'
});

export default instance;
