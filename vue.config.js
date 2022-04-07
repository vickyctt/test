module.exports={
    // 关闭eslint
    lintOnSave:false,
    // 代理跨域
    devServer: {
        proxy: {
          '/api': {
            target: 'http://39.98.123.211',
            // 由于已为baseURL设置/api,所以可以省略设置pathRewrite
            // pathRewrite: { '^/api': '' },
          },
        },
      },
}