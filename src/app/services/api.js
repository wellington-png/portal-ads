import axios from 'axios';

const api = axios.create({
    baseURL: 'https://newsapi.org/v2/everything?q=programming&apiKey=<apikey>&sortBy=relevancy&pageSize=10'
});

export default api;
