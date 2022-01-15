const WorkboxPlugin = require('workbox-webpack-plugin');

export const pwaWorkbox = new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
});
