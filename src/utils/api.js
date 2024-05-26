import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://text-translator2.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': '493b4f58cfmsh412332041a13998p1e27d1jsn7af646313c17',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
    },
});