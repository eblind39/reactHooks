import React from "react";
import Timer from "./timer";
import useTimer from "../../hooks/myhook";
import Form from "./Form";

const CustomHook = () => {

    // custom hook
    useTimer()

    return (
        <React.Fragment>
            <h3>useReducer</h3>

            <br />

            {/* <Timer /> */}

            <br />
            
            <Form />
        </React.Fragment>
    )
}

export default CustomHook