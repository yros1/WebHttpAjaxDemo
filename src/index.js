import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// setup global defaults like baseURL
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
// Common headers for every service call example
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// Specific headers for specific service calls for example for posts
axios.defaults.headers.post['Content-Type'] = 'application/json';

// reister new interceptor
axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config before return it.
    // Common use case for it is add some common headers, 
    // For example Authorisation header.
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit response config before return it.
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
