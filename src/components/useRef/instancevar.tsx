import React, { useEffect, useRef } from "react";

const InstanceVar = () => {
    const intervalIdRef = useRef<number>()

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            console.log('interval executed')
        }, 1000)

        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [])

    return <label>Instance variables with useRef</label>
}

export default InstanceVar