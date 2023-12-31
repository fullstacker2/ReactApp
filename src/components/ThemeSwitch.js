import React from "react";
import useTheme from "../hooks/useTheme";
import { useDispatch } from "react-redux";
import {changeTheme} from "../store/slices/themeSlice";

function ThemeSwitch(props) {
    // state, setState
    // const [stateVariable, alternate_setState] = React.useState(initial_value)
    const{theme, altTheme} = useTheme();
    const dispatch = useDispatch();

    // lifecycle: mounting, unmounting, updating
    React.useEffect( () => {
            console.log("side effect called");
            document.body.className = "bg-" + theme;
        },
        [theme]);
    return <button onClick={() => dispatch(changeTheme(altTheme))}>{altTheme}</button>
}
export default ThemeSwitch;