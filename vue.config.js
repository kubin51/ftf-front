const path = require('path');

const vueConfig = {
    chainWebpack:(config)=>{
        config.resolve.alias.set('@$',path.join(__dirname,'src'))
    }
};
module.exports=vueConfig;
