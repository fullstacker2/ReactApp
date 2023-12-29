import React from "react";
import { ThemeContext } from "../Context";
import useTheme from "../hooks/useTheme";

function Column(props) {
    const {txtColor} = useTheme();
    const size = props.size;
    const cls = `col-md-${size} ${txtColor}`;
    return <div className={cls}> {props.children} </div>
}
export default Column;