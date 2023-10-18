import { useState, useEffect } from "react";

export default function useDebounce (value, delay){

    // State and setters for debounced value
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(()=>{

        // Set a handler to run after the specified delay
        const handler = setTimeout(()=>{

            // Set debounceValue to value (passed in) after the specified delay
            setDebounceValue(value)

            
        }, delay)

        // Clear the timeout if the value changes (also on delay change or unmount)
        return ()=>{clearTimeout(handler)}

    }, [value, delay])
    
    return debounceValue;
}