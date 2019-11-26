import AxiosWithAuth from '../utils/api';
import axios from 'axios';

export const FETCH_RECIPE_REQUEST = 'FETCH_RECIPE_REQUEST'
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const FETCH_RECIPE_FAILURE = 'FETCH_RECIPE_FAILURE';

export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE';

export const EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS';
export const EDIT_RECIPE_FAILURE = 'EDIT_RECIPE_FAILURE'

export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE';

export const ADD_INGREDIENTS_SUCCESS = 'ADD_INGREDIENTS_SUCCESS';
export const ADD_INGREDIENTS_FAILURE = 'ADD_INGREDIENTS_FAILURE';

export const ADD_INSTRUCTIONS_SUCCESS = 'ADD_INSTRUCTIONS_SUCCESS';
export const ADD_INSTRUCTIONS_FAILURE = 'ADD_INSTRUCTIONS_FAILURE';

export const SET_LOADING = 'SET_LOADING';


export const getUserRecipes = () => dispatch => {
    console.log('dispatch?')
    dispatch({ type: FETCH_RECIPE_REQUEST })
        AxiosWithAuth().get(`/auth/recipes/user`)
            .then(res =>{
                dispatch({
                    type: FETCH_RECIPE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_RECIPE_FAILURE,
                    error: err.response.data.message
                })
            })
}

export const addRecipe = (recipe) => dispatch => {
        AxiosWithAuth().post('/auth/recipes', recipe)
        .then(res => {
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

export const editRecipe = (recipe) => dispatch => {
    AxiosWithAuth().put(`/auth/recipes/${recipe.user_id}`, recipe)
    .then(res => {
        dispatch({ 
            type: EDIT_RECIPE_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: EDIT_RECIPE_FAILURE,
            error: err.response.data.message
        })
    })
}

export const deleteRecipe = (id) => dispatch => {
    console.log('delete dispatch')
    AxiosWithAuth().delete(`/auth/recipes/:id`)
        .then(res => {
            console.log(res.data)
            console.log(id)
            dispatch({ 
                type: DELETE_RECIPE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: DELETE_RECIPE_FAILURE,
                error: err
            })
        })
}

export const setLoading = () => dispatch => {
    console.log('loading dispatch')
    dispatch({ type: SET_LOADING })
}



export const actionCreators = {
    getUserRecipes,
    addRecipe,
    deleteRecipe,
    setLoading
}