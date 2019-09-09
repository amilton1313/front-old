import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'http://localhost:3001'
    // baseURL: 'http://api.cota.com.br:3001'
})

export default clienteAxios