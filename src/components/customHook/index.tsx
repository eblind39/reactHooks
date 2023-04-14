import React from "react";
import Timer from "./timer";
import useTimer from "../../hooks/myhook";

const CustomHook = () => {

    // custom hook
    useTimer()

    return (
        <React.Fragment>
            <h3>useReducer</h3>

            <br />
            
        </React.Fragment>
    )
}

export default CustomHook