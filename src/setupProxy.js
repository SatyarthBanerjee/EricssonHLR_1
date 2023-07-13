const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // Specify the base URL path of your API requests
    createProxyMiddleware({
      target: "https://crudcrud.com/api/d76033a5d402462c841a9f5dd9465091/stu_1",  // Specify the target URL of your API
      changeOrigin: true,  
    })
  );
};
