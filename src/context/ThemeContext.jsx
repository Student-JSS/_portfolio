import { useEffect, useState } from "react";
import { createContext } from "react";



const appContext=createContext()


const ThemeContext = ({ children }) => {
    const [theme, settheme] = useState("light")

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            settheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            settheme("light");
            document.documentElement.setAttribute("data-theme", "light");
        }   
    }, [theme]);

    
  return (
    <appContext.Provider value={{theme, settheme}}>
      {children}
    </appContext.Provider>
  );
}

export { ThemeContext, appContext };