import React, { SyntheticEvent, useReducer, useState } from "react";
import { todoInitialState } from "./todoinitialstate";
import { TodoAction, todoReducer } from './todoreducers'
import { actionAddTodo, actionToggleTodo } from "./todoactions";
import { TODO } from '../../types/index';

const ToDo = () => {
    const [todoText, setTodoText] = useState<string>('')
    const [todos, dispatch] = useReducer(todoReducer, todoInitialState)

    const handleChange = (event: SyntheticEvent) => {
        const target: HTMLInputElement = event.target as HTMLInputElement
        const value: string = target.value
        setTodoText(value)
    }

    const addTodo = () => {
        dispatch(actionAddTodo({id: todos.length + 1, title: todoText} as TODO) as TodoAction)
        setTodoText('')
    }

    const toggleToDo = (id: number) => {
        dispatch(actionToggleTodo(id) as TodoAction)
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
                            (todo: TODO) => 
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