import React from "react";
import { ThemeContext } from "../Context";

function useTheme() {
    const theme = React.useContext(ThemeContext);
    const bgColor = 'bg-'+theme;
    const altTheme = theme==="light" ? "dark": "light";
    const txtColor = theme==="light" ? "text-dark": "text-white";
    return { theme, bgColor, altTheme, txtColor};
}
export default useTheme;