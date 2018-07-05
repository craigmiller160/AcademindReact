import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-f349f.firebaseio.com'
});

export default instance;