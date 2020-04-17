const lightTheme = {
    blockMarginBottom: '1.5rem',
    fonts: {
        text: "'PT Sans', sans-serif",
        headings: "'Oswald', sans-serif",
    },
    colors: {
        background: '#fff',
        text: '#111',
        link: '#ec003b',
    },
    breakpoints: {
        desktop: '@media all and (min-width: 900px)',
    },
    transition: '.5s ease',
};

const darkTheme = {
    ...lightTheme,
    colors: {
        ...lightTheme.colors,
        background: '#292d35',
        text: '#fff',
        link: '#7fdbff',
    },
};

const theme = (mode) => (mode === 'dark' ? darkTheme : lightTheme);

export default theme;
