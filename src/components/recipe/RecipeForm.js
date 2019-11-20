import React, { useState } from 'react'
import api from '../../utils/api'
import styled from 'styled-components'

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

const RecipeForm = () => {
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

    return (
        <div>
            <Name type='text' name='name' placeholder='Name' value={recipe.name} onChange={handleChange} />
            <OriginalAuthor type='text' name='original_author' placeholder='Creator' value={recipe.original_author} onChange={handleChange} />
            <TypeOfMeal type='text' name='type_of_meal' placeholder='type_of_meal' value={recipe.type_of_meal} onChange={handleChange} />
            <Private type='radio' name='private' onClick={toggle} /><Span selected={recipe.private}>Private</Span>
        </div>
    )
}

export default RecipeForm