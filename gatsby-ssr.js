const ModeScriptTag = () => {
    const code = `(function () {
        function wantsDarkMode () {
            const persistedState = window.localStorage.getItem('dark-mode-enabled');
    
            if (persistedState !== 'undefined') return persistedState;
    
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    
            return hasMediaQueryPreference && mql.matches;
        }
    
        if (wantsDarkMode()) {
            document.documentElement.classList.add('theme-dark');
        }
    })();`;

    return <script dangerouslySetInnerHTML={{ __html: code }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {};
