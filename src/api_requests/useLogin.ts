import {useMutation} from 'react-query';
import {useNavigate} from 'react-router-dom';

import {useAuthStore} from '@src/store/auth';

// import { useAction } from '@src/store/hooks';
import {handleLogin} from './request';

interface IProps {
    username: string;
    password: string;
    subdomain: string;
}
const useLogin = () => {
    const loggedIn = useAuthStore((state) => state.loggedIn);
    const navigation = useNavigate();

    const handleEnter = useMutation((data: IProps) => handleLogin(data), {
        onSuccess: (data) => {
            const accessToken = data.data;
            console.log(accessToken, 'token');
            loggedIn(true);
        },
    });
    return {
        handleEnter,
    };
};

export default useLogin;
