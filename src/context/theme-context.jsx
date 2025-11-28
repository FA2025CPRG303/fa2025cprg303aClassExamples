import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { darkStyles, lightStyles } from "../assets/styles/theme";

const ThemeContext = createContext();

export function ThemeContextProvider({children}){

    const [themeStyles, setThemeStyles] = useState(lightStyles);

    const toggleDarkMode = useCallback( () => {
        if (themeStyles == lightStyles) {
            setThemeStyles(darkStyles);
        } else {
            setThemeStyles(lightStyles);
        }
    }, [themeStyles] );

    const contextValue = useMemo( () => ( {
        themeStyles,
        toggleDarkMode
    } ), [themeStyles] );

    return(
        <ThemeContext.Provider value={ contextValue }>
            {children}
        </ThemeContext.Provider>
    );
}

export function useMyTheme(){
    return useContext(ThemeContext);
}