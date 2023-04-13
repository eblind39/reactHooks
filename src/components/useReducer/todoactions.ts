import { TODO } from "../../types"
import { ADD_TODO, TOGGLE_TODO } from "./todoactiontypes"
import { ActionReducerType } from "./todoreducers"

const actionAddTodo = ({id, title}: TODO): ActionReducerType => ({
    type: ADD_TODO,
    payload: {
        id,
        title,
        status: 1,
    } as TODO
} as ActionReducerType)

const actionToggleTodo = (id: number): ActionReducerType => ({
    type: TOGGLE_TODO,
    payload: {id, } as TODO
} as ActionReducerType)

export { actionAddTodo, actionToggleTodo }