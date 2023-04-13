import React from "react";
import { Food } from "../../types";
import FoodItem from './fooditem'

interface Props {
    foodList: Food[]
    removeItem: (id: number) => void
}

const FoodList = React.memo(({foodList, removeItem}: Props) => {
    console.log('FoodList rendered')

    return (
        <ul>
            {
                foodList.map(item => <FoodItem key={item.id} item={item} removeItem={removeItem} />)
            }
        </ul>
    )
})

export default FoodList