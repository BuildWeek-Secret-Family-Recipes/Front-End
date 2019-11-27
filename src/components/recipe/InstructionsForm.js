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
const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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

const InstructionsForm = ({setFormState, id}) => {
    const [added, setAdded] = useState([])
    const [instructions, setInstructions] = useState({
        step_number: '',
        instruction: ''
    })

    const handleInstructions = e => {
        setInstructions({
            ...instructions,
            [e.target.name]: e.target.value
        })
    }

    const addInstruction = e => {
        e.preventDefault()
        let newId = added.length > 0 ? added[added.length-1].id + 1 : 0
        setAdded([
            ...added,
            {
                ...instructions,
                id: newId
            }
        ])
    }


    const handleSubmit = e => {
        e.preventDefault()
        setFormState({
            renderRecipeForm: true,
            renderIngredientsForm: false,
            renderInstructionsForm: false
        })
    }

    return (
        <FormDiv onSubmit={handleSubmit}>
            <h3>Add Instructions</h3>
            <Instructions>
                <AddButton onClick={addInstruction}>+</AddButton> 
                <Instruction type='text' name='task' placeholder='Task' onChange={handleInstructions} />
                <ColumnWrapper>
                    {/* {instructions &&
                        instructions.map((instruction, indx) => {
                            return <Instruction key={indx} id={instruction.id} type='text' name='task' placeholder='Task' onChange={handleInstructions} />     
                        })
                    } */}
                </ColumnWrapper>
            </Instructions>
            <SubmitButton type='submit'>Add Instructions</SubmitButton>
        </FormDiv>
    )
}

export default InstructionsForm