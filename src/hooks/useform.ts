import { useState, SyntheticEvent } from "react"

const useForm = (initialState: any) => {
    const [form, setForm] = useState(initialState)

    const handleChange = (event: SyntheticEvent) => {
        const target: HTMLInputElement = event.target as HTMLInputElement
        const value: string = target.value
        const name: string = target.name
        setForm({...form, [name]: value})
    }

    return [form, handleChange]
}

export default useForm