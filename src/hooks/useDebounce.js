// From https://nick.scialli.me/writing-a-custom-react-usedebounce-hook-with-typescript/
import { useState, useEffect } from 'react';

const useDebounce = (initialValue, time) => {
    const [value, setValue] = useState(initialValue);
    const [debouncedValue, setDebouncedValue] = useState(initialValue);

    useEffect(() => {
        const debounce = setTimeout(() => {
            setDebouncedValue(value);
        }, time);
        return () => {
            clearTimeout(debounce);
        };
    }, [value, time]);

    return [debouncedValue, value, setValue];
};

export default useDebounce;
