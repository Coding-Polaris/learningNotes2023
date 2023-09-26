var path = require("path");

module.exports ={
	mode: "development",

	devtool: "source-map",

	// The starting point of webpack climbing the dependency graph
	entry: "./src/index.js",

	// bundle all our stuff into one file, bundle.js, under /root/dist/assets
	output: {
		path: path.join(__dirname, "dist", "assets"),
		filename: "bundle.js" 
	},

	// A list of loaders to run on specific modules, whatever that means

	// loaders are like plugins-? unexplained/undefined

	// in any case the loaders are run on every js file in folder/subfolders
	// except for the ones found in node_modules
	module: {
		// rules is an array since there can be any number of loaders run
		rules: [
			{
				// a regex that tells webpack what to run the loader on 
				test: /\.js$/,

				// don't include these even if there are files/folders matching the regex
				exclude: /node_modules/,

				// which loader we're using for this loader object
				loader: "babel-loader"
			}
		]
	}
};