import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import theme from '../styles/theme';

import useDarkMode from '../hooks/useDarkMode';

const defaultContextData = {
    dark: false,
    toggle: () => {},
};

const DarkModeContext = React.createContext(defaultContextData);

const DarkModeProvider = ({ children }) => {
    const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();

    const computedTheme = darkModeEnabled ? theme('dark') : theme('light');

    return (
        <ThemeProvider theme={computedTheme}>
            <DarkModeContext.Provider
                value={{
                    dark: darkModeEnabled,
                    toggle: () => setDarkModeEnabled(!darkModeEnabled),
                }}
            >
                {children}
            </DarkModeContext.Provider>
        </ThemeProvider>
    );
};

export { DarkModeContext, DarkModeProvider };
