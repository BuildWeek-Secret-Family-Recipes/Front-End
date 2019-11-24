import React from 'react';
import styled from 'styled-components'

const AddedIngredientDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 2.5rem;
    border: 1px solid black;
    border-radius: .5rem;
    padding: .5rem;
    margin: 1rem auto;
    background: #ffeee2;
`
const H4 = styled.h3`
    
`
const Delete = styled.div`
    :hover {
        cursor: pointer;
    }
`
const AddedIngredient = ({ingredient, deleteIngredient}) => {
	return (
		<AddedIngredientDiv>
            <h4>{ingredient.name}</h4>
            <h4>{ingredient.quantity}</h4>
            <h4>{ingredient.measurement}</h4>
            <Delete onClick={() => deleteIngredient(ingredient.id)}>X</Delete>
		</AddedIngredientDiv>
	);
};

export default AddedIngredient;
