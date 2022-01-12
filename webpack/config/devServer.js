/**
 * Created by: Umrzoq Toshkentov ()
 * @see https://webpack.js.org/configuration/dev-server/
 */

import {devServerProxyConfig} from './devServierProxy';

export const devServerConfig = {
    client: {
        overlay: false,
    },
    headers: {'Access-Control-Allow-Origin': '*'},
    historyApiFallback: true,
    hot: true,
    proxy: devServerProxyConfig,
    port: 3000,
    static: {
        publicPath: '/',
    },
};
