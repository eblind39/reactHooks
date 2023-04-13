import { TODO } from "../../types"
import { ADD_TODO, TOGGLE_TODO } from "./todoactiontypes"
import { TodoAction } from "./todoreducers"

const actionAddTodo = ({id, title}: TODO): TodoAction => ({
    type: ADD_TODO,
    payload: {
        id,
        title,
        status: 1,
    } as TODO
} as TodoAction)

const actionToggleTodo = (id: number): TodoAction => ({
    type: TOGGLE_TODO,
    payload: {id, } as TODO
} as TodoAction)

export { actionAddTodo, actionToggleTodo }