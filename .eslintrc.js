module.exports = {
    extends: ['eslint:recommended', 'prettier'], // extending recommended config and config derived from eslint-config-prettier
    parser: 'babel-eslint',
    plugins: ['prettier'], // activating esling-plugin-prettier (--fix stuff)
    rules: {
        'prettier/prettier': [ // customizing prettier rules (unfortunately not many of them are customizable)
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
                semi: false,
            },
        ],
        eqeqeq: ['error', 'always'], // adding some custom ESLint rules
    },
};