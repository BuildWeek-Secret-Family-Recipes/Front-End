import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../actions/recipes'
import styled from 'styled-components'

const FormDiv = styled.form`
    margin: 3rem auto;
    padding: 1rem;
    width: 85%;
`
const RowWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Added = styled.div`
    border: 1px solid black;
    width: 50%;
    border-radius: .3rem;
    background: #d2bba0;
`
const Instructions = styled.div`
    background: #d2bba0;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: .3rem;
    width: 40%;
    height: 10rem;
    padding: 1.5rem;
`
const Instruction = styled.input`
    width: 90%;
    height: 2rem;
    margin-top: .5rem;
`
const AddedInstruction = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 2.5rem;
    border: 1px solid black;
    border-radius: .5rem;
    padding: .5rem;
    margin: 1rem auto;
    background: #ffeee2;
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
const Delete = styled.div`
    :hover {
        cursor: pointer;
    }
`

const InstructionsForm = ({setFormState, id, actions, history}) => {
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

    const deleteInstruction = indx => {
        let newInstructions = added.filter(instruction => {
            if (instruction.id !== indx) return instruction
        })
        setAdded(newInstructions)
    }

    const handleSubmit = e => {
        e.preventDefault()
        actions.addInstructions(added, id)
        history.push('/recipes')
        setFormState({
            renderRecipeForm: true,
            renderIngredientsForm: false,
            renderInstructionsForm: false
        })
    }

    return (
        <FormDiv onSubmit={handleSubmit}>
            <h3>Add Instructions</h3>
            <RowWrapper>
                <Instructions>
                    <ColumnWrapper>
                        <Instruction type='text' name='instruction' placeholder='Task' onChange={handleInstructions} />
                        <AddButton onClick={addInstruction}>+</AddButton> 
                    </ColumnWrapper>
                    <SubmitButton type='submit'>Submit Instructions</SubmitButton>
                </Instructions>
                <Added>
                    {added &&
                        added.map((instruction, indx) => {
                            return <AddedInstruction key={indx}>{instruction.instruction}<Delete onClick={() => deleteInstruction(instruction.id)}>X</Delete></AddedInstruction>     
                        })
                    }
                </Added>
            </RowWrapper>
        </FormDiv>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(InstructionsForm);