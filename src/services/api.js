import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:8089",
    withCredentials: true,
    // headers: {
    //     'Authorization': `Bearer ${token}` // Inclui o token JWT no cabeçalho 'Authorization'
    // }
})