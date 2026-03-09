import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [darkTheme, setDarkTheme] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {

        if (darkTheme) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }

    }, [darkTheme]);

    function toggleTheme() {
        setDarkTheme(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );

};

export { ThemeContext, ThemeProvider };