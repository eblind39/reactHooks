import React, { useEffect, useReducer, useState } from "react";

const initialState = {
    name: '',
    age: 0,
    address: { address1: '', address2: '' },
    foo: {
        foo1: {
            foo2: {
                name: '',
                test: '',
            },
            new: {}
        }
    }
}

type ActionReducerType = {
    type: string
    payload: { name: any; } 
}

const reducer = (state: any, action: ActionReducerType) => {
    // logic for status update
    if (action.type === 'UPDATE_NAME') {
        return {...state, name: action.payload.name}
    }

    return state
}

const WithReducer = () => {
    const [user, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const action = {
            type: 'UPDATE_NAME',
            payload: {
                name: 'Ernst'
            }
        }

        dispatch(action)
    }, [])

    return <label>`Example: ${JSON.stringify(user)}`</label>
}

export default WithReducer