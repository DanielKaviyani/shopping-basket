module.exports = {
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
