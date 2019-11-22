import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../actions/recipes'
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

const IngredientsForm = ({setFormState, id, actions}) => {
    const [added, setAdded] = useState([])
    const [ingredients, setIngredients] = useState({
        recipe_id: id,
        ingredientsArray: [{
            name: '',
            quantity: '',
            measurement: ''
        }]
    })

    console.log(ingredients)

    useEffect(() => {
        setIngredients({
            ...ingredients,
            recipe_id: id
        })
    }, [id])

    const handleIngredients = (e, indx) => {
        let newIngredients = ingredients.ingredientsArray.map((ingredient, indx) => {
            return Number(e.target.id) === ingredient[indx] ? { ...ingredient, [e.target.name]: e.target.value } : ingredient
        })
        console.log(newIngredients)
        setIngredients({
            ...ingredients,
            ingredientsArray: [
                ...newIngredients
            ]
        })
    }

    const addIndgredient = e => {
        e.preventDefault()
        setIngredients({
            ...ingredients,
            ingredientsArray: [
                ...ingredients.ingredientsArray,
                {
                    name: '',
                    quantity: '',
                    measurement: '',
                }
            ]
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setFormState({
            renderRecipeForm: false,
            renderIngredientsForm: false,
            renderInstructionsForm: true
        })
        actions.addIngredients(ingredients)
    }

    return (
        <FormDiv onSubmit={handleSubmit}>
            <Ingredients>
                <h3>Add Ingredients to Your Recipe</h3>
                <AddButton onClick={addIndgredient}>+</AddButton>
                <ColumnWrapper>
                    {ingredients.ingredientsArray &&
                        ingredients.ingredientsArray.map((ingredient, indx) => {
                            return (
                                <Ingredient key={indx} >
                                    <Name id={indx} type='text' name='name' placeholder='Name' value={ingredients.ingredientsArray[indx].name} onChange={(e) => handleIngredients(e, indx)} />
                                    <Quantity id={indx} type='text' name='quantity' placeholder='Quantity' value={ingredients.ingredientsArray[indx].quantity} onChange={(e) => handleIngredients(e,indx)} />
                                    <Measurement id={indx} type='text' name='measurement' placeholder='Measurement' value={ingredients.ingredientsArray[indx].measurement} onChange={(e) => handleIngredients(e, indx)} />
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

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(IngredientsForm);