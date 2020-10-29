const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|gif|jpg)$/,
				use: ["file-loader"],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 7890,
	},
};
