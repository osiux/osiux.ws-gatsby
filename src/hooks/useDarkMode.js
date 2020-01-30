/**
 * https://usehooks.com/useDarkMode/
 * https://blog.maximeheckel.com/posts/switching-off-the-lights-adding-dark-mode-to-your-react-app-with-context-and-hooks-f41da6e07269
 */
import { useEffect } from 'react';

import useMedia from './useMedia';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [enabledState, setEnabledState] = useLocalStorage(
        'dark-mode-enabled',
    );

    const prefersDarkMode = useMedia(
        ['(prefers-color-scheme: dark)'],
        [true],
        false,
    );

    const enabled =
        typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

    useEffect(
        () => {
            const className = 'dark-mode';

            const element = window.document.body;

            if (enabled) {
                element.classList.add(className);
            } else {
                element.classList.remove(className);
            }
        },

        [enabled], // Only re-call effect when value changes
    );

    return [enabled, setEnabledState];
};

export default useDarkMode;
