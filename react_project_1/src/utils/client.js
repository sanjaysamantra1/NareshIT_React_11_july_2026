import axios from 'axios';

const client = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`,
    timeout: 10000,
    headers: { accept: "Application/json" }
});

client.interceptors.request.use((request) => {
    console.log('interceptor called...')
    // const token = localStorage.getItem('accessToken');
    const token = 'ABCDEF-123456'; // token received from backend during login
    if(token){
        request.headers.Authorization = `bearer ${token}`;
    }
    return request;
})

export default client;