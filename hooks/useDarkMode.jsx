import {useState, useEffect} from 'react';

export const useDarkMode = () =>{
    const [isDarkMode , setIsDarkMode] = useState(false);

  
    // Add or remove the .dark-mode class to the body element
    useEffect(() => {
        if(isDarkMode){
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode');
        }
       
        

    }, [isDarkMode]);
}