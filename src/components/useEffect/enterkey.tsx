import React, {useEffect} from "react";

interface KeyboardEvent {
    code: string;
}

const EnterKey = () => {

    const handleKeyDown = (event: KeyboardEvent) => {
        // const target: Window = event.target as Window
        const enterKeyCode: string = 'Enter'
        const pressedKeyCode: string = event.code

        console.log('pressedKeyCode', pressedKeyCode)

        if (enterKeyCode.toLocaleLowerCase() === pressedKeyCode.toLocaleLowerCase()) {
            alert('Enter key pressed...')
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        console.log('%cSubscription added', 'color: cyan')

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            console.log('%cSubscription removed', 'color: cyan')
        }
    }, [])

    return <label>Please press the Enter key!</label>
}

export default EnterKey