import Cookies from 'js-cookie';
import React from 'react';
// import { userDetail } from "../store/auth";
import {Navigate, useLocation} from 'react-router-dom';

import {AUTH_TOKEN} from '@src/constants/ApiConstants';
import {useAuthStore} from '@src/store/auth';

type IProps = {
    children?: any;
};

const PrivateRoute = ({children}: IProps) => {
    const location = useLocation();
    const isAuth = useAuthStore((state) => state.authed);
    const cookie = Cookies.get(AUTH_TOKEN);

    if (cookie || isAuth) {
        return children;
    } else {
        return <Navigate to="/" replace state={{path: location.pathname}} />;
    }
};

export default PrivateRoute;
