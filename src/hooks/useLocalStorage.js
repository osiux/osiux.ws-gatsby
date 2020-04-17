/**
 * https://usehooks.com/useLocalStorage/
 */
import { useCallback, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            if (typeof window === `undefined`) return initialValue;

            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);

            return initialValue;
        }
    });

    const setValue = useCallback(
        (value) => {
            try {
                setStoredValue(value);

                if (typeof window !== `undefined`) {
                    window.localStorage.setItem(
                        key,
                        JSON.stringify(value),
                    );
                }
            } catch (error) {
                console.log(error);
            }
        },  
        [key],
    );

    return [storedValue, setValue];
};

export default useLocalStorage;
