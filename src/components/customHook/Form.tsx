 import React, { SyntheticEvent, useState } from "react";
import { Customer } from "../../types";

 const Form = () => {
    const [form, setForm] = useState<Customer>({
        name: '',
        age: 0,
    })

    const handleChange = (event: SyntheticEvent) => {
        const target: HTMLInputElement = event.target as HTMLInputElement
        const value: string = target.value
        const name: string = target.name
        setForm({...form, [name]: value})
    }

    const handleSubmit = (event: SyntheticEvent) => {
        const target: HTMLFormElement = event.target as HTMLFormElement
        event.preventDefault()
        alert(JSON.stringify(form))
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                Name:
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
            </p>
            <p>
                Age:
                <input 
                    type="text"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                />
            </p>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
 }

 export default Form