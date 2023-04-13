import { TODO } from "../../types"

export type TodoAction = {
    type: string
    payload: TODO
}

const todoReducer = (state: TODO[], action: TodoAction) => {
    if(action.type === 'ADD_TODO') {
        return [...state, action.payload]
    }

    if(action.type === 'TOGGLE_TODO') {
        const existingTodo: TODO | undefined = state.find((todo: TODO) => todo.id === action.payload.id)
        if (!existingTodo) return state

        // console.log(`%c${JSON.stringify(existingTodo)}`, 'color: cyan')

        const newTodos: TODO[] = state.map((todo: TODO) => {
            if (todo.id === existingTodo.id) {
                return {
                    ...existingTodo,
                    status: (existingTodo.status === 1 ? 2 : 1)
                } as TODO
            }
            return todo
        })

        // console.log(`%c${JSON.stringify(newTodos)}`, 'color: yellow')

        return [...newTodos]
    }

    return state
}

export { todoReducer }