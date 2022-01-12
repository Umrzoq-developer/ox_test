import 'antd/dist/antd.css';

import '@styles/styles.css';
/**
 * Created by: Umrzoq Toshkentov ()
 */
import '@styles/styles.less';
import '@styles/styles.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter} from 'react-router-dom';

import {App} from '@components/app/app';

const queryClient = new QueryClient();

ReactDom.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>,
    document.getElementById('root'),
);
