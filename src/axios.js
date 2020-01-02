import axios from 'axios';

// Create instance of axios (you can create multile of those)
// This allows you to create different configurations for different parts 
// of the application. Like setup baseURL and headers for various 
// js files depends on requirements/needs
const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INTANCE';

instance.interceptors.request.use(request => {
    // Request interceptor from custom axios intance. Look at the posts servie call headers Authorization value
    // You should see AUTH TOKEN FROM INTANCE
    console.log(request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;