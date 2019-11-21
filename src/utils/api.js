// rename to AxiosWithAuth
import axios from 'axios'

export function getToken() {
    return JSON.parse(localStorage.getItem('token'))
}

export default function AxiosWithAuth() {
    return axios.create({
        baseURL: 'https://secret-recipes.herokuapp.com/api',
        headers: {
            Authorization: getToken()
        }
    })
}