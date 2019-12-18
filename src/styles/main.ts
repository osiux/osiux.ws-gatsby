import { css } from '@emotion/core';
import { colors } from './variables';

export default css`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        background: ${colors.main.background};
        font-family: 'Quattrocento Sans', sans-serif;
        color: ${colors.main.paragraph};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7 {
        font-family: 'Work Sans', sans-serif;
        color: ${colors.main.headers};
    }

    a {
        color: ${colors.main.links};
    }
`;
