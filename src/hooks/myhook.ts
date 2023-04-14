import { useEffect, useRef } from "react"

const useTimer = () => {
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
}

export default useTimer