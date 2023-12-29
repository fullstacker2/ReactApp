import React from "react";
import useTheme from "../hooks/useTheme";

function ThemeSwitch(props) {
    // state, setState
    // const [stateVariable, alternate_setState] = React.useState(initial_value)
    const{theme, altTheme} = useTheme();

    // lifecycle: mounting, unmounting, updating
    React.useEffect( () => {
            console.log("side effect called");
            document.body.className = "bg-" + theme;
        },
        [theme]);
    return <button onClick={() => props.changeTheme(altTheme)}>altTheme</button>
}
export default ThemeSwitch;