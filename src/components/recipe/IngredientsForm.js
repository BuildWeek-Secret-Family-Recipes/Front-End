import React, { useState } from 'react'
import api from '../../utils/api'
import styled from 'styled-components'

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`  
const Ingredients = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 40%;
    padding: 1.5rem;
    border-radius: .3rem;
`
const Ingredient = styled.div`

`
const Name = styled.input`
    margin-top: .5rem;
    height: 2rem;
    width: 45%;
`
const Quantity = styled.input`
    margin: .5rem 0 0 1rem;
    height: 2rem;
    width: 45%;
`
const Measurement = styled.input`
    margin: .5rem 0 0 1rem;
    height: 2rem;
    width: 45%;
`
const AddButton = styled.button`
    float: right;
    width: 2rem;
    background: #f2ffe0;
    :hover {
        cursor: pointer;
        background: #9f7e69;
        color: #f2ffe0;
    }
`

const IngredientsForm = () => {
    const [ingredients, setIngredients] = useState({
        name: '',
        quantity: '',
        measurement: '',
        recipe_id: ''
    })

    const handleIngredients = e => {
        let newIngredients = ingredients.map(ingredient => {
            return Number(e.target.id) === ingredient.id ? { ...ingredient, [e.target.name]: e.target.value } : ingredient
        })
        setIngredients(newIngredients)
    }

    const addIndgredient = e => {
        e.preventDefault()
        setIngredients([
            ...ingredients,
            {
                id: ingredients.length,
                type: '',
                amount: '' 
            }
        ])
    }

    return (
        <Ingredients>
            <h3>Ingredients</h3>
            <AddButton onClick={addIndgredient}>+</AddButton>
            <ColumnWrapper>
                {ingredients &&
                    ingredients.map((ingredient, indx) => {
                        return (
                            <Ingredient key={indx} >
                                <Name type='text' name='name' placeholder='Name' value={recipe.name} onChange={handleIngredients} />
                                <Quantity type='text' name='quantity' placeholder='Quantity' value={recipe.quantity} onChange={handleIngredients} />
                                <Measurement type='text' name='measurement' placeholder='Measurement' value={recipe.measurement} onChange={handleIngredients} />
                            </Ingredient>
                        )
                    })
                }
            </ColumnWrapper>
        </Ingredients>
    )
}

export default IngredientsForm