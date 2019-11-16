import React, { useState } from 'react'
import api from '../../utils/api'
import styled from 'styled-components'

const FormDiv = styled.form`

`
const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3rem;
`
const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
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
    width: 70%;
    margin-top: .5rem;
`
const SubmitButton = styled.button`

`
const AddButton = styled.button`
    float: right;
    width: 2rem;
`
 
const AddRecipe = (props) => {
    const [ingredients, setIngredients] = useState([{ id: 0, type: '', amount: ''}])
    const [instructions, setInstructions] = useState([{ id: 0, task: ''}])
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
    
    const handleIngredients = e => {
        let newIngredients = ingredients.map(ingredient => {
            return Number(e.target.id) === ingredient.id ? { ...ingredient, [e.target.name]: e.target.value } : ingredient
        })
        setIngredients(newIngredients)
    }

    const addInstruction = e => {
        e.preventDefault()
        setInstructions([
            ...instructions,
            {
                id: instructions.length,
                task: ''
            }
        ])
    }

    const handleInstructions = e => {
        let newInstructions = instructions.map(instruction => {
            return Number(e.target.id) === instruction.id ? { ...instruction, [e.target.name]: e.target.value } : instruction
        })
        setInstructions(newInstructions)
    }

    return (
        <FormDiv>
            <RowWrapper>
                <Title type='text' name='title' placeholder='Title' value={recipe.title} onChange={handleChange} />
                <Source type='text' name='source' placeholder='source' value={recipe.source} onChange={handleChange} />
            </RowWrapper>
            <RowWrapper>
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
                    <h3>Instructions</h3>
                    <ColumnWrapper>
                        {instructions &&
                            instructions.map((instruction, indx) => {
                                return <Instruction key={indx} id={instruction.id} type='text' name='task' placeholder='Task' onChange={handleInstructions} />     
                            })
                        }
                    </ColumnWrapper>
                    <AddButton onClick={addInstruction}>+</AddButton> 
                </Instructions>
            </RowWrapper>
            <SubmitButton type='submit'>Add Recipe</SubmitButton>
        </FormDiv>
    )
}

export default AddRecipe