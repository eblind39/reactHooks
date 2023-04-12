import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

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

export default Counter;