import axios from 'axios';

const client = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`,
    timeout: 10000,
    headers: { accept: "Application/json" }
});

client.interceptors.request.use((request) => {
    console.log('Auth interceptor called...')
    // const token = localStorage.getItem('accessToken');
    const token = 'ABCDEF-123456'; // token received from backend during login
    if (token) {
        request.headers.Authorization = `bearer ${token}`;
    }
    return request;
})
client.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log('Error Interceptor called...')
        const status = error.response?.status;
        if (status === 401) {
            window.location.assign('/login');
        }
        if (status === 403) {
            console.error('You do not have Permission for this action')
        } else if (status >= 500) {
            console.error('Server Error, Please try again later.')
        } else if (status >= 500) {
            console.error('Server Error, Please try again later.')
        } else if (!error.response) {
            console.error('Network Error or Request timed out')
        }
        return Promise.reject(error);
    }
);

export default client;