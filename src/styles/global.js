import tw from 'twin.macro';
import { css } from '@emotion/core';

const global = css`
    :root {
        --color-header: #bfd7ea;
        --color-footer: #020202;
        --color-primary: #fafafa;
        --color-secondary: #222831;
        --color-tertiary: #0a0a0a;
        --color-link: #ec003b;
    }

    .theme-dark {
        --color-header: #212d40;
        --color-footer: #020202;
        --color-primary: #222222;
        --color-secondary: #fafafa;
        --color-tertiary: #0a0a0a;
        --color-link: #7fdbff;

        img:not([src*='.svg']) {
            filter: grayscale(50%);
        }
    }

    body {
        color: var(--color-secondary);
        background-color: var(--color-primary);
        transition-property: background-color, border-color, color, fill, stroke;
        transition-duration: 500ms;
        transition-timing-function: linear;
        font-family: 'Open Sans', sans-serif;
    }

    a {
        color: var(--color-link);
        transition-property: background-color, border-color, color, fill, stroke;
        transition-duration: 500ms;
        transition-timing-function: linear;

        &.anchor {
            top: 17px !important;

            svg {
                fill: var(--color-link);
            }
        }
    }

    p {
        line-height: 1.7rem;
        margin-bottom: 1.1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        text-rendering: optimizeLegibility;
        margin-bottom: 1.1rem;
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.6rem;
    }

    b,
    strong,
    dt,
    th {
        font-weight: 700;
    }

    ol,
    ul {
        list-style-type: disc;
        list-style-position: outside;
        list-style-image: none;
        margin-left: 2rem;
        margin-top: 1rem;

        li {
            padding-left: 0;
        }
    }

    li {
        margin-bottom: calc(2rem / 2);
        p {
            margin-bottom: calc(2rem / 2);
        }
        > ol,
        > ul {
            margin-left: 2rem;
            margin-bottom: calc(2rem / 2);
            margin-top: calc(2rem / 2);
        }
    }

    blockquote *:last-child,
    li *:last-child,
    p *:last-child {
        margin-bottom: 0;
    }

    blockquote {
        border-left: 0.28125rem solid var(--color-link);
        color: var(--color-secondary);
        font-style: italic;
        margin: 0 0 1.5rem;
        padding: 0 0 0 0.84375rem;
        font-size: 1.1487rem;
        line-height: 1.5rem;
        > :last-child {
            margin-bottom: 0;
        }
        cite {
            font-size: 1rem;
            color: hsla(0, 0%, 0%, 0.8);
            font-style: 'normal';
            font-weight: 400;
            &:before {
                content: '"— "';
            }
        }
    }

    code,
    kbd,
    pre,
    samp {
        font-size: 0.85rem;
    }
    abbr,
    acronym {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
    }
    abbr[title] {
        text-decoration: none;
    }
    table {
        font-size: 1rem;
        border-collapse: collapse;
        width: 100%;
    }
    thead {
        text-align: left;
    }
    td,
    th {
        text-align: left;
        border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
        font-feature-settings: tnum;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.75rem;
        padding-bottom: calc(0.75rem - 1px);
        &:first-of-type {
            padding-left: 0;
        }
        &:last-child {
            padding-right: 0;
        }
    }
    pre {
        white-space: pre-wrap;
        overflow-x: auto;
        max-width: 100%;
    }
    tt,
    code {
        background-color: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        font-family: Consolas, 'Roboto Mono', 'Liberation Mono', Menlo, Courier,
            monospace;
        padding: 0;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
    }
    pre code {
        background: none;
        line-height: 1.42;
    }
    code:before,
    code:after,
    tt:before,
    tt:after {
        letter-spacing: -0.2em;
        content: ' ';
    }
    pre code:before,
    pre code:after,
    pre tt:before,
    pre tt:after {
        content: '';
    }
    kbd {
        border: 1px solid #666;
        border-radius: 4px;
        padding: 3px 5px;
        margin: 2px;
        color: #444;
        text-decoration: none;
    }

    .scrolled {
        nav:first-of-type {
            ${tw`fixed shadow-md`}
        }

        main {
            ${tw`mt-32`}
        }
    }
`;

export default global;
