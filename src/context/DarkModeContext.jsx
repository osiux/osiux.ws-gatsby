import React, { useEffect } from 'react';

import useDarkMode from '../hooks/useDarkMode';

const defaultContextData = {
    dark: false,
    toggle: () => {},
};

const DarkModeContext = React.createContext(defaultContextData);

const DarkModeProvider = ({ children }) => {
    const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();

    useEffect(() => {
        if (darkModeEnabled) {
            document.documentElement.classList.add('theme-dark');
        } else {
            document.documentElement.classList.remove('theme-dark');
        }
    }, [darkModeEnabled]);

    return (
        <DarkModeContext.Provider
            value={{
                dark: darkModeEnabled,
                toggle: () => setDarkModeEnabled(!darkModeEnabled),
            }}
        >
            {children}
        </DarkModeContext.Provider>
    );
};

export { DarkModeContext, DarkModeProvider };
