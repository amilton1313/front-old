import React from 'react'
import { useSelector } from 'react-redux'

import Login from "../login/Login"
import LoginCpf from "../login/LoginCpf"
import PessoasLista from "../pessoa/PessoasLista"
import PrincipalMenu from "../principal/PrincipalMenu"



const Principal = () => {

    const auth = useSelector(state => state.auth.auth)

    return (
        <div>
            <PrincipalMenu />
        </div>
    )
}

export default Principal


