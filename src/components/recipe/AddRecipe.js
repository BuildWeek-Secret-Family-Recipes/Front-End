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
const RowWrapper = styled.div`
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    margin-top: 3rem;
`
const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`
const Title = styled.input`
    height: 1.5rem;
    width: 20rem;
`
const Source = styled.input`
    margin-left: 2rem;
    width: 10rem;
`
const Category = styled.input`
    margin-left: 2rem;
    width: 10rem;
`
const Private = styled.input`
    margin: .5rem 0 0 2rem;
    border-radius: 5rem;
    height: 1rem;
`
const Span = styled.span`
    margin-top: .4rem;
    ${({ selected }) => selected === true ? `color: black;` : `color: lightgray;`};    
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
const Type = styled.input`
    margin-top: .5rem;
    height: 2rem;
    width: 45%;
`
const Amount = styled.input`
    margin: .5rem 0 0 1rem;
    height: 2rem;
    width: 45%;
`
const Instructions = styled.div`
    border: 1px solid black;
    border-radius: .3rem;
    width: 40%;
    padding: 1.5rem;
`
const Instruction = styled.input`
    width: 90%;
    height: 2rem;
    margin-top: .5rem;
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
 
const AddRecipe = (props) => {
    const [error, setError] = useState()
    const [ingredients, setIngredients] = useState([{ id: 0, type: '', amount: ''}])
    const [instructions, setInstructions] = useState([{ id: 0, task: ''}])
    const [recipe, setRecipe] = useState({
        title: '',
        source: '',
        ingredients: [{ type: '', amount: '' }],
        instructions: [''],
        category: '',
        private: false
    })

    const handleChange = e => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value

        })
    }

    const toggle = e => {
        setRecipe({
            ...recipe,
            private: !recipe.private
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
            <RowWrapper>
                <Title type='text' name='title' placeholder='Title' value={recipe.title} onChange={handleChange} />
                <Source type='text' name='source' placeholder='source' value={recipe.source} onChange={handleChange} />
                <Category type='text' name='category' placeholder='category' value={recipe.category} onChange={handleChange} />
                <Private type='radio' name='private' onClick={toggle} /><Span selected={recipe.private}>Private</Span>
            </RowWrapper>
            <RowWrapper>
                <Ingredients>
                    <h3>Ingredients</h3>
                    <AddButton onClick={addIndgredient}>+</AddButton>
                    <ColumnWrapper>
                        {ingredients &&
                            ingredients.map((ingredient, indx) => {
                                return (
                                    <Ingredient key={indx} >
                                        <Type id={ingredient.id} type='text' name='type' placeholder='Ingredient' onChange={handleIngredients} />
                                        <Amount id={ingredient.id} type='text' name='amount' placeholder='Amount' onChange={handleIngredients} />
                                    </Ingredient>
                                )
                            })
                        }
                    </ColumnWrapper>
                </Ingredients>
                <Instructions>
                    <h3>Instructions</h3>
                    <AddButton onClick={addInstruction}>+</AddButton> 
                    <ColumnWrapper>
                        {instructions &&
                            instructions.map((instruction, indx) => {
                                return <Instruction key={indx} id={instruction.id} type='text' name='task' placeholder='Task' onChange={handleInstructions} />     
                            })
                        }
                    </ColumnWrapper>
                </Instructions>
            </RowWrapper>
            <SubmitButton type='submit'>Add Recipe</SubmitButton>
        </FormDiv>
    )
}

export default AddRecipe