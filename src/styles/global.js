import { css } from '@emotion/core';

import normalize from 'normalize.css';

export default css`
    ${normalize}

    * {
        box-sizing: border-box;
    }

    kbd {
        border: 1px solid #666;
        border-radius: 4px;
        padding: 3px 5px;
        margin: 2px;
        color: #444;
        text-decoration: none;
    }
`;
