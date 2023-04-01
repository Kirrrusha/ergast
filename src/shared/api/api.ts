import axios from 'axios';

export const baseUrl = 'https://ergast.com/api';

export const $api = axios.create({
  baseURL: baseUrl,
});
