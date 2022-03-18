const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/v0','/api2'],
    createProxyMiddleware({
      target: 'http://localhost:3080',
      changeOrigin: true,
    })
  );
};