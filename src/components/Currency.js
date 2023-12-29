import React from "react";
import { ThemeContext } from "../Context";
import useTheme from "../hooks/useTheme";

function Currency(props) {
    const codes = ['INR','USD', 'EUR', 'CAD',"GBP",'KWT'];
    const {bgColor, txtColor} = useTheme();
    const cls = `${bgColor} ${txtColor}`
    return (
        <select 
            className={cls}
            onChange={(e) => props.changeCurrency(e.target.value)}>
            {
                codes.map((c) =>
                <option key = {c}>{c}</option>)
            }
        </select>
    )
}
export default Currency