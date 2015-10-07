module.exports = {
	output: {
		filename: 'bundle.js'
	},
	devtool: 'sourcemap',
	module: {
		loaders: [
			{test: /\.jade$/, loader: 'jade-html!'},
			{test: /\.styl$/, loader: 'style!css!stylus'},
			{test: /\.css/, loader: 'style!css'},
			{test: /\.(png!jpg!jpeg)/, loader: 'file'}
		]
	},
	stylus: {
		use: [require('jeet')(), require('rupture')()]
	}
};
