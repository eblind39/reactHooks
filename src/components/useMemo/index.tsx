import React, { SyntheticEvent, useMemo, useState } from "react";

const createArray = (length: number): number[] => {
    let i: number = length
    const arr: number[] = []
    while(i--) {
        arr[i] = 0
    }

    return arr
}

const expensiveCalc = (myArray: number[]): number => {
    console.log('%cexpensiveCalc executed', 'color: yellow; font-size: larger')
    let counter: number = 0
    for (let i = 0; i < myArray.length; i++) {
        for (let j = 0; j < myArray.length; j++) {
            counter++
        }
    }

    return counter
}

interface MyComponentProps {
    someList: number[]
}
const MyComponent = ({someList}: MyComponentProps): JSX.Element => {
    const result: number = useMemo(() => expensiveCalc(someList), [someList])
    return <p>Iterations: {result.toLocaleString()}</p>
}

// const list: number[] = createArray(100)

const UseMemo = (): JSX.Element => {
    const [foo, setFoo] = useState<string>('')
    const [list, setList] = useState<number[]>(createArray(100))

    const handleChange = (event: SyntheticEvent) => {
        const target: HTMLInputElement = event.target as HTMLInputElement
        const value = target.value
        setFoo(value)
    }

    const addItemToArray = () => {
        setList([...list, 0])
    }

    return (
        <React.Fragment>
            <h3>useMemo</h3>
            <h4>useMemo - Without applying</h4>
            <p>Write to do a re-render</p>
            <input value={foo} onChange={handleChange} />
            <MyComponent someList={list} />
            <button onClick={addItemToArray}>Add item to array</button>
        </React.Fragment>
    )
}

export default UseMemo