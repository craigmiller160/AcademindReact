import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(req => {
    console.log(req);
    // Edit request config
    return req;
}, error => {
    //Only for request sending failures, such as no internet connectivity
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(res => {
    console.log(res);
    //Success response
    return res;
}, error => {
    //Failed response
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
