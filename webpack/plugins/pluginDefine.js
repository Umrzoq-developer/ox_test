import {DefinePlugin} from 'webpack';

/**
 * Created by: Umrzoq Toshkentov ()
 * @example
 * const config = {
 *     isProd: true
 * }
 */
import {isDev, isDevServer, isProd, mode} from '../utils/env';

const config = {
    'process.env': {
        NODE_ENV: JSON.stringify(mode),
        BASE_API_URL: JSON.stringify(BASE_API_URL),
    },
    IS_PROD: isProd,
    IS_DEV: isDev,
    IS_DEV_SERVER: isDevServer,
};

export const definePlugin = new DefinePlugin(config);
