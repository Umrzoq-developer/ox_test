import create, {GetState, SetState} from 'zustand';

interface AuthStore {
    authed: boolean;
    loggedIn: (payload: boolean) => void;
}

export const useAuthStore = create<AuthStore>(
    (set: SetState<AuthStore>, get: GetState<AuthStore>) => ({
        authed: false,
        loggedIn: (payload): void => {
            const {authed} = get();
            set({authed: payload});
        },
    }),
);
