module.exports = {
    purge: ['./src/**/*.jsx'],
    theme: {
        darkSelector: '.theme-dark',
        extend: {},
    },
    variants: {
        backgroundColor: ['dark'],
        borderColor: ['dark'],
        textColor: ['dark'],
    },
    plugins: [require('tailwindcss-dark-mode')()],
};
