import React, { useEffect, useRef } from "react";

const Timer = () => {
    const intervalIdRef = useRef<number>()

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            console.log('%cInterval executed', 'color: cyan; font-size: larger;')
        }, 1000)

        return () => {
            clearInterval(intervalIdRef.current)
            console.log('%cTimer disposed', 'color: red')
        }
    }, [])

    return <label>Timer component</label>
}

export default Timer