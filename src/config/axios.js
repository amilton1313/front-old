import axios from 'axios'

const clienteAxios = axios.create({
    // baseURL: 'http://192.168.0.10:3001'
    baseURL: 'http://192.168.1.81:3001'
    // baseURL: 'http://api.cota.com.br:3001'
})

export default clienteAxios