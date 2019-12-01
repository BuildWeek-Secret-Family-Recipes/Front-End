import AxiosWithAuth from '../utils/api';

export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE';

export const ADD_INGREDIENTS_SUCCESS = 'ADD_INGREDIENTS_SUCCESS';
export const ADD_INGREDIENTS_FAILURE = 'ADD_INGREDIENTS_FAILURE';

export const ADD_INSTRUCTIONS_SUCCESS = 'ADD_INSTRUCTIONS_SUCCESS';
export const ADD_INSTRUCTIONS_FAILURE = 'ADD_INSTRUCTIONS_FAILURE';

const addRecipe = (recipe, setId) => {
    return dispatch => {
        AxiosWithAuth().post('/auth/recipes', recipe)
        .then(res => {
            setId(res.data[0])
            dispatch({ 
                type: ADD_RECIPE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: ADD_RECIPE_FAILURE,
                error: err.response.data.message
            })
        })
    }
}

const addIngredients = (ingredients, id) => {
    return dispatch => {
        ingredients.forEach(ingredient => {
            AxiosWithAuth()
                .post('/auth/ingredients', { 
                    name: ingredient.name,
                    quantity: ingredient.quantity,
                    measurement: ingredient.measurement,
                    recipe_id: id
                 })
                .then(res => {
                    dispatch({
                        type: ADD_INGREDIENTS_SUCCESS,
                        payload: res.data
                    })
                })
                .catch(err => {
                    dispatch({
                        type: ADD_INGREDIENTS_FAILURE,
                        error: err.response.data.message
                    })
                })
        })
    }
}

const addInstructions = (instructions, id) => {
    return dispatch => {
        instructions.forEach(instruction => {
            AxiosWithAuth()
                .post('/auth/instructions', { 
                    recipe_id: id,
                    step_number: instruction.step_number,
                    instruction: instruction.instruction
                 })
                .then(res => {
                    dispatch({
                        type: ADD_INSTRUCTIONS_SUCCESS,
                        payload: res.data
                    })
                })
                .catch(err => {
                    dispatch({
                        type: ADD_INSTRUCTIONS_FAILURE,
                        error: err.response.data.message
                    })
                })
        })
    }
}

export const actionCreators = {
    addRecipe,
    addIngredients,
    addInstructions
}