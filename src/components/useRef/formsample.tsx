import React, { useEffect, useRef } from "react";

const FormSample = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const oneTimeRef = useRef<boolean>(false)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
            inputRef.current.value = 'Changed with useRef'
        }
    }, [])

    useEffect(() => {
        if (!oneTimeRef.current) {
            oneTimeRef.current = true
            return
        }

        console.log('%cPrinted only one time by using useRef', 'color: yellow; font-size: larger')
    })

    return <input type="text" ref={inputRef} />
}

export default FormSample