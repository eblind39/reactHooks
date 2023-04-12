import React, { useState } from "react";

const UseState = () => {
    const [counter, setCounter] = useState<number>(0)

    // the previous line of code is equivalent to the following:
    /*
        const state = useState<number>(0)
        const counter = state[0]
        const setCounter = state[1]
    */

    const handleClick = (evt: React.SyntheticEvent) => {
        setCounter(prevValue => prevValue + 1)
    }

    return (
        <React.Fragment>
            <p>Clicks: {counter}</p>
            <button
                onClick={handleClick}
            >
                Click Me!
            </button>
        </React.Fragment>
    )
}

export default UseState;