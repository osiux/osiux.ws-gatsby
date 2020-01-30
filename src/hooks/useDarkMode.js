/**
 * https://usehooks.com/useDarkMode/
 * https://blog.maximeheckel.com/posts/switching-off-the-lights-adding-dark-mode-to-your-react-app-with-context-and-hooks-f41da6e07269
 */
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

    return [enabled, setEnabledState];
};

export default useDarkMode;
