import Typography from 'typography';
import elkGlenTheme from 'typography-theme-elk-glen';

import { colors } from '../styles/variables';

elkGlenTheme.overrideThemeStyles = () => ({
    a: {
        textShadow: 'none',
        textDecoration: 'none',
        backgroundImage: 'none',
    },
});

const typography = new Typography(elkGlenTheme);

export default typography;
