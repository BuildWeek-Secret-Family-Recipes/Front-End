import api from '../utils/api';

import { userConstants } from '../actions/types';

export const userActions = {
    login,
    register,
    getAll,
    delete: _delete
}

function login(props) {

    const { user, username, password, email, error } = props.user;
        
        return dispatch => {
            dispatch(request({ type: userConstants.LOGIN_REQUEST }));

            api().post('/auth/user/login', (username, password, email))
            .then(res => {
                localStorage.setItem('token', res.data.token)
                dispatch(success(user));
            })
            .catch(err => {
                dispatch(failure(error.toString()))
            })
    }


    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } };
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } };
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } };
}

function register(props) {

    const { user } = props.user;

    return dispatch => {
        dispatch(request(user));

        api().post('/api/auth/user/register', user)
        .then(user => {
            localStorage.setItem('token', user.data.payload)
            dispatch(success());
			props.history.push('/login')
        })
        .catch(err => { 
            dispatch(failure(err.toString()));
        }
    );

};
    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        api().getAll()
            .then(
                users => dispatch(success(users))
            )
            .catch(
                error => dispatch(failure(error.toString()))
            );
    }

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        api().delete(id)
            .then(
                user => dispatch(success(id))
            )
            .catch(
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}