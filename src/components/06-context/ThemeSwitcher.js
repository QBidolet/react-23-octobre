import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <button onClick={toggleTheme}>
            Changer le thème {theme === "light" ? "clair" : "sombre"}.
        </button>
    )
}

export default ThemeSwitcher;