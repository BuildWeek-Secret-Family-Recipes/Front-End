import api from '../utils/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const authUser = (username, password) => {
    return dispatch => {
        dispatch({ type: LOGIN_REQUEST })

        api().post('/login', {
            username, password
        })
        .then(res => {
            localStorage.setItem('token', res.data.token)

            dispatch({ type: LOGIN_SUCCESS });
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILURE,
                error: err.response.data.message
            })
        })
    }
}

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerUser = ({ username, password }) => {
    return dispatch => {
        dispatch({ type: REGISTER_REQUEST })

        api().post('/auth/register', {
            username,
            password
        })
        .then(res => {
            localStorage.setItem('token', res.data.token)
            
            dispatch({ type: LOGIN_SUCCESS });
        })
        .catch(err => 
            dispatch({
            type: REGISTER_FAILURE,
            error: err.res.data.message   
        }))
    }
}