import React, { SyntheticEvent, useCallback, useMemo, useState } from "react";
import { Food } from "../../types";
import FoodList from './foodlist'

const food: Food[] = [
    {id: 1, name: 'Pizza'},
    {id: 2, name: 'Hamburger'},
    {id: 3, name: 'Hot-Dog'},
    {id: 4, name: 'Tacos'},
    {id: 5, name: 'Sandwich'},
]

const FoodContainer = () => {
    const [foodList, setFoodList] = useState<Food[]>(food)
    const [textInput, setTextInput] = useState<string>('')

    console.log('Food container rednered')

    const handleChange = (event: SyntheticEvent) => {
        const target: HTMLInputElement = event.target as HTMLInputElement
        const value = target.value
        setTextInput(value)
    }

    const removeItem = useCallback((id: number) => 
        setFoodList(foodList.filter(food => food.id !== id)),
    [foodList])

    return (
        <React.Fragment>
            <h4>My Food List</h4>
            <p>
                New food
                <input value={textInput} onChange={handleChange} />
            </p>
            <FoodList foodList={foodList} removeItem={removeItem} />
        </React.Fragment>
    )
}

export default FoodContainer