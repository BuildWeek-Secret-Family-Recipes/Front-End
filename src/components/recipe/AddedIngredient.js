import React from 'react';

const AddedIngredient = ({ingredient, deleteIngredient}) => {
	return (
		<div>
            <h3>{ingredient.name}</h3>
            <h3>{ingredient.quantity}</h3>
            <h3>{ingredient.measurement}</h3>
            <h3 onClick={() => deleteIngredient(ingredient.id)}>X</h3>
		</div>
	);
};

export default AddedIngredient;
