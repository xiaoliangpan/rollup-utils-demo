module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				// singleQuote: true,
				// tabWidth: 2,
				// indent: 2,
				// semi: true,
				// trailingComma: 'none',
				// endOfLine: 'auto'
			},
			// {
			//   "singleQuote": false,
			//   "tabWidth": 2,
			//   "indent": 2,
			//   "semi": true,
			//   "trailingComma": "none",
			//   "endOfLine": "auto"
			// }
		],
	},
};
