var EslintPlugin = require ('webpack-eslint-plugin')
module.exports ={

	entry: __dirname+'/index.js',
	output:{
		filename: 'bundle.js'
	},
	module:{
		loaders:[ {
			enforce:'pre',
			test:/\.jsx?$/,
			loader:'eslint-loader',
			exclude:'/node_modules'
		}]
	},
	eslint: {
    //reporter: require("eslint-friendly-formatter"),
    quiet: false,
    failOnError: true,
    failOnWarning: false,
    emitError: true,
    emitWarning: true
  }
}