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
        console.log(ingredients)
        AxiosWithAuth().post('/auth/ingredients', ingredients)
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
    }
}

export const actionCreators = {
    addRecipe,
    addIngredients
}