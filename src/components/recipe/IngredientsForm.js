import React, { useState } from 'react'
import api from '../../utils/api'
import styled from 'styled-components'

const FormDiv = styled.form`
    margin: 3rem auto;
    border: 1px solid black;
    border-radius: .5rem;
    padding: 1rem;
    width: 85%;
    background: #d2bba0;
`
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
const SubmitButton = styled.button`
    margin-top: 2rem;
    height: 2rem;
    width: 10rem;
    border-radius: .3rem;
    background: #f2ffe0;
    :hover {
        cursor: pointer;
        background: #9f7e69;
        color: #f2ffe0;
    }
`

const IngredientsForm = ({setFormState}) => {
    const [ingredients, setIngredients] = useState([{
        name: '',
        quantity: '',
        measurement: '',
        recipe_id: ''
    }])

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

    const handleSubmit = e => {
        e.preventDefault()
        setFormState({
            renderRecipeForm: false,
            renderIngredientsForm: false,
            renderInstructionsForm: true
        })
        // api()
        //     .post('/', recipe)
        //     .then(res => {
        //         console.log(res)
        //         setFormState({
        //             renderRecipeForm: false,
        //             renderIngredientsForm: false,
        //             renderInstructionsForm: true
        //         })
        //     })
        //     .catch(err => {
        //         return setError(err.response)
        //     })
    }

    return (
        <FormDiv onSubmit={handleSubmit}>
            <Ingredients>
                <h3>Add Ingredients to Your Recipe</h3>
                <AddButton onClick={addIndgredient}>+</AddButton>
                <ColumnWrapper>
                    {ingredients &&
                        ingredients.map((ingredient, indx) => {
                            return (
                                <Ingredient key={indx} >
                                    <Name type='text' name='name' placeholder='Name' value={ingredients.name} onChange={handleIngredients} />
                                    <Quantity type='text' name='quantity' placeholder='Quantity' value={ingredients.quantity} onChange={handleIngredients} />
                                    <Measurement type='text' name='measurement' placeholder='Measurement' value={ingredients.measurement} onChange={handleIngredients} />
                                </Ingredient>
                            )
                        })
                    }
                </ColumnWrapper>
            </Ingredients>
            <SubmitButton type='submit'>Add Ingredients</SubmitButton>
        </FormDiv>
    )
}

export default IngredientsForm