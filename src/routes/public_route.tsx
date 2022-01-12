import Cookies from 'js-cookie';
import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';

import {AUTH_TOKEN} from '@src/constants/ApiConstants';
import {useAuthStore} from '@src/store/auth';

type IProps = {
    children?: any;
};

const PublicRoute = ({children}: IProps) => {
    const location = useLocation();
    const cookie = Cookies.get(AUTH_TOKEN);
    const isAuth = useAuthStore((state) => state.authed);

    if (!cookie && !isAuth) {
        return children;
    } else {
        return (
            <Navigate
                to="/products"
                replace
                state={{path: location.pathname}}
            />
        );
    }
};

export default PublicRoute;
