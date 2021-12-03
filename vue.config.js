module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      "^/api": {
        target: "https://fakestoreapi.com/products",
        pathRewrite: {
          "/api": ""
        }
      }
    }
  }
};
