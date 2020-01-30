const lightTheme = {
    blockMarginBottom: '1.5rem',
    fonts: {
        text: "'PT Sans', sans-serif",
        headings: "'Oswald', sans-serif",
    },
    colors: {
        background: '#fdfffc',
        text: '#0a090c',
        link: '#292d35',
    },
    breakpoints: {
        desktop: '@media all and (min-width: 900px)',
    },
};

const darkTheme = {
    ...lightTheme,
    colors: {
        ...lightTheme.colors,
    },
};

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme);

export default theme;
