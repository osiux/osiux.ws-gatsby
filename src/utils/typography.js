import Typography from 'typography';
import elkGlenTheme from 'typography-theme-elk-glen';

elkGlenTheme.overrideThemeStyles = () => ({
    a: {
        textShadow: 'none',
        textDecoration: 'underline',
        backgroundImage: 'none',
    },
});

const typography = new Typography(elkGlenTheme);

export default typography;
