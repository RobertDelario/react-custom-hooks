import {useState, useEffect} from 'react';

const useLocalStorage = (key, initialValue) => {
    
    // Fetch the value for the key from local storage
    const storedValue = localStorage.getItem(key);

    // Setting the initial value for the state
    const initialState = storedValue ? JSON.parse(storedValue) : initialValue;

    // State to hold the current value
    const [localState, handleLocalState] = useState(initialState);

    // Update Local State whenever localState changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(localState));
    }, [key, localState]);

    return [localState, handleLocalState];

};

export default useLocalStorage;
