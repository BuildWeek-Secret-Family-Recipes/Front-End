//Recipe Card
import React from 'react';
import { Card } from '../pages/Home';
const RecipeCard = (props) => {
    return (
        <Card>
            <h3>{props.name}</h3>
            <h5>Type: {props.typeOfMeal}</h5>
            <h5>Source: {props.author}</h5>
        </Card>
    )
}
export default RecipeCard;