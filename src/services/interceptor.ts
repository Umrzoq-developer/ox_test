import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import Cookies from 'js-cookie';

import {AUTH_TOKEN} from '@src/constants/ApiConstants';

import {URL} from './constants';

const authApi = axios.create({
    baseURL: URL,
    headers: {},
});

authApi.interceptors.request.use((config: AxiosRequestConfig | any) => {
    const companyToken = Cookies.get(AUTH_TOKEN);
    config.headers['authorization'] = `Bearer ${companyToken}`;
    return config;
});

authApi.interceptors.response.use(
    (response: AxiosResponse<any>) => response,
    async (err: any) => {
        console.log(err.response, 'err response');
        if (
            err.response.status === 401 &&
            err.response.data.message !== 'Invalid credentials.'
        ) {
            Cookies.remove(AUTH_TOKEN);
            window.location.pathname = '/';
        }

        return Promise.reject(err);
    },
);
export default authApi;
