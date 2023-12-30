import React, { useContext } from "react";
import useTheme from "../hooks/useTheme";
import { CurrencyContext } from "../Context";

function Currency(props) {
    const code = useContext(CurrencyContext);
    const codes = ['INR','USD', 'EUR', 'CAD',"GBP",'KWT'];
    const {bgColor, txtColor} = useTheme();
    const cls = `${bgColor} ${txtColor}`
    return (
        <select 
            value = {code}
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