import React, { useState } from "react";
import Button from "./button";
import { ThemeContext } from './themecontext'
import { themes } from "./themes";
import { Theme, ThemeStyles } from "../../types";

const CustomTheme = () => {
    const [currentTheme, setCurrentTheme] = useState<ThemeStyles>(themes[1].theme)

    const handleTheme = (themeName: string) => {
        const theme: Theme | undefined = themes.find(theme => theme.name === themeName)
        if (!theme) return
        setCurrentTheme(theme.theme)
    }

    return (
        <React.Fragment>
            <h5>Select a theme</h5>

            <ThemeContext.Provider value={currentTheme}>
                <Button onClick={() => handleTheme('light')}>Light</Button>
                <Button onClick={() => handleTheme('dark')}>Dark</Button>
                <Button onClick={() => handleTheme('vaporwave')}>Vaporwave</Button>
            </ThemeContext.Provider>
        </React.Fragment>
    )
}

export default CustomTheme