import React, { useState } from 'react'
import api from '../../utils/api'
import styled from 'styled-components'

const FormDiv = styled.form`

`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3rem;
`
const Title = styled.input`

`
const Source = styled.input`

`
const Ingredients = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 40%;
    padding: 1.5rem;
`
const Ingredient = styled.div`

`
const Type = styled.input`
    margin-top: .5rem;
`
const Amount = styled.input`
    margin-top: .5rem;
`
const Instructions = styled.div`
    border: 1px solid black;
    width: 40%;
    padding: 1.5rem;
`
const Instruction = styled.input`

`
const SubmitButton = styled.button`

`
const AddButton = styled.button`
    float: right;
    width: 2rem;
`
 
const AddRecipe = (props) => {
    const [ingredients, setIngredients] = useState([{ id: 0, type: '', amount: ''}])
    const [instructions, setInstructions] = useState([''])
    const [recipe, setRecipe] = useState({
        title: '',
        source: '',
        ingredients: [{ type: '', amount: '' }],
        instructions: [''],
        category: '',
        private: null
    })

    const handleChange = e => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value

        })
    }

    const handleIngredients = e => {
        let newIngredients = ingredients.map(ingredient => Number(e.target.id) === ingredient.id ? { ...ingredient, [e.target.name]: e.target.value } : ingredient)
        setIngredients(newIngredients)
        console.log(ingredients)
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

    const addInstruction = e => {
        e.preventDefault()
        setInstructions([...instructions])
    }

    return (
        <FormDiv>
            <Wrapper>
                <Title type='text' name='title' placeholder='Title' value={recipe.title} onChange={handleChange} />
                <Source type='text' name='source' placeholder='source' value={recipe.source} onChange={handleChange} />
            </Wrapper>
            <Wrapper>
                <Ingredients>
                    <h3>Ingredients</h3>
                    {ingredients &&
                        ingredients.map((ingredient, indx) => {
                            return (
                                <Ingredient key={indx} >
                                    <Type id={ingredient.id} type='text' name='type' placeholder='Type' onChange={handleIngredients} />
                                    <Amount id={ingredient.id} type='text' name='amount' placeholder='Amount' onChange={handleIngredients} />
                                </Ingredient>
                            )
                        })
                    }
                    <AddButton onClick={addIndgredient}>+</AddButton>
                </Ingredients>
                <Instructions>
                    {instructions &&
                        instructions.map((instruction, indx) => {
                            return <Instruction key={indx} type='text' name='type' placeholder='Type' value={instruction} onChange={handleChange} />     
                        })
                    }
                    <AddButton onClick={addInstruction}>+</AddButton> 
                </Instructions>
            </Wrapper>
            <SubmitButton type='submit'>Add Recipe</SubmitButton>
        </FormDiv>
    )
}

export default AddRecipe