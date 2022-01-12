import React from 'react';
import {Route, Routes} from 'react-router-dom';

import PrivateRoute from '@src/routes/private_route';
import PublicRoute from '@src/routes/public_route';
import LoginPage from '@src/views/LoginPage';
import Products from '@src/views/Products';
export const App = (): React.ReactElement => (
    <div>
        <Routes>
            <Route
                path="/"
                element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                }
            />

            <Route
                path="/products"
                element={
                    <PrivateRoute>
                        <Products />
                    </PrivateRoute>
                }
            />
        </Routes>
    </div>
);
