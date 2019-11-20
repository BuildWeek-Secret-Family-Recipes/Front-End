import React, { useState } from 'react'
import api from '../../utils/api'
import styled from 'styled-components'

import RecipeForm from './RecipeForm'

const FormDiv = styled.form`
    margin: 3rem auto;
    border: 1px solid black;
    border-radius: .5rem;
    padding: 1rem;
    width: 85%;
    background: #d2bba0;
`
const RowWrapper = styled.div`
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    margin-top: 3rem;
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

const AddRecipe = (props) => {
    const [error, setError] = useState()
    const [ingredients, setIngredients] = useState([{ id: 0, type: '', amount: ''}])
    const [instructions, setInstructions] = useState([{ id: 0, task: ''}])
    const [formState, setformState] = useState({
        title: '',
        source: '',
        ingredients: [{ type: '', amount: '' }],
        instructions: [''],
        category: '',
        private: false
    })

    const handleSubmit = e => {
        e.preventDefault()
        setRecipe({ ...recipe, instructions, ingredients })
        api()
            .post('/', recipe)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                return setError(err.response)
            })
    }

    return (
        <FormDiv onSubmit={handleSubmit}>
            <h3>Add A Recipe to Your Cookbook</h3>
            {!recipeAdded && <RecipeForm />}
            {!ingredientsAdded && <IngredientsForm />}
            {!instructionsAdded && <InstructionsForm />}
        </FormDiv>
    )
}

export default AddRecipe