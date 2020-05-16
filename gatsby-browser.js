import { config } from '@fortawesome/fontawesome-svg-core';

import 'tailwindcss/dist/base.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-hint/css/index.css';
import 'gatsby-remark-vscode/styles.css';

import 'typeface-oswald';
import 'typeface-pt-sans';

config.autoAddCss = false;

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        '🐈 Website has been updated.  Would you like to reload to display the latest version?',
    );
    if (answer === true) {
        window.location.reload();
    }
};
