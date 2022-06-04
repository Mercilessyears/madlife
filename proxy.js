const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = (req,res)=>{
    let target = ''
    if(req.url.startsWith('/backend')){
        target = 'http://rcwonz1wg.hn-bkt.clouddn.com'
    }

    createProxyMiddleware({
        target,
        changeOrigin:true,
        pathRewrite:{
            '^/backend/':'/'
        }
    })(req,res)
}