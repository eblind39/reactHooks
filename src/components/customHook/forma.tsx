import React, { SyntheticEvent } from "react";
import useForm from "../../hooks/useform";
import { Customer } from "../../types";

const FormA = () => {
    const [form, setForm] = useForm({
        name: '',
        age: 0,
    } as Customer)

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
                    onChange={setForm}
                />
            </p>
            <p>
                Age:
                <input 
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={setForm}
                />
            </p>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default FormA