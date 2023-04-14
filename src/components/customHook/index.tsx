import React from "react";
import Timer from "./timer";
import useTimer from "../../hooks/myhook";
import Form from "./form";
import FormA from "./forma";

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

            <br />

            <FormA />
        </React.Fragment>
    )
}

export default CustomHook