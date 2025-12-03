module.exports = {
	globDirectory: 'build',
	globPatterns: [
		'**/*.{txt,json,png,html,ico,js,css}'
	],
	swDest: 'build/sw.js',
	swSrc: 'src/sw-template.js',
	// ignoreURLParametersMatching: [
	// 	/^utm_/,
	// 	/^fbclid$/
	// ]
};