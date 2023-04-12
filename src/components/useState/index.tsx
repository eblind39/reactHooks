import React, { useState } from "react";
import { Person } from "../types";

const UseState = () => {
    const [counter, setCounter] = useState<number>(0)
    const [list, setList] = useState<string[]>([])
    const [object, setObject] = useState<Person>({
        name: 'Ernst',
        email: 'ernst@gmail.com'
    })
    const [persons, setPersons] = useState<Person[]>([])

    // the previous line of code is equivalent to the following:
    /*
        const state = useState<number>(0)
        const counter = state[0]
        const setCounter = state[1]
    */

    const handleClick = (evt: React.SyntheticEvent) => {
        setCounter(prevValue => prevValue + 1)
        setList(prevList => [...prevList, (counter + 1).toString()])
    }

    const removeItem = () => {
        if (list.length < 5) return;
        const listCleaned: string[] = list.filter((item, idx) => {
            if (idx !== 4) return item
        })

        setList(listCleaned)
    }

    const updateItem = () => {
        const updatedList: string[] = list.map((item, idx) => {
            if (idx === (list.length - 1)) {
                return `${item} updated`
            }
            return item
        })

        setList(updatedList)
    }

    const updateObject = () => {
        const propertyToUpdate = 'name'
        const newPerson: Person = {...object, [propertyToUpdate]: 'Alvison'}
        setObject(newPerson)

        setPersons([...persons, newPerson])
    }

    const updatePersons = () => {
        const nameToUpdate = 'Alvison'
        const newName = 'Edwin'

        const newPersons = persons.map((person, idx) => {
            if (person.name === nameToUpdate) {
                return {...person, name: newName}
            }
            return person
        })

        setPersons(newPersons)
    }

    return (
        <React.Fragment>
            <p>Clicks: {counter}</p>
            <button
                onClick={handleClick}
            >
                Click Me!
            </button>

            {
                list.length > 0 &&
                <ol>
                    {
                        list.map(item => <li key={item}>{item}</li>)
                    }
                </ol>
            }

            <br />

            <button
                onClick={removeItem}
            >
                Remove 5th element
            </button>

            <br />

            <button
                onClick={updateItem}
            >
                Update last element
            </button>

            <br />

            <button
                onClick={updateObject}
            >
                Update object
            </button>

            <br />

            <label>Name: {object.name}</label> <br />
            <label>email: {object.email}</label>

            <br />

            <button
                onClick={updatePersons}
            >
                Update persons
            </button>

            <br />

            {
                persons.length > 0 &&
                <ul>
                    {
                        persons.map(person => <li key={person.email}>{person.name} {person.email}</li>)
                    }
                </ul>
            }

        </React.Fragment>
    )
}

export default UseState;