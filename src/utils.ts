import { fetch, Response } from 'undici';
const API_URL = "https://api.genshin.dev"

export function request(data: {
    method?: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE';
    url: string;
    body?: any;
    headers?: any;
    query?: any;
}): Promise<Response> {
    let queryString = '';
    if (data.query) {
        queryString = '?' + objectToQuery(data.query);
    }
    const { url, ...req } = data;
    return fetch(`${API_URL}/${url}${queryString}`, req);
}

function objectToQuery(object: any): string {
    return Object.keys(object)
        .map(key => key + '=' + object[key])
        .join('&');
}