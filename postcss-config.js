module.exports = {
	syntax: "postcss-scss",
	map: false,
	plugins: [
		/* fix flex bugs : cf https://github.com/philipwalton/flexbugs */
		require('postcss-flexbugs-fixes')({ bug6: false }),
		require('postcss-sort-media-queries')({
			sort: 'mobile-first',
			configuration: {
				unitlessMqAlwaysFirst: true,
			}
		}),
		require('autoprefixer'),
		require('cssnano')({
			preset: require('cssnano-preset-default'),
		}),
	]
};
