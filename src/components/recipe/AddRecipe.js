import React, { useState } from 'react'
// import AxiosWithAuth from '../../utils/api'
// import styled from 'styled-components'

import RecipeForm from './RecipeForm'
import IngredientsForm from './IngredientsForm'
import InstructionsForm from './InstructionsForm'

// const FormDiv = styled.form`
//     margin: 3rem auto;
//     border: 1px solid black;
//     border-radius: .5rem;
//     padding: 1rem;
//     width: 85%;
//     background: #d2bba0;
// `
// const RowWrapper = styled.div`
//     display: flex;
//     flex-flow: wrap row;
//     justify-content: space-between;
//     margin-top: 3rem;
// `
// const SubmitButton = styled.button`
//     margin-top: 2rem;
//     height: 2rem;
//     width: 10rem;
//     border-radius: .3rem;
//     background: #f2ffe0;
//     :hover {
//         cursor: pointer;
//         background: #9f7e69;
//         color: #f2ffe0;
//     }
// `

const AddRecipe = (props) => {
    // eslint-disable-next-line
    const [error, setError] = useState()
    const [id, setId] = useState()
    const [formState, setFormState] = useState({
        renderRecipeForm: true,
        renderIngredientsForm: false,
        renderInstructionsForm: false
    })

    return (
        <div>
            <h3>Add A Recipe to Your Cookbook</h3>
            {formState.renderRecipeForm && <RecipeForm setFormState={setFormState} />}
            {formState.renderIngredientsForm && <IngredientsForm setFormState={setFormState} id={id} setId={setId}/>}
            {formState.renderInstructionsForm && <InstructionsForm setFormState={setFormState} id={id} setId={setId} />}
        </div>
    )
}

export default AddRecipe