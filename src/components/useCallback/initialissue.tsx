import React, { useCallback, useEffect, useState } from "react";

interface ExampleProps {
    cb: () => void
}
const ExampleReRenderCB = ({cb} : ExampleProps)  => {
    useEffect(() => {
        console.log('%ccb changed', 'color: cyan')
    }, [cb])

    return (
        <ul>
            <li>{`true === true //true`}</li>
            <li>{`false === false //true`}</li>
            <li>{`1 === 1 //true`}</li>
            <li>{`'a' === 'a' //true`}</li>
            <li>{`{} === {} //false`}</li>
            <li>{`[] === [] //false`}</li>
            <li>{`()=> === ()=> //false`}</li>
            <li>{`const z = {}`}</li>
            <li>{`z === z //true`}</li>
        </ul>
    )
}

const InitialIssue = () => {
    const [counter, setCounter] = useState<number>(0)

    // const handleExampleWithIssue = () => {}
    const handleExample = useCallback(() => {}, [])

    const handleClick = () => setCounter(counter + 1)

    return (
        <React.Fragment>
            <h4>useCallback - Initial issue</h4>
            <label>Referential equality in JS</label>

            {/* <ExampleReRenderCB cb={handleExampleWithIssue} /> */}
            <ExampleReRenderCB cb={handleExample} />

            <button onClick={handleClick}>Handle re render</button>
            <p>Re render times: {counter}</p>
            <label>After every render the callback function is recreated</label>
        </React.Fragment>
    )
}

export default InitialIssue