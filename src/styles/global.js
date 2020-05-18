import { css } from '@emotion/core';

const global = css`
    :root {
        --color-primary: #fff;
        --color-secondary: #111;
        --color-link: #ec003b;
    }

    .theme-dark {
        --color-primary: #2c2828;
        --color-secondary: #fff;
        --color-link: #7fdbff;
    }

    body {
        background-color: var(--color-primary);
        transition-property: background-color,border-color,color,fill,stroke;
        transition-duration: 500ms;
        transition-timing-function: linear;
    }
`;

export default global;
