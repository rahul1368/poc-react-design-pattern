module.exports = {
    webpack: {
        configure: (webpackConfig, {
          env, paths
        }) => {
          webpackConfig.output = {
            ...webpackConfig.output,
              publicPath: 'http://localhost:3002/'
          }
          return webpackConfig
        }
    },
    devServer:{
        headers:{
            'Access-Control-Allow-Origin':'*'
        }
    }
}