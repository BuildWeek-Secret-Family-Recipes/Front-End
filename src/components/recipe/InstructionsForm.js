import React, { useState } from 'react'
import api from '../../utils/api'
import styled from 'styled-components'

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

const InstructionsForm = () => {
    const [instructions, setInstructions] = useState({
        recipe_id: '',
        step_number: '',
        instruction: ''
    })

    const addInstruction = e => {
        e.preventDefault()
        setInstructions([
            ...instructions,
            {
                recipe_id: '',
                step_number: '',
                instruction: ''
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
    )
}

export default InstructionsForm