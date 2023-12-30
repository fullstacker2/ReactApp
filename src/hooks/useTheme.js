import React from "react";
import { ThemeContext } from "../Context";
import { useSelector } from "react-redux";

function useTheme() {
    const theme = useSelector((state) => state.theme);
    const bgColor = 'bg-'+theme;
    const altTheme = theme==="light" ? "dark": "light";
    const txtColor = theme==="light" ? "text-dark": "text-white";
    return { theme, bgColor, altTheme, txtColor};
}
export default useTheme;