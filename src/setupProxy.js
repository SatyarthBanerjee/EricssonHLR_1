const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // Specify the base URL path of your API requests
    createProxyMiddleware({
      target: "https://crudcrud.com",  // Specify the target URL of your API
      changeOrigin: true,  
    })
  );
};
