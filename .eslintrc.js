module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	plugins: ['html'],
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 13,
	},
	rules: {
		'prettier/prettier': 'warn',
	},
};
