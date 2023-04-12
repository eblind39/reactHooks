import React, { useState, useEffect, useDebugValue } from "react";
import { LabelRecord } from "../types";
import { myApi } from "../../data/myApi";

const UseEffect = () => {
    const [counter, setCounter] = useState<number>(0)
    const [labelData, setLabelData] = useState<LabelRecord[]>([])

    useEffect(() => {
        console.log('%cIt executes in every render, also in the first one', 'color: yellow; font-size: larger')
    })

    useEffect(() => {
        console.log('%cIt is invoked at the first render - component DidMount', 'color: green; font-size: larger')

        async function fetchData() {
            const dataLabel: LabelRecord[] = (await myApi.fakeFetch()) as LabelRecord[]
            setLabelData(dataLabel)
        }

        fetchData()

        return () => {
            console.log('%cCalling component will unmount', 'color: red; font-size: larger')
        }
    }, [])

    useEffect(() => {
        console.log(`It executes in every change for counter var ${counter}`)
    }, [counter])

    const incrementCounter = () => {
        setCounter(prevValue => prevValue + 1)
    }

    return (
        <React.Fragment>
            <h3>useEffect</h3>

            < br/>

            <label>Counter value is: {counter}</label>< br/>

            <button
                onClick={incrementCounter}
            >
                Increment counter!
            </button>

            <br />

            {
                labelData.length > 0 &&
                <ul>
                    {
                        labelData.map(label => {
                            if (label)
                                return <li key={label.label}>{label.label}</li>
                        })
                    }
                </ul>
            }
        </React.Fragment>
    )
}

export default UseEffect