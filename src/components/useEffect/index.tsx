import React, { useState, useEffect, useDebugValue } from "react";

const UseEffect = () => {
    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        console.log('It executes in every render, also in the first one')
    })

    useEffect(() => {
        console.log('It is invoked at the first render')
    }, [])

    useEffect(() => {
        console.log(`It executes in every change for counter var ${counter}`)
    }, [counter])

    const incrementCounter = () => {
        setCounter(prevValue => prevValue + 1)
    }

    return (
        <React.Fragment>
            <h3>UseEffect</h3>

            < br/>

            <label>Counter value is: {counter}</label>< br/>

            <button
                onClick={incrementCounter}
            >
                Increment counter!
            </button>
        </React.Fragment>
    )
}

export default UseEffect