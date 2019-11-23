import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editRecipe } from '../../actions/recipes';

function EditRecipe(props) {
    const [recipe, setRecipe] = useState({
        name: '',
        type_of_meal: '',
        original_author: '',
        user_id: 0,
        private: null
    })

    const handleChange = (event) => {
        setRecipe({
            ...recipe,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.editRecipe(recipe)    
        props.history.push(`/api/auth/recipes/user`)
    }

    return (
        <div className='edit-card'>
            <form onSubmit={handleSubmit} className='edit-form'>
                <h1>Update Recipe</h1>
                <label>Title</label>
                <input 
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={recipe.name}
                    onChange={handleChange}
                />

                <label>Type</label>
                <input 
                    type='text'
                    name='type'
                    placeholder='Meal Type'
                    value={recipe.type_of_meal}
                    onChange={handleChange}
                />

                <label>Source</label>
                <input 
                    type='text'
                    name='source'
                    placeholder='Original Author'
                    value={recipe.original_author}
                    onChange={handleChange}
                />

                <label>Ingredients</label>
                <input 
                    type='text'
                    name='stars'
                    placeholder='New Ingredients'
                />

                <button className='save'>Save Changes</button>
            </form>
        </div>
    )
}

const mapStateToProps = ({ recipeReducer }) => ({
    recipe: recipeReducer.recipe
})

export default connect(mapStateToProps, { editRecipe })(EditRecipe)