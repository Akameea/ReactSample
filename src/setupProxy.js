
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', createProxyMiddleware({
        target: 'https://192.168.3.43:8081',//后台服务器地址
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            '^/api': '',
        },
    }))
};
