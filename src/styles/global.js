import normalize from 'normalize.css';
import { css } from '@emotion/core';

/**
 * Most of typography styles were taken from Elk Glen Typography.js theme:
 * https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-elk-glen
 */
const global = theme => css`
    ${normalize}

    html {
        font-size: 106.25%;
        line-height: 1.45em;
        box-sizing: border-box;
        overflow-y: scroll;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        background: ${theme.colors.background};
        color: ${theme.colors.text};
        font-family: ${theme.fonts.text};
        font-weight: 400;
        word-wrap: break-word;
        font-kerning: normal;
        font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    }

    img {
        max-width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hgroup,
    ul,
    ol,
    dl,
    dd,
    p,
    figure,
    pre,
    table,
    fieldset,
    blockquote,
    form,
    noscript,
    iframe,
    img,
    hr,
    address {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: ${theme.blockMarginBottom};
    }

    b,
    strong,
    dt,
    th {
        font-weight: 700;
    }

    hr {
        color: ${theme.colors.link};
        border: none;
        height: 1px;
        margin-bottom: calc(${theme.blockMarginBottom} - 1px);
    }

    ol,
    ul {
        list-style-position: outside;
        list-style-image: none;
        margin-left: 1.5rem;

        li {
            padding-left: 0;
        }
    }

    li {
        margin-bottom: calc(${theme.blockMarginBottom} / 2);

        p {
            margin-bottom: calc(${theme.blockMarginBottom} / 2);
        }

        > ol,
        > ul {
            margin-left: 1.5rem;
            margin-bottom: calc(${theme.blockMarginBottom} / 2);
            margin-top: calc(${theme.blockMarginBottom} / 2);
        }
    }

    blockquote *:last-child,
    li *:last-child,
    p *:last-child {
        margin-bottom: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0.67em;
        font-family: ${theme.fonts.headings};
        font-weight: 700;
        text-rendering: optimizeLegibility;
    }

    blockquote {
        border-left: 0.28125rem solid ${theme.colors.link};
        color: ${theme.colors.text};
        font-style: italic;
        margin: 0 0 1.5rem -1.125rem;
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

    a {
        color: ${theme.colors.link};
        text-decoration: 'none';

        &.anchor svg {
            fill: ${theme.colors.link};
        }
    }

    ${theme.breakpoints.desktop} {
        html {
            font-size: 125%;
            line-height: 1.5;
        }

        blockquote {
            border-left-width: 0.5625rem;
            padding-left: 0.9375rem;
            margin-left: 0;
        }
    }
`;

export default global;
