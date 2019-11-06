module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5001',
        ws: true,
        changeOrigin: true
      },
      '^/auth': {
        target: 'http://localhost:5001',
        ws: true,
        changeOrigin: true
      },
    }
  }
}