module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["xo", "prettier"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
		{
			extends: ["xo-typescript", "prettier"],
			files: ["*.ts", "*.tsx"],
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
	},
	rules: {},
};
