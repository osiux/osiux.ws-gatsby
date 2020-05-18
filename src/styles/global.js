import { css } from '@emotion/core';

const global = css`
    :root {
        --color-primary: #fafafa;
        --color-secondary: #222831;
        --color-tertiary: #222831;
        --color-link: #ec003b;
    }

    .theme-dark {
        --color-primary: #444;
        --color-secondary: #fafafa;
        --color-tertiary: #222831;
        --color-link: #7fdbff;
    }

    body {
        background-color: var(--color-primary);
        transition-property: background-color, border-color, color, fill, stroke;
        transition-duration: 500ms;
        transition-timing-function: linear;
    }

    .theme-dark img:not([src*='.svg']) {
        filter: grayscale(50%);
    }
`;

export default global;
