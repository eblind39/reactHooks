import React from "react";
import { themes } from "./themes";
import { ThemeStyles } from "../../types";

const ThemeContext = React.createContext<ThemeStyles>(themes[1].theme);

export { ThemeContext }