import React, { useState } from 'react'
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
const Name = styled.input`
    height: 1.5rem;
    width: 20rem;
`
const OriginalAuthor = styled.input`
    margin-left: 2rem;
    width: 10rem;
`
const TypeOfMeal = styled.input`
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

const RecipeForm = ({setFormState, setId, actions}) => {
    const [recipe, setRecipe] = useState({
        name: '',
        type_of_meal: '',
        original_author: '',
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

    const handleSubmit = e => {
        e.preventDefault()
        actions.addRecipe(recipe, setId)
        setFormState({
            renderRecipeForm: false,
            renderIngredientsForm: true,
            renderInstructionsForm: false
        })

    }

    return (
        <FormDiv onSubmit={handleSubmit}>
            <Name type='text' name='name' placeholder='Name' value={recipe.name} onChange={handleChange} />
            <OriginalAuthor type='text' name='original_author' placeholder='Creator' value={recipe.original_author} onChange={handleChange} />
            <TypeOfMeal type='text' name='type_of_meal' placeholder='type_of_meal' value={recipe.type_of_meal} onChange={handleChange} />
            <Private type='radio' name='private' onClick={toggle} /><Span selected={recipe.private}>Private</Span>
            <SubmitButton type='submit'>Add Recipe</SubmitButton>
        </FormDiv>
    )
}

  
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(RecipeForm);