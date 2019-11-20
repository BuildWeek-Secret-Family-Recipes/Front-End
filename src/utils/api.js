// rename to AxiosWithAuth
import axios from 'axios'

export function getToken() {
    return localStorage.getItem('token')
}

export default function() {
    return axios.create({
        baseURL: 'https://secret-recipes.herokuapp.com/api',
        headers: {
            Authorization: getToken()
        }
    })
}