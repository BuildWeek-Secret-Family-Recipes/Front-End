import api from '../utils/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const authUser = (props) => {
    const { username, password } = props.user;
    return dispatch => {
        dispatch({ type: LOGIN_REQUEST })

        api().post('/auth/user/login', {
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

export const registerUser = (props) => {
    const { username, password, email } = props.user
    return dispatch => {
        dispatch({ type: REGISTER_REQUEST })

        api().post('/user/register', {
            username,
            password,
            email
        })
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            dispatch({ type: LOGIN_SUCCESS });
			props.history.push('/myrecipes')
        })
        .catch(err => 
            dispatch({
            type: REGISTER_FAILURE,
            error: err.res.data.message   
        }))
    }
}