import React, { SyntheticEvent, useReducer, useState } from "react";
import { TODO } from '../../types/index';

const initialState: TODO[] = [
    {id: 1, title: 'Test', status: 1}
]

type ActionReducerType = {
    type: string
    payload: TODO
}

const reducer = (state: TODO[], action: ActionReducerType) => {
    if(action.type === 'ADD_TODO') {
        return [...state, action.payload]
    }

    if(action.type === 'TOGGLE_TODO') {
        const newTodos: TODO[] = state.map((todo: TODO) => {
            if (todo.id === action.payload.id) {
                return {
                    ...action.payload,
                    status: (action.payload.status === 1 ? 2 : 1)
                } as TODO
            }
            return todo
        })

        // console.log(`%c${JSON.stringify(newTodos)}`, 'color: yellow')

        return [...newTodos]
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
        const action: ActionReducerType = {
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

    const toggleToDo = (id: number) => {
        const todo: TODO | undefined = todos.find((todo: TODO) => todo.id === id)
        if (!todo) return

        // console.log(`%c${JSON.stringify(todo)}`, 'color: cyan')

        const action: ActionReducerType = {
            type: 'TOGGLE_TODO',
            payload: todo
        }

        dispatch(action)
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
                        todos.map(
                            todo => 
                            <li
                                onClick={() => toggleToDo(todo.id)} 
                                key={todo.id}
                                style={
                                    {
                                        color: (todo.status === 1 ? 'blue' : 'red'),
                                        textDecoration: (todo.status === 1 ? 'none' : 'line-through'),
                                        cursor: 'pointer'}
                                }
                            >
                                {todo.title}
                            </li>
                        )
                    }
                </ul>
            }
            
        </React.Fragment>

    )
}

export default ToDo