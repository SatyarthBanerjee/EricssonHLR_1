// const { createProxyMiddleware } = require('http-proxy-middleware');
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app) {
  app.use(
    
    createProxyMiddleware('/api',{
      target: 
      // 'https://hldweb-app-crud-service.onrender.com',
      "http://localhost:5000",
      changeOrigin: true,
      // rewrite: (path) => path.replace(/^\/api/, ""),
      pathRewrite: { "/^\/api/":"",}
    })
  );
};
