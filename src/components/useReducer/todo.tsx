import React, { SyntheticEvent, useReducer, useState } from "react";
import { TODO } from '../../types/index';

const initialState: TODO[] = [
    {id: 1, title: 'Test', status: 1}
]

type ActionReducerType = {
    type: string
    payload: TODO // { id: number, title: string, status: TodoStatus } 
}

const reducer = (state: TODO[], action: ActionReducerType) => {
    if(action.type === 'ADD_TODO') {
        return [...state, action.payload]
    }

    return state
}

const ToDo = () => {
    const [todoText, setTodoText] = useState<string>('')
    const [todos, dispatch] = useReducer(reducer, initialState)

    const handleChange = (event: SyntheticEvent) => {
        const target: HTMLInputElement = event.target as HTMLInputElement
        const value: string = target.value
        setTodoText(value)
    }

    const addTodo = () => {
        const action = {
            type: 'ADD_TODO',
            payload: {
                id: todos.length + 1,
                title: todoText,
                status: 1,
            } as TODO
        }

        dispatch(action)
        setTodoText('')
    }

    return (
        <React.Fragment>
            <p>
                <label>New ToDo</label>
                <input type="text" value={todoText} onChange={handleChange} />
                <button onClick={addTodo}>Add</button>
            </p>
            <h3>List</h3>
            {
                todos.length > 0 &&
                <ul>
                    {
                        todos.map(todo => <li key={todo.id}>{todo.title}</li>)
                    }
                </ul>
            }
            
        </React.Fragment>

    )
}

export default ToDo