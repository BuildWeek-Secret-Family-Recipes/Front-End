import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../actions/recipes'
import styled from 'styled-components'

import AddedIngredient from  './AddedIngredient'

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
const Delete = styled.div`
    :hover {
        cursor: pointer;
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
    const [ingredient, setIngredient] = useState({
        name: '',
        quantity: '',
        measurement: ''
    })

    const handleIngredients = e => {
        setIngredient({
            ...ingredient,
            [e.target.name]: e.target.value
        })
    }

    const addIndgredient = e => {
        e.preventDefault()
        let newId = added.length > 0 ? added[added.length-1].id + 1 : 0
        setAdded([
            ...added,
            {
                ...ingredient,
                id: newId
            }
        ])
    }

    const deleteIngredient = indx => {
        let newIngredients = added.filter(ingredient => {
            if (ingredient.id !== indx) return ingredient
        })
        console.log(newIngredients)
        setAdded(newIngredients)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setFormState({
            renderRecipeForm: false,
            renderIngredientsForm: false,
            renderInstructionsForm: true
        })
        actions.addIngredients(added, id)
    }

    return (
        <FormDiv onSubmit={handleSubmit}>
            <Ingredients>
                <h3>Add Ingredients to Your Recipe</h3>
                <AddButton onClick={addIndgredient}>+</AddButton>
                <ColumnWrapper>
                    <Ingredient>
                        <Name type='text' name='name' placeholder='Name' value={ingredient.name} onChange={handleIngredients} />
                        <Quantity type='text' name='quantity' placeholder='Quantity' value={ingredient.quantity} onChange={handleIngredients} />
                        <Measurement type='text' name='measurement' placeholder='Measurement' value={ingredient.measurement} onChange={handleIngredients} />
                    </Ingredient>
                </ColumnWrapper>
            </Ingredients>
            <Ingredients>
                {added &&
                    added.map((ingredient, indx) => {
                        return <AddedIngredient key={indx} ingredient={ingredient} deleteIngredient={deleteIngredient} />
                    })
                }
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