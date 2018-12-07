// vue.config.js
const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'node_modules': path.resolve(__dirname, 'node_modules')
            }
        },
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    },
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                // @/ is an alias to src/
                // so this assumes you have a file named `src/variables.scss`
                data: `
                    @import "@/scss/variables.scss";
                    @import "@/scss/bootstrap.scss";
                `
            }
        }
    }
}