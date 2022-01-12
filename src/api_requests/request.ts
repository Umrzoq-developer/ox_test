import authApi from '@src/services/interceptor';

export const handleLogin = async ({username, password, subdomain}: any) => {
    const response = await authApi.post(`/security/auth_check`, {
        _username: username,
        _password: password,
        _subdomain: subdomain,
    });
    return response;
};
