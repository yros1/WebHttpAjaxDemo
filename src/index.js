import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// reister new interceptor
var myRequestInterceptors = axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config before return it.
    // Common use case for it is add some common headers, 
    // For example Authorisation header.
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// Removing request interceptors
axios.interceptors.request.eject(myRequestInterceptors);

var myResponseInterceptors = axios.interceptors.response.use(response => {
    console.log(response);
    // Edit response config before return it.
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// Removing response interceptors
axios.interceptors.response.eject(myResponseInterceptors);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
