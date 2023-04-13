import React from "react";
import { Food } from "../../types";

interface Props {
    item: Food
    removeItem: (id: number) => void
}

const FoodItem = React.memo(({item, removeItem}: Props) => {
    console.log('FoodItem rendered')

    return (
        <React.Fragment>
            <li>{item.name}</li>
            <button onClick={() => removeItem(item.id)}>Remove</button>
        </React.Fragment>
    )
})

export default FoodItem