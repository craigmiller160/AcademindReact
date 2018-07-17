import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-f349f.firebaseio.com'
    // baseURL: 'http://localhost:7070/react/api'
});

export default instance;